// Classes de Risco e Placas de Identificação
export interface ClasseRisco {
  classe: string;
  divisao?: string;
  nome: string;
  cor: string; // cor do losango
  guiaPadrao: string;
  icone: string; // emoji representativo
  descricao: string;
}

export const classesRisco: ClasseRisco[] = [
  { classe: "1", divisao: "1.1", nome: "Explosivos (explosão em massa)", cor: "#FF6600", guiaPadrao: "112", icone: "💥", descricao: "Materiais com risco de explosão em massa" },
  { classe: "1", divisao: "1.2", nome: "Explosivos (projeção)", cor: "#FF6600", guiaPadrao: "112", icone: "💥", descricao: "Materiais com risco de projeção" },
  { classe: "1", divisao: "1.3", nome: "Explosivos (incêndio)", cor: "#FF6600", guiaPadrao: "112", icone: "🔥", descricao: "Materiais com risco de incêndio" },
  { classe: "1", divisao: "1.4", nome: "Explosivos (risco mínimo)", cor: "#FF6600", guiaPadrao: "114", icone: "💥", descricao: "Materiais sem risco significativo de explosão" },
  { classe: "1", divisao: "1.5", nome: "Explosivos (muito insensíveis)", cor: "#FF6600", guiaPadrao: "112", icone: "💥", descricao: "Explosivos muito insensíveis" },
  { classe: "1", divisao: "1.6", nome: "Explosivos (extremamente insensíveis)", cor: "#FF6600", guiaPadrao: "114", icone: "💥", descricao: "Artigos extremamente insensíveis" },
  { classe: "2", divisao: "2.1", nome: "Gases inflamáveis", cor: "#FF0000", guiaPadrao: "115", icone: "🔴", descricao: "Gases que inflamam facilmente" },
  { classe: "2", divisao: "2.2", nome: "Gases não inflamáveis, não tóxicos", cor: "#00AA00", guiaPadrao: "121", icone: "🟢", descricao: "Gases sob pressão, não inflamáveis" },
  { classe: "2", divisao: "2.3", nome: "Gases tóxicos", cor: "#FFFFFF", guiaPadrao: "123", icone: "☠️", descricao: "Gases tóxicos por inalação" },
  { classe: "3", nome: "Líquidos inflamáveis", cor: "#FF0000", guiaPadrao: "128", icone: "🔥", descricao: "Líquidos com ponto de fulgor baixo" },
  { classe: "4", divisao: "4.1", nome: "Sólidos inflamáveis", cor: "#FF0000", guiaPadrao: "133", icone: "🔥", descricao: "Sólidos que inflamam facilmente" },
  { classe: "4", divisao: "4.2", nome: "Combustão espontânea", cor: "#FF0000", guiaPadrao: "135", icone: "🔥", descricao: "Materiais sujeitos a combustão espontânea" },
  { classe: "4", divisao: "4.3", nome: "Perigoso quando molhado", cor: "#0000FF", guiaPadrao: "138", icone: "💧", descricao: "Substâncias que emitem gases inflamáveis ao contato com água" },
  { classe: "5", divisao: "5.1", nome: "Oxidantes", cor: "#FFFF00", guiaPadrao: "140", icone: "⭕", descricao: "Substâncias oxidantes" },
  { classe: "5", divisao: "5.2", nome: "Peróxidos orgânicos", cor: "#FFFF00", guiaPadrao: "145", icone: "⭕", descricao: "Peróxidos orgânicos" },
  { classe: "6", divisao: "6.1", nome: "Substâncias tóxicas", cor: "#FFFFFF", guiaPadrao: "153", icone: "☠️", descricao: "Substâncias tóxicas" },
  { classe: "6", divisao: "6.2", nome: "Substâncias infecciosas", cor: "#FFFFFF", guiaPadrao: "158", icone: "☣️", descricao: "Substâncias infecciosas" },
  { classe: "7", nome: "Materiais radioativos", cor: "#FFFF00", guiaPadrao: "163", icone: "☢️", descricao: "Materiais radioativos" },
  { classe: "8", nome: "Substâncias corrosivas", cor: "#000000", guiaPadrao: "154", icone: "⚗️", descricao: "Substâncias que causam corrosão" },
  { classe: "9", nome: "Substâncias e artigos perigosos diversos", cor: "#FFFFFF", guiaPadrao: "171", icone: "⚠️", descricao: "Materiais perigosos diversos, incluindo baterias de lítio" },
];
