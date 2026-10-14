import { useEffect, useState } from "react";
import { CalendarDays, Compass, Hexagon, Layers, Orbit, Sun } from "lucide-react";
import { describeDay, type DayInfo } from "@/lib/almanac/calendar";
import { cn } from "@/lib/cn";
import { DayDossier } from "@/components/day-dossier";
import { CalendarView } from "@/components/views/calendar-view";
import { TuViView } from "@/components/views/tuvi-view";
import { TarotView } from "@/components/views/tarot-view";
import { IChingView } from "@/components/views/iching-view";
import { BatTrachView } from "@/components/views/bat-trach-view";

const TABS = [
  { id: "today", label: "Hôm nay", icon: Sun },
  { id: "calendar", label: "Lịch", icon: CalendarDays },
  { id: "tuvi", label: "Tử vi", icon: Orbit },
  { id: "tarot", label: "Tarot", icon: Layers },
  { id: "iching", label: "Kinh Dịch", icon: Hexagon },
  { id: "bat", label: "Bát trạch", icon: Compass },
] as const;

type TabId = (typeof TABS)[number]["id"];

type Today = { year: number; month: number; day: number; hour: number };

export function Studio() {
  const [tab, setTab] = useState<TabId>("today");
  const [today, setToday] = useState<Today | null>(null);
  const [dossier, setDossier] = useState<DayInfo | null>(null);

  useEffect(() => {
    const now = new Date();
    const next = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate(),
      hour: now.getHours(),
    };
    setToday(next);
    setDossier(describeDay(next.year, next.month, next.day));
  }, []);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs tracking-wide text-muted">Sổ tay lịch và huyền học</p>
            <h1 className="font-display text-4xl leading-none">Huyền Đài</h1>
          </div>
          <p className="max-w-xs text-sm text-muted sm:text-right">
            Tính trên máy bạn. Không tài khoản, không gửi ngày sinh đi đâu.
          </p>
        </div>
        <nav aria-label="Công cụ" className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-4 pb-3">
          {TABS.map((item) => {
            const Icon = item.icon;
            const on = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                aria-current={on ? "page" : undefined}
                onClick={() => setTab(item.id)}
                className={cn(
                  "inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full px-3 text-sm",
                  on ? "bg-accent text-on-accent" : "text-muted hover:bg-accent-soft hover:text-ink",
                )}
              >
                <Icon className="size-4" aria-hidden />
                {item.label}
              </button>
            );
          })}
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-4 py-8">
        {tab === "today" ? (
          dossier && today ? (
            <DayDossier info={dossier} clockHour={today.hour} />
          ) : (
            <p className="text-sm text-muted">Đang lấy ngày trên máy bạn.</p>
          )
        ) : null}
        {tab === "calendar" && today ? <CalendarView today={today} /> : null}
        {tab === "calendar" && !today ? <p className="text-sm text-muted">Đang mở lịch.</p> : null}
        {tab === "tuvi" ? <TuViView /> : null}
        {tab === "tarot" ? <TarotView /> : null}
        {tab === "iching" ? <IChingView /> : null}
        {tab === "bat" ? <BatTrachView yearHint={dossier?.lunar.year ?? today?.year ?? 2026} /> : null}
      </main>

      <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs leading-relaxed text-muted">
        Tham khảo dân gian và giải trí. Không thay tư vấn y tế, pháp lý, tài chính hay một thầy xem đủ phái.
        Lịch âm theo múi giờ Việt Nam (UTC+7). Tiết khí lấy tại 00:00 giờ đó. Lá số chỉ gồm 14 chính tinh và vài phụ tinh then chốt.
      </footer>
    </div>
  );
}
