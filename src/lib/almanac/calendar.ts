/**
 * Vietnamese lunar calendar (UTC+7) and sexagenary almanac.
 * New-moon and solar-longitude method after Hồ Ngọc Đức (2006);
 * astronomical formulas from Jean Meeus.
 */

const PI = Math.PI;
const TZ = 7;

function int(d: number): number {
  return Math.floor(d);
}

export const CAN = [
  "Giáp",
  "Ất",
  "Bính",
  "Đinh",
  "Mậu",
  "Kỷ",
  "Canh",
  "Tân",
  "Nhâm",
  "Quý",
] as const;

export const CHI = [
  "Tý",
  "Sửu",
  "Dần",
  "Mão",
  "Thìn",
  "Tỵ",
  "Ngọ",
  "Mùi",
  "Thân",
  "Dậu",
  "Tuất",
  "Hợi",
] as const;

export const CHI_ANIMAL = [
  "Chuột",
  "Trâu",
  "Hổ",
  "Mèo",
  "Rồng",
  "Rắn",
  "Ngựa",
  "Dê",
  "Khỉ",
  "Gà",
  "Chó",
  "Lợn",
] as const;

export const LUNAR_MONTH = [
  "Giêng",
  "Hai",
  "Ba",
  "Tư",
  "Năm",
  "Sáu",
  "Bảy",
  "Tám",
  "Chín",
  "Mười",
  "Mười một",
  "Chạp",
] as const;

const SOLAR_TERMS = [
  "Xuân phân",
  "Thanh minh",
  "Cốc vũ",
  "Lập hạ",
  "Tiểu mãn",
  "Mang chủng",
  "Hạ chí",
  "Tiểu thử",
  "Đại thử",
  "Lập thu",
  "Xử thử",
  "Bạch lộ",
  "Thu phân",
  "Hàn lộ",
  "Sương giáng",
  "Lập đông",
  "Tiểu tuyết",
  "Đại tuyết",
  "Đông chí",
  "Tiểu hàn",
  "Đại hàn",
  "Lập xuân",
  "Vũ thủy",
  "Kinh trập",
] as const;

const GIO_HD = [
  "110100101100",
  "001101001011",
  "110011010010",
  "101100110100",
  "001011001101",
  "010010110011",
];

const HOANG_DAO: number[][] = [
  [0, 1, 5, 7],
  [2, 3, 7, 9],
  [4, 5, 9, 11],
  [6, 7, 11, 1],
  [8, 9, 1, 3],
  [10, 11, 3, 5],
];

const TRUC = [
  { name: "Kiến", note: "Hợp xuất hành, thăm hỏi, bắt đầu việc đã tính." },
  { name: "Trừ", note: "Hợp dọn bỏ, chữa trị, cắt cái không còn dùng." },
  { name: "Mãn", note: "Hợp cầu tài, nhập trạch, việc đã đủ ngày giờ." },
  { name: "Bình", note: "Hợp việc thường, sửa sang; tránh quyết định gấp." },
  { name: "Định", note: "Hợp ký kết, cưới hỏi, chốt việc đã bàn." },
  { name: "Chấp", note: "Hợp thu xếp, giữ của; kỵ cưới hỏi." },
  { name: "Phá", note: "Hợp phá dỡ; kỵ khai trương và động thổ." },
  { name: "Nguy", note: "Việc lớn nên hoãn; chỉ làm việc cấp bách." },
  { name: "Thành", note: "Hợp hầu hết việc lành, nhất là việc đã chuẩn bị." },
  { name: "Thu", note: "Hợp thu hoạch, thu nợ, gom việc về." },
  { name: "Khai", note: "Hợp khai trương, động thổ, khai bút." },
  { name: "Bế", note: "Hợp việc đóng, kết sổ; kỵ khai mở." },
] as const;

