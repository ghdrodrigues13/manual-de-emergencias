import { indiceONU } from "./indice-onu";

export interface EntradaNome {
  nome: string;
  onu: string;
  guia: string;
  destacado: boolean;
}

export const indiceNomes: EntradaNome[] = [...indiceONU]
  .sort((a, b) => a.nome.localeCompare(b.nome, "pt-BR"))
  .map(({ nome, onu, guia, destacado }) => ({ nome, onu, guia, destacado }));

export function getNomesPorLetra(): Map<string, EntradaNome[]> {
  const mapa = new Map<string, EntradaNome[]>();
  for (const entrada of indiceNomes) {
    const letra = entrada.nome.charAt(0).toUpperCase();
    if (!mapa.has(letra)) mapa.set(letra, []);
    mapa.get(letra)!.push(entrada);
  }
  return mapa;
}

export const letrasDisponiveis: string[] = (() => {
  const letras = new Set<string>();
  for (const e of indiceNomes) {
    letras.add(e.nome.charAt(0).toUpperCase());
  }
  return Array.from(letras).sort((a, b) => a.localeCompare(b, "pt-BR"));
})();
