import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Hash, FileText, Shield, AlertTriangle, ChevronRight, ChevronLeft, X, Zap, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const ONBOARDING_KEY = "manual-emergencias-onboarding-seen";

const steps = [
  {
    icon: AlertTriangle,
    title: "Bem-vindo ao Manual de Emergências",
    desc: "Este app substitui o manual impresso. Todas as seções do livro estão aqui, com busca instantânea.",
    color: "text-primary",
    bg: "bg-primary/10",
    accent: "hsl(var(--primary))",
    targetSelector: null,
  },
  {
    icon: Search,
    title: "Busca Rápida",
    desc: "Digite o nº ONU, nome do produto ou nº do guia na barra de pesquisa. Resultados aparecem instantaneamente.",
    color: "text-erg-azul",
    bg: "bg-erg-azul/10",
    accent: "hsl(var(--erg-azul))",
    targetSelector: '[data-tour="search"]',
  },
  {
    icon: Hash,
    title: "Acesso Rápido",
    desc: "Use os botões de acesso rápido para ir direto ao Índice por Nº ONU, Índice por Nome do Produto ou Placas de Risco.",
    color: "text-erg-amarela",
    bg: "bg-erg-amarela/10",
    accent: "hsl(var(--erg-amarela))",
    targetSelector: '[data-tour="quick-access"]',
  },
  {
    icon: Shield,
    title: "Guias de Emergência",
    desc: "Acesse fichas completas com riscos, segurança pública e procedimentos de resposta para cada substância.",
    color: "text-erg-laranja",
    bg: "bg-erg-laranja/10",
    accent: "hsl(var(--erg-laranja))",
    targetSelector: '[data-tour="classes"]',
  },
  {
    icon: BookOpen,
    title: "Seções do Guia",
    desc: "Navegue pelas 5 seções do livro: Informações Gerais (branca), Índice ONU (amarela), Índice por Nome (azul), Guias de Emergência (laranja) e Tabelas de Isolamento (verde).",
    color: "text-primary",
    bg: "bg-primary/10",
    accent: "hsl(var(--primary))",
    targetSelector: '[data-tour="secoes"]',
  },
  {
    icon: Zap,
    title: "Use Offline",
    desc: "Instale o app no celular para acessar mesmo sem internet — como ter o livro físico sempre no bolso.",
    color: "text-erg-verde",
    bg: "bg-erg-verde/10",
    accent: "hsl(var(--erg-verde))",
    targetSelector: '[data-tour="install"]',
  },
];

interface OnboardingGuideProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

interface TargetRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

const PADDING = 10;