export const NAP_AM: { name: string; element: ElementName }[] = [
  { name: "Hải Trung Kim", element: "Kim" },
  { name: "Lư Trung Hỏa", element: "Hỏa" },
  { name: "Đại Lâm Mộc", element: "Mộc" },
  { name: "Lộ Bàng Thổ", element: "Thổ" },
  { name: "Kiếm Phong Kim", element: "Kim" },
  { name: "Sơn Đầu Hỏa", element: "Hỏa" },
  { name: "Giản Hạ Thủy", element: "Thủy" },
  { name: "Thành Đầu Thổ", element: "Thổ" },
  { name: "Bạch Lạp Kim", element: "Kim" },
  { name: "Dương Liễu Mộc", element: "Mộc" },
  { name: "Tuyền Trung Thủy", element: "Thủy" },
  { name: "Ốc Thượng Thổ", element: "Thổ" },
  { name: "Tích Lịch Hỏa", element: "Hỏa" },
  { name: "Tùng Bách Mộc", element: "Mộc" },
  { name: "Trường Lưu Thủy", element: "Thủy" },
  { name: "Sa Trung Kim", element: "Kim" },
  { name: "Sơn Hạ Hỏa", element: "Hỏa" },
  { name: "Bình Địa Mộc", element: "Mộc" },
  { name: "Bích Thượng Thổ", element: "Thổ" },
  { name: "Kim Bạch Kim", element: "Kim" },
  { name: "Phú Đăng Hỏa", element: "Hỏa" },
  { name: "Thiên Hà Thủy", element: "Thủy" },
  { name: "Đại Trạch Thổ", element: "Thổ" },
  { name: "Thoa Xuyến Kim", element: "Kim" },
  { name: "Tang Đố Mộc", element: "Mộc" },
  { name: "Đại Khê Thủy", element: "Thủy" },
  { name: "Sa Trung Thổ", element: "Thổ" },
  { name: "Thiên Thượng Hỏa", element: "Hỏa" },
  { name: "Thạch Lựu Mộc", element: "Mộc" },
  { name: "Đại Hải Thủy", element: "Thủy" },
];

const ELEMENT_NOTE: Record<ElementName, string> = {
  Kim: "Hợp việc cắt quyết, giấy tờ gọn, kim khí.",
  Mộc: "Hợp việc học, khởi thảo, trồng tỉa.",
  Thủy: "Hợp việc đi lại, giao thương, tìm hiểu.",
  Hỏa: "Hợp lễ nghi, nói trước nhiều người, việc cần ánh sáng.",
  Thổ: "Hợp nhà cửa, tích lũy, giấy tờ đất đai.",
};

export type ElementName = "Kim" | "Mộc" | "Thủy" | "Hỏa" | "Thổ";

export type CivilDate = { year: number; month: number; day: number };

export type LunarDate = CivilDate & { leap: boolean; jd: number };

export type CanChi = { can: number; chi: number };

export type HourInfo = {
  chi: number;
  can: number;
  hoang: boolean;
  window: string;
};

export type DayInfo = {
  solar: CivilDate;
  lunar: LunarDate;
  weekday: number;
  year: CanChi;
  month: CanChi;
  day: CanChi;
  napAm: { name: string; element: ElementName };
  term: string;
  truc: { name: string; note: string };
  hoangDao: boolean;
  hours: HourInfo[];
  should: string[];
  avoid: string[];
  elementNote: string;
};

export function jdFromDate(dd: number, mm: number, yy: number): number {
  const a = int((14 - mm) / 12);
  const y = yy + 4800 - a;
  const m = mm + 12 * a - 3;
  let jd =
    dd +
    int((153 * m + 2) / 5) +
    365 * y +
    int(y / 4) -
    int(y / 100) +
    int(y / 400) -
    32045;
  if (jd < 2299161) {
    jd = dd + int((153 * m + 2) / 5) + 365 * y + int(y / 4) - 32083;
  }
  return jd;
}

