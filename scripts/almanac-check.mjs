import { solarToLunar, yearCanChi, canChiLabel, lunarToSolar, describeDay } from "../src/lib/almanac/calendar.ts";
import { buildChart } from "../src/lib/tuvi/chart.ts";
import { KING_WEN, hexagramByLines } from "../src/lib/iching/data.ts";
import { quaNumber } from "../src/lib/fengshui/bat-trach.ts";

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

const tet2024 = solarToLunar(10, 2, 2024);
assert(tet2024.day === 1 && tet2024.month === 1 && tet2024.year === 2024 && !tet2024.leap, JSON.stringify(tet2024));
assert(canChiLabel(yearCanChi(2024).can, yearCanChi(2024).chi) === "Giáp Thìn", "2024 can chi");

const tet2025 = solarToLunar(29, 1, 2025);
assert(tet2025.day === 1 && tet2025.month === 1 && tet2025.year === 2025, JSON.stringify(tet2025));
assert(canChiLabel(yearCanChi(2025).can, yearCanChi(2025).chi) === "Ất Tỵ", "2025");

const tet2026 = solarToLunar(17, 2, 2026);
assert(tet2026.day === 1 && tet2026.month === 1 && tet2026.year === 2026, "tet 2026 " + JSON.stringify(tet2026));
assert(canChiLabel(yearCanChi(2026).can, yearCanChi(2026).chi) === "Bính Ngọ", "2026");

const back = lunarToSolar(1, 1, 2024, false);
assert(back && back.day === 10 && back.month === 2 && back.year === 2024, JSON.stringify(back));

const today = describeDay(2026, 10, 14);
assert(today.hours.filter((h) => h.hoang).length === 6, "6 hoang dao hours");
assert(today.lunar.day >= 1 && today.lunar.month >= 1, "today lunar");

const chart = buildChart({ name: "An", gender: "nam", year: 1984, month: 6, day: 15, hour: 0 });
assert(chart.cucSo >= 2 && chart.cucSo <= 6, chart.cuc);
assert(chart.palaces.length === 12, "12 palaces");
const mains = chart.palaces.reduce((n, p) => n + p.mainStars.length, 0);
assert(mains === 14, "14 chinh tinh " + mains);

assert(KING_WEN.length === 64, "king wen " + KING_WEN.length);
assert(hexagramByLines([9, 9, 9, 9, 9, 9]).n === 1, "can");
assert(hexagramByLines([6, 6, 6, 6, 6, 6]).n === 2, "khon");
assert(new Set(KING_WEN).size === 64, "unique");

assert(quaNumber(1984, "nam") === 6, "nam 1984 can " + quaNumber(1984, "nam"));
assert(quaNumber(1984, "nu") === 9, "nu 1984 ly " + quaNumber(1984, "nu"));

console.log("almanac ok", {
  tet2026,
  today: {
    lunar: today.lunar,
    year: canChiLabel(today.year.can, today.year.chi),
    day: canChiLabel(today.day.can, today.day.chi),
    term: today.term,
    truc: today.truc.name,
    hoang: today.hoangDao,
  },
  chart: { cuc: chart.cuc, menh: chart.menhChi, ban: chart.banMenh, pillars: chart.pillars },
});
