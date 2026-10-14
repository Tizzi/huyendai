import { useState } from "react";
import { drawSpread, type DrawnCard } from "@/lib/tarot/deck";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function TarotView() {
  const [question, setQuestion] = useState("");
  const [count, setCount] = useState<1 | 3>(3);
  const [cards, setCards] = useState<DrawnCard[] | null>(null);
  const [asked, setAsked] = useState("");

  function draw() {
    setAsked(question.trim());
    setCards(drawSpread(count));
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl">Tarot</h2>
        <p className="mt-2 text-sm text-muted">
          Bộ 22 lá ẩn chính. Rút một lá hoặc ba lá: chuyện cũ, hiện tại, hướng tới. Bài úp là nghĩa nghịch.
          Câu hỏi chỉ ở lại trên máy bạn.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto_auto] md:items-end">
        <label className="flex flex-col gap-1 text-sm">
          Câu hỏi
          <textarea
            value={question}
            maxLength={400}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Ví dụ: việc này có nên ký trong tháng không?"
            className="min-h-24 rounded-md border border-line bg-card px-3 py-2"
          />
        </label>
        <div className="flex h-11 overflow-hidden rounded-md border border-line">
          {(
            [
              [1, "1 lá"],
              [3, "3 lá"],
            ] as const
          ).map(([n, label]) => (
            <button
              key={n}
              type="button"
              className={cn("px-4", count === n ? "bg-accent text-on-accent" : "bg-card")}
              onClick={() => setCount(n)}
            >
              {label}
            </button>
          ))}
        </div>
        <Button onClick={draw}>Rút bài</Button>
      </div>

      {cards ? (
        <section className="flex flex-col gap-6">
          {asked ? <p className="text-sm text-muted">Câu hỏi: {asked}</p> : null}
          <ul className={cn("grid gap-4", cards.length === 3 ? "sm:grid-cols-3" : "sm:max-w-xs")}>
            {cards.map((card) => (
              <li key={card.n} className="flex flex-col gap-3">
                <p className="text-sm text-muted">{card.position}</p>
                <article className="flex min-h-64 flex-col justify-between rounded-xl border border-line bg-card p-4">
                  <div>
                    <p className="font-display text-4xl tabular-nums">{String(card.n).padStart(2, "0")}</p>
                    <div className="mt-6 h-px w-10 bg-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl">{card.name}</h3>
                    <p className="text-sm text-muted">
                      {card.keyword}
                      {card.reversed ? " · úp" : " · ngửa"}
                    </p>
                  </div>
                </article>
                <p className="text-sm">
                  <span className="font-medium">{card.reversed ? "Nghịch" : "Thuận"}. </span>
                  {card.reversed ? card.down : card.up}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <p className="text-sm text-muted">Bài chưa rút. Viết câu hỏi nếu muốn, rồi bấm Rút bài.</p>
      )}
    </div>
  );
}
