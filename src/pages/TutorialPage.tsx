import { useNavigate } from "react-router-dom";
import { ArrowLeft, BookOpen, Hash, FileText, Shield, AlertTriangle, Download, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const secoes = [
  {
    icon: BookOpen,
    corClasse: "bg-muted text-muted-foreground",
    titulo: "Páginas Brancas → Informações Gerais",
    pdf: "Páginas iniciais do manual com informações gerais, tabelas de placas de risco, silhuetas de veículos-tanque e procedimentos básicos.",
    app: "Acesse pela seção \"Informações Gerais\" na tela inicial, ou pelo menu inferior no celular.",
    rota: "/secao/branca",
    rotaLabel: "Ir para Informações Gerais",
  },
  {
    icon: Hash,
    corClasse: "bg-erg-amarela/20 text-erg-amarela",
    titulo: "Páginas Amarelas → Índice por Nº ONU",
    pdf: "Índice numérico onde você folheia para encontrar o número ONU do produto e descobrir o guia de emergência correspondente.",
    app: "Digite o número ONU na barra de busca da tela inicial — o resultado aparece instantaneamente. Ou acesse a seção \"Número ONU\" para navegar pela lista completa.",
    rota: "/secao/amarela",
    rotaLabel: "Ir para Índice por Nº ONU",
  },
  {
    icon: FileText,
    corClasse: "bg-erg-azul/20 text-erg-azul",
    titulo: "Páginas Azuis → Índice por Nome",
    pdf: "Índice alfabético onde você procura pelo nome do produto químico para encontrar o número ONU e o guia correspondente.",
    app: "Use a barra de busca digitando o nome do produto, ou acesse \"Nome do Produto\" para navegar com a barra lateral A-Z.",
    rota: "/secao/azul",
    rotaLabel: "Ir para Índice por Nome",
  },
  {
    icon: Shield,
    corClasse: "bg-erg-laranja/20 text-erg-laranja",
    titulo: "Páginas Laranja → Guias de Emergência",
    pdf: "Fichas numeradas (Guia 111, 112, 113...) com instruções de resposta a emergências: riscos, equipamentos, primeiros socorros, evacuação.",
    app: "Digite o número do guia na busca (ex: \"128\") ou acesse \"Guias de Emergência\" para ver a lista completa. Toque em qualquer guia para ver todos os detalhes.",
    rota: "/secao/laranja",
    rotaLabel: "Ir para Guias de Emergência",
  },
  {
    icon: AlertTriangle,
    corClasse: "bg-erg-verde/20 text-erg-verde",
    titulo: "Tabelas Verdes → Isolamento",
    pdf: "Tabelas no final do manual com distâncias de isolamento inicial e ação protetora para substâncias com risco de inalação tóxica (TIH).",
    app: "Acesse \"Tabelas de Isolamento\" e busque por número ONU ou nome do produto para ver as distâncias recomendadas.",
    rota: "/isolamento",
    rotaLabel: "Ir para Tabelas de Isolamento",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const TutorialPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-14 items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-base font-bold truncate">Como usar o Manual de Emergências</h1>
        </div>
      </header>

      <motion.main
        className="container py-6 space-y-6 max-w-2xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introdução */}
        <motion.section variants={itemVariants} className="space-y-2">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Se você já conhece o manual impresso ou PDF do ERG 2024, este guia mostra onde encontrar cada seção na versão digital. A navegação é mais rápida — mas tudo está nos mesmos lugares que você já conhece.
          </p>
        </motion.section>

        {/* Busca Rápida - Destaque */}
        <motion.div variants={itemVariants}>
          <Card className="border-2 border-primary/30 bg-primary/5">
            <CardContent className="p-4 flex gap-4 items-start">
              <motion.div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/20"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Zap className="h-5 w-5 text-primary" />
              </motion.div>
              <div className="space-y-1">
                <p className="font-bold text-sm">✨ Vantagem digital: Busca Instantânea</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A barra de busca na tela inicial substitui o folhear manual. Basta digitar o nº ONU, nome do produto ou nº do guia — o resultado aparece na hora, sem precisar saber em qual seção procurar.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Seções */}
        <motion.section variants={itemVariants} className="space-y-4">
          <h2 className="text-base font-bold">De → Para: Manual PDF × App</h2>
          <motion.div
            className="space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {secoes.map((secao) => {
              const Icon = secao.icon;
              return (
                <motion.div key={secao.titulo} variants={itemVariants}>
                  <Card className="overflow-hidden hover:shadow-md transition-shadow">
                    <CardContent className="p-4 space-y-3">
                      <div className="flex items-start gap-3">
                        <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${secao.corClasse}`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="font-bold text-sm leading-snug pt-1.5">{secao.titulo}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="rounded-lg bg-muted/50 p-3 space-y-1">
                          <p className="font-semibold text-muted-foreground uppercase tracking-wider text-[10px]">📄 No PDF / Livro</p>
                          <p className="text-muted-foreground leading-relaxed">{secao.pdf}</p>
                        </div>
                        <div className="rounded-lg bg-primary/5 border border-primary/10 p-3 space-y-1">
                          <p className="font-semibold text-primary uppercase tracking-wider text-[10px]">📱 No App</p>
                          <p className="text-foreground leading-relaxed">{secao.app}</p>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full text-xs"
                        onClick={() => navigate(secao.rota)}
                      >
                        {secao.rotaLabel} →
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.section>

        {/* Dica final - Instalar */}
        <motion.div variants={itemVariants}>
          <Card className="border-2 border-erg-verde/30 bg-erg-verde/5">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-erg-verde/20">
                  <Download className="h-5 w-5 text-erg-verde" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-sm">Instale no celular para usar offline</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Assim como o livro físico, o app funciona sem internet depois de instalado. Ideal para atendimentos em campo.
                  </p>
                </div>
              </div>
              <Button
                className="w-full"
                onClick={() => navigate("/install")}
              >
                <Download className="h-4 w-4 mr-2" />
                Como instalar o app
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </motion.main>

      {/* Mobile bottom padding */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default TutorialPage;