export function jdToDate(jd: number): CivilDate {
  let a: number;
  let b: number;
  let c: number;
  if (jd > 2299160) {
    a = jd + 32044;
    b = int((4 * a + 3) / 146097);
    c = a - int((b * 146097) / 4);
  } else {
    b = 0;
    c = jd + 32082;
  }
  const d = int((4 * c + 3) / 1461);
  const e = c - int((1461 * d) / 4);
  const m = int((5 * e + 2) / 153);
  const day = e - int((153 * m + 2) / 5) + 1;
  const month = m + 3 - 12 * int(m / 10);
  const year = b * 100 + d - 4800 + int(m / 10);
  return { day, month, year };
}

function newMoon(k: number): number {
  const T = k / 1236.85;
  const T2 = T * T;
  const T3 = T2 * T;
  const dr = PI / 180;
  let Jd1 = 2415020.75933 + 29.53058868 * k + 0.0001178 * T2 - 0.000000155 * T3;
  Jd1 += 0.00033 * Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);
  const M = 359.2242 + 29.10535608 * k - 0.0000333 * T2 - 0.00000347 * T3;
  const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 0.00001236 * T3;
  const F = 21.2964 + 390.67050646 * k - 0.0016528 * T2 - 0.00000239 * T3;
  let C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr) + 0.0021 * Math.sin(2 * dr * M);
  C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
  C1 = C1 - 0.0004 * Math.sin(dr * 3 * Mpr);
  C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 0.0051 * Math.sin(dr * (M + Mpr));
  C1 = C1 - 0.0074 * Math.sin(dr * (M - Mpr)) + 0.0004 * Math.sin(dr * (2 * F + M));
  C1 = C1 - 0.0004 * Math.sin(dr * (2 * F - M)) - 0.0006 * Math.sin(dr * (2 * F + Mpr));
  C1 = C1 + 0.001 * Math.sin(dr * (2 * F - Mpr)) + 0.0005 * Math.sin(dr * (2 * Mpr + M));
  const deltat =
    T < -11
      ? 0.001 + 0.000839 * T + 0.0002261 * T2 - 0.00000845 * T3 - 0.000000081 * T * T3
      : -0.000278 + 0.000265 * T + 0.000262 * T2;
  return Jd1 + C1 - deltat;
}

function sunLongitude(jdn: number): number {
  const T = (jdn - 2451545.0) / 36525;
  const T2 = T * T;
  const dr = PI / 180;
  const M = 357.5291 + 35999.0503 * T - 0.0001559 * T2 - 0.00000048 * T * T2;
  const L0 = 280.46645 + 36000.76983 * T + 0.0003032 * T2;
  let DL = (1.9146 - 0.004817 * T - 0.000014 * T2) * Math.sin(dr * M);
  DL = DL + (0.019993 - 0.000101 * T) * Math.sin(dr * 2 * M) + 0.00029 * Math.sin(dr * 3 * M);
  let L = (L0 + DL) * dr;
  L = L - PI * 2 * int(L / (PI * 2));
  return L;
}

function getNewMoonDay(k: number, timeZone: number): number {
  return int(newMoon(k) + 0.5 + timeZone / 24);
}

function getSunLongitude(dayNumber: number, timeZone: number): number {
  return int((sunLongitude(dayNumber - 0.5 - timeZone / 24) / PI) * 6);
}

function getLunarMonth11(yy: number, timeZone: number): number {
  const off = jdFromDate(31, 12, yy) - 2415021;
  const k = int(off / 29.530588853);
  let nm = getNewMoonDay(k, timeZone);
  const sunLong = getSunLongitude(nm, timeZone);
  if (sunLong >= 9) nm = getNewMoonDay(k - 1, timeZone);
  return nm;
}

function getLeapMonthOffset(a11: number, timeZone: number): number {
  const k = int((a11 - 2415021.076998695) / 29.530588853 + 0.5);
  let last = 0;
  let i = 1;
  let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  do {
    last = arc;
    i++;
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc !== last && i < 14);
  return i - 1;
}

