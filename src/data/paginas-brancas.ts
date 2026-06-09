// Páginas Brancas — Informações Gerais do ERG 2024
// Conteúdo traduzido e adaptado para pt-BR

export interface ImagemReferencia {
  src: string;
  alt: string;
  legenda?: string;
}

export interface SecaoBranca {
  id: string;
  titulo: string;
  icone: string;
  imagens?: ImagemReferencia[];
  componenteEspecial?: string;
  itens: {
    subtitulo?: string;
    conteudo: string[];
    imagens?: ImagemReferencia[];
  }[];
}

export const paginasBrancas: SecaoBranca[] = [
  {
    id: "precaucoes",
    titulo: "Precauções de Segurança",
    icone: "⚠️",
    itens: [
      {
        conteudo: [
          "RESISTA À TENTAÇÃO DE CORRER. Aproxime-se com cautela, de preferência pelo lado do vento, em terreno elevado e/ou a montante.",
          "Proteja-se e isole a área; mantenha as pessoas afastadas.",
          "Mantenha-se afastado de vapores, fumaça, derramamentos e poças.",
          "NÃO toque em recipientes danificados ou em material derramado sem o uso de equipamento de proteção individual adequado.",
          "As fontes de ignição devem ser eliminadas (proibido fumar, sinalizadores, faíscas ou chamas na área de risco).",
          "NÃO presuma que gases ou vapores são inofensivos por serem inodoros — podem ser extremamente tóxicos.",
          "Use equipamento de proteção individual com pressão positiva (SCBA) como proteção mínima.",
        ],
      },
    ],
  },
  {
    id: "como-usar",
    titulo: "Como Usar Este Guia",
    icone: "📖",
    itens: [
      {
        subtitulo: "Passo 1 — Identificar o Material",
        conteudo: [
          "Identifique o material pelo número ONU de 4 dígitos na placa, no documento de transporte ou na embalagem.",
          "Se o número ONU não estiver disponível, identifique pela placa de risco (losango colorido) ou pelo nome do produto.",
        ],
      },
      {
        subtitulo: "Passo 2 — Consultar o Guia de Emergência",
        conteudo: [
          "Use o número ONU para localizar o Guia de Emergência correspondente (seção laranja).",
          "O guia fornece informações sobre riscos potenciais, segurança pública e resposta de emergência.",
        ],
      },
      {
        subtitulo: "Passo 3 — Verificar a Tabela de Isolamento",
        conteudo: [
          "Se o material estiver destacado em VERDE no índice, consulte também a Tabela 1 (seção verde) para distâncias de isolamento e ação protetora específicas.",
          "Materiais destacados em verde representam riscos por inalação tóxica (TIH) ou são reativos à água, produzindo gases tóxicos.",
        ],
      },
    ],
  },
  {
    id: "classificacao",
    titulo: "Sistema de Classificação de Riscos",
    icone: "🏷️",
    itens: [
      {
        subtitulo: "Classe 1 — Explosivos",
        conteudo: [
          "1.1 Explosivos com risco de explosão em massa",
          "1.2 Explosivos com risco de projeção",
          "1.3 Explosivos com risco predominante de incêndio",
          "1.4 Explosivos sem risco significativo de explosão",
          "1.5 Explosivos muito insensíveis (com risco de explosão em massa)",
          "1.6 Artigos extremamente insensíveis",
        ],
      },
      {
        subtitulo: "Classe 2 — Gases",
        conteudo: [
          "2.1 Gases inflamáveis (incluindo gases liquefeitos refrigerados)",
          "2.2 Gases não inflamáveis e não tóxicos",
          "2.3 Gases tóxicos",
        ],
      },
      {
        subtitulo: "Classe 3 — Líquidos Inflamáveis",
        conteudo: [
          "Líquidos com ponto de fulgor inferior a 60°C (recipiente fechado). Incluem combustíveis, solventes, tintas e vernizes.",
        ],
      },
      {
        subtitulo: "Classe 4 — Sólidos Inflamáveis",
        conteudo: [
          "4.1 Sólidos inflamáveis, substâncias auto-reativas e explosivos dessensibilizados",
          "4.2 Substâncias sujeitas a combustão espontânea",
          "4.3 Substâncias que, em contato com água, emitem gases inflamáveis",
        ],
      },
      {
        subtitulo: "Classe 5 — Oxidantes e Peróxidos",
        conteudo: [
          "5.1 Substâncias oxidantes (agentes que favorecem a combustão)",
          "5.2 Peróxidos orgânicos (termicamente instáveis, podem sofrer decomposição exotérmica)",
        ],
      },
      {
        subtitulo: "Classe 6 — Substâncias Tóxicas e Infecciosas",
        conteudo: [
          "6.1 Substâncias tóxicas (venenos capazes de causar morte ou dano grave à saúde)",
          "6.2 Substâncias infecciosas (contêm agentes patogênicos — vírus, bactérias, parasitas, fungos ou príons)",
        ],
      },
      {
        subtitulo: "Classe 7 — Materiais Radioativos",
        conteudo: [
          "Materiais que contêm radionuclídeos em quantidade e/ou atividade acima dos limites especificados. Categorias: I-BRANCA, II-AMARELA, III-AMARELA.",
        ],
      },
      {
        subtitulo: "Classe 8 — Substâncias Corrosivas",
        conteudo: [
          "Substâncias que causam destruição visível ou alterações irreversíveis na pele humana ou que corroem aço ou alumínio.",
        ],
      },
      {
        subtitulo: "Classe 9 — Substâncias e Artigos Perigosos Diversos",
        conteudo: [
          "Materiais que apresentam risco durante o transporte, mas que não se enquadram nas outras classes. Incluem baterias de lítio, veículos movidos a combustível, substâncias perigosas ao meio ambiente, etc.",
        ],
      },
    ],
  },
  {
    id: "placas",
    titulo: "Placas de Risco e Painéis de Segurança",
    icone: "🔶",
    componenteEspecial: "placas-risco",
    itens: [
      {
        subtitulo: "Placa de Risco (Losango)",
        conteudo: [
          "Formato losangular (diamante) colorido, afixado nos veículos de transporte.",
          "A COR indica a classe de risco principal do material.",
          "O SÍMBOLO na metade superior indica a natureza do risco (chama, caveira, etc.).",
          "O NÚMERO na metade inferior indica a classe ou divisão de risco.",
        ],
      },
      {
        subtitulo: "Painel de Segurança (Retângulo Laranja)",
        conteudo: [
          "Retângulo laranja com borda preta, afixado ao lado da placa de risco.",
          "Número superior: Número de Risco (identifica o tipo e a intensidade do risco).",
          "Número inferior: Número ONU (identifica o material específico).",
          "Se o número de risco for precedido pela letra 'X', o material reage perigosamente com água.",
        ],
      },
      {
        subtitulo: "Número de Risco — Significado dos Dígitos",
        conteudo: [
          "2 — Emanação de gás devido à pressão ou reação química",
          "3 — Inflamabilidade de líquidos (vapores) e gases, ou líquido sujeito a auto-aquecimento",
          "4 — Inflamabilidade de sólidos, ou sólido sujeito a auto-aquecimento",
          "5 — Efeito oxidante (intensifica o fogo)",
          "6 — Toxicidade ou risco de infecção",
          "7 — Radioatividade",
          "8 — Corrosividade",
          "9 — Risco de reação violenta espontânea (inclui risco de explosão, decomposição e polimerização)",
          "X — Reage perigosamente com água",
          "Repetição do dígito indica intensificação do risco (ex: 33 = líquido muito inflamável; 66 = substância muito tóxica).",
        ],
      },
    ],
  },
  {
    id: "veiculos",
    titulo: "Identificação de Veículos de Transporte",
    icone: "🚛",
    componenteEspecial: "veiculos-tanque",
    itens: [
      {
        subtitulo: "Caminhão-Tanque",
        conteudo: [
          "Tanque cilíndrico horizontal, geralmente de aço ou alumínio.",
          "Pode transportar líquidos ou gases liquefeitos sob pressão.",
          "Placas de risco nas laterais e traseira. Painel de segurança nas laterais.",
          "Em caso de acidente: verificar se há vazamento; não se aproximar se houver vapores visíveis.",
        ],
      },
      {
        subtitulo: "Vagão-Tanque Ferroviário",
        conteudo: [
          "Tanque cilíndrico montado sobre truques ferroviários.",
          "Capacidade muito superior ao caminhão-tanque (até 130.000 litros).",
          "Placas de risco em ambas as laterais.",
          "Em caso de incêndio envolvendo vagão-tanque: ISOLAR 800 metros em todas as direções. Evacuação em grande perímetro pode ser necessária.",
        ],
      },
      {
        subtitulo: "Contêiner Intermodal",
        conteudo: [
          "Recipiente padronizado para transporte multimodal (rodoviário, ferroviário, marítimo).",
          "Placas de risco em todas as faces externas. Número ONU no painel de segurança.",
          "Verificar documentação (FISPQ/SDS) dentro do porta-documentos do contêiner.",
        ],
      },
      {
        subtitulo: "Embalagens e Volumes",
        conteudo: [
          "Tambores, bombonas, caixas, sacos e IBCs (Intermediate Bulk Containers).",
          "Rótulos de risco afixados na embalagem, conforme a classe do material.",
          "Número ONU precedido das letras 'UN' ou 'ONU' deve estar visível.",
        ],
      },
    ],
  },
  {
    id: "isolamento-inicial",
    titulo: "Orientações para Isolamento Inicial",
    icone: "🔴",
    itens: [
      {
        conteudo: [
          "O isolamento inicial é a distância em METROS dentro da qual todas as pessoas devem ser evacuadas ou protegidas em abrigo.",
          "Aplica-se em TODAS as direções (360°) a partir do ponto de derramamento ou vazamento.",
        ],
      },
      {
        subtitulo: "Ação Protetora (Distância em Quilômetros)",
        conteudo: [
          "A distância de ação protetora é medida a FAVOR DO VENTO, a partir do ponto de derramamento.",
          "Duas condições: DIA (atmosfera instável, maior dispersão) e NOITE (atmosfera estável, menor dispersão, distâncias maiores).",
          "Dois cenários: PEQUENO DERRAMAMENTO (até ~200 litros) e GRANDE DERRAMAMENTO (acima de ~200 litros ou múltiplas embalagens).",
        ],
      },
      {
        subtitulo: "Fatores que Influenciam as Distâncias",
        conteudo: [
          "Velocidade e direção do vento.",
          "Condições de estabilidade atmosférica (dia vs. noite).",
          "Terreno (áreas confinadas retêm gases/vapores por mais tempo).",
          "Quantidade de material derramado ou vazado.",
          "As distâncias da tabela são estimativas conservadoras — ajustar conforme as condições locais.",
        ],
      },
    ],
  },
  {
    id: "telefones",
    titulo: "Telefones de Emergência",
    icone: "📞",
    itens: [
      {
        subtitulo: "Serviços de Emergência",
        conteudo: [
          "193 — Corpo de Bombeiros",
          "192 — SAMU (Serviço de Atendimento Móvel de Urgência)",
          "199 — Defesa Civil",
          "190 — Polícia Militar",
        ],
      },
      {
        subtitulo: "Órgãos Ambientais e Químicos",
        conteudo: [
          "0800-061-8080 — Linha Verde IBAMA (emergências ambientais)",
          "PRÓ-QUÍMICA: (11) 0800-011-8270 (ABIQUIM — 24h para emergências químicas)",
          "P2R2 — Plano Nacional de Prevenção, Preparação e Resposta Rápida a Emergências Ambientais com Produtos Químicos Perigosos: consultar órgão ambiental estadual.",
        ],
      },
      {
        subtitulo: "Agências Reguladoras de Transporte",
        conteudo: [
          "ANTT — Agência Nacional de Transportes Terrestres: 166",
          "ANTAQ — Agência Nacional de Transportes Aquaviários: 0800-644-0606",
          "DNIT — Departamento Nacional de Infraestrutura de Transportes: 0800-723-2001",
        ],
      },
    ],
  },
  {
    id: "epi",
    titulo: "Equipamentos de Proteção Individual (EPI)",
    icone: "🦺",
    itens: [
      {
        subtitulo: "Nível A — Proteção Máxima",
        conteudo: [
          "Roupa de proteção química totalmente encapsulada e resistente a vapores.",
          "SCBA (Equipamento de Respiração Autônoma com Pressão Positiva) interno à roupa.",
          "Uso: substâncias com alto risco por inalação, contato ou absorção cutânea. Atmosferas IDLH (Imediatamente Perigosas à Vida ou à Saúde).",
        ],
      },
      {
        subtitulo: "Nível B — Proteção Respiratória Máxima, Proteção Cutânea Moderada",
        conteudo: [
          "SCBA com pressão positiva.",
          "Roupa de proteção química resistente a respingos (não encapsulada).",
          "Uso: quando o risco respiratório é alto, mas o risco cutâneo é menor.",
        ],
      },
      {
        subtitulo: "Nível C — Proteção Cutânea Similar ao Nível B",
        conteudo: [
          "Máscara facial completa com filtro/cartucho químico (APR — Aparelho de Proteção Respiratória com filtro).",
          "Roupa de proteção contra respingos.",
          "Uso: contaminante e concentração conhecidos; nível de oxigênio acima de 19,5%.",
        ],
      },
      {
        subtitulo: "Nível D — Proteção Mínima",
        conteudo: [
          "Uniforme de trabalho padrão ou roupas comuns.",
          "Sem proteção respiratória.",
          "Uso: apenas quando não há risco de inalação ou contato com materiais perigosos.",
        ],
      },
    ],
  },
  {
    id: "descontaminacao",
    titulo: "Procedimentos de Descontaminação",
    icone: "🚿",
    itens: [
      {
        conteudo: [
          "Estabelecer o corredor de descontaminação NA ZONA MORNA, entre a zona quente (contaminada) e a zona fria (limpa).",
          "Todo pessoal e equipamento que sair da zona quente DEVE ser descontaminado antes de entrar na zona fria.",
        ],
      },
      {
        subtitulo: "Descontaminação de Vítimas",
        conteudo: [
          "Remover toda a roupa contaminada — cortar se necessário, evitando puxar sobre a cabeça.",
          "Lavar com grandes quantidades de água corrente (mínimo 15-20 minutos para exposição cutânea).",
          "NÃO usar água quente — pode aumentar a absorção de alguns produtos químicos.",
          "Conter a água de descontaminação para evitar contaminação ambiental.",
          "Tratar as vítimas com respeito e privacidade. Fornecer cobertas ou roupas limpas.",
        ],
      },
      {
        subtitulo: "Descontaminação de Equipamentos",
        conteudo: [
          "Lavar com solução detergente ou descontaminante adequado ao produto.",
          "Enxaguar com água limpa.",
          "Verificar com detector se a descontaminação foi eficaz.",
          "Equipamentos que não puderem ser descontaminados devem ser embalados e descartados como resíduo perigoso.",
        ],
      },
    ],
  },
];
