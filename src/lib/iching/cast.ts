import { HEXAGRAMS, YAO_PLACE, hexagramByLines, type Hexagram } from "@/lib/iching/data";

export type Yao = {
  value: 6 | 7 | 8 | 9;
  yang: boolean;
  changing: boolean;
  coins: number[];
};

export type CastResult = {
  lines: Yao[];
  primary: Hexagram;
  transformed: Hexagram | null;
  changing: { index: number; text: string }[];
};

function tossCoin(): number {
  return Math.random() < 0.5 ? 2 : 3;
}

export function castLine(): Yao {
  const coins = [tossCoin(), tossCoin(), tossCoin()];
  const value = coins.reduce((s, n) => s + n, 0) as Yao["value"];
  return {
    value,
    yang: value === 7 || value === 9,
    changing: value === 6 || value === 9,
    coins,
  };
}

export function castHexagram(): CastResult {
  const lines = Array.from({ length: 6 }, () => castLine());
  const primary = hexagramByLines(lines.map((line) => line.value));
  const changing = lines.flatMap((line, index) =>
    line.changing
      ? [
          {
            index,
            text: `${YAO_PLACE[index]} ${line.value === 9 ? "Dương già đổi sang âm." : "Âm già đổi sang dương."}`,
          },
        ]
      : [],
  );
  const transformedValues = lines.map((line) => {
    if (line.value === 9) return 8;
    if (line.value === 6) return 7;
    return line.value;
  });
  const transformed = changing.length ? hexagramByLines(transformedValues) : null;
  return { lines, primary, transformed, changing };
}

export function hexagramOrFallback(n: number): Hexagram {
  return HEXAGRAMS[n] ?? HEXAGRAMS[1];
}