export function solarToLunar(day: number, month: number, year: number, timeZone = TZ): LunarDate {
  const dayNumber = jdFromDate(day, month, year);
  const k = int((dayNumber - 2415021.076998695) / 29.530588853);
  let monthStart = getNewMoonDay(k + 1, timeZone);
  if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
  let a11 = getLunarMonth11(year, timeZone);
  let b11 = a11;
  let lunarYear: number;
  if (a11 >= monthStart) {
    lunarYear = year;
    a11 = getLunarMonth11(year - 1, timeZone);
  } else {
    lunarYear = year + 1;
    b11 = getLunarMonth11(year + 1, timeZone);
  }
  const lunarDay = dayNumber - monthStart + 1;
  const diff = int((monthStart - a11) / 29);
  let lunarLeap = false;
  let lunarMonth = diff + 11;
  if (b11 - a11 > 365) {
    const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;
      if (diff === leapMonthDiff) lunarLeap = true;
    }
  }
  if (lunarMonth > 12) lunarMonth -= 12;
  if (lunarMonth >= 11 && diff < 4) lunarYear -= 1;
  return { day: lunarDay, month: lunarMonth, year: lunarYear, leap: lunarLeap, jd: dayNumber };
}

export function lunarToSolar(
  day: number,
  month: number,
  year: number,
  leap: boolean,
  timeZone = TZ,
): CivilDate | null {
  let a11: number;
  let b11: number;
  if (month < 11) {
    a11 = getLunarMonth11(year - 1, timeZone);
    b11 = getLunarMonth11(year, timeZone);
  } else {
    a11 = getLunarMonth11(year, timeZone);
    b11 = getLunarMonth11(year + 1, timeZone);
  }
  const k = int(0.5 + (a11 - 2415021.076998695) / 29.530588853);
  let off = month - 11;
  if (off < 0) off += 12;
  if (b11 - a11 > 365) {
    const leapOff = getLeapMonthOffset(a11, timeZone);
    let leapMonth = leapOff - 2;
    if (leapMonth < 0) leapMonth += 12;
    if (leap && month !== leapMonth) return null;
    if (leap || off >= leapOff) off += 1;
  }
  const monthStart = getNewMoonDay(k + off, timeZone);
  return jdToDate(monthStart + day - 1);
}

export function daysInMonth(year: number, month: number): number {
  return new Date(Date.UTC(year, month, 0)).getUTCDate();
}

export function weekdayIndex(year: number, month: number, day: number): number {
  return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}

export function isValidCivil(year: number, month: number, day: number): boolean {
  if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false;
  if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1) return false;
  return day <= daysInMonth(year, month);
}

export function canChiLabel(can: number, chi: number): string {
  return `${CAN[can]} ${CHI[chi]}`;
}

export function yearCanChi(lunarYear: number): CanChi {
  return { can: mod(lunarYear + 6, 10), chi: mod(lunarYear + 8, 12) };
}

export function monthCanChi(lunarYear: number, lunarMonth: number): CanChi {
  const yearCan = yearCanChi(lunarYear).can;
  const start = mod(yearCan * 2 + 2, 10);
  return { can: mod(start + lunarMonth - 1, 10), chi: mod(lunarMonth + 1, 12) };
}

export function dayCanChi(jd: number): CanChi {
  return { can: mod(jd + 9, 10), chi: mod(jd + 1, 12) };
}

export function hourCan(dayCan: number, hourChi: number): number {
  return mod((dayCan % 5) * 2 + hourChi, 10);
}

export function hourIndexFromClock(hour: number): number {
  return Math.floor(mod(hour + 1, 24) / 2);
}

export function hourWindow(chi: number): string {
  const a = mod(chi * 2 + 23, 24);
  const b = mod(chi * 2 + 1, 24);
  const f = (n: number) => String(n).padStart(2, "0");
  return `${f(a)}:00–${f(b)}:00`;
}

export function sexagenaryIndex(can: number, chi: number): number {
  if (can % 2 !== chi % 2) return 0;
  let j = can;
  let guard = 0;
  while (mod(j, 12) !== chi && guard < 12) {
    j += 10;
    guard += 1;
  }
  return j;
}

export function napAmOf(can: number, chi: number): { name: string; element: ElementName } {
  const pair = Math.floor(sexagenaryIndex(can, chi) / 2);
  return NAP_AM[pair] ?? NAP_AM[0];
}

