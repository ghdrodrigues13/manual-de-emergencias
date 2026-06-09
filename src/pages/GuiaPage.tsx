import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertTriangle, Flame, Heart, Shield, Droplets, ChevronRight, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { guiasEmergencia } from "@/data/guias-emergencia";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

const GuiaPage = () => {
  const { numero } = useParams<{ numero: string }>();
  const navigate = useNavigate();

  const isPolimerizacao = numero?.endsWith("P") ?? false;
  const guiaNumero = isPolimerizacao ? numero!.slice(0, -1) : numero;
  const guia = guiasEmergencia.find((g) => g.numero === guiaNumero);

  if (!guia) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-6xl">🔍</p>
          <h2 className="text-xl font-bold">Guia {numero} não encontrado</h2>
          <p className="text-muted-foreground">O guia solicitado não está disponível nesta versão.</p>
          <Button onClick={() => navigate(-1)}>Voltar</Button>
        </div>
      </div>
    );
  }

  const compartilhar = () => {
    if (navigator.share) {
      navigator.share({
        title: `Manual de Emergências — Guia ${guia.numero}`,
        text: `${guia.titulo} — Manual de Emergências`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-erg-laranja/10 backdrop-blur">
        <div className="container flex h-14 items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => navigate(-1)} className="shrink-0">
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div className="flex-1 min-w-0">
            <h1 className="font-bold text-base truncate">
              <span className="font-mono text-erg-laranja">GUIA {isPolimerizacao ? `${guia.numero}P` : guia.numero}</span>
              <span className="mx-2 text-border">|</span>
              <span>{guia.titulo}</span>
            </h1>
          </div>
          <Button variant="ghost" size="icon" onClick={compartilhar} className="shrink-0">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
      </header>

      <motion.main className="container py-4 space-y-4 pb-24 md:pb-8" variants={containerVariants} initial="hidden" animate="visible">
        {isPolimerizacao && (
          <motion.div variants={itemVariants}><Card className="border-l-4 border-l-erg-laranja overflow-hidden">
            <CardContent className="p-4 flex gap-3 items-start bg-erg-laranja/10">
              <AlertTriangle className="h-5 w-5 text-erg-laranja shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-erg-laranja mb-1">ATENÇÃO — RISCO DE POLIMERIZAÇÃO</p>
                <p className="text-sm">Este material pode polimerizar explosivamente quando aquecido ou contaminado. Fuga de material pode resultar em incêndio ou explosão.</p>
              </div>
            </CardContent>
          </Card></motion.div>
        )}
        {/* RISCOS POTENCIAIS */}
        <motion.div variants={itemVariants}><Card className="border-l-4 border-l-danger-high overflow-hidden">
          <CardHeader className="bg-danger-high/10 py-3 px-4">
            <CardTitle className="flex items-center gap-2 text-danger-high text-base">
              <AlertTriangle className="h-5 w-5" />
              RISCOS POTENCIAIS
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-sm mb-2">
                <Flame className="h-4 w-4 text-erg-laranja" />
                Incêndio ou Explosão
              </h3>
              <ul className="space-y-1.5">
                {guia.riscosPotenciais.incendioExplosao.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={r.toUpperCase() === r ? "font-bold text-danger-high" : ""}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold text-sm mb-2">
                <Heart className="h-4 w-4 text-danger-high" />
                Saúde
              </h3>
              <ul className="space-y-1.5">
                {guia.riscosPotenciais.saude.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={r.includes("TÓXICO") || r.includes("FATAL") ? "font-bold text-danger-high" : ""}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card></motion.div>

        {/* SEGURANÇA PÚBLICA */}
        <motion.div variants={itemVariants}><Card className="border-l-4 border-l-erg-azul overflow-hidden">
          <CardHeader className="bg-erg-azul/10 py-3 px-4">
            <CardTitle className="flex items-center gap-2 text-erg-azul text-base">
              <Shield className="h-5 w-5" />
              SEGURANÇA PÚBLICA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div>
              <h3 className="font-bold text-sm mb-2">Vestuário de Proteção</h3>
              <ul className="space-y-1.5">
                {guia.segurancaPublica.vestuario.map((v, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-sm mb-2">Evacuação</h3>
              <ul className="space-y-1.5">
                {guia.segurancaPublica.evacuacao.map((e, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={e.includes("ISOLAR") || e.includes("800") || e.includes("1.600") ? "font-bold" : ""}>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card></motion.div>

        {/* RESPOSTA DE EMERGÊNCIA */}
        <motion.div variants={itemVariants}><Card className="border-l-4 border-l-erg-verde overflow-hidden">
          <CardHeader className="bg-erg-verde/10 py-3 px-4">
            <CardTitle className="flex items-center gap-2 text-erg-verde text-base">
              <Droplets className="h-5 w-5" />
              RESPOSTA DE EMERGÊNCIA
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 space-y-4">
            <div>
              <h3 className="flex items-center gap-2 font-bold text-sm mb-2">
                <Flame className="h-4 w-4 text-erg-laranja" />
                Incêndio
              </h3>
              <ul className="space-y-1.5">
                {guia.respostaEmergencia.incendio.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={r.includes("NÃO") ? "font-bold text-danger-high" : ""}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold text-sm mb-2">
                <Droplets className="h-4 w-4 text-erg-azul" />
                Derramamento ou Vazamento
              </h3>
              <ul className="space-y-1.5">
                {guia.respostaEmergencia.derramamento.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span className={r.includes("NÃO") || r.includes("ELIMINAR") ? "font-bold text-danger-high" : ""}>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-bold text-sm mb-2">
                <Heart className="h-4 w-4 text-danger-high" />
                Primeiros Socorros
              </h3>
              <ul className="space-y-1.5">
                {guia.respostaEmergencia.primeirosSocorros.map((r, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <ChevronRight className="h-4 w-4 shrink-0 mt-0.5 text-muted-foreground" />
                    <span>{r}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card></motion.div>
      </motion.main>
    </div>
  );
};

export default GuiaPage;
