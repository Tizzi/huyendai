import { CHI_ANIMAL, yearCanChi, canChiLabel } from "@/lib/almanac/calendar";

export type Gender = "nam" | "nu";

export type DirectionId =
  | "bac"
  | "dong-bac"
  | "dong"
  | "dong-nam"
  | "nam"
  | "tay-nam"
  | "tay"
  | "tay-bac";

export type StarKind = "sinh-khi" | "thien-y" | "dien-nien" | "phuc-vi" | "tuyet-menh" | "ngu-quy" | "luc-sat" | "hoa-hai";

export type DirectionReading = {
  id: DirectionId;
  label: string;
  star: StarKind;
  starLabel: string;
  good: boolean;
  use: string;
};

export type BatTrach = {
  year: number;
  canChi: string;
  animal: string;
  genderLabel: string;
  qua: number;
  quaName: string;
  element: string;
  group: "Đông tứ mệnh" | "Tây tứ mệnh";
  directions: DirectionReading[];
};

const QUA = [
  { id: 1, name: "Khảm", element: "Thủy", group: "Đông tứ mệnh" as const },
  { id: 2, name: "Khôn", element: "Thổ", group: "Tây tứ mệnh" as const },
  { id: 3, name: "Chấn", element: "Mộc", group: "Đông tứ mệnh" as const },
  { id: 4, name: "Tốn", element: "Mộc", group: "Đông tứ mệnh" as const },
  { id: 6, name: "Càn", element: "Kim", group: "Tây tứ mệnh" as const },
  { id: 7, name: "Đoài", element: "Kim", group: "Tây tứ mệnh" as const },
  { id: 8, name: "Cấn", element: "Thổ", group: "Tây tứ mệnh" as const },
  { id: 9, name: "Ly", element: "Hỏa", group: "Đông tứ mệnh" as const },
];

const DIR_LABEL: Record<DirectionId, string> = {
  bac: "Bắc",
  "dong-bac": "Đông Bắc",
  dong: "Đông",
  "dong-nam": "Đông Nam",
  nam: "Nam",
  "tay-nam": "Tây Nam",
  tay: "Tây",
  "tay-bac": "Tây Bắc",
};

const STAR_LABEL: Record<StarKind, string> = {
  "sinh-khi": "Sinh khí",
  "thien-y": "Thiên y",
  "dien-nien": "Diên niên",
  "phuc-vi": "Phục vị",
  "tuyet-menh": "Tuyệt mệnh",
  "ngu-quy": "Ngũ quỷ",
  "luc-sat": "Lục sát",
  "hoa-hai": "Họa hại",
};

const STAR_USE: Record<StarKind, string> = {
  "sinh-khi": "Hướng vượng nhất — cửa, bàn làm, giường nếu kê được.",
  "thien-y": "Hợp nghỉ ngơi, sức khỏe, bếp theo dân gian.",
  "dien-nien": "Hợp quan hệ lâu dài, phòng khách, giường vợ chồng.",
  "phuc-vi": "Hướng ổn, hợp chỗ ngồi hàng ngày.",
  "hoa-hai": "Nên tránh cửa chính và bếp.",
  "luc-sat": "Nên tránh giường và bàn làm việc.",
  "ngu-quy": "Hướng dân gian coi là dễ hao.",
  "tuyet-menh": "Hướng kỵ nhất trong tám hướng.",
};

const GOOD = new Set<StarKind>(["sinh-khi", "thien-y", "dien-nien", "phuc-vi"]);

/** Eight directions in star order: sinh khí, thiên y, diên niên, phục vị, tuyệt mệnh, ngũ quỷ, lục sát, họa hại. */
const TABLE: Record<number, DirectionId[]> = {
  1: ["dong-nam", "dong", "nam", "bac", "tay-nam", "dong-bac", "tay-bac", "tay"],
  2: ["dong-bac", "tay", "tay-bac", "tay-nam", "dong-nam", "dong", "nam", "bac"],
  3: ["nam", "bac", "dong-nam", "dong", "tay", "tay-bac", "dong-bac", "tay-nam"],
  4: ["bac", "nam", "dong", "dong-nam", "tay-bac", "tay", "tay-nam", "dong-bac"],
  6: ["tay", "dong-bac", "tay-nam", "tay-bac", "bac", "nam", "dong", "dong-nam"],
  7: ["tay-bac", "tay-nam", "dong-bac", "tay", "nam", "bac", "dong-nam", "dong"],
  8: ["tay-nam", "tay-bac", "tay", "dong-bac", "dong", "dong-nam", "bac", "nam"],
  9: ["dong", "dong-nam", "bac", "nam", "dong-bac", "tay-nam", "tay", "tay-bac"],
};

const STAR_ORDER: StarKind[] = [
  "sinh-khi",
  "thien-y",
  "dien-nien",
  "phuc-vi",
  "tuyet-menh",
  "ngu-quy",
  "luc-sat",
  "hoa-hai",
];

function digitalRoot(year: number): number {
  let n = Math.abs(year);
  while (n > 9) {
    n = String(n)
      .split("")
      .reduce((s, c) => s + Number(c), 0);
  }
  return n;
}

export function quaNumber(lunarYear: number, gender: Gender): number {
  const root = digitalRoot(lunarYear);
  const modern = lunarYear >= 2000;
  let n: number;
  if (gender === "nam") {
    n = modern ? 9 - root : 10 - root;
    if (n === 0) n = 9;
    if (n === 5) n = 2;
  } else {
    n = (modern ? 6 : 5) + root;
    if (n > 9) n -= 9;
    if (n === 5) n = 8;
  }
  return n;
}

export function readBatTrach(lunarYear: number, gender: Gender): BatTrach {
  if (!Number.isInteger(lunarYear) || lunarYear < 1900 || lunarYear > 2100) {
    throw new Error("Chọn năm âm lịch từ 1900 đến 2100.");
  }
  const q = quaNumber(lunarYear, gender);
  const meta = QUA.find((item) => item.id === q);
  if (!meta) throw new Error("Không lập được cung phi.");
  const dirs = TABLE[q];
  if (!dirs) throw new Error("Không lập được cung phi.");
  const cc = yearCanChi(lunarYear);
  const directions: DirectionReading[] = dirs.map((id, i) => {
    const star = STAR_ORDER[i] ?? "phuc-vi";
    return {
      id,
      label: DIR_LABEL[id],
      star,
      starLabel: STAR_LABEL[star],
      good: GOOD.has(star),
      use: STAR_USE[star],
    };
  });
  return {
    year: lunarYear,
    canChi: canChiLabel(cc.can, cc.chi),
    animal: CHI_ANIMAL[cc.chi],
    genderLabel: gender === "nam" ? "Nam" : "Nữ",
    qua: q,
    quaName: meta.name,
    element: meta.element,
    group: meta.group,
    directions,
  };
}

export const COMPASS_GRID: (DirectionId | "center")[] = [
  "tay-bac",
  "bac",
  "dong-bac",
  "tay",
  "center",
  "dong",
  "tay-nam",
  "nam",
  "dong-nam",
];
