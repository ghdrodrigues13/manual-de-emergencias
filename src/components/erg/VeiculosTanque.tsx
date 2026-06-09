import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import ImagemERG from "./ImagemERG";

interface TipoVeiculo {
  titulo: string;
  guia: string;
  descricao: string;
  caracteristicas: string[];
  alerta?: string;
  imagem: { arquivo: string; pagina: number; descricao: string };
}

const veiculos: TipoVeiculo[] = [
  {
    titulo: "Vagão-Tanque Pressurizado",
    guia: "117",
    descricao: "Tanque cilíndrico sem compartimentos, com cabeças (extremidades) arredondadas. Não possui plataformas, escadas externas, anéis de reforço ou cúpula de carregamento visível no topo.",
    caracteristicas: [
      "Transporta gases liquefeitos sob pressão (GLP, cloro, amônia, etc.)",
      "Capacidade típica: 90.000 a 130.000 litros",
      "Pressão de operação: até 2,1 MPa (300 psi)",
      "Proteção térmica e/ou escudo contra chamas pode estar presente",
      "Em caso de incêndio: ISOLAR 800 m em todas as direções",
    ],
    alerta: "CUIDADO: Se o vagão estiver exposto ao fogo e houver som crescente dos dispositivos de alívio de pressão ou descoloração do tanque, EVACUE IMEDIATAMENTE 1.600 metros.",
    imagem: { arquivo: "vagao-pressurizado-117.png", pagina: 13, descricao: "Vagão-tanque pressurizado — MC331, TC331, SCT331 (Guia 117)" },
  },
  {
    titulo: "Vagão-Tanque de Baixa Pressão",
    guia: "131",
    descricao: "Tanque cilíndrico com compartimentos visíveis (anéis de reforço circundando o tanque). Pode ter cúpula de carregamento no topo e plataforma de acesso.",
    caracteristicas: [
      "Transporta líquidos inflamáveis, combustíveis, ácidos, produtos químicos líquidos",
      "Capacidade típica: 19.000 a 130.000 litros",
      "Pressão de operação: até 0,7 MPa (100 psi)",
      "Podem ter revestimento térmico ou jaqueta de isolamento",
      "Compartimentos múltiplos podem conter produtos diferentes",
    ],
    imagem: { arquivo: "vagao-baixa-pressao-131.png", pagina: 13, descricao: "Vagão-tanque de baixa pressão — DOT111, TC111, SCT306/307 (Guia 131)" },
  },
  {
    titulo: "Caminhão-Tanque Rodoviário",
    guia: "128",
    descricao: "Tanque cilíndrico horizontal montado sobre chassi de caminhão. Pode ser de aço, alumínio ou fibra de vidro, com ou sem compartimentos.",
    caracteristicas: [
      "Transporta líquidos inflamáveis, combustíveis, produtos químicos",
      "Capacidade típica: 5.000 a 40.000 litros",
      "Placas de risco nas laterais e traseira",
      "Painel de segurança (retângulo laranja) nas laterais",
      "Documento de transporte (FISPQ) deve estar na cabine",
    ],
    imagem: { arquivo: "caminhao-tanque-128.png", pagina: 14, descricao: "Caminhão-tanque rodoviário para líquidos (Guia 128)" },
  },
  {
    titulo: "Caminhão-Tanque de Gases Pressurizados",
    guia: "117",
    descricao: "Tanque cilíndrico com extremidades arredondadas (hemisféricas), sem compartimentos visíveis. Superfície lisa, sem anéis de reforço.",
    caracteristicas: [
      "Transporta gases liquefeitos (GLP, amônia, cloro, etc.)",
      "Capacidade típica: 5.000 a 20.000 litros",
      "Alta pressão — risco de BLEVE em caso de exposição ao fogo",
      "Válvulas de alívio de pressão no topo",
      "Manter distância mínima de 800 m em caso de incêndio",
    ],
    alerta: "PERIGO DE BLEVE: Se o tanque estiver envolvido em incêndio, não se aproxime. Risco de explosão catastrófica.",
    imagem: { arquivo: "caminhao-gases-117.png", pagina: 14, descricao: "Caminhão-tanque para gases pressurizados — MC331 (Guia 117)" },
  },
  {
    titulo: "Contêiner Intermodal / Tanque Portátil",
    guia: "171",
    descricao: "Recipiente padronizado ISO montado em estrutura metálica para transporte multimodal (rodoviário, ferroviário e marítimo).",
    caracteristicas: [
      "Tanque cilíndrico dentro de estrutura retangular de aço",
      "Capacidade típica: 14.000 a 26.000 litros",
      "Placas de risco em todas as quatro faces",
      "Número ONU visível no painel de segurança",
      "Porta-documentos externo com FISPQ/SDS",
    ],
    imagem: { arquivo: "conteiner-intermodal-171.png", pagina: 15, descricao: "Contêiner-tanque intermodal / tanque portátil (Guia 171)" },
  },
  {
    titulo: "Embalagens e Volumes",
    guia: "171",
    descricao: "Tambores, bombonas, caixas, sacos, IBCs (Intermediate Bulk Containers) e cilindros de gás.",
    caracteristicas: [
      "Rótulos de risco (losangos menores) afixados na embalagem",
      "Número ONU precedido de 'UN' ou 'ONU' deve estar visível",
      "Grupo de embalagem (I, II ou III) indica o grau de perigo",
      "I = grande perigo, II = perigo médio, III = perigo menor",
      "Consultar a FISPQ para procedimentos específicos",
    ],
    imagem: { arquivo: "embalagens-volumes-171.png", pagina: 15, descricao: "Tipos de embalagens e volumes para produtos perigosos (Guia 171)" },
  },
];

