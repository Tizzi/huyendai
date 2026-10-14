import {
  CAN,
  CHI,
  CHI_ANIMAL,
  canChiLabel,
  dayCanChi,
  hourCan,
  isValidCivil,
  lunarDayLabel,
  lunarMonthLabel,
  monthCanChi,
  napAmOf,
  solarToLunar,
  yearCanChi,
  type ElementName,
} from "@/lib/almanac/calendar";

export type Gender = "nam" | "nu";

export type Star = { name: string; kind: "chinh" | "phu"; note: string };

export type Palace = {
  chi: number;
  can: number;
  name: string;
  stars: Star[];
  daiHan: string;
  mainStars: Star[];
};

export type TuViChart = {
  name: string;
  gender: Gender;
  solarLabel: string;
  lunarLabel: string;
  leap: boolean;
  hourLabel: string;
  pillars: { year: string; month: string; day: string; hour: string };
  banMenh: string;
  element: ElementName;
  animal: string;
  cuc: string;
  cucSo: number;
  menhChi: number;
  thanChi: number;
  thanPalace: string;
  menhChu: string;
  thanChu: string;
  amDuong: string;
  daiHanWay: string;
  palaces: Palace[];
  menhStars: Star[];
  borrowed: boolean;
  reading: string;
};

const PALACE_NAMES = [
  "Mệnh",
  "Phụ mẫu",
  "Phúc đức",
  "Điền trạch",
  "Quan lộc",
  "Nô bộc",
  "Thiên di",
  "Tật ách",
  "Tài bạch",
  "Tử tức",
  "Phu thê",
  "Huynh đệ",
];

const MENH_CHU = [
  "Tham Lang",
  "Cự Môn",
  "Lộc Tồn",
  "Văn Khúc",
  "Liêm Trinh",
  "Vũ Khúc",
  "Phá Quân",
  "Vũ Khúc",
  "Liêm Trinh",
  "Văn Khúc",
  "Lộc Tồn",
  "Cự Môn",
];

const THAN_CHU = [
  "Linh Tinh",
  "Thiên Tướng",
  "Thiên Lương",
  "Thiên Đồng",
  "Văn Xương",
  "Thiên Cơ",
  "Hỏa Tinh",
  "Thiên Tướng",
  "Thiên Lương",
  "Thiên Đồng",
  "Văn Xương",
  "Thiên Cơ",
];

const LOC_TON = [2, 3, 5, 6, 5, 6, 8, 9, 11, 0];

const CUC_NAME: Record<number, string> = {
  2: "Thủy nhị cục",
  3: "Mộc tam cục",
  4: "Kim tứ cục",
  5: "Thổ ngũ cục",
  6: "Hỏa lục cục",
};

const CUC_SO: Record<ElementName, number> = { Thủy: 2, Mộc: 3, Kim: 4, Thổ: 5, Hỏa: 6 };

const NOTES: Record<string, string> = {
  "Tử Vi": "Chủ vị thế và thể diện. Cần biết tiết chế, không ôm hết.",
  "Thiên Cơ": "Mưu trí, hay tính, dễ đổi hướng khi thấy lối khác.",
  "Thái Dương": "Việc công, danh tiếng, thích ra ánh sáng.",
  "Vũ Khúc": "Tiền bạc và quyết đoán. Cứng, đôi khi cô.",
  "Thiên Đồng": "Phúc lạc, dễ xuôi, hợp việc có người phối.",
  "Liêm Trinh": "Giữ nguyên tắc. Vừa là đào hoa, vừa dễ vướng thị phi.",
  "Thiên Phủ": "Kho lẫm, biết giữ, hợp việc bền hơn việc bùng.",
  "Thái Âm": "Điền sản, nội tâm, việc nhà và ban đêm.",
  "Tham Lang": "Ham muốn và tài nghệ. Dễ đa đoan nếu không chọn.",
  "Cự Môn": "Khẩu tài. Học được nhiều, cũng dễ thị phi.",
  "Thiên Tướng": "Phò tá, giữ thể diện, hợp việc có ấn tín.",
  "Thiên Lương": "Che chở, hay lo cho người, phúc về sau.",
  "Thất Sát": "Quyền và sát khí. Dám làm, cần chỗ đứng rõ.",
  "Phá Quân": "Phá cũ để mở. Hao trước, cửa mới sau.",
  "Lộc Tồn": "Lộc có sẵn theo năm. Giữ của cũng kèm theo.",
  "Kình Dương": "Sát khí thẳng. Dễ va chạm khi nóng.",
  "Đà La": "Sát khí ngầm. Dễ vướng, khó cắt một lần.",
  "Văn Xương": "Giấy tờ, khoa bảng, lời chỉnh.",
  "Văn Khúc": "Nghệ thuật, miệng lưỡi, duyên nói.",
};

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function dichCung(cung1: number, delta: number): number {
  const x = mod(cung1 + delta, 12);
  return x === 0 ? 12 : x;
}

