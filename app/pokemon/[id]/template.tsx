import { ReactNode } from 'react';

export default function PokemonTemplate({ children }: { children: ReactNode }) {
  return <section>{children}</section>;
}