const VeiculosTanque = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3 text-sm text-red-800 dark:text-red-200">
        <p className="font-bold mb-1">⚠️ Cautela</p>
        <p>A forma do veículo de transporte pode ajudar na identificação do tipo de material. Vagões e caminhões-tanque <strong>pressurizados</strong> (sem anéis de reforço, extremidades arredondadas) geralmente transportam gases — que representam maior risco de explosão.</p>
      </div>

      <div className="grid gap-4">
        {veiculos.map((v) => (
          <div
            key={v.titulo}
            className="rounded-lg border bg-card p-4 space-y-3"
          >
            <ImagemERG
              arquivo={v.imagem.arquivo}
              pagina={v.imagem.pagina}
              descricao={v.imagem.descricao}
              alt={v.titulo}
              className="w-full"
            />

            <div className="flex items-center gap-2 flex-wrap">
              <h4 className="font-bold text-sm">{v.titulo}</h4>
              <button
                onClick={() => navigate(`/guia/${v.guia}`)}
                className="font-mono text-xs px-2 py-0.5 rounded-full bg-orange-100 dark:bg-orange-900/40 text-orange-700 dark:text-orange-300 font-bold hover:bg-orange-200 dark:hover:bg-orange-900/60 transition-colors"
              >
                Guia {v.guia} →
              </button>
            </div>

            <p className="text-xs text-muted-foreground">{v.descricao}</p>

            <ul className="space-y-1 ml-1">
              {v.caracteristicas.map((c, i) => (
                <li key={i} className="flex gap-1.5 text-xs text-muted-foreground">
                  <ChevronRight className="h-3 w-3 shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>

            {v.alerta && (
              <div className="bg-destructive/10 border border-destructive/20 rounded p-2 text-xs font-bold text-destructive">
                {v.alerta}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground space-y-1.5">
        <p><strong>Dica de identificação visual:</strong></p>
        <p>• <strong>Sem anéis de reforço</strong> + extremidades arredondadas = <strong>pressurizado</strong> (gases) → maior risco</p>
        <p>• <strong>Com anéis de reforço</strong> + cúpula de carregamento no topo = <strong>baixa pressão</strong> (líquidos)</p>
        <p>• Sempre procure placas de risco e painéis de segurança para confirmar o conteúdo</p>
      </div>
    </div>
  );
};

export default VeiculosTanque;
