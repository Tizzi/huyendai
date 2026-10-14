import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  describeDay,
  daysInMonth,
  weekdayIndex,
  type DayInfo,
} from "@/lib/almanac/calendar";
import { DayDossier } from "@/components/day-dossier";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

const HEAD = ["T2", "T3", "T4", "T5", "T6", "T7", "CN"];

export function CalendarView({ today }: { today: { year: number; month: number; day: number } }) {
  const [cursor, setCursor] = useState({ year: today.year, month: today.month });
  const [picked, setPicked] = useState<DayInfo>(() => describeDay(today.year, today.month, today.day));

  const cells = useMemo(() => buildCells(cursor.year, cursor.month), [cursor.year, cursor.month]);

  function shift(delta: number) {
    const date = new Date(Date.UTC(cursor.year, cursor.month - 1 + delta, 1));
    setCursor({ year: date.getUTCFullYear(), month: date.getUTCMonth() + 1 });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
      <section>
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-display text-3xl">
            Tháng {cursor.month}{" "}
            <span className="text-muted tabular-nums">{cursor.year}</span>
          </h2>
          <div className="flex gap-2">
            <Button variant="quiet" className="px-3" aria-label="Tháng trước" onClick={() => shift(-1)}>
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="quiet" className="px-3" aria-label="Tháng sau" onClick={() => shift(1)}>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted">Số nhỏ là ngày âm. Chấm tròn là ngày hoàng đạo. Bấm một ô để xem trực và giờ.</p>
        <div className="mt-4 grid grid-cols-7 gap-1">
          {HEAD.map((label) => (
            <div key={label} className="px-1 py-2 text-center text-xs text-muted">
              {label}
            </div>
          ))}
          {cells.map((cell, index) =>
            cell ? (
              <button
                key={cell.solar.day}
                type="button"
                onClick={() => setPicked(cell)}
                className={cn(
                  "flex min-h-16 flex-col rounded-md border px-1.5 py-1 text-left",
                  picked.solar.day === cell.solar.day &&
                    picked.solar.month === cell.solar.month &&
                    picked.solar.year === cell.solar.year
                    ? "border-accent bg-accent-soft"
                    : "border-transparent bg-card hover:border-line",
                  today.year === cell.solar.year && today.month === cell.solar.month && today.day === cell.solar.day
                    ? "ring-1 ring-accent"
                    : "",
                )}
              >
                <span className="text-sm font-medium tabular-nums">{cell.solar.day}</span>
                <span className="text-xs text-muted tabular-nums">
                  {cell.lunar.day}
                  {cell.lunar.day === 1 ? `/${cell.lunar.month}${cell.lunar.leap ? "n" : ""}` : ""}
                </span>
                {cell.hoangDao ? <span className="mt-auto size-1.5 rounded-full bg-accent" aria-hidden /> : null}
              </button>
            ) : (
              <div key={`empty-${index}`} />
            ),
          )}
        </div>
      </section>
      <section className="rounded-xl border border-line bg-card p-4 md:p-5">
        <DayDossier
          compact
          info={picked}
          clockHour={sameDay(picked, today) ? new Date().getHours() : undefined}
        />
      </section>
    </div>
  );
}

function sameDay(info: DayInfo, today: { year: number; month: number; day: number }) {
  return info.solar.year === today.year && info.solar.month === today.month && info.solar.day === today.day;
}

function buildCells(year: number, month: number): (DayInfo | null)[] {
  const lead = (weekdayIndex(year, month, 1) + 6) % 7;
  const count = daysInMonth(year, month);
  const cells: (DayInfo | null)[] = Array.from({ length: lead }, () => null);
  for (let day = 1; day <= count; day++) cells.push(describeDay(year, month, day));
  return cells;
}

