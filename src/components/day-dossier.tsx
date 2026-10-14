import {
  CHI,
  WEEKDAYS,
  canChiLabel,
  hourIndexFromClock,
  lunarDayLabel,
  lunarMonthLabel,
  type DayInfo,
} from "@/lib/almanac/calendar";

export function DayDossier({
  info,
  clockHour,
  compact = false,
}: {
  info: DayInfo;
  clockHour?: number;
  compact?: boolean;
}) {
  const active = clockHour === undefined ? -1 : hourIndexFromClock(clockHour);
  const { lunar } = info;
  return (
    <article className="flex flex-col gap-8">
      <header className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
        <div>
          <p className="text-sm text-muted">
            {WEEKDAYS[info.weekday]} · {info.solar.day}/{info.solar.month}/{info.solar.year}
          </p>
          <h2 className={compact ? "mt-2 font-display text-3xl leading-tight" : "mt-2 font-display text-4xl leading-tight text-ink md:text-5xl"}>
            {lunarDayLabel(lunar.day)}
          </h2>
          <p className="mt-2 text-lg text-ink">
            {lunarMonthLabel(lunar.month, lunar.leap)} · năm {canChiLabel(info.year.can, info.year.chi)}
          </p>
        </div>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          <Fact k="Năm" v={canChiLabel(info.year.can, info.year.chi)} />
          <Fact k="Tháng" v={canChiLabel(info.month.can, info.month.chi)} />
          <Fact k="Ngày" v={canChiLabel(info.day.can, info.day.chi)} />
          <Fact k="Nạp âm" v={info.napAm.name} />
          <Fact k="Tiết khí" v={info.term} />
          <Fact k="Trực" v={info.truc.name} />
        </dl>
      </header>

      <p className="max-w-2xl text-sm text-muted">
        {info.hoangDao ? "Ngày hoàng đạo" : "Ngày hắc đạo"} theo chi ngày và tháng âm. {info.truc.note}
      </p>

      <section>
        <h3 className="font-display text-xl text-ink">Mười hai giờ</h3>
        <p className="mt-1 text-sm text-muted">Ô màu là giờ hoàng đạo. Giờ đang chạy được gạch chân nếu là hôm nay.</p>
        <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 lg:grid-cols-6">
          {info.hours.map((hour) => {
            const on = hour.chi === active;
            return (
              <div
                key={hour.chi}
                className={
                  hour.hoang
                    ? "rounded-md bg-accent-soft px-2 py-2 text-ink"
                    : "rounded-md border border-line bg-card px-2 py-2 text-ink"
                }
              >
                <p
                  className={
                    on
                      ? "text-sm font-medium underline decoration-accent decoration-2 underline-offset-4"
                      : "text-sm font-medium"
                  }
                >
                  {CHI[hour.chi]}
                </p>
                <p className="text-xs text-muted tabular-nums">{hour.window}</p>
                <p className="text-xs text-muted">{hour.hoang ? "Hoàng đạo" : "Hắc đạo"}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl">Việc dân gian nghiêng về</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {info.should.map((item) => (
              <li key={item} className="border-l-2 border-accent pl-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-display text-xl">Nên dè</h3>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {info.avoid.map((item) => (
              <li key={item} className="border-l-2 border-line pl-3 text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-t border-line pt-2">
      <dt className="text-xs text-muted">{k}</dt>
      <dd className="font-medium">{v}</dd>
    </div>
  );
}
