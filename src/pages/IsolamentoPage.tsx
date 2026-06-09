import { useState, useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Search, AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { tabelaIsolamento } from "@/data/tabelas-isolamento";

const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

const IsolamentoPage = () => {
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("");

  const dados = useMemo(() => {
    if (!filtro) return tabelaIsolamento;
    const f = filtro.toLowerCase();
    return tabelaIsolamento.filter(
      (i) => i.onu.includes(f) || i.nome.toLowerCase().includes(f)
    );
  }, [filtro]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container flex h-14 items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-bold text-base truncate">Tabela 1 — Isolamento e Ação Protetora</h1>
        </div>
      </header>

      <motion.main className="container py-4 space-y-4 pb-24 md:pb-8" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}>
        <motion.div variants={itemVariants} className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Filtrar por nº ONU ou nome..."
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className="pl-10 h-12 rounded-xl"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="rounded-lg border bg-erg-verde/5 p-3 flex gap-2 items-start">
          <AlertTriangle className="h-4 w-4 text-erg-verde shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground">
            <strong>Distâncias em metros</strong> (isolamento inicial) e <strong>quilômetros</strong> (ação protetora).
            Considere as condições de vento e terreno ao aplicar estas distâncias.
          </p>
        </motion.div>

        <div className="space-y-4">
          {dados.map((item, index) => (
            <motion.div key={`${item.onu}-${index}`} variants={itemVariants}><Card className="erg-section-verde overflow-hidden">
              <CardHeader className="py-3 px-4 bg-erg-verde/10">
                <CardTitle className="text-sm flex items-center justify-between">
                  <span>
                    <span className="font-mono font-bold">{item.onu}</span>
                    <span className="mx-2 text-border">—</span>
                    <span>{item.nome}</span>
                  </span>
                  {item.reativoAgua && (
                    <span className="text-xs bg-erg-azul/20 text-erg-azul px-2 py-0.5 rounded">
                      Reativo à água
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="grid grid-cols-2 divide-x">
                  {/* Small Spill */}
                  <div className="p-4 space-y-2">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Derramamento Pequeno
                    </h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Isolamento</span>
                        <span className="font-bold font-mono">{item.derramamentoPequeno.isolamentoInicial} m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Dia</span>
                        <span className="font-mono">{item.derramamentoPequeno.diaProtecao} km</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Noite</span>
                        <span className="font-mono">{item.derramamentoPequeno.noiteProtecao} km</span>
                      </div>
                    </div>
                  </div>

                  {/* Large Spill */}
                  <div className="p-4 space-y-2">
                    <h4 className="text-xs font-bold text-muted-foreground uppercase tracking-wider">
                      Derramamento Grande
                    </h4>
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Isolamento</span>
                        <span className="font-bold font-mono text-danger-high">{item.derramamentoGrande.isolamentoInicial} m</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Dia</span>
                        <span className="font-mono">{item.derramamentoGrande.diaProtecao} km</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Noite</span>
                        <span className="font-mono text-danger-high">{item.derramamentoGrande.noiteProtecao} km</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card></motion.div>
          ))}
        </div>
      </motion.main>
    </div>
  );
};

export default IsolamentoPage;
