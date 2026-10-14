import { useState } from "react";
import { COMPASS_GRID, readBatTrach, type BatTrach, type DirectionReading, type Gender } from "@/lib/fengshui/bat-trach";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function BatTrachView({ yearHint }: { yearHint: number }) {
  const [year, setYear] = useState(yearHint);
  const [gender, setGender] = useState<Gender>("nam");
  const [active, setActive] = useState<string | null>(null);

  let reading: BatTrach | null = null;
  let error = "";
  try {
    reading = readBatTrach(year, gender);
  } catch (err) {
    error = err instanceof Error ? err.message : "Không tính được.";
  }

  const byId = new Map(reading?.directions.map((dir) => [dir.id, dir]));
  const selected = reading?.directions.find((dir) => dir.id === active) ?? reading?.directions.find((dir) => dir.star === "sinh-khi");

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl">Bát trạch</h2>
        <p className="mt-2 text-sm text-muted">
          Cung phi theo số quẻ phổ biến, lấy năm âm lịch. Đông tứ mệnh hợp bốn hướng đông, tây tứ mệnh hợp bốn hướng tây.
          Đây là cách xếp dân gian, không phải khảo sát nhà.
        </p>
      </header>

      <form
        className="flex flex-wrap items-end gap-3"
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label className="flex flex-col gap-1 text-sm">
          Năm âm lịch
          <input
            type="number"
            min={1900}
            max={2100}
            value={year}
            onChange={(event) => setYear(Number(event.target.value))}
            className="h-11 w-32 rounded-md border border-line bg-card px-3 tabular-nums"
          />
        </label>
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
              className={cn("min-w-14 px-4", gender === id ? "bg-accent text-on-accent" : "bg-card")}
              onClick={() => setGender(id)}
            >
              {label}
            </button>
          ))}
        </div>
        <Button
          variant="quiet"
          onClick={() => {
            setYear(yearHint);
          }}
        >
          Năm nay
        </Button>
      </form>
      {error ? <p className="text-sm">{error}</p> : null}

      {reading ? (
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
          <div>
            <p className="text-sm text-muted">
              {reading.genderLabel} · {reading.canChi} · tuổi {reading.animal}
            </p>
            <h3 className="font-display text-3xl">
              Cung {reading.quaName} · {reading.group}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-1">
              {COMPASS_GRID.map((cell) => {
                if (cell === "center") {
                  return (
                    <div key="center" className="flex aspect-square items-center justify-center rounded-md bg-ink text-center text-on-accent">
                      <span className="font-display text-xl">{reading.quaName}</span>
                    </div>
                  );
                }
                const dir = byId.get(cell);
                if (!dir) return <div key={cell} />;
                return (
                  <button
                    key={cell}
                    type="button"
                    onClick={() => setActive(cell)}
                    className={cn(
                      "flex aspect-square flex-col items-center justify-center rounded-md border px-1 text-center",
                      dir.good ? "border-accent bg-accent-soft" : "border-line bg-card",
                      selected?.id === cell ? "ring-1 ring-accent" : "",
                    )}
                  >
                    <span className="text-sm font-medium">{dir.label}</span>
                    <span className="text-xs text-muted">{dir.starLabel}</span>
                  </button>
                );
              })}
            </div>
            <p className="mt-3 text-xs text-muted">Ô màu là bốn hướng tốt. Bắc nằm phía trên.</p>
          </div>
          <DirectionNote dir={selected} group={reading.group} />
        </div>
      ) : null}
    </div>
  );
}

function DirectionNote({ dir, group }: { dir?: DirectionReading; group: string }) {
  if (!dir) return null;
  return (
    <article className="max-w-xl">
      <p className="text-sm text-muted">{group}</p>
      <h3 className="font-display text-3xl">
        {dir.label} · {dir.starLabel}
      </h3>
      <p className="mt-3 text-sm leading-relaxed">{dir.use}</p>
      <p className="mt-4 text-sm text-muted">
        Hướng tốt ưu tiên cho giường, bàn làm và cửa nếu còn lựa chọn. Hướng kỵ không có nghĩa là cấm quay mặt —
        chỉ là bảng dân gian khuyên tránh đặt cửa chính và bếp vào đó.
      </p>
      <ul className="mt-6 grid gap-2 sm:grid-cols-2">
        <li className="rounded-md bg-accent-soft px-3 py-2 text-sm">Sinh khí, thiên y, diên niên, phục vị: dùng được.</li>
        <li className="rounded-md border border-line px-3 py-2 text-sm">Họa hại, lục sát, ngũ quỷ, tuyệt mệnh: nên tránh.</li>
      </ul>
    </article>
  );
}
