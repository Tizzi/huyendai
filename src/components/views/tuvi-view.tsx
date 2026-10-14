import { useEffect, useState } from "react";
import { CAN, CHI, HOUR_LABELS } from "@/lib/almanac/calendar";
import { buildChart, chartSummary, type Gender, type TuViChart } from "@/lib/tuvi/chart";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type Saved = {
  id: string;
  name: string;
  gender: Gender;
  date: string;
  hour: number;
};

const STORAGE = "huyen-dai-la-so";

const GRID: { chi: number; col: number; row: number }[] = [
  { chi: 5, col: 1, row: 1 },
  { chi: 6, col: 2, row: 1 },
  { chi: 7, col: 3, row: 1 },
  { chi: 8, col: 4, row: 1 },
  { chi: 4, col: 1, row: 2 },
  { chi: 9, col: 4, row: 2 },
  { chi: 3, col: 1, row: 3 },
  { chi: 10, col: 4, row: 3 },
  { chi: 2, col: 1, row: 4 },
  { chi: 1, col: 2, row: 4 },
  { chi: 0, col: 3, row: 4 },
  { chi: 11, col: 4, row: 4 },
];

export function TuViView() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState<Gender>("nam");
  const [date, setDate] = useState("1995-08-20");
  const [hour, setHour] = useState(6);
  const [chart, setChart] = useState<TuViChart | null>(null);
  const [error, setError] = useState("");
  const [saved, setSaved] = useState<Saved[]>([]);
  const [focus, setFocus] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE);
      if (raw) {
        const parsed = JSON.parse(raw) as unknown;
        if (Array.isArray(parsed)) setSaved(parsed as Saved[]);
      }
    } catch {
      setSaved([]);
    }
  }, []);

  function persist(next: Saved[]) {
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
        hour,
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
    const entry: Saved = {
      id: `${date}-${hour}-${gender}`,
      name: chart.name,
      gender,
      date,
      hour,
    };
    const next = [entry, ...saved.filter((item) => item.id !== entry.id)].slice(0, 8);
    persist(next);
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

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl">Lá số giản lược</h2>
        <p className="mt-2 text-sm text-muted">
          Nhập ngày dương lịch. Giờ là mười hai địa chi. Lá số an 14 chính tinh, Lộc Tồn, Kình Đà, Xương Khúc và đại hạn.
          Tháng nhuận được ghi nhận, một số trường phái tính khác.
        </p>
      </header>

      <form
        className="grid gap-3 rounded-xl border border-line bg-card p-4 md:grid-cols-[1.2fr_auto_auto_1fr_auto] md:items-end"
        onSubmit={(event) => {
          event.preventDefault();
          lap();
        }}
      >
        <label className="flex flex-col gap-1 text-sm">
          Tên
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Không bắt buộc"
            className="h-11 rounded-md border border-line bg-paper px-3"
          />
        </label>
        <fieldset className="flex flex-col gap-1 text-sm">
          <legend>Giới</legend>
          <div className="flex h-11 overflow-hidden rounded-md border border-line">
            {(
              [
                ["nam", "Nam"],
                ["nu", "Nữ"],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={cn("min-w-14 px-3", gender === id ? "bg-accent text-on-accent" : "bg-paper")}
                onClick={() => setGender(id)}
              >
                {label}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="flex flex-col gap-1 text-sm">
          Ngày sinh
          <input
            type="date"
            required
            value={date}
            min="1900-01-01"
            max="2100-12-31"
            onChange={(event) => setDate(event.target.value)}
            className="h-11 rounded-md border border-line bg-paper px-3"
          />
        </label>
        <label className="flex flex-col gap-1 text-sm">
          Giờ sinh
          <select
            value={hour}
            onChange={(event) => setHour(Number(event.target.value))}
            className="h-11 rounded-md border border-line bg-paper px-3"
          >
            {HOUR_LABELS.map((label, index) => (
              <option key={label} value={index}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <Button type="submit">Lập lá số</Button>
      </form>
      {error ? <p className="text-sm text-accent">{error}</p> : null}

      {saved.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {saved.map((item) => (
            <button
              key={item.id}
              type="button"
              className="rounded-full border border-line bg-card px-3 py-2 text-sm"
              onClick={() => {
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
                    hour: item.hour,
                  });
                  setChart(next);
                  setFocus(next.menhChi);
                  setError("");
                } catch (err) {
                  setError(err instanceof Error ? err.message : "Không mở được lá số đã giữ.");
                }
              }}
            >
              {item.name} · {item.date}
            </button>
          ))}
        </div>
      ) : null}

      {chart ? (
        <section className="flex flex-col gap-6">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-sm text-muted">
                {chart.amDuong} · đại hạn {chart.daiHanWay.toLowerCase()} từ {chart.cucSo} tuổi
              </p>
              <h3 className="font-display text-2xl">
                {chart.name} · {chart.banMenh}
              </h3>
              <p className="text-sm">
                {chart.lunarLabel} · giờ {chart.hourLabel}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="quiet" onClick={keep}>
                Giữ trên máy
              </Button>
              <Button variant="quiet" onClick={copy}>
                {copied ? "Đã chép" : "Chép tóm tắt"}
              </Button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="grid min-w-xl grid-cols-4 grid-rows-4 gap-1">
              {GRID.map((cell) => {
                const palace = chart.palaces[cell.chi];
                if (!palace) return null;
                const active = focus === cell.chi;
                return (
                  <button
                    key={cell.chi}
                    type="button"
                    style={{ gridColumn: cell.col, gridRow: cell.row }}
                    onClick={() => setFocus(cell.chi)}
                    className={cn(
                      "flex min-h-28 flex-col gap-1 rounded-md border p-2 text-left",
                      active ? "border-accent bg-accent-soft" : "border-line bg-card",
                      cell.chi === chart.menhChi ? "ring-1 ring-accent" : "",
                    )}
                  >
                    <span className="flex items-baseline justify-between gap-2 text-xs text-muted">
                      <span>
                      {CAN[palace.can]} {CHI[cell.chi]}
                      </span>
                      <span className="tabular-nums">{palace.daiHan}</span>
                    </span>
                    <span className="text-sm font-medium">{palace.name}</span>
                    <span className="text-xs leading-snug">
                      {palace.mainStars.length
                        ? palace.mainStars.map((star) => star.name).join(" · ")
                        : "Vô chính diệu"}
                    </span>
                    {cell.chi === chart.thanChi ? <span className="mt-auto text-xs text-muted">Thân</span> : null}
                  </button>
                );
              })}
              <div
                className="flex flex-col justify-center gap-1 rounded-md bg-paper px-4"
                style={{ gridColumn: "2 / span 2", gridRow: "2 / span 2" }}
              >
                <p className="font-display text-2xl">{chart.cuc}</p>
                <p className="text-sm">
                  Tứ trụ {chart.pillars.year} · {chart.pillars.month} · {chart.pillars.day} · {chart.pillars.hour}
                </p>
                <p className="text-sm text-muted">
                  Chủ mệnh {chart.menhChu} · Chủ thân {chart.thanChu} · {chart.animal}
                </p>
                <p className="text-sm">Mệnh tại {CHI[chart.menhChi]} · Thân cư {chart.thanPalace}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
            <p className="text-sm leading-relaxed">{chart.reading}</p>
            {focusPalace ? (
              <div className="rounded-lg border border-line bg-card p-4">
                <h3 className="font-display text-xl">
                  {focusPalace.name} · {CHI[focusPalace.chi]}
                </h3>
                <p className="text-sm text-muted">Đại hạn {focusPalace.daiHan} tuổi</p>
                {focusPalace.stars.length === 0 ? (
                  <p className="mt-3 text-sm">Cung này không có sao trong bộ giản lược.</p>
                ) : (
                  <ul className="mt-3 flex flex-col gap-3">
                    {focusPalace.stars.map((star) => (
                      <li key={star.name}>
                        <p className="text-sm font-medium">
                          {star.name}
                          <span className="ml-2 font-normal text-muted">{star.kind === "chinh" ? "chính tinh" : "phụ tinh"}</span>
                        </p>
                        <p className="text-sm text-muted">{star.note}</p>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : null}
          </div>
          {chart.leap ? (
            <p className="text-sm text-muted">Sinh nhằm tháng nhuận. Lá số lấy số tháng đó.</p>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}