function timTuVi(cucSo: number, ngay: number): number {
  let cuc = cucSo;
  let cungDan = 3;
  while (cuc < ngay) {
    cuc += cucSo;
    cungDan += 1;
  }
  let sai = cuc - ngay;
  if (Math.abs(sai) % 2 === 1) sai = -sai;
  return dichCung(cungDan, sai);
}

function palaceCan(yearCan: number, chi: number): number {
  const danCan = mod(yearCan * 2 + 2, 10);
  return mod(danCan + mod(chi - 2, 12), 10);
}

function star(name: string, kind: Star["kind"]): Star {
  return { name, kind, note: NOTES[name] ?? "" };
}

export function buildChart(input: {
  name: string;
  gender: Gender;
  year: number;
  month: number;
  day: number;
  hour: number;
}): TuViChart {
  if (!isValidCivil(input.year, input.month, input.day)) {
    throw new Error("Ngày dương lịch không hợp lệ.");
  }
  if (input.hour < 0 || input.hour > 11) throw new Error("Chọn một trong mười hai giờ.");
  const lunar = solarToLunar(input.day, input.month, input.year);
  const y = yearCanChi(lunar.year);
  const m = monthCanChi(lunar.year, lunar.month);
  const d = dayCanChi(lunar.jd);
  const hCan = hourCan(d.can, input.hour);
  const monthPalace = mod(2 + lunar.month - 1, 12);
  const menh = mod(monthPalace - input.hour, 12);
  const than = mod(monthPalace + input.hour, 12);
  const menhCan = palaceCan(y.can, menh);
  const cucElement = napAmOf(menhCan, menh).element;
  const cucSo = CUC_SO[cucElement];
  const ban = napAmOf(y.can, y.chi);
  const tuVi1 = timTuVi(cucSo, lunar.day);
  const phu1 = dichCung(3, 3 - tuVi1);

  const placed = new Map<number, Star[]>();
  const put = (chi: number, s: Star) => {
    const list = placed.get(chi) ?? [];
    list.push(s);
    placed.set(chi, list);
  };

  const tuViOffsets: [string, number][] = [
    ["Tử Vi", 0],
    ["Liêm Trinh", 4],
    ["Thiên Đồng", 7],
    ["Vũ Khúc", 8],
    ["Thái Dương", 9],
    ["Thiên Cơ", 11],
  ];
  for (const [name, off] of tuViOffsets) put(mod(tuVi1 - 1 + off, 12), star(name, "chinh"));

  const phuOffsets: [string, number][] = [
    ["Thiên Phủ", 0],
    ["Thái Âm", 1],
    ["Tham Lang", 2],
    ["Cự Môn", 3],
    ["Thiên Tướng", 4],
    ["Thiên Lương", 5],
    ["Thất Sát", 6],
    ["Phá Quân", 10],
  ];
  for (const [name, off] of phuOffsets) put(mod(phu1 - 1 + off, 12), star(name, "chinh"));

  const loc = LOC_TON[y.can] ?? 0;
  put(loc, star("Lộc Tồn", "phu"));
  put(mod(loc + 1, 12), star("Kình Dương", "phu"));
  put(mod(loc - 1, 12), star("Đà La", "phu"));
  put(mod(10 - input.hour, 12), star("Văn Xương", "phu"));
  put(mod(4 + input.hour, 12), star("Văn Khúc", "phu"));

  const duongCan = y.can % 2 === 0;
  const thuan = input.gender === "nam" ? duongCan : !duongCan;
  const daiHanAt = new Map<number, string>();
  for (let k = 0; k < 12; k++) {
    const chi = mod(menh + (thuan ? k : -k), 12);
    const from = cucSo + k * 10;
    daiHanAt.set(chi, `${from}–${from + 9}`);
  }

  const palaces: Palace[] = CHI.map((_, chi) => {
    const stars = placed.get(chi) ?? [];
    const name = PALACE_NAMES[mod(chi - menh, 12)] ?? "Mệnh";
    return {
      chi,
      can: palaceCan(y.can, chi),
      name,
      stars,
      daiHan: daiHanAt.get(chi) ?? "",
      mainStars: stars.filter((s) => s.kind === "chinh"),
    };
  });

  const menhPalace = palaces[menh];
  const opposite = palaces[mod(menh + 6, 12)];
  const borrowed = menhPalace.mainStars.length === 0;
  const menhStars = borrowed ? opposite.mainStars : menhPalace.mainStars;
  const thanPalace = palaces[than]?.name ?? "Mệnh";
  const who = input.name.trim() || "Đương số";
  const starLine =
    menhStars.length === 0
      ? "Mệnh và cung xung đều không có chính tinh trong bộ 14 sao này."
      : `${borrowed ? "Mệnh vô chính diệu, mượn chính tinh cung xung" : "Chính tinh tại Mệnh"}: ${menhStars
          .map((s) => s.name)
          .join(", ")}.`;

  const reading = `${who} tuổi ${canChiLabel(y.can, y.chi)} (${CHI_ANIMAL[y.chi]}), bản mệnh ${ban.name}. Cục ${CUC_NAME[cucSo]}. Mệnh đóng ${CHI[menh]}, thân cư ${thanPalace}. ${starLine} Đây là lá số giản lược — đủ 14 chính tinh cùng Lộc Tồn, Kình Đà, Xương Khúc — không thay một lá số thầy an đủ sao.`;

  return {
    name: who,
    gender: input.gender,
    solarLabel: `${input.day}/${input.month}/${input.year}`,
    lunarLabel: `${lunarDayLabel(lunar.day)} ${lunarMonthLabel(lunar.month, lunar.leap)} năm ${canChiLabel(y.can, y.chi)}`,
    leap: lunar.leap,
    hourLabel: `${CHI[input.hour]} (${canChiLabel(hCan, input.hour)})`,
    pillars: {
      year: canChiLabel(y.can, y.chi),
      month: canChiLabel(m.can, m.chi),
      day: canChiLabel(d.can, d.chi),
      hour: canChiLabel(hCan, input.hour),
    },
    banMenh: ban.name,
    element: ban.element,
    animal: CHI_ANIMAL[y.chi],
    cuc: CUC_NAME[cucSo],
    cucSo,
    menhChi: menh,
    thanChi: than,
    thanPalace,
    menhChu: MENH_CHU[y.chi] ?? "",
    thanChu: THAN_CHU[y.chi] ?? "",
    amDuong: `${duongCan ? "Dương" : "Âm"} ${input.gender === "nam" ? "nam" : "nữ"}`,
    daiHanWay: thuan ? "Thuận" : "Nghịch",
    palaces,
    menhStars,
    borrowed,
    reading,
  };
}

export function chartSummary(chart: TuViChart): string {
  const lines = [
    `Huyền Đài — lá số giản lược`,
    `${chart.name} · ${chart.amDuong}`,
    `Dương lịch ${chart.solarLabel} · ${chart.lunarLabel}`,
    `Giờ ${chart.hourLabel}`,
    `Tứ trụ: ${chart.pillars.year} / ${chart.pillars.month} / ${chart.pillars.day} / ${chart.pillars.hour}`,
    `Bản mệnh ${chart.banMenh} · ${chart.cuc}`,
    `Mệnh tại ${CHI[chart.menhChi]} · Thân cư ${chart.thanPalace}`,
    `Chủ mệnh ${chart.menhChu} · Chủ thân ${chart.thanChu}`,
    `Đại hạn ${chart.daiHanWay}, khởi ${chart.cucSo} tuổi`,
    chart.reading,
  ];
  return lines.join("\n");
}

export { CAN, CHI };
