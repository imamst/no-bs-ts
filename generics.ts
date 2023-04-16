function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v
    },
  ];
}

const [st1getter, st1setter] = simpleState("hello");
console.log(st1getter());
st1setter("good bye");
console.log(st1getter());

const [st2getter, st2setter] = simpleState<number | null>(null);
console.log(st2getter());
st2setter(133);
console.log(st2getter());

// 
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(items: RankItem[], rank: (v: RankItem) => number): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item)
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string,
  hp: number
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasaur",
    hp: 20,
  },
  {
    name: "Megasaur",
    hp: 13,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);