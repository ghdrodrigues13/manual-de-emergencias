import { useState, useMemo, useRef, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Search, ChevronRight, ZoomIn } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { indiceONU } from "@/data/indice-onu";
import { guiasEmergencia } from "@/data/guias-emergencia";
import { getNomesPorLetra, letrasDisponiveis } from "@/data/indice-nomes";
import { paginasBrancas, type ImagemReferencia } from "@/data/paginas-brancas";
import PlacasRisco from "@/components/erg/PlacasRisco";
import VeiculosTanque from "@/components/erg/VeiculosTanque";

const SecaoPage = () => {
  const { cor } = useParams<{ cor: string }>();
  const navigate = useNavigate();
  const [filtro, setFiltro] = useState("");
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [imagemZoom, setImagemZoom] = useState<ImagemReferencia | null>(null);
  const nomesPorLetra = useMemo(() => getNomesPorLetra(), []);

  const nomesFiltrados = useMemo(() => {
    if (!filtro) return nomesPorLetra;
    const f = filtro.toLowerCase();
    const resultado = new Map<string, typeof nomesPorLetra extends Map<string, infer V> ? V : never>();
    for (const [letra, entries] of nomesPorLetra) {
      const filtered = entries.filter(
        (i) => i.nome.toLowerCase().includes(f) || i.onu.includes(f)
      );
      if (filtered.length > 0) resultado.set(letra, filtered);
    }
    return resultado;
  }, [filtro, nomesPorLetra]);

  const scrollToLetra = useCallback((letra: string) => {
    const el = document.getElementById(`letra-${letra}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const titulos: Record<string, string> = {
    branca: "Informações Gerais",
    amarela: "Índice por Número ONU",
    azul: "Índice Alfabético por Nome",
    laranja: "Guias de Emergência",
    verde: "Tabelas de Isolamento",
  };

  // Amarela - sort by ONU number
  const dadosAmarela = useMemo(() => {
    const items = [...indiceONU].sort((a, b) => a.onu.localeCompare(b.onu));
    if (!filtro) return items;
    const f = filtro.toLowerCase();
    return items.filter(
      (i) => i.onu.includes(f) || i.nome.toLowerCase().includes(f) || i.guia.includes(f)
    );
  }, [filtro]);


  // Laranja - all guides
  const dadosLaranja = useMemo(() => {
    const items = [...guiasEmergencia].sort((a, b) => parseInt(a.numero) - parseInt(b.numero));
    if (!filtro) return items;
    const f = filtro.toLowerCase();
    return items.filter(
      (i) => i.numero.includes(f) || i.titulo.toLowerCase().includes(f)
    );
  }, [filtro]);

  return (
    <div className="min-h-screen bg-background">
      <header className={`sticky top-0 z-50 border-b backdrop-blur bg-card/95`}>
        <div className="container flex h-14 items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="font-bold text-base truncate">{titulos[cor || ""] || "Seção"}</h1>
        </div>
      </header>

      <motion.main className="container py-4 space-y-4 pb-24 md:pb-8" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
        {/* Filter */}
        {cor !== "branca" && (
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder={
                cor === "amarela" ? "Filtrar por nº ONU..." :
                cor === "azul" ? "Filtrar por nome do produto..." :
                cor === "laranja" ? "Filtrar por nº ou título do guia..." :
                "Filtrar..."
              }
              value={filtro}
              onChange={(e) => setFiltro(e.target.value)}
              className="pl-10 h-12 rounded-xl"
            />
          </div>
        )}

        {/* Branca - General Info */}
        {cor === "branca" && (
          <div className="space-y-4">
            {paginasBrancas.map((secao) => (
              <Card key={secao.id} className="erg-section-branca overflow-hidden">
                <CardHeader className="py-3 px-4 bg-muted/50">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <span className="text-lg">{secao.icone}</span>
                    {secao.titulo}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-4">
                  {/* Special component rendering */}
                  {secao.componenteEspecial === "placas-risco" && <PlacasRisco />}
                  {secao.componenteEspecial === "veiculos-tanque" && <VeiculosTanque />}
                  {/* Section-level images */}
                  {secao.imagens?.map((img, imgIdx) => (
                    <button
                      key={imgIdx}
                      onClick={() => setImagemZoom(img)}
                      className="relative group w-full rounded-lg overflow-hidden border bg-muted/30"
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                        <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
                      </div>
                      {img.legenda && (
                        <p className="text-xs text-muted-foreground text-center py-2 px-3 bg-muted/50">{img.legenda}</p>
                      )}
                    </button>
                  ))}
                  {secao.itens.map((item, idx) => (
                    <div key={idx}>
                      {item.subtitulo && (
                        <h4 className="font-bold text-sm mb-2 text-primary">{item.subtitulo}</h4>
                      )}
                      <ul className="space-y-1.5">
                        {item.conteudo.map((texto, j) => (
                          <li key={j} className="flex gap-2 text-sm">
                            <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                            <span className={texto.startsWith("NÃO") || texto.includes("ISOLAR") ? "font-bold text-destructive" : "text-muted-foreground"}>{texto}</span>
                          </li>
                        ))}
                      </ul>
                      {/* Item-level images */}
                      {item.imagens?.map((img, imgIdx) => (
                        <button
                          key={imgIdx}
                          onClick={() => setImagemZoom(img)}
                          className="relative group w-full rounded-lg overflow-hidden border bg-muted/30 mt-3"
                        >
                          <img src={img.src} alt={img.alt} className="w-full h-auto" loading="lazy" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                            <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-80 transition-opacity drop-shadow-lg" />
                          </div>
                          {img.legenda && (
                            <p className="text-xs text-muted-foreground text-center py-2 px-3 bg-muted/50">{img.legenda}</p>
                          )}
                        </button>
                      ))}
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Amarela - ONU Index */}
        {cor === "amarela" && (
          <div className="rounded-lg border overflow-hidden bg-card">
            <div className="grid grid-cols-[80px_1fr_80px] bg-erg-amarela/20 px-4 py-2 text-xs font-bold">
              <span>Nº ONU</span>
              <span>Nome do Material</span>
              <span className="text-right">Guia</span>
            </div>
            <div className="divide-y max-h-[calc(100vh-200px)] overflow-y-auto">
              {dadosAmarela.map((item) => (
                <button
                  key={`${item.onu}-${item.nome}`}
                  onClick={() => navigate(`/guia/${item.guia}`)}
                  className={`grid grid-cols-[80px_1fr_80px] w-full px-4 py-3 text-left hover:bg-accent transition-colors ${
                    item.destacado ? "bg-erg-verde/5" : ""
                  }`}
                >
                  <span className="font-mono font-bold text-sm">{item.onu}</span>
                  <span className="text-sm truncate pr-2">{item.nome}</span>
                  <span className="font-mono text-sm text-erg-laranja font-bold text-right">{item.guia}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Azul - Name Index */}
        {cor === "azul" && (
          <div className="flex gap-2">
            {/* Letter navigation bar */}
            <div className="sticky top-16 flex flex-col items-center gap-0.5 py-1 shrink-0">
              {letrasDisponiveis.map((letra) => {
                const hasResults = nomesFiltrados.has(letra);
                return (
                  <button
                    key={letra}
                    onClick={() => scrollToLetra(letra)}
                    disabled={!hasResults}
                    className={`w-7 h-6 text-[11px] font-bold rounded transition-colors ${
                      hasResults
                        ? "text-primary hover:bg-erg-azul/20"
                        : "text-muted-foreground/30 cursor-default"
                    }`}
                  >
                    {letra}
                  </button>
                );
              })}
            </div>

            {/* List */}
            <div className="flex-1 rounded-lg border overflow-hidden bg-card">
              <div className="grid grid-cols-[1fr_80px_80px] bg-erg-azul/20 px-4 py-2 text-xs font-bold">
                <span>Nome do Material</span>
                <span className="text-right">ONU</span>
                <span className="text-right">Guia</span>
              </div>
              <div ref={scrollContainerRef} className="divide-y max-h-[calc(100vh-200px)] overflow-y-auto">
                {Array.from(nomesFiltrados.entries()).map(([letra, entries]) => (
                  <div key={letra}>
                    <div
                      id={`letra-${letra}`}
                      className="sticky top-0 z-10 bg-erg-azul/10 px-4 py-1.5 text-xs font-black text-erg-azul tracking-wider border-b"
                    >
                      {letra}
                    </div>
                    {entries.map((item) => (
                      <button
                        key={`${item.onu}-${item.nome}`}
                        onClick={() => navigate(`/guia/${item.guia}`)}
                        className={`grid grid-cols-[1fr_80px_80px] w-full px-4 py-3 text-left hover:bg-accent transition-colors ${
                          item.destacado ? "bg-erg-verde/5" : ""
                        }`}
                      >
                        <span className="text-sm truncate pr-2">{item.nome}</span>
                        <span className="font-mono text-sm text-right">{item.onu}</span>
                        <span className="font-mono text-sm text-erg-laranja font-bold text-right">{item.guia}</span>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Laranja - Emergency Guides */}
        {cor === "laranja" && (
          <div className="grid gap-3">
            {dadosLaranja.map((guia) => (
              <button
                key={guia.numero}
                onClick={() => navigate(`/guia/${guia.numero}`)}
                className="erg-section-laranja flex items-center gap-4 rounded-lg border bg-card p-4 text-left hover:shadow-md transition-all"
              >
                <span className="font-mono text-2xl font-black text-erg-laranja">{guia.numero}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm">{guia.titulo}</p>
                  <p className="text-xs text-muted-foreground mt-1 truncate">
                    {guia.riscosPotenciais.incendioExplosao[0]}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </motion.main>

      {/* Image zoom dialog */}
      <Dialog open={!!imagemZoom} onOpenChange={(open) => !open && setImagemZoom(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-2 sm:p-4">
          <DialogTitle className="sr-only">{imagemZoom?.alt}</DialogTitle>
          {imagemZoom && (
            <div className="flex flex-col items-center gap-2">
              <img
                src={imagemZoom.src}
                alt={imagemZoom.alt}
                className="max-w-full max-h-[85vh] object-contain rounded"
              />
              {imagemZoom.legenda && (
                <p className="text-sm text-muted-foreground text-center">{imagemZoom.legenda}</p>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SecaoPage;
