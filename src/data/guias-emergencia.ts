// Guias de Emergência (Páginas Laranja) — traduzidos para pt-BR
// ERG 2024 — Todos os 64 guias completos (gerado automaticamente a partir dos PDFs oficiais)
export interface GuiaEmergencia {
  numero: string;
  titulo: string;
  riscosPotenciais: {
    incendioExplosao: string[];
    saude: string[];
  };
  segurancaPublica: {
    vestuario: string[];
    evacuacao: string[];
  };
  respostaEmergencia: {
    incendio: string[];
    derramamento: string[];
    primeirosSocorros: string[];
  };
}

export const guiasEmergencia: GuiaEmergencia[] = [
  {
    numero: "111",
    titulo: "Carga Mista / Materiais não Identificados",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode explodir pelo calor, choque, fricção ou contaminação.",
        "Pode reagir violenta ou explosivamente em contato com ar, água ou espuma.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "A inalação, ingestão ou contato com a substância pode causar lesões graves, infecção, doença ou morte.",
        "Concentrações elevadas de gás podem causar asfixia sem aviso prévio.",
        "O contato pode causar queimaduras na pele e nos olhos.",
        "O fogo ou contato com água pode produzir gases irritantes, tóxicos e/ou corrosivos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata"
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO deixar água entrar nos recipientes.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "Manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Derramamento Pequeno",
        "Recolher com areia ou outro material absorvente não combustível e colocar em recipientes para descarte posterior.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "112",
    titulo: "Explosivos — Divisão 1.1, 1.2, 1.3 ou 1.5",
    riscosPotenciais: {
      incendioExplosao: [
        "PODE EXPLODIR E LANÇAR FRAGMENTOS A 1.600 METROS OU MAIS SE O FOGO ATINGIR A CARGA."
      ],
      saude: [
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um vagão ou reboque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO combater o incêndio quando o fogo atingir a carga! A carga pode EXPLODIR!",
        "Parar todo o tráfego e limpar a área por pelo menos 1.600 metros em todas as direções e deixar queimar.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Incêndio de PNEU ou VEÍCULO",
        "Usar muita água — INUNDAR! Se não houver água disponível, usar CO₂, pó químico seco ou terra.",
        "Se possível, e SEM RISCO, usar canhões monitores ou dispositivos automáticos da distância máxima para evitar que o fogo se alastre para a área de carga.",
        "Prestar atenção especial a incêndios de pneus, pois pode haver reignição. Ficar de prontidão, a uma distância segura, com extintor pronto para possível reignição."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "NÃO OPERAR TRANSMISSORES DE RÁDIO DENTRO DE 100 METROS DE DETONADORES",
        "ELÉTRICOS.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "113",
    titulo: "Explosivos — Divisão 1.4 ou 1.6",
    riscosPotenciais: {
      incendioExplosao: [
        "Material inflamável/combustível.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Material SECO pode explodir se exposto a calor, chama, fricção ou choque; tratar como explosivo.",
        "Manter o material molhado com água ou tratar como explosivo (GUIA 112)."
      ],
      saude: [
        "Alguns são tóxicos e podem ser fatais se inalados, ingeridos ou absorvidos pela pele.",
        "Dinitrofenol, umedecido (ONU 1320); Dinitrofenolatos, umedecidos (ONU 1321); Dinitro-o-cresolato de sódio, umedecido (ONU 1348); e Azida de bário, umedecida (ONU 1571) são reconhecidamente tóxicos.",
        "O contato pode causar queimaduras na pele e nos olhos.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO combater o incêndio quando o fogo atingir a carga! A carga pode EXPLODIR!",
        "Parar todo o tráfego e limpar a área por pelo menos 1.600 metros em todas as direções e deixar queimar.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Incêndio de PNEU ou VEÍCULO",
        "Usar muita água — INUNDAR! Se não houver água disponível, usar CO₂, pó químico seco ou terra.",
        "Se possível, e SEM RISCO, usar canhões monitores ou dispositivos automáticos da distância máxima para evitar que o fogo se alastre para a área de carga.",
        "Prestar atenção especial a incêndios de pneus, pois pode haver reignição. Ficar de prontidão, a uma distância segura, com extintor pronto para possível reignição."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Derramamento Pequeno",
        "Lavar a área com grandes quantidades de água.",
        "Derramamento Grande",
        "Umedecer com água e confinar com diques para descarte posterior.",
        "MANTER O PRODUTO \"UMEDECIDO\" MOLHADO ADICIONANDO LENTAMENTE GRANDES QUANTIDADES DE ÁGUA."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "114",
    titulo: "Explosivos — Divisão 1.4 (Agentes de Detonação)",
    riscosPotenciais: {
      incendioExplosao: [
        "PODE EXPLODIR E LANÇAR FRAGMENTOS A 800 METROS OU MAIS SE O FOGO ATINGIR A CARGA."
      ],
      saude: [
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um vagão ou reboque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "Se o incêndio ameaçar a área de carga contendo embalagens com rótulo 1.4S, considerar isolar pelo menos 15 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO combater o incêndio quando o fogo atingir a carga! A carga pode EXPLODIR!",
        "Parar todo o tráfego e limpar a área por pelo menos 800 metros em todas as direções e deixar queimar.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Incêndio de PNEU ou VEÍCULO",
        "Usar muita água — INUNDAR! Se não houver água disponível, usar CO₂, pó químico seco ou terra.",
        "Se possível, e SEM RISCO, usar canhões monitores ou dispositivos automáticos da distância máxima para evitar que o fogo se alastre para a área de carga.",
        "Prestar atenção especial a incêndios de pneus, pois pode haver reignição. Ficar de prontidão, a uma distância segura, com extintor pronto para possível reignição.",
        "Incêndio de Classe 1.4S",
        "Embalagens com rótulo 1.4S são projetadas de forma que, quando envolvidas em incêndio, podem queimar vigorosamente com detonações localizadas e projeção de fragmentos.",
        "Os efeitos geralmente se limitam à vizinhança imediata das embalagens.",
        "Combater o incêndio com precauções normais a uma distância razoável."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "NÃO OPERAR TRANSMISSORES DE RÁDIO DENTRO DE 100 METROS DE DETONADORES",
        "ELÉTRICOS.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "115",
    titulo: "Gases — Inflamáveis (Incluindo Líquidos Refrigerados)",
    riscosPotenciais: {
      incendioExplosao: [
        "EXTREMAMENTE INFLAMÁVEL.",
        "Será facilmente incendiado por calor, faíscas ou chamas.",
        "Formará misturas explosivas com o ar.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Metano (ONU 1971) e mistura de Hidrogênio e Metano comprimida (ONU 2034) são mais leves que o ar e se elevarão. Incêndios de Hidrogênio e Deutério são difíceis de detectar pois queimam com chama invisível. Usar método alternativo de detecção (câmera térmica, cabo de vassoura, etc.).",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem se projetar como foguetes. Podem vaporizar explosivamente."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "Alguns podem ser irritantes se inalados em altas concentrações.",
        "O contato com gás, gás liquefeito ou líquidos criogênicos pode causar queimaduras, lesões graves e/ou congelamento.",
        "O fogo pode produzir gases irritantes e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções.",
        "Em incêndios envolvendo Gases Liquefeitos de Petróleo (GLP) (ONU 1075), Butano (ONU 1011), Butileno (ONU 1012),",
        "Isobutileno (ONU 1055), Propileno (ONU 1077), Isobutano (ONU 1969) e Propano (ONU 1978), consultar também a seção \"BLEVE – Precauções de Segurança\"."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Mistura de Hidrogênio e Metano, comprimida (ONU 2034), queima com chama invisível. Usar método alternativo de detecção (câmera térmica, cabo de vassoura, etc.).",
        "Pó químico seco ou CO₂.",
        "Neblina d'água ou jatos regulares.",
        "Se possível com segurança, remover recipientes intactos da área ao redor do incêndio. Usar espuma de alta expansão.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial a favor do vento por pelo menos 800 metros.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções; também considerar evacuação inicial de 1.600 metros em todas as direções.",
        "No caso de incêndios envolvendo GLP (ONU 1075), Butano (ONU 1011), Butileno (ONU 1012), Isobutileno (ONU 1055), consultar o Guia 115.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento. Usar espuma de alta expansão, se disponível, para reduzir vapores.",
        "Prevenir a dispersão de vapores por esgotos, sistemas de ventilação e áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado. Os recipientes podem romper sem aviso."
      ],
      primeirosSocorros: [
        "Roupas congeladas na pele devem ser descongeladas antes de serem removidas.",
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "116",
    titulo: "Gases — Inflamáveis (Instáveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "EXTREMAMENTE INFLAMÁVEL.",
        "Será facilmente incendiado por calor, faíscas ou chamas.",
        "Formará misturas explosivas com o ar. Acetileno (ONU 1001, ONU 3374) pode reagir explosivamente mesmo na ausência de ar.",
        "Dissilano (ONU 3553) e Silano (ONU 2203) se inflamam espontaneamente no ar e podem reignir.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "Alguns podem ser tóxicos se inalados em altas concentrações.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo pode produzir gases irritantes e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Pó químico seco ou CO₂.",
        "Neblina d'água ou jatos regulares.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "117",
    titulo: "Gases — Tóxicos — Inflamáveis (Perigo Extremo)",
    riscosPotenciais: {
      incendioExplosao: [
        "Estes materiais são extremamente inflamáveis.",
        "Pode formar misturas explosivas com o ar.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "TÓXICO; EXTREMAMENTE PERIGOSO.",
        "Pode ser fatal se inalado ou absorvido pela pele.",
        "O odor inicial pode ser irritante ou desagradável e pode anestesiar o sentido do olfato.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções; também considerar evacuação inicial de 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "118",
    titulo: "Gases — Inflamáveis — Corrosivos",
    riscosPotenciais: {
      incendioExplosao: [
        "EXTREMAMENTE INFLAMÁVEL.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode formar misturas explosivas com o ar.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Alguns destes materiais podem reagir violentamente com água.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "Pode causar efeitos tóxicos se inalado.",
        "Vapores são extremamente irritantes.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções; também considerar evacuação inicial de 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Pó químico seco ou CO₂.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "119",
    titulo: "Gases — Tóxicos — Inflamáveis",
    riscosPotenciais: {
      incendioExplosao: [
        "Inflamável; pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode formar misturas explosivas com o ar. Óxido de etileno (ONU 1040) pode reagir explosivamente mesmo na ausência de ar.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Alguns destes materiais podem reagir violentamente com água.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "TÓXICO; pode ser fatal se inalado ou absorvido pela pele. Alguns podem causar queimaduras graves na pele e danos aos olhos.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "Roupas de proteção para bombeiros proporcionam proteção limitada APENAS em situações de incêndio; NÃO são eficazes em situações de derramamento com possível contato direto com a substância."
      ],
      evacuacao: [
        "Derramamento Grande",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções; também considerar evacuação inicial de 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Incêndio Pequeno",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Incêndio Grande",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "PARA CLOROSSILANOS, NÃO USAR ÁGUA; usar espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "PARA CLOROSSILANOS, usar espuma resistente a álcool para reduzir vapores.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Consultar a seção de Primeiros Socorros Gerais.",
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "120",
    titulo: "Gases — Inertes (Incluindo Líquidos Refrigerados)",
    riscosPotenciais: {
      incendioExplosao: [
        "Gases não inflamáveis.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "O contato com gás, gás liquefeito ou líquidos criogênicos pode causar queimaduras, lesões graves e/ou congelamento."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento Grande",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Permitir que a substância evapore.",
        "Ventilar a área. Recipientes podem romper sem aviso."
      ],
      primeirosSocorros: [
        "Roupas congeladas na pele devem ser descongeladas antes de serem removidas.",
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas."
      ]
    }
  },
  {
    numero: "121",
    titulo: "Gases — Inertes",
    riscosPotenciais: {
      incendioExplosao: [],
      saude: []
    },
    segurancaPublica: {
      vestuario: [],
      evacuacao: []
    },
    respostaEmergencia: {
      incendio: [],
      derramamento: [],
      primeirosSocorros: []
    }
  },
  {
    numero: "122",
    titulo: "Gases — Oxidantes (Incluindo Líquidos Refrigerados)",
    riscosPotenciais: {
      incendioExplosao: [
        "A substância não queima, mas suporta a combustão.",
        "Alguns podem reagir explosivamente com combustíveis.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "O contato com gás, gás liquefeito ou líquidos criogênicos pode causar queimaduras, lesões graves e/ou congelamento.",
        "O fogo pode produzir gases irritantes e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Pó químico seco ou CO₂.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "Manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Permitir que a substância evapore.",
        "Isolar a área até que o gás se disperse. Recipientes podem romper sem aviso."
      ],
      primeirosSocorros: [
        "Roupas congeladas na pele devem ser descongeladas antes de serem removidas.",
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas."
      ]
    }
  },
  {
    numero: "123",
    titulo: "Gases — Tóxicos",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns podem queimar, mas nenhum se inflama facilmente.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e/ou corrosivo através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "TÓXICO; pode ser fatal se inalado ou absorvido pela pele.",
        "Vapores podem ser irritantes e/ou corrosivos.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco ou CO₂.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "NÃO deixar água entrar nos recipientes.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas."
      ]
    }
  },
  {
    numero: "124",
    titulo: "Gases — Oxidantes",
    riscosPotenciais: {
      incendioExplosao: [
        "A substância não queima, mas suporta a combustão.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Estes são oxidantes fortes e reagirão vigorosamente ou explosivamente com muitos materiais, incluindo combustíveis.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Alguns reagirão violentamente com ar, ar úmido e/ou água.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e/ou corrosivo através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; pode ser fatal se inalado ou absorvido pela pele.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Conter o incêndio e deixar queimar. Se for necessário combater, recomendam-se neblina d'água ou jatos.",
        "Somente água; não usar pó químico seco, CO₂ ou Halon®.",
        "NÃO deixar água entrar nos recipientes.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado.",
        "Ventilar a área."
      ],
      primeirosSocorros: [
        "Roupas congeladas na pele devem ser descongeladas antes de serem removidas."
      ]
    }
  },
  {
    numero: "125",
    titulo: "Gases — Tóxicos e/ou Corrosivos",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns podem queimar, mas nenhum se inflama facilmente.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Alguns destes materiais podem reagir violentamente com água.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e/ou corrosivo através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes.",
        "Para ONU 1005: Amônia anidra, em altas concentrações em espaços confinados, apresenta risco de inflamabilidade se uma fonte de ignição for introduzida."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; pode ser fatal se inalado, ingerido ou absorvido pela pele.",
        "Os vapores são extremamente irritantes e corrosivos.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções; também considerar evacuação inicial de 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco ou CO₂.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "NÃO deixar água entrar nos recipientes.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas.",
        "Em caso de contato da pele com fluoreto de hidrogênio anidro (ONU 1052), se gel de gluconato de cálcio estiver disponível, enxaguar por 5 minutos e aplicar o gel. Caso contrário, continuar enxaguando até que tratamento médico esteja disponível."
      ]
    }
  },
  {
    numero: "126",
    titulo: "Gases — Comprimidos ou Liquefeitos (Incluindo Gases Refrigerantes)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns podem queimar, mas nenhum se inflama facilmente.",
        "Os recipientes podem explodir quando aquecidos.",
        "Cilindros rompidos podem ser projetados como foguetes."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "O contato com gás ou gás liquefeito pode causar queimaduras, lesão grave e/ou congelamento.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Pó químico seco ou CO₂.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Alguns desses materiais, se derramados, podem evaporar deixando um resíduo inflamável."
      ],
      derramamento: [
        "Derramamento Grande",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Permitir que a substância evapore.",
        "Ventilar a área."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas."
      ]
    }
  },
  {
    numero: "127",
    titulo: "Líquidos Inflamáveis (Miscíveis em Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapores em ambientes internos, externos ou em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água."
      ],
      saude: [
        "Inalação ou contato com o material pode irritar ou queimar a pele e os olhos.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "O combate ao incêndio pode ser ineficiente.",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Neblina d'água pode reduzir vapores, mas pode não prevenir ignição em espaços fechados."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "128",
    titulo: "Líquidos Inflamáveis (Imiscíveis em Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapores em ambientes internos, externos ou em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água.",
        "A substância pode ser transportada quente.",
        "Para veículos híbridos, consultar também o GUIA 147 (baterias de íon-lítio ou íon-sódio) ou GUIA 138 (baterias de sódio).",
        "Se alumínio fundido estiver envolvido, consultar o GUIA 169."
      ],
      saude: [
        "Inalação ou contato com o material pode irritar ou queimar a pele e os olhos.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "O combate ao incêndio pode ser ineficiente.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular. Se a espuma regular for ineficaz ou indisponível, usar espuma resistente a álcool.",
        "Neblina d'água ou espuma regular. Se a espuma regular for ineficaz ou indisponível, usar espuma resistente a álcool.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Para petróleo cru, não borrifar água diretamente em um vagão-tanque rompido. Isso pode levar a um boil-over perigoso.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Neblina d'água pode reduzir vapores, mas pode não prevenir ignição em espaços fechados."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "129",
    titulo: "Líquidos Inflamáveis (Miscíveis em Água / Nocivos)",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapores em ambientes internos, externos ou em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água."
      ],
      saude: [
        "Pode causar efeitos tóxicos se inalado ou absorvido pela pele.",
        "Inalação ou contato com o material pode irritar ou queimar a pele e os olhos.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "O combate ao incêndio pode ser ineficiente.",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Não usar extintores de pó químico seco para controlar incêndios envolvendo nitrometano (ONU 1261) ou nitroetano (ONU 2842).",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Neblina d'água pode reduzir vapores, mas pode não prevenir ignição em espaços fechados."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "130",
    titulo: "Líquidos Inflamáveis (Imiscíveis em Água / Nocivos)",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapores em ambientes internos, externos ou em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água."
      ],
      saude: [
        "Pode causar efeitos tóxicos se inalado ou absorvido pela pele.",
        "Inalação ou contato com o material pode irritar ou queimar a pele e os olhos.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "O combate ao incêndio pode ser ineficiente.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular. Se a espuma regular for ineficaz ou indisponível, usar espuma resistente a álcool.",
        "Neblina d'água ou espuma regular. Se a espuma regular for ineficaz ou indisponível, usar espuma resistente a álcool.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Neblina d'água pode reduzir vapores, mas pode não prevenir ignição em espaços fechados."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "131",
    titulo: "Líquidos Inflamáveis — Tóxicos",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapor e envenenamento em ambientes internos, externos ou esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água."
      ],
      saude: [
        "TÓXICO; pode ser fatal se inalado, ingerido ou absorvido pela pele.",
        "Inalação ou contato com alguns desses materiais irritará ou queimará a pele e os olhos.",
        "Cloroacetato de metila (ONU 2295) é irritante ocular/lacrimogêneo.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 50 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "O combate ao incêndio pode ser ineficiente.",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Derramamento Pequeno / Derramamento Grande",
        "Absorver com terra, areia ou outro material não combustível e transferir para recipientes para descarte posterior. Confinar com diques à frente do derramamento líquido. Neblina d'água pode reduzir vapores.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "132",
    titulo: "Líquidos Inflamáveis — Corrosivos",
    riscosPotenciais: {
      incendioExplosao: [
        "Material inflamável/combustível.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Vapores podem formar misturas explosivas com o ar.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Risco de explosão de vapores em ambientes internos, externos ou em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Os recipientes podem explodir quando aquecidos.",
        "Muitos líquidos flutuam na água."
      ],
      saude: [
        "Pode causar efeitos tóxicos se inalado ou ingerido.",
        "O contato com a substância pode causar queimaduras graves na pele e nos olhos.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 50 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Alguns destes materiais podem reagir violentamente com água.",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "NÃO deixar água entrar nos recipientes.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "Absorver com terra, areia ou outro material não combustível.",
        "Para hidrazina, absorver com areia SECA ou absorvente inerte (vermiculita ou mantas absorventes).",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material absorvido.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Neblina d'água pode reduzir vapores, mas pode não prevenir ignição em espaços fechados."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "133",
    titulo: "Sólidos Inflamáveis",
    riscosPotenciais: {
      incendioExplosao: [
        "Material inflamável/combustível.",
        "Pode ser incendiado por fricção, calor, faíscas ou chamas.",
        "Alguns podem queimar rapidamente com efeito de labareda.",
        "Pós, poeiras, aparas, limalhas, torneamentos ou cortes podem explodir ou queimar com violência explosiva.",
        "A substância pode ser transportada em forma fundida a uma temperatura que pode estar acima de seu ponto de fulgor.",
        "Pode reignir após o incêndio ser extinto."
      ],
      saude: [
        "O fogo pode produzir gases irritantes e/ou tóxicos.",
        "O contato pode causar queimaduras na pele e nos olhos.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂, areia, terra, neblina d'água ou espuma regular.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Pigmentos ou Pastas Metálicas (ex.: \"Pasta de Alumínio\")",
        "Incêndios de Pasta de Alumínio devem ser tratados como incêndio de metal combustível. Usar areia SECA, pó de grafite, pó químico seco especial para metais.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Derramamento Pequeno Seco",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área de derramamento.",
        "Derramamento Grande",
        "Umedecer com água e confinar com diques para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: [
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "134",
    titulo: "Sólidos Inflamáveis — Tóxicos e/ou Corrosivos",
    riscosPotenciais: {
      incendioExplosao: [
        "Material inflamável/combustível.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Quando aquecidos, os vapores podem formar misturas explosivas com o ar: risco de explosão em ambientes internos, externos e em esgotos.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato com a pele pode causar lesão grave ou morte.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "NÃO deixar água entrar nos recipientes.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Considerar evacuação inicial a favor do vento por pelo menos 100 metros.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Usar ferramentas limpas e que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária."
      ]
    }
  },
  {
    numero: "135",
    titulo: "Substâncias — Combustão Espontânea",
    riscosPotenciais: {
      incendioExplosao: [
        "Material inflamável/combustível.",
        "Pode inflamar-se em contato com ar úmido ou umidade.",
        "Pode queimar rapidamente com efeito de labareda.",
        "Alguns reagem vigorosamente ou explosivamente em contato com água.",
        "Algumas podem se decompor explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Pode reignir após o incêndio ser extinto.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A inalação de produtos de decomposição pode causar lesão grave ou morte.",
        "O contato com a substância pode causar queimaduras graves na pele e nos olhos.",
        "A água de combate a incêndio ou de diluição pode causar contaminação ambiental. Pode ser absorvido pela pele."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA, CO₂ NEM ESPUMA SOBRE O PRÓPRIO MATERIAL.",
        "Alguns desses materiais podem reagir violentamente com água. Para ONU 1923 e ONU 1929, USAR GRANDES QUANTIDADES DE ÁGUA para incêndios PEQUENOS e GRANDES para deter a reação. Abafamento não funcionará para estes materiais, pois não precisam de ar para queimar.",
        "Pó químico seco, carbonato de sódio, cal ou areia SECA, EXCETO para ONU 1384, ONU 1923, ONU 1929 e ONU 3342.",
        "Areia SECA, pó químico seco, carbonato de sódio ou cal, EXCETO para ONU 1384, ONU 1923, ONU 1929 e ONU 3342, ou retirar-se da área e deixar queimar.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes ou em contato com a substância.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "ONU 1923 e ONU 1929, dissolver em 5 partes de água e recolher para descarte adequado.",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "136",
    titulo: "Substâncias — Combustão Espontânea — Tóxicas e/ou Corrosivas (Reativas ao Ar)",
    riscosPotenciais: {
      incendioExplosao: [
        "Extremamente inflamável; incendiar-se-á se exposto ao ar.",
        "Queima rapidamente, liberando fumaça densa, branca e irritante.",
        "A substância pode ser transportada em forma fundida.",
        "Pode reignir após o incêndio ser extinto.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "TÓXICO e/ou CORROSIVO; a ingestão da substância ou inalação de produtos de decomposição causará lesão grave ou morte.",
        "O contato com a substância pode causar queimaduras graves na pele e nos olhos.",
        "Alguns efeitos podem ser experimentados devido à absorção pela pele.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO. O contato com a substância é possível.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "Cobrir com água, areia ou terra. Recolher com pá em recipiente metálico e manter o material submerso em água.",
        "Derramamento Grande",
        "Fazer diques para descarte posterior e cobrir com areia úmida ou terra.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Neblina d'água, areia molhada ou terra molhada.",
        "Neblina d'água ou jatos regulares.",
        "Não dispersar o material derramado com jatos de água de alta pressão.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Cobrir com água, areia ou terra. Colocar com pá em recipiente metálico e manter o material submerso em água.",
        "Dicar para descarte posterior e cobrir com areia ou terra úmida.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: [
        "Em caso de contato com a substância, manter as áreas de pele expostas imersas em água ou cobertas com bandagens molhadas até receber atendimento médico.",
        "A remoção de material fundido solidificado da pele requer assistência médica.",
        "Remover e isolar roupas e calçados contaminados no local e colocar em recipiente metálico cheio de água. Risco de incêndio se deixar secar."
      ]
    }
  },
  {
    numero: "137",
    titulo: "Substâncias — Reativas com Água — Corrosivas",
    riscosPotenciais: {
      incendioExplosao: [
        "EXCETO O ANIDRIDO ACÉTICO (ONU 1715), QUE É INFLAMÁVEL, alguns desses materiais podem queimar, mas nenhum se inflama facilmente.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "A substância reagirá com água (algumas violentamente), liberando gases corrosivos e/ou tóxicos.",
        "Gases inflamáveis/tóxicos podem se acumular em áreas confinadas (porões, tanques, vagões-tanque, etc.).",
        "O contato com metais pode gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos ou contaminados com água.",
        "A substância pode ser transportada em forma fundida."
      ],
      saude: [
        "CORROSIVO e/ou TÓXICO; inalação, ingestão ou contato (pele, olhos) com vapores, poeiras ou substância pode causar lesão grave, queimaduras ou morte.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A reação com água pode gerar muito calor, aumentando a concentração de fumaça no ar.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores; não colocar água diretamente no vazamento, na área de derramamento ou dentro do recipiente.",
        "Manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Quando o material não estiver envolvido em incêndio, não usar água no material.",
        "Pó químico seco ou CO₂.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Inundar a área do incêndio com grandes quantidades de água, abatendo os vapores com neblina d'água. Se o suprimento de água for insuficiente, os socorristas devem se retirar.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO deixar água entrar nos recipientes.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores; NÃO colocar água diretamente no vazamento, área derramada ou dentro dos recipientes.",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível, seguido de folha plástica para minimizar espalhamento ou contato com chuva.",
        "Usar ferramentas limpas e que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária.",
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "138",
    titulo: "Substâncias — Reativas com Água (Emitindo Gases Inflamáveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Produzem gases inflamáveis em contato com água.",
        "Pode inflamar-se em contato com água ou ar úmido.",
        "Alguns reagem vigorosamente ou explosivamente em contato com água.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode reignir após o incêndio ser extinto.",
        "Alguns são transportados em líquidos altamente inflamáveis."
      ],
      saude: [
        "Inalação ou contato com vapores, substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "Pode produzir soluções corrosivas em contato com água.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA OU ESPUMA.",
        "Pó químico seco, barrilha, cal ou areia.",
        "Areia SECA, pó químico seco, carbonato de sódio ou cal, ou retirar-se da área e deixar queimar.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Metais ou Pós (Alumínio, Lítio, Magnésio, etc.)",
        "Usar pó químico seco, areia SECA, pó de cloreto de sódio, pó de grafite ou extintores Classe D.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Fazer diques para descarte posterior; não aplicar água a menos que instruído.",
        "Derramamento de Pó",
        "Cobrir o derramamento de pó com lona plástica para minimizar a dispersão e manter o pó seco.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Em caso de contato com a substância, limpar da pele imediatamente; lavar a pele ou olhos com água corrente por pelo menos 20 minutos."
      ]
    }
  },
  {
    numero: "139",
    titulo: "Substâncias — Reativas com Água (Emitindo Gases Inflamáveis e Tóxicos)",
    riscosPotenciais: {
      incendioExplosao: [
        "Produzem gases inflamáveis e tóxicos em contato com água.",
        "Pode inflamar-se em contato com água ou ar úmido.",
        "Alguns reagem vigorosamente ou explosivamente em contato com água.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode reignir após o incêndio ser extinto.",
        "Alguns são transportados em líquidos altamente inflamáveis.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "Altamente tóxico: contato com água produz gás tóxico, pode ser fatal se inalado.",
        "Inalação ou contato com vapores, substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "Pode produzir soluções corrosivas em contato com água.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA OU ESPUMA. (ESPUMA PODE SER USADA PARA CLOROSSILANOS, VER ABAIXO)",
        "Pó químico seco, barrilha, cal ou areia.",
        "Areia SECA, pó químico seco, carbonato de sódio ou cal, ou retirar-se da área e deixar queimar.",
        "PARA CLOROSSILANOS, NÃO USAR ÁGUA; usar espuma resistente a álcool; NÃO USAR pó químico seco, carbonato de sódio ou cal em incêndios de clorossilanos, pois podem liberar grandes quantidades de gás hidrogênio que pode explodir.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO deixar água entrar nos recipientes.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "PARA CLOROSSILANOS, usar espuma resistente a álcool para reduzir vapores.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Fazer diques para descarte posterior; não aplicar água a menos que instruído.",
        "Derramamento de Pó",
        "Cobrir o derramamento de pó com lona plástica para minimizar a dispersão e manter o pó seco.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Em caso de contato com a substância, limpar da pele imediatamente; lavar a pele ou olhos com água corrente por pelo menos 20 minutos."
      ]
    }
  },
  {
    numero: "140",
    titulo: "Oxidantes",
    riscosPotenciais: {
      incendioExplosao: [
        "Combustíveis, matéria orgânica, outros contaminantes ou quando fundido quente e confinado. Tratar como explosivo.",
        "Estas substâncias acelerarão a combustão quando envolvidas em um incêndio.",
        "Algumas podem se decompor explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Pode explodir pelo calor ou contaminação.",
        "Alguns reagirão explosivamente com hidrocarbonetos (combustíveis).",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "Inalação, ingestão ou contato (pele, olhos) com vapores ou substância pode causar lesão grave, queimaduras ou morte.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO deixar água entrar nos recipientes.",
        "Derramamento Pequeno Seco",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área de derramamento.",
        "Derramamento Pequeno Líquido",
        "Usar material não combustível como vermiculita ou areia para absorver o produto e colocar em recipiente para descarte posterior.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "Se produtos de nitrato de amônio estiverem em tanque, vagão ou caminhão envolvido em incêndio, ISOLAR por 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar água. Não usar pó químico seco nem espumas. CO₂ ou Halon® podem ter eficácia limitada.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Para produtos de nitrato de amônio: Não combater o incêndio na carga. Retirar-se, evacuar e isolar a área até que orientação especializada seja fornecida.",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial a favor do vento por pelo menos 100 metros.",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO colocar água dentro dos recipientes.",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área do derramamento.",
        "Usar material não combustível como vermiculita ou areia para absorver o produto e colocar em recipiente para descarte posterior.",
        "Dicar bem à frente do derramamento líquido para descarte posterior."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "141",
    titulo: "Oxidantes — Tóxicos",
    riscosPotenciais: {
      incendioExplosao: [
        "Estas substâncias acelerarão a combustão quando envolvidas em um incêndio.",
        "Pode explodir pelo calor ou contaminação.",
        "Alguns podem queimar rapidamente.",
        "Alguns reagirão explosivamente com hidrocarbonetos (combustíveis).",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "Tóxico por ingestão.",
        "A inalação de poeira é tóxica.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "O contato com a substância pode causar queimaduras graves na pele e nos olhos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno Seco",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área de derramamento.",
        "Derramamento Grande",
        "Fazer diques bem à frente do derramamento para descarte posterior."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar água. Não usar pó químico seco nem espumas. CO₂ ou Halon® podem ter eficácia limitada.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial a favor do vento por pelo menos 100 metros.",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área do derramamento.",
        "Dicar bem à frente do derramamento para descarte posterior."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "142",
    titulo: "Oxidantes — Tóxicos (Líquidos)",
    riscosPotenciais: {
      incendioExplosao: [
        "Estas substâncias acelerarão a combustão quando envolvidas em um incêndio.",
        "Pode explodir pelo calor ou contaminação.",
        "Alguns reagirão explosivamente com hidrocarbonetos (combustíveis).",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "TÓXICO; inalação, ingestão ou contato (pele, olhos) com vapores ou substância pode causar lesão grave, queimaduras ou morte.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Fumaça tóxica/inflamável pode se acumular em áreas confinadas (porões, tanques, vagões-tanque, etc.).",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor.",
        "NÃO deixar água entrar nos recipientes.",
        "Derramamento Pequeno Líquido",
        "Usar material não combustível como vermiculita ou areia para absorver o produto e colocar em recipiente para descarte posterior.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 50 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar água. Não usar pó químico seco nem espumas. CO₂ ou Halon® podem ter eficácia limitada.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor.",
        "NÃO colocar água dentro dos recipientes.",
        "Usar material não combustível como vermiculita ou areia para absorver o produto e colocar em recipiente para descarte posterior.",
        "Dicar bem à frente do derramamento líquido para descarte posterior."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "143",
    titulo: "Oxidantes (Instáveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode explodir por fricção, calor ou contaminação.",
        "Estas substâncias acelerarão a combustão quando envolvidas em um incêndio.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Alguns reagirão explosivamente com hidrocarbonetos (combustíveis).",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "TÓXICO; inalação, ingestão ou contato (pele, olhos) com vapores, poeiras ou substância pode causar lesão grave, queimaduras ou morte.",
        "O fogo pode produzir gases irritantes e/ou tóxicos.",
        "Fumaça tóxica ou poeira podem se acumular em áreas confinadas (porões, tanques, vagões, etc.).",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Derramamento Pequeno",
        "Lavar a área com grandes quantidades de água.",
        "Derramamento Grande",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar água. Não usar pó químico seco nem espumas. CO₂ ou Halon® podem ter eficácia limitada.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não colocar água dentro dos recipientes: pode ocorrer reação violenta.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Lavar a área com grandes quantidades de água.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "144",
    titulo: "Oxidantes (Reativos com Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Reagem vigorosamente e/ou explosivamente com água.",
        "Produzem substâncias tóxicas e/ou corrosivas em contato com água.",
        "Gases inflamáveis/tóxicos podem se acumular em tanques e vagões.",
        "Alguns podem produzir gás hidrogênio inflamável ao entrar em contato com metais.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "TÓXICO; inalação ou contato com vapor, substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Derramamento Grande",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA OU ESPUMA.",
        "Pó químico seco, carbonato de sódio ou cal.",
        "Areia SECA, pó químico seco, carbonato de sódio ou cal, ou retirar-se da área e deixar queimar.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível, seguido de folha plástica para minimizar espalhamento ou contato com chuva.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "145",
    titulo: "Peróxidos Orgânicos (Sensíveis ao Calor e Contaminação)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode explodir pelo calor ou contaminação.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode queimar rapidamente com efeito de labareda.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Ingestão ou contato (pele, olhos) com a substância pode causar lesão grave ou queimaduras.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Manter a substância molhada usando neblina d'água.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Derramamento Grande",
        "Umedecer com água e confinar com diques para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Neblina d'água é preferível; se não houver água disponível, usar pó químico seco, CO₂ ou espuma regular.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Usar neblina d'água; evitar direcionar jatos diretos ou sólidos sobre o produto.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial de pelo menos 250 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Manter a substância úmida usando neblina d'água.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas e que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Umedecer com água e dicar para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "146",
    titulo: "Peróxidos Orgânicos (Sensíveis ao Calor, Contaminação e Fricção)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode explodir pelo calor, choque, fricção ou contaminação.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode queimar rapidamente com efeito de labareda.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Ingestão ou contato (pele, olhos) com a substância pode causar lesão grave ou queimaduras.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Manter a substância molhada usando neblina d'água.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Derramamento Grande",
        "Umedecer com água e confinar com diques para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Neblina d'água é preferível; se não houver água disponível, usar pó químico seco, CO₂ ou espuma regular.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Usar neblina d'água; evitar direcionar jatos diretos ou sólidos sobre o produto.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial de pelo menos 250 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar em recipientes danificados ou material derramado sem usar equipamento de proteção adequado.",
        "Manter a substância úmida usando neblina d'água.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas e que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Umedecer com água e dicar para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "147",
    titulo: "Baterias de Íon-Lítio e Íon-Sódio",
    riscosPotenciais: {
      incendioExplosao: [
        "Baterias de íon-lítio e íon-sódio contêm eletrólito líquido inflamável que pode vazar, incendiar e produzir faíscas quando submetidas a altas temperaturas (> 150°C), quando danificadas ou maltratadas (ex.: dano mecânico ou sobrecarga elétrica).",
        "Pode queimar rapidamente com efeito de labareda.",
        "Pode incendiar outras baterias próximas."
      ],
      saude: [
        "O contato com o eletrólito da bateria pode ser irritante para a pele, olhos e mucosas.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "Baterias em combustão podem produzir gás fluoreto de hidrogênio tóxico (ver GUIA 125).",
        "Fumaças podem causar tontura ou asfixia."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "A roupa de proteção dos bombeiros estruturais proporciona proteção térmica, mas apenas proteção química limitada."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um vagão ou reboque estiver envolvido em incêndio, ISOLAR por 500 metros em todas as direções; também iniciar evacuação, incluindo socorristas, de 500 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Um incêndio de bateria de íon-lítio ou íon-sódio pode reignir a qualquer momento após o incêndio inicial ser extinto, até semanas depois.",
        "Usar imagem térmica, se disponível, para monitorar continuamente a bateria.",
        "A reignição pode ser acompanhada por emissão de fumaça branca ou arcos elétricos ou faíscas que reignem com chamas visíveis ou fogo. CUIDADO: O uso de água salgada para combate a incêndio não é recomendado, pois pode aumentar a produção de gás hidrogênio e fluoreto de hidrogênio.",
        "Incêndio de Veículo",
        "Se a bateria não estiver conectada a um veículo, ver \"Incêndio Pequeno ou Incêndio Envolvendo Bateria Pequena\" abaixo.",
        "Consultar o guia de resposta a emergências específico do fabricante antes de tentar desabilitar o veículo.",
        "Desligar a ignição e desconectar a bateria de 12 volts se puder ser feito com segurança.",
        "Nunca cortar o cabeamento de alta tensão (AT) ou média tensão (MT).",
        "Nunca tocar em cabos ou componentes de AT ou MT danificados ou submersos.",
        "Se disponível, usar grande quantidade de água para extinguir ou suprimir um incêndio de bateria de alta tensão. Usar pequena quantidade de água pode liberar gases tóxicos.",
        "Se possível, pulverizar água diretamente sobre a bateria.",
        "NÃO perfurar, cortar, forçar ou desmontar qualquer parte da estrutura do veículo para acessar a bateria. O contato com um componente de alta tensão pode causar choque elétrico.",
        "Incêndio Pequeno ou Incêndio Envolvendo Bateria Pequena (ex.: dispositivos eletrônicos pessoais, e-bike, etc.)",
        "Somente neblina d'água (grandes quantidades); não usar pó químico seco, CO₂ ou Halon®.",
        "Incêndio Grande ou Incêndio Envolvendo Bateria Grande ou Múltiplas Baterias Pequenas",
        "Permitir que o incêndio da bateria se extinga sozinho e proteger os arredores.",
        "Remover com segurança recipientes intactos da área.",
        "Aplicar neblina d'água nas baterias vizinhas para reduzir a propagação do perigo."
      ],
      derramamento: [
        "Aumentar a distância da medida de precaução imediata, na direção a favor do vento, conforme necessário.",
        "Se um vagão ou reboque estiver envolvido em incêndio, ISOLAR por 500 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Absorver com terra, areia ou outro material não combustível.",
        "Baterias com vazamento e material absorvente contaminado devem ser colocados em recipientes metálicos."
      ],
      primeirosSocorros: [
        "Consultar a seção \"Primeiros Socorros Gerais\"."
      ]
    }
  },
  {
    numero: "148",
    titulo: "Substâncias — Materiais Radioativos (Forma Especial / Temperatura Controlada)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode explodir por calor, contaminação ou perda do controle de temperatura.",
        "Estes materiais são particularmente sensíveis a aumentos de temperatura. Acima de uma determinada \"Temperatura de Controle\", podem se decompor violentamente e pegar fogo.",
        "Pode incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Pode incendiar-se espontaneamente se exposto ao ar.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Pode queimar rapidamente com efeito de labareda.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Ingestão ou contato (pele, olhos) com a substância pode causar lesão grave ou queimaduras.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A temperatura da substância deve ser mantida igual ou abaixo da \"Temperatura de Controle\" em todos os momentos.",
        "Neblina d'água é preferível; se não houver água disponível, usar pó químico seco, CO₂ ou espuma regular.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Usar neblina d'água; evitar direcionar jatos diretos ou sólidos sobre o produto.",
        "Não mover a carga ou veículo se a carga foi exposta ao calor.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "CUIDADO COM POSSÍVEL EXPLOSÃO DO RECIPIENTE.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial de pelo menos 250 metros em todas as direções.",
        "NÃO permitir que a substância aqueça. Usar agente refrigerante como gelo seco ou gelo (usar luvas de proteção térmica).",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas e que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Dicar bem à frente do derramamento líquido para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: [
        "Roupas contaminadas podem representar risco de incêndio quando secas."
      ]
    }
  },
  {
    numero: "149",
    titulo: "Substâncias (Autorreativas)",
    riscosPotenciais: {
      incendioExplosao: [
        "Autodecomposição, autopolimerização ou autoignição podem ser desencadeadas por calor, reação química, fricção ou impacto.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Algumas podem se decompor explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Pode queimar violentamente. A decomposição ou polimerização pode ser autoacelerada e produzir grandes quantidades de gases.",
        "Vapores ou poeira podem formar misturas explosivas com o ar."
      ],
      saude: [
        "Inalação ou contato com vapores, substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "Pode produzir gases irritantes, tóxicos e/ou corrosivos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "CUIDADO COM POSSÍVEL EXPLOSÃO DO RECIPIENTE.",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "150",
    titulo: "Substâncias (Autorreativas / Temperatura Controlada)",
    riscosPotenciais: {
      incendioExplosao: [
        "Autodecomposição, autopolimerização ou autoignição podem ser desencadeadas por calor, reação química, fricção ou impacto.",
        "Decomposição autoacelerada pode ocorrer se a \"temperatura de controle\" específica não for mantida.",
        "Estes materiais são particularmente sensíveis a aumentos de temperatura. Acima de uma determinada \"Temperatura de Controle\", podem se decompor ou polimerizar violentamente e pegar fogo.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Algumas podem se decompor explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Pode queimar violentamente. A decomposição ou polimerização pode ser autoacelerada e produzir grandes quantidades de gases.",
        "Vapores ou poeira podem formar misturas explosivas com o ar."
      ],
      saude: [
        "Inalação ou contato com vapores, substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "Pode produzir gases irritantes, tóxicos e/ou corrosivos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A temperatura da substância deve ser mantida igual ou abaixo da \"Temperatura de Controle\" em todos os momentos.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Inundar a área do incêndio com água a partir de uma distância segura.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "CUIDADO COM POSSÍVEL EXPLOSÃO DO RECIPIENTE.",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Considerar evacuação inicial de pelo menos 250 metros em todas as direções.",
        "NÃO permitir que a substância aqueça. Usar agente refrigerante como gelo seco ou gelo (usar luvas de proteção térmica).",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Recolher com material inerte, úmido e não combustível, usando ferramentas limpas e que não produzam faíscas, e colocar em recipientes plásticos frouxamente cobertos para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "NÃO LIMPAR OU DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "151",
    titulo: "Substâncias — Tóxicas (Não Combustíveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Não combustível, a substância em si não queima, mas pode se decompor ao ser aquecida, produzindo fumaça corrosiva e/ou tóxica.",
        "Os recipientes podem explodir quando aquecidos.",
        "O escoamento pode contaminar cursos d'água."
      ],
      saude: [
        "Altamente tóxico, pode ser fatal se inalado, ingerido ou absorvido pela pele.",
        "Evitar qualquer contato com a pele.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Cobrir com lona plástica para evitar a dispersão.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "NÃO colocar água dentro dos recipientes.",
        "Para sólidos, prevenir nuvem de poeira e evitar inalação de poeira."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "152",
    titulo: "Substâncias — Tóxicas (Combustíveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Material combustível: pode queimar, mas não se incendeia facilmente.",
        "Os recipientes podem explodir quando aquecidos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "O escoamento pode contaminar cursos d'água.",
        "A substância pode ser transportada em forma fundida."
      ],
      saude: [
        "Altamente tóxico, pode ser fatal se inalado, ingerido ou absorvido pela pele.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "Evitar qualquer contato com a pele.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Cobrir com lona plástica para evitar a dispersão.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "NÃO colocar água dentro dos recipientes."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área)."
      ],
      primeirosSocorros: [
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "153",
    titulo: "Substâncias — Tóxicas e/ou Corrosivas (Combustíveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Material combustível: pode queimar, mas não se incendeia facilmente.",
        "Quando aquecidos, os vapores podem formar misturas explosivas com o ar: risco de explosão em ambientes internos, externos e em esgotos.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos.",
        "O escoamento pode contaminar cursos d'água.",
        "A substância pode ser transportada em forma fundida."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato com a pele pode causar lesão grave ou morte.",
        "Bromoacetato de metila (ONU 2643) é irritante ocular/lacrimogêneo.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "Evitar qualquer contato com a pele.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "NÃO colocar água dentro dos recipientes."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Pó químico seco, CO₂, espuma resistente a álcool ou neblina d'água.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área)."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária.",
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "154",
    titulo: "Substâncias — Tóxicas e/ou Corrosivas (Não Combustíveis)",
    riscosPotenciais: {
      incendioExplosao: [
        "Não combustível, a substância em si não queima, mas pode se decompor ao ser aquecida, produzindo fumaça corrosiva e/ou tóxica.",
        "Alguns são oxidantes e podem incendiar combustíveis (madeira, papel, óleo, roupas, etc.).",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos.",
        "Para veículos ou equipamentos elétricos, consultar também o GUIA 147 (baterias de íon-lítio ou íon-sódio) ou GUIA 138 (baterias de sódio)."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato com a pele pode causar lesão grave ou morte.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "Evitar qualquer contato com a pele.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Absorver ou cobrir com terra seca, areia ou outro material não combustível e transferir para recipientes.",
        "NÃO colocar água dentro dos recipientes."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Pó químico seco, CO₂, espuma resistente a álcool ou neblina d'água.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área)."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária."
      ]
    }
  },
  {
    numero: "155",
    titulo: "Substâncias — Tóxicas e/ou Corrosivas (Inflamáveis / Reativas com Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "ALTAMENTE INFLAMÁVEL: Será facilmente incendiado por calor, faíscas ou chamas.",
        "Vapores formam misturas explosivas com o ar: risco de explosão em ambientes internos, externos e em esgotos.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Substâncias designadas com (P) podem polimerizar explosivamente quando aquecidas ou envolvidas em incêndio.",
        "A substância reagirá com água (algumas violentamente), liberando gases inflamáveis, tóxicos ou corrosivos.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos ou contaminados com água."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato (pele, olhos) com vapores, poeiras ou substância pode causar lesão grave, queimaduras ou morte.",
        "Bromoacetatos e cloroacetatos são extremamente irritantes/lacrimogêneos (causam irritação ocular e lacrimejamento).",
        "A reação com água ou ar úmido pode liberar gases tóxicos, corrosivos ou inflamáveis.",
        "A reação com água pode gerar muito calor, aumentando a concentração de fumaça no ar.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "PARA CLOROSSILANOS, usar espuma resistente a álcool para reduzir vapores.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Nota: A maioria das espumas reagirá com o material e liberará gases corrosivos/tóxicos.",
        "CO₂, pó químico seco, areia seca, espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "PARA CLOROSSILANOS, NÃO USAR ÁGUA; usar espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária."
      ]
    }
  },
  {
    numero: "156",
    titulo: "Substâncias — Tóxicas e/ou Corrosivas (Combustíveis / Reativas com Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "Material combustível: pode queimar, mas não se incendeia facilmente.",
        "A substância reagirá com água (algumas violentamente), liberando gases inflamáveis, tóxicos ou corrosivos.",
        "Quando aquecidos, os vapores podem formar misturas explosivas com o ar: risco de explosão em ambientes internos, externos e em esgotos.",
        "A maioria dos vapores é mais pesada que o ar. Espalham-se ao longo do solo e acumulam-se em áreas baixas ou confinadas (esgotos, porões, tanques, etc.).",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos ou contaminados com água."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato (pele, olhos) com vapores, poeiras ou substância pode causar lesão grave, queimaduras ou morte.",
        "O contato com substância fundida pode causar queimaduras graves na pele e nos olhos.",
        "A reação com água ou ar úmido pode liberar gases tóxicos, corrosivos ou inflamáveis.",
        "A reação com água pode gerar muito calor, aumentando a concentração de fumaça no ar.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "PARA CLOROSSILANOS, usar espuma resistente a álcool para reduzir vapores.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Nota: A maioria das espumas reagirá com o material e liberará gases corrosivos/tóxicos.",
        "CO₂, pó químico seco, areia seca, espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "PARA CLOROSSILANOS, NÃO USAR ÁGUA; usar espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária.",
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "157",
    titulo: "Substâncias — Tóxicas e/ou Corrosivas (Não Combustíveis / Reativas com Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "Não combustível, a substância em si não queima, mas pode se decompor ao ser aquecida, produzindo fumaça corrosiva e/ou tóxica.",
        "ONU 1802, ONU 2032, ONU 3084, ONU 3093, ONU 1796 (acima de 50%), ONU 1826 (acima de 50%) e ONU 2031 (acima de",
        "Vapores podem se acumular em áreas confinadas (porões, tanques, vagões, etc.).",
        "A substância pode reagir com água (algumas violentamente), liberando gases corrosivos e/ou tóxicos.",
        "Corrosivos em contato com metais podem gerar gás hidrogênio inflamável.",
        "Os recipientes podem explodir quando aquecidos ou contaminados com água."
      ],
      saude: [
        "TÓXICO e/ou CORROSIVO; inalação, ingestão ou contato (pele, olhos) com vapores, poeiras ou substância pode causar lesão grave, queimaduras ou morte.",
        "A reação com água ou ar úmido pode liberar gases tóxicos, corrosivos ou inflamáveis.",
        "A reação com água pode gerar muito calor, aumentando a concentração de fumaça no ar.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "A água de combate a incêndio ou de diluição pode ser corrosiva e/ou tóxica e causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Uma espuma supressora de vapor pode ser usada para reduzir vapores.",
        "NÃO colocar água dentro dos recipientes.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Derramamento Pequeno",
        "Cobrir com terra SECA, areia SECA ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Usar ferramentas limpas que não produzam faíscas para recolher o material e colocá-lo em recipientes plásticos frouxamente cobertos para descarte posterior."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Nota: Algumas espumas reagirão com o material e liberarão gases corrosivos/tóxicos.",
        "CO₂ (exceto para cianetos), pó químico seco, areia seca, espuma resistente a álcool.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Evitar direcionar jatos retos ou sólidos diretamente sobre o produto.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado."
      ],
      primeirosSocorros: [
        "Para corrosivos, em caso de contato, lavar imediatamente a pele ou os olhos com água corrente por pelo menos 30 minutos. Lavagem adicional pode ser necessária.",
        "Em caso de contato da pele com Ácido Fluorídrico (ONU 1790), se gel de gluconato de cálcio estiver disponível, enxaguar por 5 minutos e aplicar o gel. Caso contrário, continuar enxaguando até que tratamento médico esteja disponível."
      ]
    }
  },
  {
    numero: "158",
    titulo: "Substâncias Infecciosas",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas nenhum se inflama facilmente.",
        "Alguns podem ser transportados em líquidos inflamáveis."
      ],
      saude: [
        "Inalação ou contato com a substância pode causar infecção, doença ou morte.",
        "Substâncias Infecciosas de Categoria A (ONU 2814, ONU 2900 ou ONU 3549) são mais perigosas, ou estão em forma mais perigosa, que substâncias infecciosas expedidas como Substâncias Biológicas de Categoria B (ONU 3373) ou resíduos clínicos/hospitalares (ONU 3291).",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental.",
        "Embalagens danificadas contendo CO₂ sólido como refrigerante podem produzir água ou gelo por condensação do ar. Não tocar neste líquido, pois pode estar contaminado pelo conteúdo da embalagem.",
        "O contato com CO₂ sólido pode causar queimaduras, lesão grave e/ou congelamento."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar julgamento baseado na quantidade de material presente e nas possíveis rotas de exposição para selecionar o nível de proteção adequado.",
        "Usar proteção respiratória adequada, como respirador N95 ajustado (no mínimo), respirador purificador de ar motorizado (PAPR) ou equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "Usar proteção corporal completa (ex.: macacão Tyvek), protetor facial e luvas descartáveis resistentes a fluidos (ex.: látex ou nitrila).",
        "Usar calçado adequado; proteções descartáveis para calçados podem ser usadas para proteção contra contaminação.",
        "Luvas resistentes a perfuração e cortes devem ser usadas sobre luvas resistentes a fluidos quando houver objetos cortantes (ex.: vidro quebrado, agulhas).",
        "Usar luvas isolantes (ex.: luvas criogênicas) sobre luvas resistentes a fluidos ao manusear gelo seco (ONU 1845). Descarte com desinfetante químico compatível (ex.: solução de água sanitária a 10%) ou através de tecnologia de descontaminação validada (ex.: autoclave).",
        "Absorver com terra, areia ou outro material não combustível.",
        "Cobrir embalagem danificada ou material derramado com material absorvente e, começando pela borda externa, despejar água sanitária líquida ou outro desinfetante químico para saturar. Manter molhado com água sanitária ou outro desinfetante.",
        "NÃO LIMPAR NEM DESCARTAR, EXCETO SOB SUPERVISÃO DE UM ESPECIALISTA."
      ],
      evacuacao: [
        "Medida de precaução imediata"
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, barrilha, cal ou areia.",
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Não dispersar o material derramado com jatos de água de alta pressão.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio."
      ],
      derramamento: [
        "NÃO tocar nem caminhar sobre o material derramado."
      ],
      primeirosSocorros: [
        "Remover a vítima para uma área isolada se possível com segurança.",
        "Em caso de contato com a substância, lavar imediatamente os olhos com água corrente e lavar a pele cuidadosamente com água e sabão. Tomar cuidado para não romper a pele.",
        "Descontaminação adicional também pode ser necessária.",
        "Os efeitos da exposição (inalação, ingestão, injeção/inoculação ou contato com a pele) à substância podem ser retardados. A vítima deve consultar um profissional médico."
      ]
    }
  },
  {
    numero: "159",
    titulo: "Substâncias (Irritantes)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas nenhum se inflama facilmente.",
        "Os recipientes podem explodir quando aquecidos."
      ],
      saude: [
        "A inalação de vapores ou poeira é extremamente irritante.",
        "Pode causar queimação nos olhos e lacrimejamento.",
        "Pode causar tosse, dificuldade respiratória e náusea.",
        "Os efeitos de exposição breve duram apenas alguns minutos.",
        "A exposição em área fechada pode ser muito prejudicial.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "NÃO deixar água entrar nos recipientes.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Derramamento Grande",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno",
        "Recolher com areia ou outro material absorvente não combustível e colocar em recipientes para descarte posterior.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "160",
    titulo: "Solventes Halogenados",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas nenhum se inflama facilmente.",
        "A maioria dos vapores é mais pesada que o ar.",
        "Misturas ar/vapor podem explodir ao ser incendiadas.",
        "O recipiente pode explodir no calor do incêndio."
      ],
      saude: [
        "Tóxico por ingestão.",
        "Vapores podem causar tontura ou asfixia, especialmente em áreas fechadas ou confinadas.",
        "A exposição em área fechada pode ser muito prejudicial.",
        "O contato pode irritar ou causar queimaduras na pele e nos olhos.",
        "O fogo pode produzir gases irritantes e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Pó químico seco, CO₂, espuma resistente a álcool ou neblina d'água.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Derramamento Pequeno Líquido",
        "Recolher com areia, terra ou outro material absorvente não combustível.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: [
        "Lavar a pele com água e sabão."
      ]
    }
  },
  {
    numero: "161",
    titulo: "Materiais Radioativos (Baixo Nível de Radiação)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas a maioria não se inflama facilmente.",
        "Muitas têm embalagem externa de papelão; o conteúdo pode ter diversas formas físicas.",
        "A radioatividade não altera a inflamabilidade ou outras propriedades dos materiais."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Níveis muito baixos de materiais radioativos contidos e baixos níveis de radiação fora das embalagens resultam em baixos riscos para as pessoas. Embalagens danificadas podem liberar quantidades mensuráveis de material radioativo, mas não apresentam risco radiológico significativo para as pessoas.",
        "Alguns materiais radioativos não podem ser detectados por instrumentos comumente disponíveis.",
        "As embalagens não possuem rótulos RADIOATIVO I, II ou III. Algumas podem ter rótulos VAZIO ou podem ter a palavra \"Radioativo\" na marcação da embalagem."
      ]
    },
    segurancaPublica: {
      vestuario: [],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A presença de material radioativo não influencia os processos de combate a incêndio e não deve influenciar a seleção de técnicas.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não mover embalagens danificadas; afastar embalagens intactas da zona de incêndio.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jato neblinado (em grandes quantidades)."
      ],
      derramamento: [
        "Derramamento Grande",
        "Não tocar em embalagens danificadas ou material derramado.",
        "Cobrir o derramamento líquido com areia, terra ou outro material absorvente não combustível.",
        "Cobrir o derramamento de pó com lona plástica para minimizar a dispersão."
      ],
      primeirosSocorros: [
        "Prioridade para medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Ficar a favor do vento, em terreno mais alto e/ou a montante.",
        "Manter pessoal não autorizado afastado.",
        "Reter ou isolar pessoas ilesas ou equipamentos suspeitos de contaminação; adiar a descontaminação e limpeza até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida.",
        "Pessoas feridas contaminadas por contato com material liberado não representam risco sério para pessoal de saúde, equipamentos ou instalações."
      ]
    }
  },
  {
    numero: "162",
    titulo: "Materiais Radioativos (Baixo a Moderado Nível de Radiação)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas a maioria não se inflama facilmente.",
        "Cortes metálicos de Urânio e Tório podem se inflamar espontaneamente se expostos ao ar (ver GUIA 136).",
        "Nitratos são oxidantes e podem incendiar outros combustíveis (ver GUIA 141)."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Embalagens intactas são seguras. Conteúdos de embalagens danificadas podem causar maior exposição à radiação externa, ou tanto exposição à radiação externa quanto interna.",
        "Baixo risco de radiação quando o material está dentro do recipiente. Se o material for liberado da embalagem ou recipiente a granel, o risco variará de baixo a moderado.",
        "Algum material pode ser liberado das embalagens durante acidentes de severidade moderada, mas os riscos para as pessoas não são grandes.",
        "Materiais radioativos liberados ou objetos contaminados geralmente serão visíveis se a embalagem falhar.",
        "Alguns embarques de uso exclusivo de materiais a granel e embalados não terão rótulos RADIOATIVO. Placas, marcações e documentos de embarque fornecem identificação.",
        "Algumas embalagens podem ter um rótulo RADIOATIVO e um segundo rótulo de risco. O segundo risco geralmente é maior que o risco de radiação; portanto, siga este Guia e o Guia de Emergência do segundo risco.",
        "Alguns materiais radioativos não podem ser detectados por instrumentos comumente disponíveis.",
        "O escoamento do controle de incêndio de carga pode causar poluição de baixo nível."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "proporcionará proteção adequada."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A presença de material radioativo não influencia os processos de combate a incêndio e não deve influenciar a seleção de técnicas.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não mover embalagens danificadas; afastar embalagens intactas da zona de incêndio.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jato neblinado (em grandes quantidades).",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior."
      ],
      derramamento: [
        "Derramamento Grande",
        "Não tocar em embalagens danificadas ou material derramado.",
        "Cobrir o derramamento líquido com areia, terra ou outro material absorvente não combustível.",
        "Fazer diques para coletar grandes derramamentos líquidos.",
        "Cobrir o derramamento de pó com lona plástica para minimizar a dispersão."
      ],
      primeirosSocorros: [
        "para medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Ficar a favor do vento, em terreno mais alto e/ou a montante.",
        "Manter pessoal não autorizado afastado.",
        "Reter ou isolar pessoas ilesas ou equipamentos suspeitos de contaminação; adiar a descontaminação e limpeza até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida.",
        "Em caso de contato com a substância, limpar da pele imediatamente; lavar a pele ou olhos com água corrente por pelo menos 20 minutos.",
        "Pessoas feridas contaminadas por contato com material liberado não representam risco sério para pessoal de saúde, equipamentos ou instalações."
      ]
    }
  },
  {
    numero: "163",
    titulo: "Materiais Radioativos (Baixo a Alto Nível de Radiação)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns desses materiais podem queimar, mas a maioria não se inflama facilmente.",
        "A radioatividade não altera a inflamabilidade ou outras propriedades dos materiais.",
        "Embalagens Tipo B são projetadas e avaliadas para resistir ao envolvimento total em chamas a temperaturas de 800°C por 30 minutos."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Embalagens intactas são seguras. Conteúdos de embalagens danificadas podem causar maior exposição à radiação externa, ou tanto exposição à radiação externa quanto interna.",
        "Embalagens Tipo A (caixas de papelão, caixas, tambores, artigos, etc.) identificadas como Tipo A pela marcação nas embalagens ou pelos documentos de embarque contêm quantidades não ameaçadoras à vida. Embalagens Tipo A podem ser danificadas em acidentes graves.",
        "Embalagens Tipo B, e as raramente ocorrentes embalagens Tipo C (grandes e pequenas, geralmente metálicas), contêm as quantidades mais perigosas. Podem ser identificadas pelas marcações nas embalagens ou pelos documentos de embarque. Embalagens Tipo B são projetadas para resistir a acidentes graves com conteúdo intacto.",
        "Os raramente ocorrentes embarques por \"Arranjo Especial\" podem ser de embalagens Tipo A, Tipo B ou Tipo C. O tipo de embalagem será marcado nas embalagens, e os detalhes do embarque constarão nos documentos de embarque.",
        "Rótulos Radioativo Branco-I indicam que os níveis de radiação fora de embalagens únicas, isoladas e intactas são muito baixos (menos de 0,005 mSv/h).",
        "Rótulos Radioativo Amarelo-II e Amarelo-III indicam níveis de radiação mais altos. O índice de transporte (IT) no rótulo identifica o nível máximo de radiação em metros a partir de uma embalagem única e isolada.",
        "Alguns materiais radioativos não podem ser detectados por instrumentos comumente disponíveis.",
        "A água do controle de incêndio de carga pode causar poluição."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Equipamento de proteção proporcionará proteção adequada contra exposição à radiação interna, mas não contra exposição à radiação externa."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A presença de material radioativo não influencia os processos de combate a incêndio e não deve influenciar a seleção de técnicas.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não mover embalagens danificadas; afastar embalagens intactas da zona de incêndio.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jato neblinado (em grandes quantidades).",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior."
      ],
      derramamento: [
        "Derramamento Grande",
        "Não tocar em embalagens danificadas ou material derramado.",
        "Superfícies úmidas em embalagens intactas ou levemente danificadas raramente indicam falha da embalagem. A maioria das embalagens para conteúdo líquido possui recipientes internos e/ou materiais absorventes internos.",
        "Cobrir o derramamento líquido com areia, terra ou outro material absorvente não combustível."
      ],
      primeirosSocorros: [
        "Prioridade para medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Permanecer a favor do vento, em terreno elevado e/ou a montante. Manter pessoal não autorizado afastado.",
        "Reter ou isolar pessoas ilesas ou equipamentos suspeitos de contaminação; adiar a descontaminação e limpeza até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida.",
        "Pessoas feridas contaminadas por contato com material liberado não representam risco sério para pessoal de saúde, equipamentos ou instalações."
      ]
    }
  },
  {
    numero: "164",
    titulo: "Materiais Radioativos (Baixo a Alto Nível de Radiação Externa)",
    riscosPotenciais: {
      incendioExplosao: [
        "As embalagens podem queimar completamente sem risco de perda de conteúdo da cápsula de fonte selada.",
        "A radioatividade não altera a inflamabilidade ou outras propriedades dos materiais.",
        "Cápsulas de fonte radioativa e embalagens Tipo B são projetadas e avaliadas para resistir ao envolvimento total em chamas a temperaturas de 800°C por 30 minutos."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Embalagens intactas são seguras; conteúdos de embalagens danificadas podem causar exposição à radiação externa, e exposição externa muito maior se o conteúdo (fonte ou objeto) for removido da embalagem blindada.",
        "Riscos de contaminação e radiação interna não são esperados, mas não são impossíveis.",
        "Embalagens Tipo A (caixas de papelão, caixas, tambores, artigos, etc.) identificadas como Tipo A pela marcação nas embalagens ou pelos documentos de embarque contêm quantidades não ameaçadoras à vida. Embalagens Tipo A podem ser danificadas em acidentes graves.",
        "Embalagens Tipo B, e as raramente ocorrentes embalagens Tipo C (grandes e pequenas, geralmente metálicas), contêm as quantidades mais perigosas. Podem ser identificadas pelas marcações nas embalagens ou pelos documentos de embarque.",
        "Rótulos Radioativo Branco-I indicam que os níveis de radiação fora de embalagens únicas, isoladas e intactas são muito baixos (menos de 0,005 mSv/h).",
        "Rótulos Radioativo Amarelo-II e Amarelo-III indicam níveis de radiação mais altos. O índice de transporte (IT) no rótulo identifica o nível máximo de radiação a partir de uma embalagem única e isolada.",
        "A radiação do conteúdo da embalagem, geralmente em cápsulas metálicas duráveis, pode ser detectada pela maioria dos instrumentos de radiação.",
        "A água do controle de incêndio de carga não é esperada causar poluição."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Equipamento de proteção proporcionará proteção adequada contra exposição à radiação interna, mas não contra exposição à radiação externa."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A presença de material radioativo não influencia os processos de combate a incêndio e não deve influenciar a seleção de técnicas.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não mover embalagens danificadas; afastar embalagens intactas da zona de incêndio.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jato neblinado (em grandes quantidades)."
      ],
      derramamento: [
        "Derramamento Grande",
        "Não tocar em embalagens danificadas ou material derramado.",
        "Superfícies úmidas em embalagens intactas ou levemente danificadas raramente indicam falha da embalagem. O conteúdo raramente é líquido, geralmente é uma cápsula metálica, facilmente visível se liberada da embalagem.",
        "Se a cápsula de fonte for identificada fora da embalagem, NÃO TOCAR. Manter distância e aguardar orientações da Autoridade de Radiação."
      ],
      primeirosSocorros: [
        "Prioridade para medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Permanecer a favor do vento, em terreno elevado e/ou a montante. Manter pessoal não autorizado afastado.",
        "Adiar a limpeza final até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida.",
        "Pessoas expostas a fontes de forma especial provavelmente não serão contaminadas com material radioativo.",
        "Pessoas feridas contaminadas por contato com material liberado não representam risco sério para pessoal de saúde, equipamentos ou instalações."
      ]
    }
  },
  {
    numero: "165",
    titulo: "Materiais Radioativos (Físseis / Baixo a Alto Nível de Radiação)",
    riscosPotenciais: {
      incendioExplosao: [
        "Estes materiais raramente são inflamáveis. As embalagens são projetadas para resistir a incêndios sem danos ao conteúdo.",
        "A radioatividade não altera a inflamabilidade ou outras propriedades dos materiais.",
        "Embalagens tipo AF, IF, B(U)F, B(M)F e CF são projetadas e avaliadas para resistir ao envolvimento total em chamas a temperaturas de 800°C por 30 minutos."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Embalagens intactas são seguras. Conteúdos de embalagens danificadas podem causar maior exposição à radiação externa, ou tanto exposição à radiação externa quanto interna.",
        "Embalagens Tipo AF ou IF, identificadas pela marcação nas embalagens, não contêm quantidades ameaçadoras à vida. Níveis de radiação externa são baixos e as embalagens não estão sujeitas a acidentes de transporte graves.",
        "Embalagens Tipo B(U)F, B(M)F e CF (identificadas por marcações nas embalagens ou documentos de embarque) contêm quantidades potencialmente ameaçadoras à vida. Devido ao projeto de engenharia e testes, é improvável que liberem conteúdo radioativo em um acidente de transporte.",
        "Os raramente ocorrentes embarques por \"Arranjo Especial\" podem ser de embalagens Tipo AF, BF ou CF. O tipo de embalagem será marcado nas embalagens, e os detalhes do embarque constarão nos documentos de embarque.",
        "O índice de transporte (IT) mostrado nos rótulos ou em um documento de embarque pode não indicar o nível de radiação a um metro de uma embalagem única, isolada e intacta.",
        "Alguns materiais radioativos não podem ser detectados por instrumentos comumente disponíveis.",
        "A água do controle de incêndio de carga não é esperada causar poluição."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "proporcionará proteção adequada contra exposição à radiação interna, mas não contra exposição à radiação externa."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "A presença de material radioativo não influencia os processos de combate a incêndio e não deve influenciar a seleção de técnicas.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Não mover embalagens danificadas; afastar embalagens intactas da zona de incêndio.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jato neblinado (em grandes quantidades)."
      ],
      derramamento: [
        "Derramamento Grande",
        "Não tocar em embalagens danificadas ou material derramado.",
        "Superfícies úmidas em embalagens intactas ou levemente danificadas raramente indicam falha da embalagem. A maioria das embalagens para conteúdo líquido possui recipientes internos e/ou materiais absorventes internos.",
        "Derramamento Líquido",
        "O conteúdo das embalagens raramente é líquido. Se houver contaminação radioativa de um vazamento líquido, provavelmente será de baixo nível."
      ],
      primeirosSocorros: [
        "medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Ficar a favor do vento, em terreno mais alto e/ou a montante.",
        "Manter pessoal não autorizado afastado.",
        "Reter ou isolar pessoas ilesas ou equipamentos suspeitos de contaminação; adiar a descontaminação e limpeza até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida.",
        "Pessoas feridas contaminadas por contato com material liberado não representam risco sério para pessoal de saúde, equipamentos ou instalações."
      ]
    }
  },
  {
    numero: "166",
    titulo: "Materiais Radioativos — Corrosivos (Hexafluoreto de Urânio / Reativo com Água)",
    riscosPotenciais: {
      incendioExplosao: [
        "A substância não queima.",
        "O material pode reagir violentamente com combustíveis.",
        "O produto se decomporá produzindo fumaça tóxica e/ou corrosiva.",
        "Recipientes em sobre-embalagens protetoras são identificados com AF, B(U)F ou H(U) nos documentos de transporte. São projetados e avaliados para resistir a condições severas, incluindo envolvimento total em chamas a temperaturas de 800°C por 30 minutos.",
        "Cilindros cheios sem proteção, identificados com ONU 2978 na marcação, podem romper no calor de um incêndio envolvente; cilindros vazios (exceto por resíduo) sem proteção não romperão em incêndios.",
        "A radioatividade não altera a inflamabilidade ou outras propriedades dos materiais."
      ],
      saude: [
        "A radiação apresenta risco mínimo para trabalhadores de transporte, pessoal de resposta a emergências e público durante acidentes de transporte. A durabilidade da embalagem garante que há muito pouca chance de dano à embalagem radioativa ou de risco significativo de contaminação por radiação em um acidente de transporte.",
        "Baixo risco de radiação para as pessoas. O risco químico supera em muito o risco de radiação.",
        "A substância reage com a água e o vapor de água no ar para formar gás de fluoreto de hidrogênio tóxico e corrosivo, ácido fluorídrico, e uma nuvem de óxido de urânio extremamente irritante.",
        "Tóxico; pode ser fatal se inalado, ingerido ou absorvido pela pele.",
        "O contato direto com a substância e o gás pode causar queimaduras na pele, olhos ou trato respiratório.",
        "O escoamento do controle de incêndio de carga pode causar poluição de baixo nível."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Quando uma grande quantidade deste material estiver envolvida em um grande incêndio, considerar uma distância de evacuação inicial de 300 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA NEM ESPUMA SOBRE O PRÓPRIO MATERIAL.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Pó químico seco ou CO₂.",
        "Pó químico seco, CO₂, ou retirar-se da área e deixar queimar.",
        "Usar água somente se a embalagem estiver intacta.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto."
      ],
      derramamento: [
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Não tocar em embalagens danificadas ou material derramado.",
        "NÃO colocar água sobre a substância derramada ou dentro dos recipientes.",
        "Sem fogo ou fumaça, o vazamento será evidente por vapores visíveis e irritantes e resíduo formando-se no ponto de liberação.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "O acúmulo de resíduos pode auto-vedar pequenos vazamentos.",
        "Fazer diques bem à frente do derramamento para coletar a água de escoamento."
      ],
      primeirosSocorros: [
        "Prioridade para medição dos níveis de radiação.",
        "A Autoridade de Radiação deve ser notificada das condições do acidente. A Autoridade de Radiação geralmente é responsável pelas decisões sobre consequências radiológicas e encerramento de emergências.",
        "Ficar a favor do vento, em terreno mais alto e/ou a montante.",
        "Manter pessoal não autorizado afastado.",
        "Reter ou isolar pessoas ilesas ou equipamentos suspeitos de contaminação; adiar a descontaminação e limpeza até receber instruções da Autoridade de Radiação.",
        "Problemas médicos têm prioridade sobre preocupações radiológicas.",
        "Em caso de contato da pele com gás fluoreto de hidrogênio e/ou Ácido Fluorídrico, se gel de gluconato de cálcio estiver disponível, enxaguar por 5 minutos e aplicar o gel. Caso contrário, continuar enxaguando até que tratamento médico esteja disponível.",
        "Não atrasar o atendimento e transporte de pessoa gravemente ferida."
      ]
    }
  },
  {
    numero: "167",
    titulo: "Materiais Radioativos — Corrosivos (Hexafluoreto de Urânio / Reativo com Água - Forma Especial)",
    riscosPotenciais: {
      incendioExplosao: [],
      saude: []
    },
    segurancaPublica: {
      vestuario: [],
      evacuacao: []
    },
    respostaEmergencia: {
      incendio: [],
      derramamento: [],
      primeirosSocorros: []
    }
  },
  {
    numero: "168",
    titulo: "Monóxido de Carbono (Líquido Refrigerado)",
    riscosPotenciais: {
      incendioExplosao: [
        "EXTREMAMENTE INFLAMÁVEL.",
        "Pode ser incendiado pelo calor, faíscas ou chamas.",
        "Os recipientes podem explodir quando aquecidos.",
        "Risco de explosão de vapor e envenenamento em ambientes internos, externos ou esgotos.",
        "Os vapores do gás liquefeito são inicialmente mais pesados que o ar e se espalham ao nível do solo.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama."
      ],
      saude: [
        "TÓXICO; EXTREMAMENTE PERIGOSO.",
        "Inalação extremamente perigosa; pode ser fatal.",
        "O contato com gás, gás liquefeito ou líquidos criogênicos pode causar queimaduras, lesões graves e/ou congelamento.",
        "Inodoro, não será detectado pelo olfato."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 100 metros em todas as direções.",
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Pó químico seco, CO₂ ou neblina d'água.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança; pode ocorrer congelamento.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Se possível, virar os recipientes vazando para que escape gás em vez de líquido.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de contato com gás liquefeito, apenas pessoal médico deve tentar descongelar partes congeladas."
      ]
    }
  },
  {
    numero: "169",
    titulo: "Alumínio (Fundido)",
    riscosPotenciais: {
      incendioExplosao: [
        "A substância é transportada em forma fundida a temperatura acima de 705°C.",
        "Reação violenta com água; o contato pode causar explosão ou produzir gás inflamável.",
        "Incendiará materiais combustíveis (madeira, papel, óleo, detritos, etc.).",
        "O contato com nitratos ou outros oxidantes pode causar explosão.",
        "O contato com recipientes ou outros materiais, incluindo ferramentas frias, molhadas ou sujas, pode causar explosão.",
        "O contato com concreto causará lascamento e pequenos estouros."
      ],
      saude: [
        "O contato causa queimaduras graves na pele e nos olhos.",
        "O fogo pode produzir gases irritantes e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA). Roupas de proteção estrutural proporcionam proteção térmica limitada."
      ],
      evacuacao: [
        "Medida de precaução imediata"
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Não usar água, exceto em situações de risco de vida, e somente em neblina fina.",
        "Não usar agentes extintores halogenados ou espuma.",
        "Remover combustíveis do caminho da poça em avanço se possível sem risco.",
        "Extinguir incêndios causados por material fundido usando método apropriado para o material em combustão; manter água, agentes extintores halogenados e espuma longe do material fundido."
      ],
      derramamento: [
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Não tentar estancar o vazamento, devido ao risco de explosão.",
        "Manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "A substância é muito fluida, espalha-se rapidamente e pode espirrar. Não tentar contê-la com pás ou outros objetos.",
        "Confinar com diques à frente do derramamento; usar areia seca para conter o fluxo de material.",
        "Quando possível, permitir que o material fundido solidifique naturalmente.",
        "Evitar contato mesmo após o material solidificar. Alumínio fundido, aquecido e frio têm a mesma aparência; não tocar a menos que tenha certeza de que está frio.",
        "Realizar a limpeza sob a supervisão de um especialista após o material ter solidificado."
      ],
      primeirosSocorros: [
        "A remoção de material fundido solidificado da pele requer assistência médica."
      ]
    }
  },
  {
    numero: "170",
    titulo: "Metais (Pós, Poeiras, Aparas, Limalhas, Torneamentos ou Cortes, etc.)",
    riscosPotenciais: {
      incendioExplosao: [
        "Pode reagir violenta ou explosivamente em contato com água.",
        "Alguns são transportados em líquidos inflamáveis.",
        "Pode ser incendiado por fricção, calor, faíscas ou chamas.",
        "Alguns desses materiais queimam com calor intenso.",
        "Poeiras ou fumaças podem formar misturas explosivas no ar.",
        "Os recipientes podem explodir quando aquecidos.",
        "Pode reignir após o incêndio ser extinto."
      ],
      saude: [
        "Óxidos de incêndios metálicos representam risco grave à saúde.",
        "Inalação ou contato com a substância ou produtos de decomposição pode causar lesão grave ou morte.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO USAR ÁGUA, ESPUMA NEM CO₂.",
        "Banhar incêndios metálicos com água gerará gás hidrogênio, um risco de explosão extremamente perigoso, especialmente se o incêndio estiver em ambiente confinado.",
        "Usar areia SECA, pó de grafite, extintores à base de cloreto de sódio seco ou extintores Classe D.",
        "Confinar e abafar incêndios de metais é preferível a aplicar água.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Incêndio Envolvendo Tanques, Vagões-Tanque ou Caminhões-Tanque",
        "Se impossível extinguir, proteger os arredores e permitir que o incêndio se extinga sozinho."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Derramamento Grande",
        "ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "171",
    titulo: "Substâncias (Baixo a Moderado Perigo)",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns podem queimar, mas nenhum se inflama facilmente.",
        "Os recipientes podem explodir quando aquecidos.",
        "Alguns podem ser transportados quentes.",
        "Para ONU 3508, Capacitor assimétrico, estar ciente de possível curto-circuito, pois o produto é transportado carregado.",
        "Esferas poliméricas expansíveis (ONU 2211) podem liberar vapores inflamáveis."
      ],
      saude: [
        "A inalação do material pode ser prejudicial.",
        "O contato pode causar queimaduras na pele e nos olhos.",
        "A inalação de poeira de amianto pode ter efeito danoso nos pulmões.",
        "O fogo pode produzir gases irritantes, corrosivos e/ou tóxicos.",
        "Alguns líquidos produzem vapores que podem causar tontura ou asfixia.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento em todas as direções por pelo menos 50 metros para líquidos e pelo menos 25 metros para sólidos.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "podem ter ativação retardada e risco de projéteis perigosos. Extinguir o incêndio a uma distância segura.",
        "Pó químico seco, CO₂, neblina d'água ou espuma regular.",
        "Neblina d'água, jatos regulares ou espuma regular.",
        "Não dispersar o material derramado com jatos de água de alta pressão.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Fazer diques no escoamento de combate ao incêndio para descarte posterior.",
        "Incêndio Envolvendo Tanques",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Derramamento de sólidos: isolar pelo menos 25 metros em todas as direções.",
        "Para materiais destacados: consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Para materiais não destacados: aumentar a distância de precaução imediata, na direção do vento, conforme necessário.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir nuvem de poeira.",
        "Para Amianto, evitar a inalação de poeira. Cobrir o derramamento com lona plástica para minimizar a dispersão. Não limpar ou descartar, exceto sob supervisão de um especialista.",
        "Derramamento Pequeno Seco",
        "Com pá limpa, colocar o material em recipiente limpo e seco e cobrir frouxamente; remover os recipientes da área de derramamento.",
        "Derramamento Pequeno",
        "Recolher com areia ou outro material absorvente não combustível e colocar em recipientes para descarte posterior.",
        "Derramamento Grande",
        "Confinar com diques à frente do derramamento líquido para descarte posterior.",
        "Cobrir o derramamento de pó com lona plástica para minimizar a dispersão.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "172",
    titulo: "Gálio e Mercúrio",
    riscosPotenciais: {
      incendioExplosao: [
        "Não combustível, a substância em si não queima, mas pode reagir ao ser aquecida, produzindo fumaça corrosiva e/ou tóxica.",
        "O escoamento pode contaminar cursos d'água."
      ],
      saude: [
        "A inalação de vapores ou contato com a substância resultará em contaminação e potenciais efeitos nocivos.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Não usar ferramentas ou equipamentos de aço ou alumínio.",
        "Cobrir com terra, areia ou outro material não combustível seguido de lona plástica para minimizar a dispersão ou contato com a chuva.",
        "Para mercúrio, usar kit de limpeza de mercúrio.",
        "Áreas de derramamento de mercúrio podem ser posteriormente tratadas com sulfeto de cálcio ou lavagem com tiossulfato de sódio para neutralizar qualquer mercúrio residual."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 25 metros em todas as direções.",
        "Considerar evacuação inicial a favor do vento de pelo menos 100 metros.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Não direcionar água no metal aquecido."
      ],
      derramamento: [
        "Derramamento Grande",
        "NÃO tocar nem caminhar sobre o material derramado."
      ],
      primeirosSocorros: []
    }
  },
  {
    numero: "173",
    titulo: "Gases Adsorvidos — Tóxicos",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns gases podem queimar ou ser incendiados por calor, faíscas ou chamas.",
        "Pode formar misturas explosivas com o ar.",
        "Oxidantes podem incendiar combustíveis (madeira, papel, óleo, roupas, etc.), mas não facilmente devido às baixas pressões de transporte.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Alguns destes materiais podem reagir violentamente com água.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás tóxico e inflamável através dos dispositivos de alívio de pressão.",
        "O escoamento pode criar risco de incêndio."
      ],
      saude: [
        "TÓXICO; pode ser fatal se inalado ou absorvido pela pele.",
        "Vapores podem ser irritantes.",
        "O contato com gás pode causar queimaduras e lesões.",
        "O fogo produzirá gases irritantes, corrosivos e/ou tóxicos.",
        "O escoamento de água de combate ao incêndio ou diluição pode causar contaminação ambiental."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA).",
        "SEM RISCO DE INCÊNDIO."
      ],
      evacuacao: [
        "Isolar a área de derramamento ou vazamento por pelo menos 50 metros em todas as direções.",
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se um tanque, vagão-tanque ou caminhão-tanque estiver envolvido em incêndio, ISOLAR por 800 metros em todas as direções; também considerar evacuação inicial de 800 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Pó químico seco, CO₂, neblina d'água ou espuma resistente a álcool.",
        "Para ONU 3515, ONU 3518, ONU 3520, usar somente água; não usar pó químico seco, CO₂ ou Halon®.",
        "Neblina d'água, jatos regulares ou espuma resistente a álcool.",
        "NÃO deixar água entrar nos recipientes.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Vários Pacotes Pequenos (dentro de vagão ou reboque)",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas."
      ],
      derramamento: [
        "Consultar a Tabela 1 — Distâncias de Isolamento Inicial e Ação Protetora.",
        "Se vários pacotes pequenos (dentro de vagão ou reboque) estiverem envolvidos em incêndio, ISOLAR por 1.600 metros em todas as direções.",
        "Alguns gases podem ser inflamáveis. ELIMINAR todas as fontes de ignição (não fumar, sem sinalizadores, faíscas ou chamas) da área imediata.",
        "Para gases inflamáveis, todos os equipamentos utilizados no manuseio do produto devem ser aterrados.",
        "Para substâncias oxidantes, manter combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "Prevenir a entrada em cursos d'água, esgotos, porões ou áreas confinadas.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
  {
    numero: "174",
    titulo: "Gases Adsorvidos — Inflamáveis ou Oxidantes",
    riscosPotenciais: {
      incendioExplosao: [
        "Alguns gases serão incendiados por calor, faíscas ou chamas.",
        "A substância não queima, mas suporta a combustão.",
        "Os vapores podem se deslocar até uma fonte de ignição e provocar retrocesso de chama.",
        "Cilindros expostos ao fogo podem ventiar e liberar gás inflamável através dos dispositivos de alívio de pressão.",
        "Os recipientes podem explodir quando expostos a contato direto e prolongado com chamas."
      ],
      saude: [
        "Vapores podem causar tontura ou asfixia sem aviso, especialmente em áreas fechadas ou confinadas.",
        "Alguns podem ser irritantes se inalados em altas concentrações.",
        "O contato com gás pode causar queimaduras e lesões.",
        "O fogo pode produzir gases irritantes e/ou tóxicos."
      ]
    },
    segurancaPublica: {
      vestuario: [
        "Usar equipamento de proteção respiratória autônomo com pressão positiva (SCBA)."
      ],
      evacuacao: [
        "Medida de precaução imediata",
        "Se vários pacotes pequenos (dentro de vagão ou reboque) estiverem envolvidos em incêndio, ISOLAR por 1.600 metros em todas as direções."
      ]
    },
    respostaEmergencia: {
      incendio: [
        "NÃO EXTINGUIR UM INCÊNDIO DE GÁS VAZANDO a menos que o vazamento possa ser estancado.",
        "Usar agente extintor adequado ao tipo de incêndio circundante.",
        "Pó químico seco ou CO₂.",
        "Neblina d'água ou jatos regulares.",
        "Se possível, com segurança, afastar os recipientes intactos da área ao redor do incêndio.",
        "Cilindros danificados devem ser manuseados somente por especialistas.",
        "Incêndio Envolvendo Vários Pacotes Pequenos (dentro de vagão ou reboque)",
        "Combater o incêndio a distância máxima ou usar dispositivos de jato automáticos ou controle remoto.",
        "Resfriar os recipientes com grandes quantidades de água até bem depois de o fogo estar extinto.",
        "NÃO direcionar água para a fonte de vazamento ou dispositivos de segurança.",
        "Retirar-se imediatamente em caso de som crescente de dispositivos de segurança ou descoloração do tanque.",
        "SEMPRE manter-se afastado de tanques em contato direto com chamas.",
        "Para incêndio de grandes proporções, usar canhões monitores ou dispositivos automáticos; se impossível, retirar-se da área e deixar queimar."
      ],
      derramamento: [
        "Considerar evacuação inicial a favor do vento por pelo menos 800 metros.",
        "Para gases inflamáveis, ELIMINAR todas as fontes de ignição (não fumar, não usar sinalizadores, faíscas ou chamas na área).",
        "Para substâncias oxidantes, manter materiais combustíveis (madeira, papel, óleo, etc.) afastados do material derramado.",
        "Todo equipamento usado no manuseio do produto deve ser aterrado.",
        "NÃO tocar nem caminhar sobre o material derramado.",
        "Estancar o vazamento se possível sem risco pessoal.",
        "Usar neblina d'água para reduzir vapores ou desviar a nuvem de vapor. Evitar que a água escorra e entre em contato com o material derramado.",
        "NÃO direcionar água para o derramamento ou fonte de vazamento.",
        "Prevenir a dispersão de vapores por esgotos, sistemas de ventilação e áreas confinadas.",
        "Ventilar a área.",
        "Isolar a área até que o gás tenha se dispersado."
      ],
      primeirosSocorros: [
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele.",
        "Em caso de queimaduras, resfriar imediatamente a pele afetada com água fria pelo maior tempo possível. Não remover roupas aderidas à pele."
      ]
    }
  },
];