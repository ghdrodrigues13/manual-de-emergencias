// Tabelas de Isolamento (Páginas Verdes) — ERG 2024
// Tabela 1: Materiais com risco por inalação
// Tabela 2: Materiais reativos à água (reativoAgua = true)

export interface EntradaIsolamento {
  onu: string;
  nome: string;
  derramamentoPequeno: {
    isolamentoInicial: string;
    diaProtecao: string;
    noiteProtecao: string;
  };
  derramamentoGrande: {
    isolamentoInicial: string;
    diaProtecao: string;
    noiteProtecao: string;
  };
  reativoAgua: boolean;
}

export const tabelaIsolamento: EntradaIsolamento[] = [
  {
    onu: "1005",
    nome: "Amônia, anidra",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.4" },
    reativoAgua: false
  },
  {
    onu: "1008",
    nome: "Trifluoreto de boro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.4" },
    reativoAgua: false
  },
  {
    onu: "1016",
    nome: "Monóxido de carbono comprimido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1017",
    nome: "Cloro",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.4" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "2.5", noiteProtecao: "7.0" },
    reativoAgua: false
  },
  {
    onu: "1023",
    nome: "Gás de carvão comprimido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1026",
    nome: "Cianogênio",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1040",
    nome: "Óxido de etileno",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1045",
    nome: "Flúor comprimido",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.1", noiteProtecao: "4.0" },
    reativoAgua: false
  },
  {
    onu: "1048",
    nome: "Brometo de hidrogênio, anidro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1050",
    nome: "Cloreto de hidrogênio, anidro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "1051",
    nome: "Cianeto de hidrogênio, estabilizado",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1052",
    nome: "Fluoreto de hidrogênio, anidro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1053",
    nome: "Sulfeto de hidrogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "1062",
    nome: "Brometo de metila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1063",
    nome: "Cloreto de metila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1064",
    nome: "Metilmercaptana",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1067",
    nome: "Tetróxido de dinitrogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1069",
    nome: "Cloreto de nitrosila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1076",
    nome: "Fosgênio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1079",
    nome: "Dióxido de enxofre",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.4" },
    reativoAgua: false
  },
  {
    onu: "1082",
    nome: "Trifluorcloroetileno, estabilizado",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1092",
    nome: "Acroleína, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "5.6" },
    reativoAgua: false
  },
  {
    onu: "1093",
    nome: "Acrilonitrila, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1098",
    nome: "Álcool alílico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1100",
    nome: "Cloreto de alila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "1143",
    nome: "Crotonaldeído, estabilizado",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1163",
    nome: "Dimetil hidrazina, assimétrica",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1185",
    nome: "Etilenoimina, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1244",
    nome: "Metil hidrazina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1251",
    nome: "Metacrilato de metila, monômero",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    reativoAgua: false
  },
  {
    onu: "1510",
    nome: "Tetranitrometano",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1541",
    nome: "Acetona cianidrina, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1556",
    nome: "Arsenicais, líquidos, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1569",
    nome: "Bromoacetona",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1580",
    nome: "Cloropicrina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "1581",
    nome: "Cloropicrina e brometo de metila, mistura",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1582",
    nome: "Cloropicrina e cloreto de metila, mistura",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1583",
    nome: "Cloropicrina, mistura, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1589",
    nome: "Cloreto de cianogênio, estabilizado",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1595",
    nome: "Sulfato de dimetila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1602",
    nome: "Corante líquido, tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1605",
    nome: "Dibrometo de etileno",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1612",
    nome: "Hexaetiltetrafosfato e gás comprimido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1613",
    nome: "Ácido cianídrico, solução aquosa",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1614",
    nome: "Cianeto de hidrogênio, absorvido",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1647",
    nome: "Brometo de metila e dibrometo de etileno",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1649",
    nome: "Composto de motor antidetonante",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1660",
    nome: "Óxido nítrico comprimido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1670",
    nome: "Perclorometilmercaptana",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1693",
    nome: "Substância lacrimogênea, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1694",
    nome: "Cianetos de bromo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1695",
    nome: "Cloroacetona, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1697",
    nome: "Cloroacetofenona, sólida",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1698",
    nome: "Difenilaminocloroarsina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1699",
    nome: "Difenilcloroarsina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1701",
    nome: "Brometo de xilila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1704",
    nome: "Ditiopirofosforato de tetraetila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1729",
    nome: "Oxicloreto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1741",
    nome: "Tricloreto de boro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1744",
    nome: "Bromo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "1745",
    nome: "Pentafluoreto de bromo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1746",
    nome: "Trifluoreto de bromo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1749",
    nome: "Trifluoreto de cloro",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1752",
    nome: "Cloreto de cloroacetila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1754",
    nome: "Ácido clorossulfônico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1758",
    nome: "Cromil cloreto",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1786",
    nome: "Ácido fluorídrico e ácido sulfúrico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1789",
    nome: "Ácido clorídrico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1790",
    nome: "Ácido fluorídrico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1796",
    nome: "Ácido sulfo-nítrico, mistura",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1809",
    nome: "Tricloreto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1810",
    nome: "Oxicloreto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1826",
    nome: "Ácido sulfo-nítrico, mistura residual",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1828",
    nome: "Cloretos de enxofre",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1829",
    nome: "Trióxido de enxofre",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1831",
    nome: "Ácido sulfúrico, fumegante",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1836",
    nome: "Cloreto de tionila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1838",
    nome: "Tetracloreto de titânio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1859",
    nome: "Tetrafluoreto de silício",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1889",
    nome: "Brometo de cianogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1892",
    nome: "Etildicloroarsina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1911",
    nome: "Diborano",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1921",
    nome: "Propilenoimina, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.4" },
    reativoAgua: false
  },
  {
    onu: "1935",
    nome: "Cianeto, solução, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1953",
    nome: "Gás comprimido, tóxico, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1953",
    nome: "Gás comprimido, tóxico, inflamável (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1953",
    nome: "Gás comprimido, tóxico, inflamável (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.1" },
    reativoAgua: false
  },
  {
    onu: "1953",
    nome: "Gás comprimido, tóxico, inflamável (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "1953",
    nome: "Gás comprimido, tóxico, inflamável (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "1955",
    nome: "Gás comprimido, tóxico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "1955",
    nome: "Gás comprimido, tóxico (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "1955",
    nome: "Gás comprimido, tóxico (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1955",
    nome: "Gás comprimido, tóxico (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "1955",
    nome: "Gás comprimido, tóxico (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "1967",
    nome: "Gás inseticida, tóxico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "1975",
    nome: "Óxido nítrico e tetróxido de dinitrogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "1986",
    nome: "Álcoois inflamáveis, tóxicos",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1988",
    nome: "Aldeídos inflamáveis, tóxicos",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1991",
    nome: "Cloropreno, estabilizado",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "1992",
    nome: "Líquido inflamável, tóxico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "1994",
    nome: "Ferro pentacarbonil",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2031",
    nome: "Ácido nítrico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2032",
    nome: "Ácido nítrico, fumegante",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "2073",
    nome: "Amônia em solução",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2078",
    nome: "Diisocianato de tolueno",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2186",
    nome: "Cloreto de hidrogênio, líquido refrigerado",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "2188",
    nome: "Arsina",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2189",
    nome: "Diclorossilano",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2190",
    nome: "Difluoreto de oxigênio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2191",
    nome: "Hexafluoreto de enxofre (tóxico)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2192",
    nome: "Germânio, hidreto de",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2194",
    nome: "Hexafluoreto de selênio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2195",
    nome: "Hexafluoreto de telúrio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "2196",
    nome: "Hexafluoreto de tungstênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2197",
    nome: "Iodeto de hidrogênio, anidro",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2198",
    nome: "Pentafluoreto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "2199",
    nome: "Fosfina",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2202",
    nome: "Seleneto de hidrogênio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2204",
    nome: "Sulfeto de carbonila",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "5.6" },
    reativoAgua: false
  },
  {
    onu: "2232",
    nome: "2-Cloroetanal",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2262",
    nome: "Cloreto de dimetilcarbamoíla",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2308",
    nome: "Ácido nitrossililfúrico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2334",
    nome: "Alilamina",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2337",
    nome: "Fenilmercaptano",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2382",
    nome: "Dimetilhidrazina, simétrica",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2407",
    nome: "Cloroformiato de isopropila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2417",
    nome: "Fluoreto de carbonila",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "5.6" },
    reativoAgua: false
  },
  {
    onu: "2418",
    nome: "Tetrafluoreto de enxofre",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "5.6" },
    reativoAgua: false
  },
  {
    onu: "2420",
    nome: "Hexafluoracetona",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2421",
    nome: "Trióxido de nitrogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2477",
    nome: "Isotiocianato de metila",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2478",
    nome: "Isocianatos, inflamáveis, tóxicos",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2480",
    nome: "Isocianato de metila",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2481",
    nome: "Isocianato de etila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "2482",
    nome: "Isocianato de n-propila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2483",
    nome: "Isocianato de isopropila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2484",
    nome: "Isocianato de tert-butila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2485",
    nome: "Isocianato de n-butila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2486",
    nome: "Isocianato de isobutila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "2487",
    nome: "Fenilisocianato",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2488",
    nome: "Isocianato de cicloexila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2489",
    nome: "Difenil metano diisocianato",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2495",
    nome: "Pentafluoreto de iodo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2548",
    nome: "Pentafluoreto de cloro",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2600",
    nome: "Monóxido de carbono e hidrogênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2605",
    nome: "Isocianato de metoximetila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "2606",
    nome: "Ortosilicato de metila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2676",
    nome: "Estibina",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "2683",
    nome: "Sulfeto de amônio, solução",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2740",
    nome: "Cloroformiato de n-propila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2742",
    nome: "Cloroformiatos, tóxicos, corrosivos, inflamáveis",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2743",
    nome: "Cloroformiato de n-butila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2745",
    nome: "Clorometilcloroformiato",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2810",
    nome: "Líquido orgânico tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2826",
    nome: "Clorotioformiato de etila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2845",
    nome: "Líquido pirofórico, orgânico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "2879",
    nome: "Oxicloreto de selênio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2901",
    nome: "Cloreto de bromo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "2927",
    nome: "Líquido orgânico tóxico, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "3023",
    nome: "2-Metil-2-heptanotiol",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "3057",
    nome: "Cloreto de trifluoroacetila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "3079",
    nome: "Metacrilonitrila, estabilizada",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "3083",
    nome: "Fluoreto de perclorila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "2.5" },
    reativoAgua: false
  },
  {
    onu: "3160",
    nome: "Gás liquefeito, tóxico, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3160",
    nome: "Gás liquefeito, tóxico, inflamável (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3160",
    nome: "Gás liquefeito, tóxico, inflamável (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.1" },
    reativoAgua: false
  },
  {
    onu: "3160",
    nome: "Gás liquefeito, tóxico, inflamável (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3160",
    nome: "Gás liquefeito, tóxico, inflamável (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3162",
    nome: "Gás liquefeito, tóxico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3162",
    nome: "Gás liquefeito, tóxico (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3162",
    nome: "Gás liquefeito, tóxico (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3162",
    nome: "Gás liquefeito, tóxico (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3162",
    nome: "Gás liquefeito, tóxico (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3246",
    nome: "Cloreto de metanossulfonila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "3275",
    nome: "Nitrilas, tóxicas, inflamáveis",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "3279",
    nome: "Compostos organofosforados, tóxicos, inflamáveis",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: false
  },
  {
    onu: "3294",
    nome: "Cianeto de hidrogênio, solução em álcool",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3300",
    nome: "Óxido de etileno e dióxido de carbono",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3303",
    nome: "Gás comprimido, tóxico, oxidante",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3303",
    nome: "Gás comprimido, tóxico, oxidante (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.5", noiteProtecao: "2.6" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "5.1", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3303",
    nome: "Gás comprimido, tóxico, oxidante (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "500", diaProtecao: "3.5", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3303",
    nome: "Gás comprimido, tóxico, oxidante (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.3" },
    reativoAgua: false
  },
  {
    onu: "3303",
    nome: "Gás comprimido, tóxico, oxidante (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.3" },
    reativoAgua: false
  },
  {
    onu: "3304",
    nome: "Gás comprimido, tóxico, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3304",
    nome: "Gás comprimido, tóxico, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "200", diaProtecao: "1.1", noiteProtecao: "3.4" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.9", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3304",
    nome: "Gás comprimido, tóxico, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3304",
    nome: "Gás comprimido, tóxico, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "3304",
    nome: "Gás comprimido, tóxico, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "2.1" },
    reativoAgua: false
  },
  {
    onu: "3305",
    nome: "Gás comprimido, tóxico, inflamável, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3305",
    nome: "Gás comprimido, tóxico, inflamável, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3305",
    nome: "Gás comprimido, tóxico, inflamável, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.1" },
    reativoAgua: false
  },
  {
    onu: "3305",
    nome: "Gás comprimido, tóxico, inflamável, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3305",
    nome: "Gás comprimido, tóxico, inflamável, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3306",
    nome: "Gás comprimido, tóxico, oxidante, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3306",
    nome: "Gás comprimido, tóxico, oxidante, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.5", noiteProtecao: "2.6" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "5.5", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3306",
    nome: "Gás comprimido, tóxico, oxidante, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "5.1", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3306",
    nome: "Gás comprimido, tóxico, oxidante, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "3306",
    nome: "Gás comprimido, tóxico, oxidante, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "2.1" },
    reativoAgua: false
  },
  {
    onu: "3307",
    nome: "Gás liquefeito, tóxico, oxidante",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3307",
    nome: "Gás liquefeito, tóxico, oxidante (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.5", noiteProtecao: "2.6" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "5.1", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3307",
    nome: "Gás liquefeito, tóxico, oxidante (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "500", diaProtecao: "2.9", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3307",
    nome: "Gás liquefeito, tóxico, oxidante (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.3" },
    reativoAgua: false
  },
  {
    onu: "3307",
    nome: "Gás liquefeito, tóxico, oxidante (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.3" },
    reativoAgua: false
  },
  {
    onu: "3308",
    nome: "Gás liquefeito, tóxico, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3308",
    nome: "Gás liquefeito, tóxico, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "200", diaProtecao: "1.1", noiteProtecao: "3.4" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.9", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3308",
    nome: "Gás liquefeito, tóxico, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3308",
    nome: "Gás liquefeito, tóxico, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "3308",
    nome: "Gás liquefeito, tóxico, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "2.1" },
    reativoAgua: false
  },
  {
    onu: "3309",
    nome: "Gás liquefeito, tóxico, inflamável, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3309",
    nome: "Gás liquefeito, tóxico, inflamável, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3309",
    nome: "Gás liquefeito, tóxico, inflamável, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "2.6", noiteProtecao: "3.1" },
    reativoAgua: false
  },
  {
    onu: "3309",
    nome: "Gás liquefeito, tóxico, inflamável, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3309",
    nome: "Gás liquefeito, tóxico, inflamável, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3310",
    nome: "Gás liquefeito, tóxico, oxidante, corrosivo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.3" },
    reativoAgua: false
  },
  {
    onu: "3310",
    nome: "Gás liquefeito, tóxico, oxidante, corrosivo (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.5", noiteProtecao: "2.6" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "5.1", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3310",
    nome: "Gás liquefeito, tóxico, oxidante, corrosivo (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.1" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "4.5", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3310",
    nome: "Gás liquefeito, tóxico, oxidante, corrosivo (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.6", noiteProtecao: "3.2" },
    reativoAgua: false
  },
  {
    onu: "3310",
    nome: "Gás liquefeito, tóxico, oxidante, corrosivo (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "2.1" },
    reativoAgua: false
  },
  {
    onu: "3318",
    nome: "Amônia em solução, >50%",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.8", noiteProtecao: "3.4" },
    reativoAgua: false
  },
  {
    onu: "3355",
    nome: "Gás inseticida, tóxico, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "3355",
    nome: "Gás inseticida, tóxico, inflamável (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.9" },
    derramamentoGrande: { isolamentoInicial: "800", diaProtecao: "6.3", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3355",
    nome: "Gás inseticida, tóxico, inflamável (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.4", noiteProtecao: "3.1" },
    reativoAgua: false
  },
  {
    onu: "3355",
    nome: "Gás inseticida, tóxico, inflamável (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "2.7" },
    reativoAgua: false
  },
  {
    onu: "3355",
    nome: "Gás inseticida, tóxico, inflamável (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "0.6", noiteProtecao: "1.6" },
    reativoAgua: false
  },
  {
    onu: "3381",
    nome: "Líquido tóxico por inalação, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3382",
    nome: "Líquido tóxico por inalação, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3383",
    nome: "Líquido tóxico por inalação, inflamável, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3384",
    nome: "Líquido tóxico por inalação, inflamável, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3385",
    nome: "Líquido tóxico por inalação, reativo à água, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3386",
    nome: "Líquido tóxico por inalação, reativo à água, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3387",
    nome: "Líquido tóxico por inalação, oxidante, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3388",
    nome: "Líquido tóxico por inalação, oxidante, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3389",
    nome: "Líquido tóxico por inalação, corrosivo, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3390",
    nome: "Líquido tóxico por inalação, corrosivo, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3407",
    nome: "Cloro e pentafluoreto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "3.0", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3488",
    nome: "Líquido tóxico por inalação, inflamável, corrosivo, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3489",
    nome: "Líquido tóxico por inalação, inflamável, corrosivo, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "3490",
    nome: "Líquido tóxico por inalação, reativo, inflamável, Zona A",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3491",
    nome: "Líquido tóxico por inalação, reativo, inflamável, Zona B",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.0", noiteProtecao: "3.7" },
    reativoAgua: false
  },
  {
    onu: "1340",
    nome: "Pentassulfeto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: true
  },
  {
    onu: "1340",
    nome: "Pentassulfeto de fósforo (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.0" },
    reativoAgua: true
  },
  {
    onu: "1341",
    nome: "Sesquissulfeto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: true
  },
  {
    onu: "1343",
    nome: "Trissulfeto de fósforo",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: true
  },
  {
    onu: "1360",
    nome: "Fosfeto de cálcio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "1360",
    nome: "Fosfeto de cálcio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "180", diaProtecao: "0.8", noiteProtecao: "2.7" },
    reativoAgua: true
  },
  {
    onu: "1384",
    nome: "Ditionito de sódio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: true
  },
  {
    onu: "1384",
    nome: "Ditionito de sódio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "2.1" },
    reativoAgua: true
  },
  {
    onu: "1397",
    nome: "Fosfeto de alumínio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "1397",
    nome: "Fosfeto de alumínio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "380", diaProtecao: "1.6", noiteProtecao: "4.7" },
    reativoAgua: true
  },
  {
    onu: "1402",
    nome: "Carboneto de cálcio",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.5" },
    reativoAgua: true
  },
  {
    onu: "1419",
    nome: "Fosfeto de magnésio-alumínio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "1419",
    nome: "Fosfeto de magnésio-alumínio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "380", diaProtecao: "1.4", noiteProtecao: "4.2" },
    reativoAgua: true
  },
  {
    onu: "1432",
    nome: "Fosfeto de sódio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "1432",
    nome: "Fosfeto de sódio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.0", noiteProtecao: "3.1" },
    reativoAgua: true
  },
  {
    onu: "1714",
    nome: "Fosfeto de zinco",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "2011",
    nome: "Fosfeto de magnésio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "2011",
    nome: "Fosfeto de magnésio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "380", diaProtecao: "1.4", noiteProtecao: "3.9" },
    reativoAgua: true
  },
  {
    onu: "2012",
    nome: "Fosfeto de potássio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "2012",
    nome: "Fosfeto de potássio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "180", diaProtecao: "1.0", noiteProtecao: "2.9" },
    reativoAgua: true
  },
  {
    onu: "2013",
    nome: "Fosfeto de estrôncio",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "2013",
    nome: "Fosfeto de estrôncio (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "180", diaProtecao: "0.8", noiteProtecao: "2.7" },
    reativoAgua: true
  },
  {
    onu: "3048",
    nome: "Pesticida à base de alumínio-fósforo",
    derramamentoPequeno: { isolamentoInicial: "100", diaProtecao: "0.6", noiteProtecao: "2.5" },
    derramamentoGrande: { isolamentoInicial: "600", diaProtecao: "3.7", noiteProtecao: "7.0+" },
    reativoAgua: true
  },
  {
    onu: "3048",
    nome: "Pesticida à base de alumínio-fósforo (quando derramado na água)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.6" },
    derramamentoGrande: { isolamentoInicial: "380", diaProtecao: "1.6", noiteProtecao: "4.5" },
    reativoAgua: true
  },
  {
    onu: "2016",
    nome: "Munição, tóxica, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "2206",
    nome: "Isocianatos, tóxicos, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.6" },
    reativoAgua: false
  },
  {
    onu: "2236",
    nome: "3-Cloro-4-metilfenil isocianato, líquido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "2250",
    nome: "Diclorofenilisocianatos",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "2281",
    nome: "Diisocianato de hexametileno",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.6" },
    reativoAgua: false
  },
  {
    onu: "2285",
    nome: "Isocianato de benzila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "2290",
    nome: "Diisocianato de isoforona",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "2645",
    nome: "Brometo de fenacila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "2647",
    nome: "Malononitrila",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.7", noiteProtecao: "2.4" },
    reativoAgua: false
  },
  {
    onu: "2672",
    nome: "Amônia, solução",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "2783",
    nome: "Pesticida organofosforado, líquido, inflamável, tóxico",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "2929",
    nome: "Líquido orgânico tóxico, inflamável, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "2991",
    nome: "Pesticida carbamato, líquido, tóxico, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3017",
    nome: "Pesticida organofosforado, líquido, tóxico, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3021",
    nome: "Pesticida, líquido, inflamável, tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3071",
    nome: "Mercaptanos, líquidos, tóxicos, inflamáveis, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "1.1" },
    reativoAgua: false
  },
  {
    onu: "3073",
    nome: "Vinilpiridinas, estabilizadas",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.7" },
    reativoAgua: false
  },
  {
    onu: "3080",
    nome: "Isocianatos, tóxicos, inflamáveis, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.6" },
    reativoAgua: false
  },
  {
    onu: "3086",
    nome: "Líquido tóxico, oxidante, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3123",
    nome: "Líquido tóxico, reativo à água, n.e.",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.7", noiteProtecao: "5.6" },
    reativoAgua: true
  },
  {
    onu: "3130",
    nome: "Líquido reativo à água, tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "1.7", noiteProtecao: "5.6" },
    reativoAgua: true
  },
  {
    onu: "3168",
    nome: "Amostra de gás, não pressurizada, tóxica, inflamável, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "3169",
    nome: "Amostra de gás, não pressurizada, tóxica, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "3172",
    nome: "Toxinas extraídas de organismos vivos, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3179",
    nome: "Líquido inflamável, tóxico, inorgânico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3273",
    nome: "Nitrilas, inflamáveis, tóxicas, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.7", noiteProtecao: "2.4" },
    reativoAgua: false
  },
  {
    onu: "3286",
    nome: "Líquido inflamável, tóxico, corrosivo, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3293",
    nome: "Hidrazina, solução aquosa, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.8", noiteProtecao: "2.8" },
    reativoAgua: false
  },
  {
    onu: "3315",
    nome: "Amostra química, tóxica",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3379",
    nome: "Líquido inflamável desensibilizado, tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3416",
    nome: "Cloroacetofenona, líquida",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    reativoAgua: false
  },
  {
    onu: "3417",
    nome: "Brometo de xilila, sólido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    reativoAgua: false
  },
  {
    onu: "3418",
    nome: "2,4-Tolueno diisocianato, solução",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.6" },
    reativoAgua: false
  },
  {
    onu: "3428",
    nome: "3-Cloro-4-metilfenil isocianato, sólido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.2" },
    reativoAgua: false
  },
  {
    onu: "3448",
    nome: "Substância lacrimogênea, sólida, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    reativoAgua: false
  },
  {
    onu: "3450",
    nome: "Difenilcloroarsina, sólida",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "3456",
    nome: "Ácido nitrossililfúrico, sólido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "0.8" },
    reativoAgua: false
  },
  {
    onu: "3464",
    nome: "Compostos organofosforados, tóxicos, inflamáveis, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.2" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.3", noiteProtecao: "0.9" },
    reativoAgua: false
  },
  {
    onu: "3483",
    nome: "Composto antidetonante para combustível de motor, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.5", noiteProtecao: "1.7" },
    reativoAgua: false
  },
  {
    onu: "3484",
    nome: "Hidrazina, solução aquosa, inflamável",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.5" },
    derramamentoGrande: { isolamentoInicial: "100", diaProtecao: "0.8", noiteProtecao: "2.8" },
    reativoAgua: false
  },
  {
    onu: "3512",
    nome: "Gás adsorvido, tóxico, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3512",
    nome: "Gás adsorvido, tóxico, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3512",
    nome: "Gás adsorvido, tóxico, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3512",
    nome: "Gás adsorvido, tóxico, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3512",
    nome: "Gás adsorvido, tóxico, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3514",
    nome: "Gás adsorvido, tóxico, inflamável, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3514",
    nome: "Gás adsorvido, tóxico, inflamável, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3514",
    nome: "Gás adsorvido, tóxico, inflamável, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3514",
    nome: "Gás adsorvido, tóxico, inflamável, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3514",
    nome: "Gás adsorvido, tóxico, inflamável, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3515",
    nome: "Gás adsorvido, tóxico, oxidante, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3515",
    nome: "Gás adsorvido, tóxico, oxidante, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3515",
    nome: "Gás adsorvido, tóxico, oxidante, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3515",
    nome: "Gás adsorvido, tóxico, oxidante, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3515",
    nome: "Gás adsorvido, tóxico, oxidante, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3516",
    nome: "Gás adsorvido, tóxico, inflamável, corrosivo, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3516",
    nome: "Gás adsorvido, tóxico, inflamável, corrosivo, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3516",
    nome: "Gás adsorvido, tóxico, inflamável, corrosivo, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3516",
    nome: "Gás adsorvido, tóxico, inflamável, corrosivo, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3516",
    nome: "Gás adsorvido, tóxico, inflamável, corrosivo, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3517",
    nome: "Gás adsorvido, tóxico, oxidante, corrosivo, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3517",
    nome: "Gás adsorvido, tóxico, oxidante, corrosivo, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3517",
    nome: "Gás adsorvido, tóxico, oxidante, corrosivo, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3517",
    nome: "Gás adsorvido, tóxico, oxidante, corrosivo, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3517",
    nome: "Gás adsorvido, tóxico, oxidante, corrosivo, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3518",
    nome: "Gás adsorvido, tóxico, corrosivo, n.e.",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3518",
    nome: "Gás adsorvido, tóxico, corrosivo, n.e. (Zona A — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3518",
    nome: "Gás adsorvido, tóxico, corrosivo, n.e. (Zona B — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    reativoAgua: false
  },
  {
    onu: "3518",
    nome: "Gás adsorvido, tóxico, corrosivo, n.e. (Zona C — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3518",
    nome: "Gás adsorvido, tóxico, corrosivo, n.e. (Zona D — Risco por Inalação)",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.1" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.2", noiteProtecao: "0.6" },
    reativoAgua: false
  },
  {
    onu: "3519",
    nome: "Trifluoreto de boro adsorvido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.4" },
    reativoAgua: false
  },
  {
    onu: "3520",
    nome: "Cloro adsorvido",
    derramamentoPequeno: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.4" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "2.5", noiteProtecao: "7.0" },
    reativoAgua: false
  },
  {
    onu: "3521",
    nome: "Silício tetrafluoreto adsorvido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.4" },
    reativoAgua: false
  },
  {
    onu: "3522",
    nome: "Arsina adsorvida",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.2" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.9", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3523",
    nome: "Germânio adsorvido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.3" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.3", noiteProtecao: "1.0" },
    reativoAgua: false
  },
  {
    onu: "3524",
    nome: "Pentafluoreto de fósforo adsorvido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.1", noiteProtecao: "0.4" },
    derramamentoGrande: { isolamentoInicial: "60", diaProtecao: "0.4", noiteProtecao: "1.4" },
    reativoAgua: false
  },
  {
    onu: "3525",
    nome: "Fosfina adsorvida",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.3", noiteProtecao: "1.6" },
    derramamentoGrande: { isolamentoInicial: "300", diaProtecao: "2.7", noiteProtecao: "7.0+" },
    reativoAgua: false
  },
  {
    onu: "3526",
    nome: "Seleneto de hidrogênio adsorvido",
    derramamentoPequeno: { isolamentoInicial: "30", diaProtecao: "0.2", noiteProtecao: "0.8" },
    derramamentoGrande: { isolamentoInicial: "150", diaProtecao: "1.4", noiteProtecao: "4.8" },
    reativoAgua: false
  },
];