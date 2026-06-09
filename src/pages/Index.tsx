import { useState, useMemo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Fuse from "fuse.js";
import { Search, Hash, FileText, Shield, AlertTriangle, Moon, Sun, Download, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { indiceONU } from "@/data/indice-onu";
import { classesRisco } from "@/data/classes-risco";
import { useTheme } from "@/hooks/use-theme";
import OnboardingGuide from "@/components/OnboardingGuide";

const fuse = new Fuse(indiceONU, {
  keys: ["onu", "nome", "guia"],
  threshold: 0.3,
  includeScore: true,
});

const Index = () => {
  const [busca, setBusca] = useState("");
  const [guiaAberto, setGuiaAberto] = useState(false);
  const navigate = useNavigate();
  const { tema, alternarTema } = useTheme();

  const abrirGuia = useCallback(() => setGuiaAberto(true), []);

  const resultados = useMemo(() => {
    if (!busca.trim()) return [];
    return fuse.search(busca).slice(0, 12);
  }, [busca]);

  return (
    <div className="min-h-screen bg-background">
      <OnboardingGuide forceOpen={guiaAberto} onClose={() => setGuiaAberto(false)} />
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <AlertTriangle className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold leading-tight tracking-tight">Manual para Atendimento</h1>
              <p className="text-xs text-muted-foreground leading-tight">de emergências</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" onClick={abrirGuia} className="h-10 gap-1.5 px-3" title="Como Usar">
              <HelpCircle className="h-5 w-5" />
              <span className="text-xs font-bold">GUIA</span>
            </Button>
            <Button variant="ghost" size="icon" onClick={() => navigate("/install")} className="h-10 w-10" title="Instalar App" data-tour="install">
              <Download className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" onClick={alternarTema} className="h-10 w-10">
              {tema === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </header>

      <motion.main
        className="container py-6 space-y-8"
        initial="hidden"
        animate="visible"
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {/* Search Bar */}
        <motion.section className="space-y-3" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}>
          <div className="relative" data-tour="search">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Buscar por nº ONU, nome do produto ou nº do guia..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="h-14 pl-12 text-base rounded-xl border-2 focus-visible:ring-primary/30 focus-visible:border-primary"
            />
          </div>

          {/* Search Results */}
          {resultados.length > 0 && (
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="divide-y">
                  {resultados.map(({ item }) => (
                    <button
                      key={`${item.onu}-${item.nome}`}
                      onClick={() => navigate(`/guia/${item.guia}`)}
                      className="flex w-full items-center gap-4 px-4 py-3 text-left hover:bg-accent transition-colors"
                    >
                      <span className={`font-mono font-bold text-sm px-2 py-1 rounded ${
                        item.destacado 
                          ? "bg-erg-verde/20 text-erg-verde" 
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {item.onu}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{item.nome}</p>
                      </div>
                      <span className="font-mono text-xs bg-erg-laranja/15 text-erg-laranja px-2 py-1 rounded font-bold">
                        Guia {item.guia}
                      </span>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </motion.section>

        {/* Quick Access Buttons */}
        <motion.section className="grid grid-cols-1 sm:grid-cols-3 gap-3" data-tour="quick-access" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}>
          <Button
            variant="outline"
            className="h-16 flex items-center gap-3 text-left justify-start rounded-xl border-2 hover:border-erg-amarela hover:bg-erg-amarela/10 transition-all"
            onClick={() => navigate("/secao/amarela")}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-erg-amarela/20">
              <Hash className="h-5 w-5 text-erg-amarela" />
            </div>
            <div>
              <p className="font-semibold text-sm">Número ONU</p>
              <p className="text-xs text-muted-foreground">Buscar por ID numérico</p>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-16 flex items-center gap-3 text-left justify-start rounded-xl border-2 hover:border-erg-azul hover:bg-erg-azul/10 transition-all"
            onClick={() => navigate("/secao/azul")}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-erg-azul/20">
              <FileText className="h-5 w-5 text-erg-azul" />
            </div>
            <div>
              <p className="font-semibold text-sm">Nome do Produto</p>
              <p className="text-xs text-muted-foreground">Índice alfabético</p>
            </div>
          </Button>

          <Button
            variant="outline"
            className="h-16 flex items-center gap-3 text-left justify-start rounded-xl border-2 hover:border-erg-laranja hover:bg-erg-laranja/10 transition-all"
            onClick={() => navigate("/secao/laranja")}
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-erg-laranja/20">
              <Shield className="h-5 w-5 text-erg-laranja" />
            </div>
            <div>
              <p className="font-semibold text-sm">Placas de Risco</p>
              <p className="text-xs text-muted-foreground">Identificação visual</p>
            </div>
          </Button>
        </motion.section>

        {/* Hazard Classes Grid */}
        <motion.section className="space-y-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}>
          <h2 className="text-lg font-bold">Identificação por Classe de Risco</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3" data-tour="classes">
            {classesRisco.map((classe) => (
              <button
                key={`${classe.classe}-${classe.divisao || ''}`}
                onClick={() => navigate(`/guia/${classe.guiaPadrao}`)}
                className="group flex flex-col items-center gap-2 rounded-xl border-2 border-border bg-card p-4 text-center hover:border-primary/50 hover:shadow-md transition-all"
              >
                <span className="text-3xl">{classe.icone}</span>
                <div>
                  <p className="font-bold text-xs">
                    Classe {classe.classe}
                    {classe.divisao && <span className="text-muted-foreground">.{classe.divisao.split('.')[1]}</span>}
                  </p>
                  <p className="text-[11px] text-muted-foreground leading-tight mt-0.5">{classe.nome}</p>
                </div>
              </button>
            ))}
          </div>
        </motion.section>

        {/* Section Navigation */}
        <motion.section className="space-y-4" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } } }}>
          <h2 className="text-lg font-bold">Seções do Guia</h2>
          <div data-tour="secoes" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              { cor: "branca", label: "Informações Gerais", desc: "Procedimentos e orientações", rota: "/secao/branca", borderClass: "border-l-4 border-l-muted-foreground/40" },
              { cor: "amarela", label: "Índice por Nº ONU", desc: "Busca por número de identificação", rota: "/secao/amarela", borderClass: "border-l-4 border-l-erg-amarela" },
              { cor: "azul", label: "Índice por Nome", desc: "Busca alfabética por produto", rota: "/secao/azul", borderClass: "border-l-4 border-l-erg-azul" },
              { cor: "laranja", label: "Guias de Emergência", desc: "Fichas de resposta", rota: "/secao/laranja", borderClass: "border-l-4 border-l-erg-laranja" },
              { cor: "verde", label: "Tabelas de Isolamento", desc: "Distâncias de segurança", rota: "/isolamento", borderClass: "border-l-4 border-l-erg-verde" },
            ].map((secao) => (
              <button
                key={secao.cor}
                onClick={() => navigate(secao.rota)}
                className={`${secao.borderClass} flex flex-col items-start rounded-lg bg-card p-4 text-left hover:shadow-md transition-all border border-border`}
              >
                <p className="font-bold text-sm">{secao.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{secao.desc}</p>
              </button>
            ))}
          </div>
        </motion.section>
      </motion.main>

      {/* Bottom Navigation - Mobile */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 border-t bg-card/95 backdrop-blur md:hidden">
        <div className="grid grid-cols-5 gap-0">
          {[
            { icon: AlertTriangle, label: "Início", rota: "/" },
            { icon: Hash, label: "ONU", rota: "/secao/amarela" },
            { icon: Search, label: "Buscar", rota: "/secao/azul" },
            { icon: Shield, label: "Guias", rota: "/secao/laranja" },
            { icon: FileText, label: "Isolar", rota: "/isolamento" },
          ].map(({ icon: Icon, label, rota }) => (
            <button
              key={label}
              onClick={() => navigate(rota)}
              className="flex flex-col items-center gap-1 py-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile bottom padding */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
