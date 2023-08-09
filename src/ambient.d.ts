interface Country {
  name: string | null;
  native: string | null;
  capital: string | null;
  emoji: string | null;
  currency: string | null;
  languages: Languages[];
}

interface Languages {
  code: string | null;
  name: string | null;
}
