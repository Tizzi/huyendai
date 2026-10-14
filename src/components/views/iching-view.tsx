import { useState } from "react";
import { castHexagram, type CastResult, type Yao } from "@/lib/iching/cast";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export function IChingView() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<CastResult | null>(null);
  const [asked, setAsked] = useState("");

  function cast() {
    setAsked(question.trim());
    setResult(castHexagram());
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="max-w-2xl">
        <h2 className="font-display text-3xl">Kinh Dịch</h2>
        <p className="mt-2 text-sm text-muted">
          Gieo ba đồng xu cho mỗi hào, từ dưới lên. Sáu hào thành một quẻ. Hào già (sáu hoặc chín) đổi sang quẻ biến.
        </p>
      </header>

      <div className="grid gap-3 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
        <label className="flex flex-col gap-1 text-sm">
          Việc muốn hỏi
          <input
            value={question}
            maxLength={400}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Không bắt buộc"
            className="h-11 rounded-md border border-line bg-card px-3"
          />
        </label>
        <Button onClick={cast}>Gieo sáu hào</Button>
      </div>

      {result ? (
        <section className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)]">
          <div className="flex flex-wrap gap-8">
            <HexBlock title="Quẻ gốc" name={result.primary.title} lines={result.lines} />
            {result.transformed ? (
              <HexBlock
                title="Quẻ biến"
                name={result.transformed.title}
                lines={result.lines.map((line) => ({
                  yang: line.value === 6 ? true : line.value === 9 ? false : line.yang,
                  changing: false,
                  value: line.value,
                  coins: line.coins,
                }))}
              />
            ) : null}
          </div>
          <div className="max-w-2xl">
            {asked ? <p className="text-sm text-muted">Việc hỏi: {asked}</p> : null}
            <h3 className="mt-2 font-display text-3xl">{result.primary.title}</h3>
            <p className="mt-3 text-sm leading-relaxed">{result.primary.text}</p>
            {result.transformed ? (
              <>
                <h3 className="mt-6 font-display text-2xl">Biến sang {result.transformed.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{result.transformed.text}</p>
                <ul className="mt-4 flex flex-col gap-2 text-sm">
                  {result.changing.map((line) => (
                    <li key={line.index}>{line.text}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="mt-4 text-sm text-muted">Không có hào động. Quẻ đứng yên.</p>
            )}
          </div>
        </section>
      ) : (
        <p className="text-sm text-muted">Chưa gieo. Mỗi lần bấm là một quẻ mới.</p>
      )}
    </div>
  );
}

function HexBlock({ title, name, lines }: { title: string; name: string; lines: Yao[] }) {
  return (
    <figure className="w-36">
      <figcaption className="text-xs text-muted">{title}</figcaption>
      <div className="mt-2 flex flex-col-reverse gap-1.5">
        {lines.map((line, index) => (
          <div key={`${name}-${index}`} className="flex items-center gap-2">
            <Line yang={line.yang} changing={line.changing} />
          </div>
        ))}
      </div>
      <p className="mt-3 text-sm font-medium">{name}</p>
    </figure>
  );
}

function Line({ yang, changing }: { yang: boolean; changing: boolean }) {
  const tone = changing ? "bg-accent" : "bg-ink";
  if (yang) return <span className={cn("block h-2.5 w-full rounded-sm", tone)} />;
  return (
    <span className="flex w-full gap-2">
      <span className={cn("block h-2.5 flex-1 rounded-sm", tone)} />
      <span className={cn("block h-2.5 flex-1 rounded-sm", tone)} />
    </span>
  );
}
