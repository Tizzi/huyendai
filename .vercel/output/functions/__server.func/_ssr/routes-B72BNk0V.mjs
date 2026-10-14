import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Hexagon, c as ChevronLeft, i as Layers, l as CalendarDays, n as Sun, o as Compass, r as Orbit, s as ChevronRight } from "../_libs/lucide-react.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B72BNk0V.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Vietnamese lunar calendar (UTC+7) and sexagenary almanac.
* New-moon and solar-longitude method after Hồ Ngọc Đức (2006);
* astronomical formulas from Jean Meeus.
*/
var PI = Math.PI;
var TZ = 7;
function int(d) {
	return Math.floor(d);
}
var CAN = [
	"Giáp",
	"Ất",
	"Bính",
	"Đinh",
	"Mậu",
	"Kỷ",
	"Canh",
	"Tân",
	"Nhâm",
	"Quý"
];
var CHI = [
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
	"Hợi"
];
var CHI_ANIMAL = [
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
	"Lợn"
];
var LUNAR_MONTH = [
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
	"Chạp"
];
var SOLAR_TERMS = [
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
	"Kinh trập"
];
var GIO_HD = [
	"110100101100",
	"001101001011",
	"110011010010",
	"101100110100",
	"001011001101",
	"010010110011"
];
var HOANG_DAO = [
	[
		0,
		1,
		5,
		7
	],
	[
		2,
		3,
		7,
		9
	],
	[
		4,
		5,
		9,
		11
	],
	[
		6,
		7,
		11,
		1
	],
	[
		8,
		9,
		1,
		3
	],
	[
		10,
		11,
		3,
		5
	]
];
var TRUC = [
	{
		name: "Kiến",
		note: "Hợp xuất hành, thăm hỏi, bắt đầu việc đã tính."
	},
	{
		name: "Trừ",
		note: "Hợp dọn bỏ, chữa trị, cắt cái không còn dùng."
	},
	{
		name: "Mãn",
		note: "Hợp cầu tài, nhập trạch, việc đã đủ ngày giờ."
	},
	{
		name: "Bình",
		note: "Hợp việc thường, sửa sang; tránh quyết định gấp."
	},
	{
		name: "Định",
		note: "Hợp ký kết, cưới hỏi, chốt việc đã bàn."
	},
	{
		name: "Chấp",
		note: "Hợp thu xếp, giữ của; kỵ cưới hỏi."
	},
	{
		name: "Phá",
		note: "Hợp phá dỡ; kỵ khai trương và động thổ."
	},
	{
		name: "Nguy",
		note: "Việc lớn nên hoãn; chỉ làm việc cấp bách."
	},
	{
		name: "Thành",
		note: "Hợp hầu hết việc lành, nhất là việc đã chuẩn bị."
	},
	{
		name: "Thu",
		note: "Hợp thu hoạch, thu nợ, gom việc về."
	},
	{
		name: "Khai",
		note: "Hợp khai trương, động thổ, khai bút."
	},
	{
		name: "Bế",
		note: "Hợp việc đóng, kết sổ; kỵ khai mở."
	}
];
var NAP_AM = [
	{
		name: "Hải Trung Kim",
		element: "Kim"
	},
	{
		name: "Lư Trung Hỏa",
		element: "Hỏa"
	},
	{
		name: "Đại Lâm Mộc",
		element: "Mộc"
	},
	{
		name: "Lộ Bàng Thổ",
		element: "Thổ"
	},
	{
		name: "Kiếm Phong Kim",
		element: "Kim"
	},
	{
		name: "Sơn Đầu Hỏa",
		element: "Hỏa"
	},
	{
		name: "Giản Hạ Thủy",
		element: "Thủy"
	},
	{
		name: "Thành Đầu Thổ",
		element: "Thổ"
	},
	{
		name: "Bạch Lạp Kim",
		element: "Kim"
	},
	{
		name: "Dương Liễu Mộc",
		element: "Mộc"
	},
	{
		name: "Tuyền Trung Thủy",
		element: "Thủy"
	},
	{
		name: "Ốc Thượng Thổ",
		element: "Thổ"
	},
	{
		name: "Tích Lịch Hỏa",
		element: "Hỏa"
	},
	{
		name: "Tùng Bách Mộc",
		element: "Mộc"
	},
	{
		name: "Trường Lưu Thủy",
		element: "Thủy"
	},
	{
		name: "Sa Trung Kim",
		element: "Kim"
	},
	{
		name: "Sơn Hạ Hỏa",
		element: "Hỏa"
	},
	{
		name: "Bình Địa Mộc",
		element: "Mộc"
	},
	{
		name: "Bích Thượng Thổ",
		element: "Thổ"
	},
	{
		name: "Kim Bạch Kim",
		element: "Kim"
	},
	{
		name: "Phú Đăng Hỏa",
		element: "Hỏa"
	},
	{
		name: "Thiên Hà Thủy",
		element: "Thủy"
	},
	{
		name: "Đại Trạch Thổ",
		element: "Thổ"
	},
	{
		name: "Thoa Xuyến Kim",
		element: "Kim"
	},
	{
		name: "Tang Đố Mộc",
		element: "Mộc"
	},
	{
		name: "Đại Khê Thủy",
		element: "Thủy"
	},
	{
		name: "Sa Trung Thổ",
		element: "Thổ"
	},
	{
		name: "Thiên Thượng Hỏa",
		element: "Hỏa"
	},
	{
		name: "Thạch Lựu Mộc",
		element: "Mộc"
	},
	{
		name: "Đại Hải Thủy",
		element: "Thủy"
	}
];
var ELEMENT_NOTE = {
	Kim: "Hợp việc cắt quyết, giấy tờ gọn, kim khí.",
	Mộc: "Hợp việc học, khởi thảo, trồng tỉa.",
	Thủy: "Hợp việc đi lại, giao thương, tìm hiểu.",
	Hỏa: "Hợp lễ nghi, nói trước nhiều người, việc cần ánh sáng.",
	Thổ: "Hợp nhà cửa, tích lũy, giấy tờ đất đai."
};
function jdFromDate(dd, mm, yy) {
	const a = int((14 - mm) / 12);
	const y = yy + 4800 - a;
	const m = mm + 12 * a - 3;
	let jd = dd + int((153 * m + 2) / 5) + 365 * y + int(y / 4) - int(y / 100) + int(y / 400) - 32045;
	if (jd < 2299161) jd = dd + int((153 * m + 2) / 5) + 365 * y + int(y / 4) - 32083;
	return jd;
}
function newMoon(k) {
	const T = k / 1236.85;
	const T2 = T * T;
	const T3 = T2 * T;
	const dr = PI / 180;
	let Jd1 = 2415020.75933 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
	Jd1 += 33e-5 * Math.sin((166.56 + 132.87 * T - .009173 * T2) * dr);
	const M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
	const Mpr = 306.0253 + 385.81691806 * k + .0107306 * T2 + 1236e-8 * T3;
	const F = 21.2964 + 390.67050646 * k - .0016528 * T2 - 239e-8 * T3;
	let C1 = (.1734 - 393e-6 * T) * Math.sin(M * dr) + .0021 * Math.sin(2 * dr * M);
	C1 = C1 - .4068 * Math.sin(Mpr * dr) + .0161 * Math.sin(dr * 2 * Mpr);
	C1 = C1 - 4e-4 * Math.sin(dr * 3 * Mpr);
	C1 = C1 + .0104 * Math.sin(dr * 2 * F) - .0051 * Math.sin(dr * (M + Mpr));
	C1 = C1 - .0074 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
	C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
	C1 = C1 + .001 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
	const deltat = T < -11 ? .001 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3 : -278e-6 + 265e-6 * T + 262e-6 * T2;
	return Jd1 + C1 - deltat;
}
function sunLongitude(jdn) {
	const T = (jdn - 2451545) / 36525;
	const T2 = T * T;
	const dr = PI / 180;
	const M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
	const L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
	let DL = (1.9146 - .004817 * T - 14e-6 * T2) * Math.sin(dr * M);
	DL = DL + (.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
	let L = (L0 + DL) * dr;
	L = L - PI * 2 * int(L / (PI * 2));
	return L;
}
function getNewMoonDay(k, timeZone) {
	return int(newMoon(k) + .5 + timeZone / 24);
}
function getSunLongitude(dayNumber, timeZone) {
	return int(sunLongitude(dayNumber - .5 - timeZone / 24) / PI * 6);
}
function getLunarMonth11(yy, timeZone) {
	const k = int((jdFromDate(31, 12, yy) - 2415021) / 29.530588853);
	let nm = getNewMoonDay(k, timeZone);
	if (getSunLongitude(nm, timeZone) >= 9) nm = getNewMoonDay(k - 1, timeZone);
	return nm;
}
function getLeapMonthOffset(a11, timeZone) {
	const k = int((a11 - 2415021.076998695) / 29.530588853 + .5);
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
function solarToLunar(day, month, year, timeZone = TZ) {
	const dayNumber = jdFromDate(day, month, year);
	const k = int((dayNumber - 2415021.076998695) / 29.530588853);
	let monthStart = getNewMoonDay(k + 1, timeZone);
	if (monthStart > dayNumber) monthStart = getNewMoonDay(k, timeZone);
	let a11 = getLunarMonth11(year, timeZone);
	let b11 = a11;
	let lunarYear;
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
	return {
		day: lunarDay,
		month: lunarMonth,
		year: lunarYear,
		leap: lunarLeap,
		jd: dayNumber
	};
}
function daysInMonth(year, month) {
	return new Date(Date.UTC(year, month, 0)).getUTCDate();
}
function weekdayIndex(year, month, day) {
	return new Date(Date.UTC(year, month - 1, day)).getUTCDay();
}
function isValidCivil(year, month, day) {
	if (!Number.isInteger(year) || !Number.isInteger(month) || !Number.isInteger(day)) return false;
	if (year < 1900 || year > 2100 || month < 1 || month > 12 || day < 1) return false;
	return day <= daysInMonth(year, month);
}
function canChiLabel(can, chi) {
	return `${CAN[can]} ${CHI[chi]}`;
}
function yearCanChi(lunarYear) {
	return {
		can: mod$1(lunarYear + 6, 10),
		chi: mod$1(lunarYear + 8, 12)
	};
}
function monthCanChi(lunarYear, lunarMonth) {
	const yearCan = yearCanChi(lunarYear).can;
	return {
		can: mod$1(mod$1(yearCan * 2 + 2, 10) + lunarMonth - 1, 10),
		chi: mod$1(lunarMonth + 1, 12)
	};
}
function dayCanChi(jd) {
	return {
		can: mod$1(jd + 9, 10),
		chi: mod$1(jd + 1, 12)
	};
}
function hourCan(dayCan, hourChi) {
	return mod$1(dayCan % 5 * 2 + hourChi, 10);
}
function hourIndexFromClock(hour) {
	return Math.floor(mod$1(hour + 1, 24) / 2);
}
function hourWindow(chi) {
	const a = mod$1(chi * 2 + 23, 24);
	const b = mod$1(chi * 2 + 1, 24);
	const f = (n) => String(n).padStart(2, "0");
	return `${f(a)}:00–${f(b)}:00`;
}
function sexagenaryIndex(can, chi) {
	if (can % 2 !== chi % 2) return 0;
	let j = can;
	let guard = 0;
	while (mod$1(j, 12) !== chi && guard < 12) {
		j += 10;
		guard += 1;
	}
	return j;
}
function napAmOf(can, chi) {
	return NAP_AM[Math.floor(sexagenaryIndex(can, chi) / 2)] ?? NAP_AM[0];
}
function solarTermName(jd, timeZone = TZ) {
	return SOLAR_TERMS[mod$1(int(sunLongitude(jd - .5 - timeZone / 24) / PI * 12), 24)] ?? SOLAR_TERMS[0];
}
function lunarDayLabel(day) {
	if (day === 1) return "Mùng một";
	if (day === 15) return "Rằm";
	if (day <= 10) return `Mùng ${day}`;
	return `Ngày ${day}`;
}
function lunarMonthLabel(month, leap) {
	const name = LUNAR_MONTH[month - 1] ?? String(month);
	return leap ? `tháng ${name} nhuận` : `tháng ${name}`;
}
function mod$1(n, m) {
	return (n % m + m) % m;
}
function advice(hoang, trucName, element) {
	const should = [ELEMENT_NOTE[element]];
	const avoid = [];
	if (hoang) should.push("Ngày hoàng đạo — dân gian coi là dễ cho việc lớn đã chuẩn bị.");
	else avoid.push("Ngày hắc đạo — dân gian khuyên hoãn cưới hỏi, khai trương, động thổ.");
	const row = {
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
		Bế: { avoid: "Khai mở, xuất hành xa." }
	}[trucName];
	if (row?.should) should.push(row.should);
	if (row?.avoid) avoid.push(row.avoid);
	if (avoid.length === 0) avoid.push("Không có điều kỵ nổi bật trong bảng trực này.");
	return {
		should: should.slice(0, 3),
		avoid: avoid.slice(0, 3)
	};
}
function describeDay(year, month, day) {
	const lunar = solarToLunar(day, month, year);
	const ycc = yearCanChi(lunar.year);
	const mcc = monthCanChi(lunar.year, lunar.month);
	const dcc = dayCanChi(lunar.jd);
	const nap = napAmOf(dcc.can, dcc.chi);
	const monthChi = mod$1(lunar.month + 1, 12);
	const truc = TRUC[mod$1(dcc.chi - monthChi, 12)] ?? TRUC[0];
	const hoangDao = (HOANG_DAO[mod$1(lunar.month - 1, 6)] ?? []).includes(dcc.chi);
	const bits = GIO_HD[dcc.chi % 6] ?? GIO_HD[0];
	const hours = CHI.map((_, chi) => ({
		chi,
		can: hourCan(dcc.can, chi),
		hoang: bits[chi] === "1",
		window: hourWindow(chi)
	}));
	const listed = advice(hoangDao, truc.name, nap.element);
	return {
		solar: {
			year,
			month,
			day
		},
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
		elementNote: ELEMENT_NOTE[nap.element]
	};
}
var WEEKDAYS = [
	"Chủ nhật",
	"Thứ hai",
	"Thứ ba",
	"Thứ tư",
	"Thứ năm",
	"Thứ sáu",
	"Thứ bảy"
];
var HOUR_LABELS = CHI.map((chi, i) => `${chi} · ${hourWindow(i)}`);
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function DayDossier({ info, clockHour, compact = false }) {
	const active = clockHour === void 0 ? -1 : hourIndexFromClock(clockHour);
	const { lunar } = info;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							WEEKDAYS[info.weekday],
							" · ",
							info.solar.day,
							"/",
							info.solar.month,
							"/",
							info.solar.year
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: compact ? "mt-2 font-display text-3xl leading-tight" : "mt-2 font-display text-4xl leading-tight text-ink md:text-5xl",
						children: lunarDayLabel(lunar.day)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-lg text-ink",
						children: [
							lunarMonthLabel(lunar.month, lunar.leap),
							" · năm ",
							canChiLabel(info.year.can, info.year.chi)
						]
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-x-6 gap-y-3 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Năm",
							v: canChiLabel(info.year.can, info.year.chi)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Tháng",
							v: canChiLabel(info.month.can, info.month.chi)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Ngày",
							v: canChiLabel(info.day.can, info.day.chi)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Nạp âm",
							v: info.napAm.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Tiết khí",
							v: info.term
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Fact, {
							k: "Trực",
							v: info.truc.name
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "max-w-2xl text-sm text-muted",
				children: [
					info.hoangDao ? "Ngày hoàng đạo" : "Ngày hắc đạo",
					" theo chi ngày và tháng âm. ",
					info.truc.note
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl text-ink",
					children: "Mười hai giờ"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: "Ô đậm là giờ hoàng đạo. Giờ đang chạy được gạch chân nếu là hôm nay."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 overflow-x-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex w-max gap-2",
						children: info.hours.map((hour) => {
							const on = hour.chi === active;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: hour.hoang ? "w-24 rounded-md bg-accent-soft px-2 py-2 text-ink" : "w-24 rounded-md border border-line bg-card px-2 py-2 text-ink",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: on ? "text-sm font-medium underline decoration-accent decoration-2 underline-offset-4" : "text-sm font-medium",
										children: CHI[hour.chi]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted tabular-nums",
										children: hour.window
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted",
										children: hour.hoang ? "Hoàng đạo" : "Hắc đạo"
									})
								]
							}) }, hour.chi);
						})
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-8 md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Việc dân gian nghiêng về"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm",
					children: info.should.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-accent pl-3",
						children: item
					}, item))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-xl",
					children: "Nên dè"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-3 flex flex-col gap-2 text-sm",
					children: info.avoid.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border-l-2 border-line pl-3 text-muted",
						children: item
					}, item))
				})] })]
			})
		]
	});
}
function Fact({ k, v }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "border-t border-line pt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
			className: "text-xs text-muted",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
			className: "font-medium",
			children: v
		})]
	});
}
var buttonStyles = cva("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-4 text-sm font-medium transition-opacity duration-150 ease-out disabled:cursor-not-allowed disabled:opacity-50", {
	variants: { variant: {
		primary: "bg-accent text-on-accent hover:opacity-90",
		quiet: "border border-line bg-card text-ink hover:bg-accent-soft",
		ghost: "text-ink hover:bg-accent-soft"
	} },
	defaultVariants: { variant: "primary" }
});
function Button({ className, variant, type = "button", ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type,
		className: cn(buttonStyles({ variant }), className),
		...props
	});
}
var HEAD = [
	"T2",
	"T3",
	"T4",
	"T5",
	"T6",
	"T7",
	"CN"
];
function CalendarView({ today }) {
	const [cursor, setCursor] = (0, import_react.useState)({
		year: today.year,
		month: today.month
	});
	const [picked, setPicked] = (0, import_react.useState)(() => describeDay(today.year, today.month, today.day));
	const cells = (0, import_react.useMemo)(() => buildCells(cursor.year, cursor.month), [cursor.year, cursor.month]);
	function shift(delta) {
		const date = new Date(Date.UTC(cursor.year, cursor.month - 1 + delta, 1));
		setCursor({
			year: date.getUTCFullYear(),
			month: date.getUTCMonth() + 1
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "font-display text-3xl",
					children: [
						"Tháng ",
						cursor.month,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted tabular-nums",
							children: cursor.year
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "quiet",
						className: "px-3",
						"aria-label": "Tháng trước",
						onClick: () => shift(-1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "quiet",
						className: "px-3",
						"aria-label": "Tháng sau",
						onClick: () => shift(1),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-4" })
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-muted",
				children: "Số nhỏ là ngày âm. Chấm tròn là ngày hoàng đạo. Bấm một ô để xem trực và giờ."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 grid grid-cols-7 gap-1",
				children: [HEAD.map((label) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-1 py-2 text-center text-xs text-muted",
					children: label
				}, label)), cells.map((cell, index) => cell ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setPicked(cell),
					className: cn("flex min-h-16 flex-col rounded-md border px-1.5 py-1 text-left", picked.solar.day === cell.solar.day && picked.solar.month === cell.solar.month && picked.solar.year === cell.solar.year ? "border-accent bg-accent-soft" : "border-transparent bg-card hover:border-line", today.year === cell.solar.year && today.month === cell.solar.month && today.day === cell.solar.day ? "ring-1 ring-accent" : ""),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium tabular-nums",
							children: cell.solar.day
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs text-muted tabular-nums",
							children: [cell.lunar.day, cell.lunar.day === 1 ? `/${cell.lunar.month}${cell.lunar.leap ? "n" : ""}` : ""]
						}),
						cell.hoangDao ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-auto size-1.5 rounded-full bg-accent",
							"aria-hidden": true
						}) : null
					]
				}, cell.solar.day) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, `empty-${index}`))]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "rounded-xl border border-line bg-card p-4 md:p-5",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayDossier, {
				compact: true,
				info: picked,
				clockHour: sameDay(picked, today) ? (/* @__PURE__ */ new Date()).getHours() : void 0
			})
		})]
	});
}
function sameDay(info, today) {
	return info.solar.year === today.year && info.solar.month === today.month && info.solar.day === today.day;
}
function buildCells(year, month) {
	const lead = (weekdayIndex(year, month, 1) + 6) % 7;
	const count = daysInMonth(year, month);
	const cells = Array.from({ length: lead }, () => null);
	for (let day = 1; day <= count; day++) cells.push(describeDay(year, month, day));
	return cells;
}
var PALACE_NAMES = [
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
	"Huynh đệ"
];
var MENH_CHU = [
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
	"Cự Môn"
];
var THAN_CHU = [
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
	"Thiên Cơ"
];
var LOC_TON = [
	2,
	3,
	5,
	6,
	5,
	6,
	8,
	9,
	11,
	0
];
var CUC_NAME = {
	2: "Thủy nhị cục",
	3: "Mộc tam cục",
	4: "Kim tứ cục",
	5: "Thổ ngũ cục",
	6: "Hỏa lục cục"
};
var CUC_SO = {
	Thủy: 2,
	Mộc: 3,
	Kim: 4,
	Thổ: 5,
	Hỏa: 6
};
var NOTES = {
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
	"Văn Khúc": "Nghệ thuật, miệng lưỡi, duyên nói."
};
function mod(n, m) {
	return (n % m + m) % m;
}
function dichCung(cung1, delta) {
	const x = mod(cung1 + delta, 12);
	return x === 0 ? 12 : x;
}
function timTuVi(cucSo, ngay) {
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
function palaceCan(yearCan, chi) {
	return mod(mod(yearCan * 2 + 2, 10) + mod(chi - 2, 12), 10);
}
function star(name, kind) {
	return {
		name,
		kind,
		note: NOTES[name] ?? ""
	};
}
function buildChart(input) {
	if (!isValidCivil(input.year, input.month, input.day)) throw new Error("Ngày dương lịch không hợp lệ.");
	if (input.hour < 0 || input.hour > 11) throw new Error("Chọn một trong mười hai giờ.");
	const lunar = solarToLunar(input.day, input.month, input.year);
	const y = yearCanChi(lunar.year);
	const m = monthCanChi(lunar.year, lunar.month);
	const d = dayCanChi(lunar.jd);
	const hCan = hourCan(d.can, input.hour);
	const monthPalace = mod(2 + lunar.month - 1, 12);
	const menh = mod(monthPalace - input.hour, 12);
	const than = mod(monthPalace + input.hour, 12);
	const cucSo = CUC_SO[napAmOf(palaceCan(y.can, menh), menh).element];
	const ban = napAmOf(y.can, y.chi);
	const tuVi1 = timTuVi(cucSo, lunar.day);
	const phu1 = dichCung(3, 3 - tuVi1);
	const placed = /* @__PURE__ */ new Map();
	const put = (chi, s) => {
		const list = placed.get(chi) ?? [];
		list.push(s);
		placed.set(chi, list);
	};
	for (const [name, off] of [
		["Tử Vi", 0],
		["Liêm Trinh", 4],
		["Thiên Đồng", 7],
		["Vũ Khúc", 8],
		["Thái Dương", 9],
		["Thiên Cơ", 11]
	]) put(mod(tuVi1 - 1 + off, 12), star(name, "chinh"));
	for (const [name, off] of [
		["Thiên Phủ", 0],
		["Thái Âm", 1],
		["Tham Lang", 2],
		["Cự Môn", 3],
		["Thiên Tướng", 4],
		["Thiên Lương", 5],
		["Thất Sát", 6],
		["Phá Quân", 10]
	]) put(mod(phu1 - 1 + off, 12), star(name, "chinh"));
	const loc = LOC_TON[y.can] ?? 0;
	put(loc, star("Lộc Tồn", "phu"));
	put(mod(loc + 1, 12), star("Kình Dương", "phu"));
	put(mod(loc - 1, 12), star("Đà La", "phu"));
	put(mod(10 - input.hour, 12), star("Văn Xương", "phu"));
	put(mod(4 + input.hour, 12), star("Văn Khúc", "phu"));
	const duongCan = y.can % 2 === 0;
	const thuan = input.gender === "nam" ? duongCan : !duongCan;
	const daiHanAt = /* @__PURE__ */ new Map();
	for (let k = 0; k < 12; k++) {
		const chi = mod(menh + (thuan ? k : -k), 12);
		const from = cucSo + k * 10;
		daiHanAt.set(chi, `${from}–${from + 9}`);
	}
	const palaces = CHI.map((_, chi) => {
		const stars = placed.get(chi) ?? [];
		const name = PALACE_NAMES[mod(chi - menh, 12)] ?? "Mệnh";
		return {
			chi,
			can: palaceCan(y.can, chi),
			name,
			stars,
			daiHan: daiHanAt.get(chi) ?? "",
			mainStars: stars.filter((s) => s.kind === "chinh")
		};
	});
	const menhPalace = palaces[menh];
	const opposite = palaces[mod(menh + 6, 12)];
	const borrowed = menhPalace.mainStars.length === 0;
	const menhStars = borrowed ? opposite.mainStars : menhPalace.mainStars;
	const thanPalace = palaces[than]?.name ?? "Mệnh";
	const who = input.name.trim() || "Đương số";
	const starLine = menhStars.length === 0 ? "Mệnh và cung xung đều không có chính tinh trong bộ 14 sao này." : `${borrowed ? "Mệnh vô chính diệu, mượn chính tinh cung xung" : "Chính tinh tại Mệnh"}: ${menhStars.map((s) => s.name).join(", ")}.`;
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
			hour: canChiLabel(hCan, input.hour)
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
		reading
	};
}
function chartSummary(chart) {
	return [
		`Huyền Đài — lá số giản lược`,
		`${chart.name} · ${chart.amDuong}`,
		`Dương lịch ${chart.solarLabel} · ${chart.lunarLabel}`,
		`Giờ ${chart.hourLabel}`,
		`Tứ trụ: ${chart.pillars.year} / ${chart.pillars.month} / ${chart.pillars.day} / ${chart.pillars.hour}`,
		`Bản mệnh ${chart.banMenh} · ${chart.cuc}`,
		`Mệnh tại ${CHI[chart.menhChi]} · Thân cư ${chart.thanPalace}`,
		`Chủ mệnh ${chart.menhChu} · Chủ thân ${chart.thanChu}`,
		`Đại hạn ${chart.daiHanWay}, khởi ${chart.cucSo} tuổi`,
		chart.reading
	].join("\n");
}
var STORAGE = "huyen-dai-la-so";
var GRID = [
	{
		chi: 5,
		col: 1,
		row: 1
	},
	{
		chi: 6,
		col: 2,
		row: 1
	},
	{
		chi: 7,
		col: 3,
		row: 1
	},
	{
		chi: 8,
		col: 4,
		row: 1
	},
	{
		chi: 4,
		col: 1,
		row: 2
	},
	{
		chi: 9,
		col: 4,
		row: 2
	},
	{
		chi: 3,
		col: 1,
		row: 3
	},
	{
		chi: 10,
		col: 4,
		row: 3
	},
	{
		chi: 2,
		col: 1,
		row: 4
	},
	{
		chi: 1,
		col: 2,
		row: 4
	},
	{
		chi: 0,
		col: 3,
		row: 4
	},
	{
		chi: 11,
		col: 4,
		row: 4
	}
];
function TuViView() {
	const [name, setName] = (0, import_react.useState)("");
	const [gender, setGender] = (0, import_react.useState)("nam");
	const [date, setDate] = (0, import_react.useState)("1995-08-20");
	const [hour, setHour] = (0, import_react.useState)(6);
	const [chart, setChart] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [saved, setSaved] = (0, import_react.useState)([]);
	const [focus, setFocus] = (0, import_react.useState)(null);
	const [copied, setCopied] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (Array.isArray(parsed)) setSaved(parsed);
			}
		} catch {
			setSaved([]);
		}
	}, []);
	function persist(next) {
		setSaved(next);
		localStorage.setItem(STORAGE, JSON.stringify(next));
	}
	function lap() {
		const [year, month, day] = date.split("-").map(Number);
		try {
			const next = buildChart({
				name,
				gender,
				year: year ?? 0,
				month: month ?? 0,
				day: day ?? 0,
				hour
			});
			setChart(next);
			setFocus(next.menhChi);
			setError("");
			setCopied(false);
		} catch (err) {
			setError(err instanceof Error ? err.message : "Không lập được lá số.");
		}
	}
	function keep() {
		if (!chart) return;
		const entry = {
			id: `${date}-${hour}-${gender}`,
			name: chart.name,
			gender,
			date,
			hour
		};
		persist([entry, ...saved.filter((item) => item.id !== entry.id)].slice(0, 8));
	}
	async function copy() {
		if (!chart) return;
		try {
			await navigator.clipboard.writeText(chartSummary(chart));
			setCopied(true);
		} catch {
			setCopied(false);
			setError("Trình duyệt không cho chép. Hãy chọn đoạn tóm tắt và chép tay.");
		}
	}
	const focusPalace = chart && focus !== null ? chart.palaces[focus] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Lá số giản lược"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Nhập ngày dương lịch. Giờ là mười hai địa chi. Lá số an 14 chính tinh, Lộc Tồn, Kình Đà, Xương Khúc và đại hạn. Tháng nhuận được ghi nhận, một số trường phái tính khác."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 rounded-xl border border-line bg-card p-4 md:grid-cols-[1.2fr_auto_auto_1fr_auto] md:items-end",
				onSubmit: (event) => {
					event.preventDefault();
					lap();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-sm",
						children: ["Tên", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: name,
							onChange: (event) => setName(event.target.value),
							placeholder: "Không bắt buộc",
							className: "h-11 rounded-md border border-line bg-paper px-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "flex flex-col gap-1 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", { children: "Giới" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex h-11 overflow-hidden rounded-md border border-line",
							children: [["nam", "Nam"], ["nu", "Nữ"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: cn("min-w-14 px-3", gender === id ? "bg-accent text-on-accent" : "bg-paper"),
								onClick: () => setGender(id),
								children: label
							}, id))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-sm",
						children: ["Ngày sinh", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "date",
							required: true,
							value: date,
							min: "1900-01-01",
							max: "2100-12-31",
							onChange: (event) => setDate(event.target.value),
							className: "h-11 rounded-md border border-line bg-paper px-3"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-sm",
						children: ["Giờ sinh", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
							value: hour,
							onChange: (event) => setHour(Number(event.target.value)),
							className: "h-11 rounded-md border border-line bg-paper px-3",
							children: HOUR_LABELS.map((label, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: index,
								children: label
							}, label))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Lập lá số"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-accent",
				children: error
			}) : null,
			saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: saved.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					className: "rounded-full border border-line bg-card px-3 py-2 text-sm",
					onClick: () => {
						const nextName = item.name === "Đương số" ? "" : item.name;
						setName(nextName);
						setGender(item.gender);
						setDate(item.date);
						setHour(item.hour);
						const [year, month, day] = item.date.split("-").map(Number);
						try {
							const next = buildChart({
								name: nextName,
								gender: item.gender,
								year: year ?? 0,
								month: month ?? 0,
								day: day ?? 0,
								hour: item.hour
							});
							setChart(next);
							setFocus(next.menhChi);
							setError("");
						} catch (err) {
							setError(err instanceof Error ? err.message : "Không mở được lá số đã giữ.");
						}
					},
					children: [
						item.name,
						" · ",
						item.date
					]
				}, item.id))
			}) : null,
			chart ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap items-end justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm text-muted",
								children: [
									chart.amDuong,
									" · đại hạn ",
									chart.daiHanWay.toLowerCase(),
									" từ ",
									chart.cucSo,
									" tuổi"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "font-display text-2xl",
								children: [
									chart.name,
									" · ",
									chart.banMenh
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [
									chart.lunarLabel,
									" · giờ ",
									chart.hourLabel
								]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								onClick: keep,
								children: "Giữ trên máy"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								variant: "quiet",
								onClick: copy,
								children: copied ? "Đã chép" : "Chép tóm tắt"
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-x-auto",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid min-w-xl grid-cols-4 grid-rows-4 gap-1",
							children: [GRID.map((cell) => {
								const palace = chart.palaces[cell.chi];
								if (!palace) return null;
								const active = focus === cell.chi;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									style: {
										gridColumn: cell.col,
										gridRow: cell.row
									},
									onClick: () => setFocus(cell.chi),
									className: cn("flex min-h-28 flex-col gap-1 rounded-md border p-2 text-left", active ? "border-accent bg-accent-soft" : "border-line bg-card", cell.chi === chart.menhChi ? "ring-1 ring-accent" : ""),
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "flex items-baseline justify-between gap-2 text-xs text-muted",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
												CAN[palace.can],
												" ",
												CHI[cell.chi]
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "tabular-nums",
												children: palace.daiHan
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: palace.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs leading-snug",
											children: palace.mainStars.length ? palace.mainStars.map((star) => star.name).join(" · ") : "Vô chính diệu"
										}),
										cell.chi === chart.thanChi ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-auto text-xs text-muted",
											children: "Thân"
										}) : null
									]
								}, cell.chi);
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col justify-center gap-1 rounded-md bg-paper px-4",
								style: {
									gridColumn: "2 / span 2",
									gridRow: "2 / span 2"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-display text-2xl",
										children: chart.cuc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm",
										children: [
											"Tứ trụ ",
											chart.pillars.year,
											" · ",
											chart.pillars.month,
											" · ",
											chart.pillars.day,
											" · ",
											chart.pillars.hour
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted",
										children: [
											"Chủ mệnh ",
											chart.menhChu,
											" · Chủ thân ",
											chart.thanChu,
											" · ",
											chart.animal
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm",
										children: [
											"Mệnh tại ",
											CHI[chart.menhChi],
											" · Thân cư ",
											chart.thanPalace
										]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm leading-relaxed",
							children: chart.reading
						}), focusPalace ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-line bg-card p-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
									className: "font-display text-xl",
									children: [
										focusPalace.name,
										" · ",
										CHI[focusPalace.chi]
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [
										"Đại hạn ",
										focusPalace.daiHan,
										" tuổi"
									]
								}),
								focusPalace.stars.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 text-sm",
									children: "Cung này không có sao trong bộ giản lược."
								}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-3 flex flex-col gap-3",
									children: focusPalace.stars.map((star) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm font-medium",
										children: [star.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-2 font-normal text-muted",
											children: star.kind === "chinh" ? "chính tinh" : "phụ tinh"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted",
										children: star.note
									})] }, star.name))
								})
							]
						}) : null]
					}),
					chart.leap ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Sinh nhằm tháng nhuận. Lá số lấy số tháng đó."
					}) : null
				]
			}) : null
		]
	});
}
var ARCANA = [
	{
		n: 0,
		name: "Kẻ Khờ",
		keyword: "Bước ra",
		up: "Một khởi đầu chưa có bản đồ. Đi nếu bạn chịu học trên đường.",
		down: "Thiếu chuẩn bị. Đừng nhảy chỉ vì chán chỗ đang đứng."
	},
	{
		n: 1,
		name: "Pháp Sư",
		keyword: "Công cụ",
		up: "Đủ thứ trong tay. Việc thiếu là bắt đầu, không phải thêm đồ.",
		down: "Tài bị phân tán, hoặc đang dùng để trình diễn."
	},
	{
		n: 2,
		name: "Nữ Tư Tế",
		keyword: "Im lặng",
		up: "Chưa đủ thông tin. Nghe tiếp, đừng chốt.",
		down: "Giữ bí mật quá lâu thành né sự thật."
	},
	{
		n: 3,
		name: "Nữ Hoàng",
		keyword: "Nuôi dưỡng",
		up: "Việc cần thời gian và sự chăm, không cần thúc.",
		down: "Chăm quá thành ôm, hoặc bỏ bê thứ đang lớn."
	},
	{
		n: 4,
		name: "Hoàng Đế",
		keyword: "Khung",
		up: "Đặt quy tắc, ranh giới, và người chịu trách nhiệm.",
		down: "Cứng nhắc, hoặc trốn việc phải đứng ra quyết."
	},
	{
		n: 5,
		name: "Giáo Hoàng",
		keyword: "Truyền thừa",
		up: "Học người đi trước, một nghi thức, một cộng đồng.",
		down: "Lệ cũ không còn vừa. Được phép hỏi lại."
	},
	{
		n: 6,
		name: "Đôi Lứa",
		keyword: "Chọn",
		up: "Một lựa chọn bằng giá trị, không chỉ bằng cảm xúc.",
		down: "Lệch nhịp. Chưa nói thật điều mình cần."
	},
	{
		n: 7,
		name: "Cỗ Xe",
		keyword: "Kéo đi",
		up: "Hai lực ngược nhau vẫn đi được nếu bạn cầm cương.",
		down: "Gắng quá, hoặc mất phương đang định theo."
	},
	{
		n: 8,
		name: "Sức Mạnh",
		keyword: "Mềm",
		up: "Ghìm cái nóng bằng kiên nhẫn, không bằng đè.",
		down: "Tự nghiêng. Hoặc nuốt cảm xúc đến lúc trào."
	},
	{
		n: 9,
		name: "Ẩn Sĩ",
		keyword: "Rút vào",
		up: "Một khoảng lùi có ích. Câu trả lời ở trong, không ở đám đông.",
		down: "Cô lập thành trốn. Đến lúc mở cửa một chút."
	},
	{
		n: 10,
		name: "Bánh Xe",
		keyword: "Xoay",
		up: "Việc đang đổi pha. Giữ việc của mình, đừng níu pha cũ.",
		down: "Kháng một chu kỳ đã hết, hoặc chờ may mà không nhúc."
	},
	{
		n: 11,
		name: "Công Lý",
		keyword: "Cân",
		up: "Nhìn hệ quả thật, rồi quyết cho đều.",
		down: "Thiên vị, hoặc trốn một sự thật đã rõ."
	},
	{
		n: 12,
		name: "Người Treo",
		keyword: "Treo",
		up: "Tạm dừng để thấy góc khác. Chưa phải lúc vùng.",
		down: "Đứng yên quá lâu. Hy sinh không còn ích."
	},
	{
		n: 13,
		name: "Chuyển hóa",
		keyword: "Bỏ vỏ",
		up: "Một việc phải kết thúc thì việc sau mới có chỗ.",
		down: "Níu cái đã hết, hoặc sợ đổi đến mức đứng hình."
	},
	{
		n: 14,
		name: "Tiết độ",
		keyword: "Pha",
		up: "Trộn vừa. Việc này cần liều lượng, không cần cực đoan.",
		down: "Lệch một phía. Bớt hoặc thêm một chút là đủ."
	},
	{
		n: 15,
		name: "Ràng buộc",
		keyword: "Dây",
		up: "Một thói, một quan hệ, một nỗi sợ đang cầm trịch.",
		down: "Nhìn ra sợi dây. Gỡ được từng nút, không cần đứt hết."
	},
	{
		n: 16,
		name: "Ngọn Tháp",
		keyword: "Đổ",
		up: "Cấu trúc không thật bị lộ. Đau, nhưng sạch.",
		down: "Trì hoãn một sự đổ đã báo trước, hoặc sợ quá mức."
	},
	{
		n: 17,
		name: "Ngôi Sao",
		keyword: "Vẳng",
		up: "Sau biến cố còn một hướng. Giữ hy vọng có việc làm kèm.",
		down: "Hy vọng mỏng, hoặc mất niềm tin vào việc đang chữa."
	},
	{
		n: 18,
		name: "Mặt Trăng",
		keyword: "Mờ",
		up: "Chưa thấy rõ. Đi chậm, đừng tin ngay hình trong sương.",
		down: "Sương đang tan. Gọi tên nỗi sợ cho nó nhỏ lại."
	},
	{
		n: 19,
		name: "Mặt Trời",
		keyword: "Rõ",
		up: "Việc sáng ra. Được vui, được nói thẳng.",
		down: "Vui chưa trọn, hoặc nắng quá thành khoe."
	},
	{
		n: 20,
		name: "Phán xét",
		keyword: "Gọi",
		up: "Một tiếng gọi để làm lại cho đúng, không phải để tự kết án.",
		down: "Tự trách quá nặng, hoặc giả vờ không nghe."
	},
	{
		n: 21,
		name: "Thế giới",
		keyword: "Tròn",
		up: "Một vòng đã khép. Nghỉ một nhịp trước vòng mới.",
		down: "Còn một đoạn dở. Đừng tuyên bố xong khi chưa xong."
	}
];
function shuffle(list) {
	const next = list.slice();
	for (let i = next.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const a = next[i];
		const b = next[j];
		if (a && b) {
			next[i] = b;
			next[j] = a;
		}
	}
	return next;
}
function drawSpread(count) {
	const positions = count === 1 ? ["Lá bài"] : [
		"Chuyện cũ",
		"Hiện tại",
		"Hướng tới"
	];
	return shuffle(ARCANA).slice(0, count).map((card, i) => ({
		...card,
		reversed: Math.random() < .5,
		position: positions[i] ?? "Lá bài"
	}));
}
function TarotView() {
	const [question, setQuestion] = (0, import_react.useState)("");
	const [count, setCount] = (0, import_react.useState)(3);
	const [cards, setCards] = (0, import_react.useState)(null);
	const [asked, setAsked] = (0, import_react.useState)("");
	function draw() {
		setAsked(question.trim());
		setCards(drawSpread(count));
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Tarot"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Bộ 22 lá ẩn chính. Rút một lá hoặc ba lá: chuyện cũ, hiện tại, hướng tới. Bài úp là nghĩa nghịch. Câu hỏi chỉ ở lại trên máy bạn."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-end",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-sm",
						children: ["Câu hỏi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: question,
							maxLength: 400,
							onChange: (event) => setQuestion(event.target.value),
							placeholder: "Ví dụ: việc này có nên ký trong tháng không?",
							className: "min-h-24 rounded-md border border-line bg-card px-3 py-2"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 overflow-hidden rounded-md border border-line",
						children: [[1, "1 lá"], [3, "3 lá"]].map(([n, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("px-4", count === n ? "bg-accent text-on-accent" : "bg-card"),
							onClick: () => setCount(n),
							children: label
						}, n))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						onClick: draw,
						children: "Rút bài"
					})
				]
			}),
			cards ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "flex flex-col gap-6",
				children: [asked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: ["Câu hỏi: ", asked]
				}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: cn("grid gap-4", cards.length === 3 ? "sm:grid-cols-3" : "sm:max-w-xs"),
					children: cards.map((card) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted",
								children: card.position
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
								className: "flex min-h-64 flex-col justify-between rounded-xl border border-line bg-card p-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-4xl tabular-nums",
									children: String(card.n).padStart(2, "0")
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-6 h-px w-10 bg-accent" })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl",
									children: card.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted",
									children: [card.keyword, card.reversed ? " · úp" : " · ngửa"]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-medium",
									children: [card.reversed ? "Nghịch" : "Thuận", ". "]
								}), card.reversed ? card.down : card.up]
							})
						]
					}, card.n))
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Bài chưa rút. Viết câu hỏi nếu muốn, rồi bấm Rút bài."
			})
		]
	});
}
/** King Wen number by 6-bit line pattern. Bit 0 is the bottom line, 1 = dương. */
var KING_WEN = [
	2,
	24,
	7,
	19,
	15,
	36,
	46,
	11,
	16,
	51,
	40,
	54,
	62,
	55,
	32,
	34,
	8,
	3,
	29,
	60,
	39,
	63,
	48,
	5,
	45,
	17,
	47,
	58,
	31,
	49,
	28,
	43,
	23,
	27,
	4,
	41,
	52,
	22,
	18,
	26,
	35,
	21,
	64,
	38,
	56,
	30,
	50,
	14,
	20,
	42,
	59,
	61,
	53,
	37,
	57,
	9,
	12,
	25,
	6,
	10,
	33,
	13,
	44,
	1
];
var HEXAGRAMS = [
	{
		n: 0,
		name: "",
		title: "",
		text: ""
	},
	{
		n: 1,
		name: "Càn",
		title: "Thuần Càn",
		text: "Trời liền trời. Giữ việc đã chọn, đừng đổi hướng giữa chừng."
	},
	{
		n: 2,
		name: "Khôn",
		title: "Thuần Khôn",
		text: "Đất chịu mở. Hợp nâng đỡ và chờ đúng lúc, không hợp cưỡng."
	},
	{
		n: 3,
		name: "Truân",
		title: "Thủy Lôi Truân",
		text: "Việc mới còn rối. Khởi được, nhưng đừng đòi thông ngay."
	},
	{
		n: 4,
		name: "Mông",
		title: "Sơn Thủy Mông",
		text: "Còn non. Hỏi người biết, và chịu học từ đầu."
	},
	{
		n: 5,
		name: "Nhu",
		title: "Thủy Thiên Nhu",
		text: "Cần chờ. Lực đã có, thời chưa tới."
	},
	{
		n: 6,
		name: "Tụng",
		title: "Thiên Thủy Tụng",
		text: "Dễ tranh. Nói rõ phần mình, tránh kéo dài kiện cáo."
	},
	{
		n: 7,
		name: "Sư",
		title: "Địa Thủy Sư",
		text: "Việc đông người. Cần kỷ luật và một người cầm đầu."
	},
	{
		n: 8,
		name: "Tỷ",
		title: "Thủy Địa Tỷ",
		text: "Hợp lại. Chọn người để đi cùng, đừng đứng một mình lúc này."
	},
	{
		n: 9,
		name: "Tiểu Súc",
		title: "Phong Thiên Tiểu Súc",
		text: "Mây mỏng, mưa chưa. Giữ nhỏ, đừng bung lớn."
	},
	{
		n: 10,
		name: "Lý",
		title: "Thiên Trạch Lý",
		text: "Đi trên chỗ dễ trượt. Lễ và chừng mực giữ được bước."
	},
	{
		n: 11,
		name: "Thái",
		title: "Địa Thiên Thái",
		text: "Trên dưới thông. Hợp mở việc, vẫn nhớ lúc thông không ở mãi."
	},
	{
		n: 12,
		name: "Bĩ",
		title: "Thiên Địa Bĩ",
		text: "Trên dưới nghẽn. Thu mình, đừng cố thông bằng sức."
	},
	{
		n: 13,
		name: "Đồng Nhân",
		title: "Thiên Hỏa Đồng Nhân",
		text: "Cùng một việc với người khác. Nói mục tiêu cho rõ."
	},
	{
		n: 14,
		name: "Đại Hữu",
		title: "Hỏa Thiên Đại Hữu",
		text: "Đang có của. Giữ bằng sự rộng, không bằng ôm khư."
	},
	{
		n: 15,
		name: "Khiêm",
		title: "Địa Sơn Khiêm",
		text: "Thấp mà bền. Bớt phô thì việc dễ xong."
	},
	{
		n: 16,
		name: "Dự",
		title: "Lôi Địa Dự",
		text: "Khí đã động. Chuẩn bị vui và chuẩn bị cả việc phải làm."
	},
	{
		n: 17,
		name: "Tùy",
		title: "Trạch Lôi Tùy",
		text: "Theo cái đúng lúc, không phải theo đám đông."
	},
	{
		n: 18,
		name: "Cổ",
		title: "Sơn Phong Cổ",
		text: "Việc cũ đã hỏng. Sửa từ gốc, không sơn lại vỏ."
	},
	{
		n: 19,
		name: "Lâm",
		title: "Địa Trạch Lâm",
		text: "Việc đến gần. Trông nom cho kỹ lúc đang thuận."
	},
	{
		n: 20,
		name: "Quan",
		title: "Phong Địa Quan",
		text: "Nhìn trước khi làm. Tấm gương của mình cũng đang bị nhìn."
	},
	{
		n: 21,
		name: "Phệ Hạp",
		title: "Hỏa Lôi Phệ Hạp",
		text: "Có vật cản trong miệng. Cắn cho đứt, nói cho rõ lỗi."
	},
	{
		n: 22,
		name: "Bí",
		title: "Sơn Hỏa Bí",
		text: "Được trang sức. Đẹp giúp việc, không thay việc."
	},
	{
		n: 23,
		name: "Bác",
		title: "Sơn Địa Bác",
		text: "Đang bong. Đừng thêm tầng mới lên nền đã mục."
	},
	{
		n: 24,
		name: "Phục",
		title: "Địa Lôi Phục",
		text: "Một điểm dương quay lại. Việc nhỏ trở lại, đừng vội lớn."
	},
	{
		n: 25,
		name: "Vô Vọng",
		title: "Thiên Lôi Vô Vọng",
		text: "Làm thẳng, không tính mẹo. Mẹo lúc này dễ phản."
	},
	{
		n: 26,
		name: "Đại Súc",
		title: "Sơn Thiên Đại Súc",
		text: "Giữ lực lớn. Học và tích, chưa phải lúc xả hết."
	},
	{
		n: 27,
		name: "Di",
		title: "Sơn Lôi Di",
		text: "Coi cái mình nuôi: lời ăn tiếng nói, và người mình gần."
	},
	{
		n: 28,
		name: "Đại Quá",
		title: "Trạch Phong Đại Quá",
		text: "Đòn nóc quá nặng. Chống tạm được, phải giảm tải."
	},
	{
		n: 29,
		name: "Khảm",
		title: "Thuần Khảm",
		text: "Hố chồng hố. Giữ lòng thật, đi từng bước trong chỗ nguy."
	},
	{
		n: 30,
		name: "Ly",
		title: "Thuần Ly",
		text: "Sáng bám vào vật. Việc cần người để nương, không tự cháy một mình."
	},
	{
		n: 31,
		name: "Hàm",
		title: "Trạch Sơn Hàm",
		text: "Cảm ứng. Việc đến từ chỗ mình thật lòng, không từ ép."
	},
	{
		n: 32,
		name: "Hằng",
		title: "Lôi Phong Hằng",
		text: "Giữ lâu. Đổi chi tiết được, đừng đổi trục."
	},
	{
		n: 33,
		name: "Độn",
		title: "Thiên Sơn Độn",
		text: "Rút lui có trật tự. Lui không phải thua."
	},
	{
		n: 34,
		name: "Đại Tráng",
		title: "Lôi Thiên Đại Tráng",
		text: "Sức đang mạnh. Mạnh mà không lễ thì gãy."
	},
	{
		n: 35,
		name: "Tấn",
		title: "Hỏa Địa Tấn",
		text: "Được tiến. Ra ánh sáng, nhận việc rõ ràng."
	},
	{
		n: 36,
		name: "Minh Di",
		title: "Địa Hỏa Minh Di",
		text: "Sáng bị che. Giữ lửa nhỏ, đừng phô lúc này."
	},
	{
		n: 37,
		name: "Gia Nhân",
		title: "Phong Hỏa Gia Nhân",
		text: "Việc nhà trước việc ngoài. Vai trong nhà cần gọi đúng tên."
	},
	{
		n: 38,
		name: "Khuê",
		title: "Hỏa Trạch Khuê",
		text: "Khác ý. Việc nhỏ vẫn làm chung được dù chưa hòa hết."
	},
	{
		n: 39,
		name: "Kiển",
		title: "Thủy Sơn Kiển",
		text: "Phía trước vướng. Quay lại hỏi người, đừng húc."
	},
	{
		n: 40,
		name: "Giải",
		title: "Lôi Thủy Giải",
		text: "Nút đang mở. Tha thứ phần cần tha, xử phần cần xử."
	},
	{
		n: 41,
		name: "Tổn",
		title: "Sơn Trạch Tổn",
		text: "Bớt chỗ thừa để nuôi chỗ thiếu."
	},
	{
		n: 42,
		name: "Ích",
		title: "Phong Lôi Ích",
		text: "Được thêm. Dùng phần thêm vào việc có ích, đừng phung."
	},
	{
		n: 43,
		name: "Quải",
		title: "Trạch Thiên Quải",
		text: "Phải quyết một việc lệch. Nói công khai, không thì thầm."
	},
	{
		n: 44,
		name: "Cấu",
		title: "Thiên Phong Cấu",
		text: "Gặp bất ngờ. Đừng nhận ngay thứ vừa xuất hiện."
	},
	{
		n: 45,
		name: "Tụy",
		title: "Trạch Địa Tụy",
		text: "Người tụ lại. Cần một lẽ chung, nếu không tụ thành loạn."
	},
	{
		n: 46,
		name: "Thăng",
		title: "Địa Phong Thăng",
		text: "Đi lên từ dưới. Từng bậc, có người kéo."
	},
	{
		n: 47,
		name: "Khốn",
		title: "Trạch Thủy Khốn",
		text: "Lời chưa được nghe. Giữ khí, đợi chỗ nói khác."
	},
	{
		n: 48,
		name: "Tỉnh",
		title: "Thủy Phong Tỉnh",
		text: "Giếng vẫn đó. Việc hỏng ở gàu, không ở nguồn."
	},
	{
		n: 49,
		name: "Cách",
		title: "Trạch Hỏa Cách",
		text: "Đổi da. Đổi khi đã được lòng người, không đổi vì nóng."
	},
	{
		n: 50,
		name: "Đỉnh",
		title: "Hỏa Phong Đỉnh",
		text: "Nấu cho chín. Tài cần vị trí đúng mới thành của nuôi người."
	},
	{
		n: 51,
		name: "Chấn",
		title: "Thuần Chấn",
		text: "Sấm động. Giật mình rồi sửa, không giật mình rồi chạy."
	},
	{
		n: 52,
		name: "Cấn",
		title: "Thuần Cấn",
		text: "Dừng đúng chỗ. Lưng quay việc không thuộc về mình."
	},
	{
		n: 53,
		name: "Tiệm",
		title: "Phong Sơn Tiệm",
		text: "Tiến chậm như chim đậu cành. Vội là mất cành."
	},
	{
		n: 54,
		name: "Quy Muội",
		title: "Lôi Trạch Quy Muội",
		text: "Vị thế chưa chính. Đừng đòi danh phận khi lễ chưa xong."
	},
	{
		n: 55,
		name: "Phong",
		title: "Lôi Hỏa Phong",
		text: "Đang đầy. Đầy thì lo lúc vơi, đừng lo giữ mãi đỉnh."
	},
	{
		n: 56,
		name: "Lữ",
		title: "Hỏa Sơn Lữ",
		text: "Đi xa. Giữ nhỏ, giữ lễ, đừng mang cả nhà trên vai."
	},
	{
		n: 57,
		name: "Tốn",
		title: "Thuần Tốn",
		text: "Gió lọt. Việc vào bằng mềm và bằng lặp lại."
	},
	{
		n: 58,
		name: "Đoài",
		title: "Thuần Đoài",
		text: "Vui thật thì bền. Vui để mua chuộc thì mỏng."
	},
	{
		n: 59,
		name: "Hoán",
		title: "Phong Thủy Hoán",
		text: "Tan sự ứ. Chia việc, chia băng, cho khí lưu thông."
	},
	{
		n: 60,
		name: "Tiết",
		title: "Thủy Trạch Tiết",
		text: "Đặt chừng. Chừng quá cũng khổ, không chừng thì tan."
	},
	{
		n: 61,
		name: "Trung Phu",
		title: "Phong Trạch Trung Phu",
		text: "Lòng tin ở giữa. Nói ít mà thật thì tới được."
	},
	{
		n: 62,
		name: "Tiểu Quá",
		title: "Lôi Sơn Tiểu Quá",
		text: "Vượt một chút ở việc nhỏ. Việc lớn đừng vượt."
	},
	{
		n: 63,
		name: "Ký Tế",
		title: "Thủy Hỏa Ký Tế",
		text: "Đã qua sông. Giữ cho khỏi lệch, vì xong cũng là lúc dễ lỏng."
	},
	{
		n: 64,
		name: "Vị Tế",
		title: "Hỏa Thủy Vị Tế",
		text: "Chưa qua sông. Sắp tới, nhưng chưa được tuyên bố xong."
	}
];
function hexagramByLines(lines) {
	let bits = 0;
	lines.forEach((line, i) => {
		if (line === 7 || line === 9) bits += 1 << i;
	});
	return HEXAGRAMS[KING_WEN[bits] ?? 1] ?? HEXAGRAMS[1];
}
var YAO_PLACE = [
	"Hào sơ — việc vừa nhú.",
	"Hào hai — việc ở gần, trong nhà.",
	"Hào ba — chỗ chuyển, dễ vấp.",
	"Hào bốn — gần người trên, nói năng giữ chừng.",
	"Hào năm — ngôi quyết định.",
	"Hào thượng — cùng cực, biết dừng."
];
function tossCoin() {
	return Math.random() < .5 ? 2 : 3;
}
function castLine() {
	const coins = [
		tossCoin(),
		tossCoin(),
		tossCoin()
	];
	const value = coins.reduce((s, n) => s + n, 0);
	return {
		value,
		yang: value === 7 || value === 9,
		changing: value === 6 || value === 9,
		coins
	};
}
function castHexagram() {
	const lines = Array.from({ length: 6 }, () => castLine());
	const primary = hexagramByLines(lines.map((line) => line.value));
	const changing = lines.flatMap((line, index) => line.changing ? [{
		index,
		text: `${YAO_PLACE[index]} ${line.value === 9 ? "Dương già đổi sang âm." : "Âm già đổi sang dương."}`
	}] : []);
	const transformedValues = lines.map((line) => {
		if (line.value === 9) return 8;
		if (line.value === 6) return 7;
		return line.value;
	});
	return {
		lines,
		primary,
		transformed: changing.length ? hexagramByLines(transformedValues) : null,
		changing
	};
}
function IChingView() {
	const [question, setQuestion] = (0, import_react.useState)("");
	const [result, setResult] = (0, import_react.useState)(null);
	const [asked, setAsked] = (0, import_react.useState)("");
	function cast() {
		setAsked(question.trim());
		setResult(castHexagram());
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Kinh Dịch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Gieo ba đồng xu cho mỗi hào, từ dưới lên. Sáu hào thành một quẻ. Hào già (sáu hoặc chín) đổi sang quẻ biến."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex flex-col gap-1 text-sm",
					children: ["Việc muốn hỏi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: question,
						maxLength: 400,
						onChange: (event) => setQuestion(event.target.value),
						placeholder: "Không bắt buộc",
						className: "h-11 rounded-md border border-line bg-card px-3"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					onClick: cast,
					children: "Gieo sáu hào"
				})]
			}),
			result ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexBlock, {
						title: "Quẻ gốc",
						name: result.primary.title,
						lines: result.lines
					}), result.transformed ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HexBlock, {
						title: "Quẻ biến",
						name: result.transformed.title,
						lines: result.lines.map((line) => ({
							yang: line.value === 6 ? true : line.value === 9 ? false : line.yang,
							changing: false,
							value: line.value,
							coins: line.coins
						}))
					}) : null]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl",
					children: [
						asked ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm text-muted",
							children: ["Việc hỏi: ", asked]
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-2 font-display text-3xl",
							children: result.primary.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 text-sm leading-relaxed",
							children: result.primary.text
						}),
						result.transformed ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
								className: "mt-6 font-display text-2xl",
								children: ["Biến sang ", result.transformed.title]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm leading-relaxed",
								children: result.transformed.text
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-4 flex flex-col gap-2 text-sm",
								children: result.changing.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: line.text }, line.index))
							})
						] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-sm text-muted",
							children: "Không có hào động. Quẻ đứng yên."
						})
					]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: "Chưa gieo. Mỗi lần bấm là một quẻ mới."
			})
		]
	});
}
function HexBlock({ title, name, lines }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "w-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
				className: "text-xs text-muted",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 flex flex-col-reverse gap-1.5",
				children: lines.map((line, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-center gap-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
						yang: line.yang,
						changing: line.changing
					})
				}, `${name}-${index}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: name
			})
		]
	});
}
function Line({ yang, changing }) {
	const tone = changing ? "bg-accent" : "bg-ink";
	if (yang) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-2.5 w-full rounded-sm", tone) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex w-full gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-2.5 flex-1 rounded-sm", tone) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-2.5 flex-1 rounded-sm", tone) })]
	});
}
var QUA = [
	{
		id: 1,
		name: "Khảm",
		element: "Thủy",
		group: "Đông tứ mệnh"
	},
	{
		id: 2,
		name: "Khôn",
		element: "Thổ",
		group: "Tây tứ mệnh"
	},
	{
		id: 3,
		name: "Chấn",
		element: "Mộc",
		group: "Đông tứ mệnh"
	},
	{
		id: 4,
		name: "Tốn",
		element: "Mộc",
		group: "Đông tứ mệnh"
	},
	{
		id: 6,
		name: "Càn",
		element: "Kim",
		group: "Tây tứ mệnh"
	},
	{
		id: 7,
		name: "Đoài",
		element: "Kim",
		group: "Tây tứ mệnh"
	},
	{
		id: 8,
		name: "Cấn",
		element: "Thổ",
		group: "Tây tứ mệnh"
	},
	{
		id: 9,
		name: "Ly",
		element: "Hỏa",
		group: "Đông tứ mệnh"
	}
];
var DIR_LABEL = {
	bac: "Bắc",
	"dong-bac": "Đông Bắc",
	dong: "Đông",
	"dong-nam": "Đông Nam",
	nam: "Nam",
	"tay-nam": "Tây Nam",
	tay: "Tây",
	"tay-bac": "Tây Bắc"
};
var STAR_LABEL = {
	"sinh-khi": "Sinh khí",
	"thien-y": "Thiên y",
	"dien-nien": "Diên niên",
	"phuc-vi": "Phục vị",
	"tuyet-menh": "Tuyệt mệnh",
	"ngu-quy": "Ngũ quỷ",
	"luc-sat": "Lục sát",
	"hoa-hai": "Họa hại"
};
var STAR_USE = {
	"sinh-khi": "Hướng vượng nhất — cửa, bàn làm, giường nếu kê được.",
	"thien-y": "Hợp nghỉ ngơi, sức khỏe, bếp theo dân gian.",
	"dien-nien": "Hợp quan hệ lâu dài, phòng khách, giường vợ chồng.",
	"phuc-vi": "Hướng ổn, hợp chỗ ngồi hàng ngày.",
	"hoa-hai": "Nên tránh cửa chính và bếp.",
	"luc-sat": "Nên tránh giường và bàn làm việc.",
	"ngu-quy": "Hướng dân gian coi là dễ hao.",
	"tuyet-menh": "Hướng kỵ nhất trong tám hướng."
};
var GOOD = /* @__PURE__ */ new Set([
	"sinh-khi",
	"thien-y",
	"dien-nien",
	"phuc-vi"
]);
/** Eight directions in star order: sinh khí, thiên y, diên niên, phục vị, tuyệt mệnh, ngũ quỷ, lục sát, họa hại. */
var TABLE = {
	1: [
		"dong-nam",
		"dong",
		"nam",
		"bac",
		"tay-nam",
		"dong-bac",
		"tay-bac",
		"tay"
	],
	2: [
		"dong-bac",
		"tay",
		"tay-bac",
		"tay-nam",
		"dong-nam",
		"dong",
		"nam",
		"bac"
	],
	3: [
		"nam",
		"bac",
		"dong-nam",
		"dong",
		"tay",
		"tay-bac",
		"dong-bac",
		"tay-nam"
	],
	4: [
		"bac",
		"nam",
		"dong",
		"dong-nam",
		"tay-bac",
		"tay",
		"tay-nam",
		"dong-bac"
	],
	6: [
		"tay",
		"dong-bac",
		"tay-nam",
		"tay-bac",
		"bac",
		"nam",
		"dong",
		"dong-nam"
	],
	7: [
		"tay-bac",
		"tay-nam",
		"dong-bac",
		"tay",
		"nam",
		"bac",
		"dong-nam",
		"dong"
	],
	8: [
		"tay-nam",
		"tay-bac",
		"tay",
		"dong-bac",
		"dong",
		"dong-nam",
		"bac",
		"nam"
	],
	9: [
		"dong",
		"dong-nam",
		"bac",
		"nam",
		"dong-bac",
		"tay-nam",
		"tay",
		"tay-bac"
	]
};
var STAR_ORDER = [
	"sinh-khi",
	"thien-y",
	"dien-nien",
	"phuc-vi",
	"tuyet-menh",
	"ngu-quy",
	"luc-sat",
	"hoa-hai"
];
function digitalRoot(year) {
	let n = Math.abs(year);
	while (n > 9) n = String(n).split("").reduce((s, c) => s + Number(c), 0);
	return n;
}
function quaNumber(lunarYear, gender) {
	const root = digitalRoot(lunarYear);
	const modern = lunarYear >= 2e3;
	let n;
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
function readBatTrach(lunarYear, gender) {
	if (!Number.isInteger(lunarYear) || lunarYear < 1900 || lunarYear > 2100) throw new Error("Chọn năm âm lịch từ 1900 đến 2100.");
	const q = quaNumber(lunarYear, gender);
	const meta = QUA.find((item) => item.id === q);
	if (!meta) throw new Error("Không lập được cung phi.");
	const dirs = TABLE[q];
	if (!dirs) throw new Error("Không lập được cung phi.");
	const cc = yearCanChi(lunarYear);
	const directions = dirs.map((id, i) => {
		const star = STAR_ORDER[i] ?? "phuc-vi";
		return {
			id,
			label: DIR_LABEL[id],
			star,
			starLabel: STAR_LABEL[star],
			good: GOOD.has(star),
			use: STAR_USE[star]
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
		directions
	};
}
var COMPASS_GRID = [
	"tay-bac",
	"bac",
	"dong-bac",
	"tay",
	"center",
	"dong",
	"tay-nam",
	"nam",
	"dong-nam"
];
function BatTrachView({ yearHint }) {
	const [year, setYear] = (0, import_react.useState)(yearHint);
	const [gender, setGender] = (0, import_react.useState)("nam");
	const [active, setActive] = (0, import_react.useState)(null);
	let reading = null;
	let error = "";
	try {
		reading = readBatTrach(year, gender);
	} catch (err) {
		error = err instanceof Error ? err.message : "Không tính được.";
	}
	const byId = new Map(reading?.directions.map((dir) => [dir.id, dir]));
	const selected = reading?.directions.find((dir) => dir.id === active) ?? reading?.directions.find((dir) => dir.star === "sinh-khi");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "max-w-2xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl",
					children: "Bát trạch"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted",
					children: "Cung phi theo số quẻ phổ biến, lấy năm âm lịch. Đông tứ mệnh hợp bốn hướng đông, tây tứ mệnh hợp bốn hướng tây. Đây là cách xếp dân gian, không phải khảo sát nhà."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-wrap items-end gap-3",
				onSubmit: (event) => {
					event.preventDefault();
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex flex-col gap-1 text-sm",
						children: ["Năm âm lịch", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "number",
							min: 1900,
							max: 2100,
							value: year,
							onChange: (event) => setYear(Number(event.target.value)),
							className: "h-11 w-32 rounded-md border border-line bg-card px-3 tabular-nums"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-11 overflow-hidden rounded-md border border-line",
						children: [["nam", "Nam"], ["nu", "Nữ"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("min-w-14 px-4", gender === id ? "bg-accent text-on-accent" : "bg-card"),
							onClick: () => setGender(id),
							children: label
						}, id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						variant: "quiet",
						onClick: () => {
							setYear(yearHint);
						},
						children: "Năm nay"
					})
				]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm",
				children: error
			}) : null,
			reading ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-muted",
						children: [
							reading.genderLabel,
							" · ",
							reading.canChi,
							" · tuổi ",
							reading.animal
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-display text-3xl",
						children: [
							"Cung ",
							reading.quaName,
							" · ",
							reading.group
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid grid-cols-3 gap-1",
						children: COMPASS_GRID.map((cell) => {
							if (cell === "center") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex aspect-square items-center justify-center rounded-md bg-ink text-center text-on-accent",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-xl",
									children: reading.quaName
								})
							}, "center");
							const dir = byId.get(cell);
							if (!dir) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, cell);
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setActive(cell),
								className: cn("flex aspect-square flex-col items-center justify-center rounded-md border px-1 text-center", dir.good ? "border-accent bg-accent-soft" : "border-line bg-card", selected?.id === cell ? "ring-1 ring-accent" : ""),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-medium",
									children: dir.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs text-muted",
									children: dir.starLabel
								})]
							}, cell);
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-xs text-muted",
						children: "Ô màu là bốn hướng tốt. Bắc nằm phía trên."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DirectionNote, {
					dir: selected,
					group: reading.group
				})]
			}) : null
		]
	});
}
function DirectionNote({ dir, group }) {
	if (!dir) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "max-w-xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-sm text-muted",
				children: group
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
				className: "font-display text-3xl",
				children: [
					dir.label,
					" · ",
					dir.starLabel
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm leading-relaxed",
				children: dir.use
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm text-muted",
				children: "Hướng tốt ưu tiên cho giường, bàn làm và cửa nếu còn lựa chọn. Hướng kỵ không có nghĩa là cấm quay mặt — chỉ là bảng dân gian khuyên tránh đặt cửa chính và bếp vào đó."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
				className: "mt-6 grid gap-2 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md bg-accent-soft px-3 py-2 text-sm",
					children: "Sinh khí, thiên y, diên niên, phục vị: dùng được."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "rounded-md border border-line px-3 py-2 text-sm",
					children: "Họa hại, lục sát, ngũ quỷ, tuyệt mệnh: nên tránh."
				})]
			})
		]
	});
}
var TABS = [
	{
		id: "today",
		label: "Hôm nay",
		icon: Sun
	},
	{
		id: "calendar",
		label: "Lịch",
		icon: CalendarDays
	},
	{
		id: "tuvi",
		label: "Tử vi",
		icon: Orbit
	},
	{
		id: "tarot",
		label: "Tarot",
		icon: Layers
	},
	{
		id: "iching",
		label: "Kinh Dịch",
		icon: Hexagon
	},
	{
		id: "bat",
		label: "Bát trạch",
		icon: Compass
	}
];
function Studio() {
	const [tab, setTab] = (0, import_react.useState)("today");
	const [today, setToday] = (0, import_react.useState)(null);
	const [dossier, setDossier] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		const now = /* @__PURE__ */ new Date();
		const next = {
			year: now.getFullYear(),
			month: now.getMonth() + 1,
			day: now.getDate(),
			hour: now.getHours()
		};
		setToday(next);
		setDossier(describeDay(next.year, next.month, next.day));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "border-b border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-5xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-muted",
						children: "Sổ tay lịch và huyền học"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display text-4xl leading-none",
						children: "Huyền Đài"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "max-w-xs text-sm text-muted sm:text-right",
						children: "Tính trên máy bạn. Không tài khoản, không gửi ngày sinh đi đâu."
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Công cụ",
					className: "mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3",
					children: TABS.map((item) => {
						const Icon = item.icon;
						const on = tab === item.id;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							"aria-current": on ? "page" : void 0,
							onClick: () => setTab(item.id),
							className: cn("inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm", on ? "bg-accent text-on-accent" : "text-muted hover:bg-accent-soft hover:text-ink"),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
								className: "size-4",
								"aria-hidden": true
							}), item.label]
						}, item.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-5xl px-4 py-8",
				children: [
					tab === "today" ? dossier && today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DayDossier, {
						info: dossier,
						clockHour: today.hour
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Đang lấy ngày trên máy bạn."
					}) : null,
					tab === "calendar" && today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalendarView, { today }) : null,
					tab === "calendar" && !today ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted",
						children: "Đang mở lịch."
					}) : null,
					tab === "tuvi" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TuViView, {}) : null,
					tab === "tarot" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TarotView, {}) : null,
					tab === "iching" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IChingView, {}) : null,
					tab === "bat" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BatTrachView, { yearHint: dossier?.lunar.year ?? today?.year ?? 2026 }) : null
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "mx-auto max-w-5xl px-4 pb-10 text-xs leading-relaxed text-muted",
				children: "Tham khảo dân gian và giải trí. Không thay tư vấn y tế, pháp lý, tài chính hay một thầy xem đủ phái. Lịch âm theo múi giờ Việt Nam (UTC+7). Tiết khí lấy tại 00:00 giờ đó. Lá số chỉ gồm 14 chính tinh và vài phụ tinh then chốt."
			})
		]
	});
}
var SplitComponent = Studio;
//#endregion
export { SplitComponent as component };