export function solarTermName(jd: number, timeZone = TZ): string {
  const idx = int((sunLongitude(jd - 0.5 - timeZone / 24) / PI) * 12);
  return SOLAR_TERMS[mod(idx, 24)] ?? SOLAR_TERMS[0];
}

export function lunarDayLabel(day: number): string {
  if (day === 1) return "Mùng một";
  if (day === 15) return "Rằm";
  if (day <= 10) return `Mùng ${day}`;
  return `Ngày ${day}`;
}

export function lunarMonthLabel(month: number, leap: boolean): string {
  const name = LUNAR_MONTH[month - 1] ?? String(month);
  return leap ? `tháng ${name} nhuận` : `tháng ${name}`;
}

function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

function advice(hoang: boolean, trucName: string, element: ElementName): { should: string[]; avoid: string[] } {
  const should = [ELEMENT_NOTE[element]];
  const avoid: string[] = [];
  if (hoang) should.push("Ngày hoàng đạo — dân gian coi là dễ cho việc lớn đã chuẩn bị.");
  else avoid.push("Ngày hắc đạo — dân gian khuyên hoãn cưới hỏi, khai trương, động thổ.");
  const extra: Record<string, { should?: string; avoid?: string }> = {
    Kiến: { should: "Xuất hành, gặp gỡ." },
    Trừ: { should: "Dọn dẹp, chữa trị." },
    Mãn: { should: "Cầu tài, nhập trạch." },
    Bình: { should: "Sửa sang việc thường." },
    Định: { should: "Ký kết, cưới hỏi." },
    Chấp: { avoid: "Cưới hỏi." },
    Phá: { avoid: "Khai trương, động thổ." },
    Nguy: { avoid: "Việc lớn không cấp." },
    Thành: { should: "Việc đã chuẩn bị từ trước." },
    Thu: { should: "Thu hoạch, thu xếp sổ sách." },
    Khai: { should: "Khai trương, động thổ, khai bút." },
    Bế: { avoid: "Khai mở, xuất hành xa." },
  };
  const row = extra[trucName];
  if (row?.should) should.push(row.should);
  if (row?.avoid) avoid.push(row.avoid);
  if (avoid.length === 0) avoid.push("Không có điều kỵ nổi bật trong bảng trực này.");
  return { should: should.slice(0, 3), avoid: avoid.slice(0, 3) };
}

export function describeDay(year: number, month: number, day: number): DayInfo {
  const lunar = solarToLunar(day, month, year);
  const ycc = yearCanChi(lunar.year);
  const mcc = monthCanChi(lunar.year, lunar.month);
  const dcc = dayCanChi(lunar.jd);
  const nap = napAmOf(dcc.can, dcc.chi);
  const monthChi = mod(lunar.month + 1, 12);
  const truc = TRUC[mod(dcc.chi - monthChi, 12)] ?? TRUC[0];
  const hoangDao = (HOANG_DAO[mod(lunar.month - 1, 6)] ?? []).includes(dcc.chi);
  const bits = GIO_HD[dcc.chi % 6] ?? GIO_HD[0];
  const hours: HourInfo[] = CHI.map((_, chi) => ({
    chi,
    can: hourCan(dcc.can, chi),
    hoang: bits[chi] === "1",
    window: hourWindow(chi),
  }));
  const listed = advice(hoangDao, truc.name, nap.element);
  return {
    solar: { year, month, day },
    lunar,
    weekday: weekdayIndex(year, month, day),
    year: ycc,
    month: mcc,
    day: dcc,
    napAm: nap,
    term: solarTermName(lunar.jd),
    truc,
    hoangDao,
    hours,
    should: listed.should,
    avoid: listed.avoid,
    elementNote: ELEMENT_NOTE[nap.element],
  };
}

export const WEEKDAYS = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"] as const;

export const HOUR_LABELS = CHI.map((chi, i) => `${chi} · ${hourWindow(i)}`);