const OnboardingGuide = ({ forceOpen, onClose }: OnboardingGuideProps) => {
  const [visible, setVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1); // 1 = forward, -1 = back
  const [targetRect, setTargetRect] = useState<TargetRect | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (forceOpen) {
      setStep(0);
      setDirection(1);
      setVisible(true);
      return;
    }
    const seen = localStorage.getItem(ONBOARDING_KEY);
    if (!seen) {
      setVisible(true);
    }
  }, [forceOpen]);

  const updateTargetRect = useCallback(() => {
    const selector = steps[step]?.targetSelector;
    if (!selector) {
      setTargetRect(null);
      return;
    }
    const el = document.querySelector(selector);
    if (!el) {
      setTargetRect(null);
      return;
    }
    el.scrollIntoView({ behavior: "smooth", block: "center" });
    requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      setTargetRect({
        top: rect.top - PADDING,
        left: rect.left - PADDING,
        width: rect.width + PADDING * 2,
        height: rect.height + PADDING * 2,
      });
    });
  }, [step]);

  useEffect(() => {
    if (!visible) return;
    updateTargetRect();
    const onResize = () => updateTargetRect();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onResize, true);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onResize, true);
    };
  }, [visible, step, updateTargetRect]);

  const close = () => {
    localStorage.setItem(ONBOARDING_KEY, "true");
    setVisible(false);
    setTargetRect(null);
    onClose?.();
  };

  const goTo = (newStep: number) => {
    setDirection(newStep > step ? 1 : -1);
    setStep(newStep);
  };

  const next = () => {
    if (step < steps.length - 1) {
      goTo(step + 1);
    } else {
      close();
    }
  };

  const prev = () => {
    if (step > 0) goTo(step - 1);
  };

  const current = steps[step];
  const Icon = current.icon;

  const getCardStyle = (): React.CSSProperties => {
    const viewportWidth = window.innerWidth;
    const cardWidth = Math.min(380, viewportWidth - 32);

    if (!targetRect) {
      return {
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "90%",
        maxWidth: "380px",
      };
    }

    const cardHeight = 340;
    const gap = 18;
    const viewportHeight = window.innerHeight;

    let top = targetRect.top + targetRect.height + gap;
    let left = targetRect.left + targetRect.width / 2 - cardWidth / 2;

    if (top + cardHeight > viewportHeight - 20) {
      top = targetRect.top - cardHeight - gap;
    }

    if (top < 20) {
      top = Math.max(20, targetRect.top + targetRect.height / 2 - cardHeight / 2);
    }

    left = Math.max(16, Math.min(left, viewportWidth - cardWidth - 16));

    return {
      position: "fixed",
      top: `${top}px`,
      left: `${left}px`,
      width: `${cardWidth}px`,
    };
  };

  const getOverlayClipPath = (): string => {
    if (!targetRect) return "none";
    const { top, left, width, height } = targetRect;
    const r = 14;
    return `polygon(
      0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 0%,
      ${left + r}px ${top}px,
      ${left + width - r}px ${top}px,
      ${left + width}px ${top + r}px,
      ${left + width}px ${top + height - r}px,
      ${left + width - r}px ${top + height}px,
      ${left + r}px ${top + height}px,
      ${left}px ${top + height - r}px,
      ${left}px ${top + r}px,
      ${left + r}px ${top}px
    )`;
  };

  // Slide variants based on direction
  const cardVariants = {
    enter: (dir: number) => ({
      x: targetRect ? 0 : "-50%",
      y: targetRect ? 0 : "-50%",
      opacity: 0,
      scale: 0.92,
      ...(targetRect ? { [dir > 0 ? "x" : "x"]: dir * 30 } : {}),
    }),
    center: {
      x: targetRect ? 0 : "-50%",
      y: targetRect ? 0 : "-50%",
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: targetRect ? dir * -30 : "-50%",
      y: targetRect ? 0 : "-50%",
      opacity: 0,
      scale: 0.92,
    }),
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Overlay */}
          {targetRect ? (
            <motion.div
              className="absolute inset-0"
              style={{
                clipPath: getOverlayClipPath(),
                backgroundColor: "rgba(0,0,0,0.72)",
              }}
              onClick={close}
              animate={{ clipPath: getOverlayClipPath() }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            />
          ) : (
            <motion.div
              className="absolute inset-0 bg-background/85 backdrop-blur-md"
              onClick={close}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            />
          )}

          {/* Spotlight ring with animated pulse */}
          {targetRect && (
            <motion.div
              className="fixed rounded-xl pointer-events-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{
                opacity: 1,
                scale: 1,
                top: targetRect.top,
                left: targetRect.left,
                width: targetRect.width,
                height: targetRect.height,
              }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                border: `2px solid ${current.accent}`,
                boxShadow: `0 0 0 4px ${current.accent}33, 0 0 20px ${current.accent}22`,
              }}
            >
              {/* Animated pulse ring */}
              <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                style={{ border: `2px solid ${current.accent}` }}
              />
            </motion.div>
          )}

          {/* Card */}
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              ref={cardRef}
              key={step}
              className="z-10 rounded-2xl bg-card shadow-2xl overflow-hidden"
              style={{
                ...getCardStyle(),
                border: `1.5px solid ${current.accent}44`,
              }}
              custom={direction}
              variants={cardVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Colored accent bar at top */}
              <motion.div
                className="h-1 w-full"
                style={{ background: `linear-gradient(90deg, ${current.accent}, ${current.accent}88)` }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              />

              <div className="p-5 pt-4">
                {/* Header row: step counter + close */}
                <div className="flex items-center justify-between mb-4">
                  <motion.span
                    className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {step + 1} de {steps.length}
                  </motion.span>
                  <button
                    onClick={close}
                    className="rounded-full p-1.5 text-muted-foreground hover:bg-accent hover:text-foreground transition-colors"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon with animated entrance */}
                  <motion.div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${current.bg}`}
                    initial={{ scale: 0, rotate: -15 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.1, type: "spring", stiffness: 260, damping: 18 }}
                  >
                    <Icon className={`h-7 w-7 ${current.color}`} />
                  </motion.div>

                  <motion.h3
                    className="text-base font-bold leading-tight"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    {current.title}
                  </motion.h3>

                  <motion.p
                    className="text-sm text-muted-foreground leading-relaxed max-w-[300px]"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.22, duration: 0.3 }}
                  >
                    {current.desc}
                  </motion.p>

                  {/* Progress dots — clickable */}
                  <div className="flex gap-1.5 pt-1">
                    {steps.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        className="p-0.5 focus:outline-none"
                        aria-label={`Passo ${i + 1}`}
                      >
                        <motion.div
                          className="rounded-full"
                          animate={{
                            width: i === step ? 22 : 6,
                            height: 6,
                            backgroundColor: i === step ? current.accent : "hsl(var(--muted-foreground) / 0.2)",
                          }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                        />
                      </button>
                    ))}
                  </div>

                  {/* Navigation buttons */}
                  <div className="flex w-full gap-2 pt-2">
                    {step > 0 && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 gap-1"
                        onClick={prev}
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Voltar
                      </Button>
                    )}
                    <Button
                      size="sm"
                      className="flex-1 gap-1"
                      onClick={next}
                      style={{
                        background: step === steps.length - 1
                          ? `linear-gradient(135deg, ${current.accent}, ${current.accent}cc)`
                          : undefined,
                      }}
                    >
                      {step < steps.length - 1 ? (
                        <>
                          Próximo
                          <ChevronRight className="h-4 w-4" />
                        </>
                      ) : (
                        "Começar! 🚀"
                      )}
                    </Button>
                  </div>

                  <button
                    onClick={close}
                    className="text-[11px] text-muted-foreground/50 hover:text-foreground transition-colors pt-0.5"
                  >
                    Pular introdução
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OnboardingGuide;
