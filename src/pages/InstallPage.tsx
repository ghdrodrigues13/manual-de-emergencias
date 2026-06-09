import { ArrowLeft, Download, Share, MoreVertical, Plus, Smartphone, Monitor } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } } };

const InstallPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 border-b bg-card/95 backdrop-blur">
        <div className="container mx-auto flex items-center gap-3 px-4 py-3">
          <Button variant="ghost" size="icon" onClick={() => navigate("/")}>
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-lg font-bold text-foreground">Instalar o App</h1>
            <p className="text-xs text-muted-foreground">Use offline no celular ou computador</p>
          </div>
        </div>
      </header>

      <motion.main className="container mx-auto max-w-2xl space-y-6 px-4 py-6" variants={containerVariants} initial="hidden" animate="visible">
        <motion.div variants={itemVariants} className="rounded-lg border border-primary/20 bg-primary/5 p-4 text-sm text-foreground">
          <p className="font-semibold">
            <Download className="mr-1.5 inline-block h-4 w-4 text-primary" />
            Este app pode ser instalado como um aplicativo normal!
          </p>
          <p className="mt-1 text-muted-foreground">
            Depois do primeiro acesso com internet, ele funciona offline.
          </p>
        </motion.div>

        {/* Android / Chrome */}
        <motion.div variants={itemVariants}><Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Smartphone className="h-5 w-5 text-primary" />
              Android (Chrome)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground">
            <ol className="list-inside list-decimal space-y-2">
              <li>
                Abra o app no <strong>Google Chrome</strong>
              </li>
              <li>
                Toque no menu <MoreVertical className="inline-block h-4 w-4" /> (três pontos) no canto superior direito
              </li>
              <li>
                Toque em <strong>"Instalar aplicativo"</strong> ou <strong>"Adicionar à tela inicial"</strong>
              </li>
              <li>Confirme a instalação</li>
            </ol>
            <p className="text-muted-foreground">
              O ícone do Manual de Emergências aparecerá na sua tela inicial como um app normal.
            </p>
          </CardContent>
        </Card></motion.div>

        {/* iPhone / Safari */}
        <motion.div variants={itemVariants}><Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Smartphone className="h-5 w-5 text-primary" />
              iPhone / iPad (Safari)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground">
            <ol className="list-inside list-decimal space-y-2">
              <li>
                Abra o app no <strong>Safari</strong> (não funciona no Chrome do iOS)
              </li>
              <li>
                Toque no botão <Share className="inline-block h-4 w-4" /> <strong>Compartilhar</strong> (ícone de quadrado com seta para cima)
              </li>
              <li>
                Role para baixo e toque em{" "}
                <strong>
                  <Plus className="inline-block h-4 w-4" /> Adicionar à Tela de Início
                </strong>
              </li>
              <li>
                Toque em <strong>"Adicionar"</strong> no canto superior direito
              </li>
            </ol>
            <p className="text-muted-foreground">
              <strong>Importante:</strong> No iPhone, só funciona pelo Safari. O Chrome do iOS não suporta instalação de PWA.
            </p>
          </CardContent>
        </Card></motion.div>

        {/* Desktop */}
        <motion.div variants={itemVariants}><Card>
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Monitor className="h-5 w-5 text-primary" />
              Computador (Chrome / Edge)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm text-foreground">
            <ol className="list-inside list-decimal space-y-2">
              <li>
                Abra o app no <strong>Google Chrome</strong> ou <strong>Microsoft Edge</strong>
              </li>
              <li>
                Clique no ícone <Download className="inline-block h-4 w-4" /> de instalação na barra de endereço (ao lado da URL)
              </li>
              <li>
                Ou clique no menu <MoreVertical className="inline-block h-4 w-4" /> → <strong>"Instalar Manual de Emergências"</strong>
              </li>
              <li>Confirme a instalação</li>
              <li>
                Pressione a tecla <strong>Windows</strong>, pesquise por <strong>"Manual de Emergências"</strong>,
                clique com o botão direito no resultado e escolha <strong>"Mais → Fixar na barra de tarefas"</strong>
              </li>
            </ol>
            <p className="text-muted-foreground">
              O aplicativo abrirá em sua própria janela, como um programa instalado. Fixar o ícone é opcional e não interfere no funcionamento offline.
            </p>
          </CardContent>
        </Card></motion.div>

        <motion.div variants={itemVariants} className="rounded-lg border bg-muted/50 p-4 text-sm text-muted-foreground">
          <p>
            <strong>Nota:</strong> A instalação e o modo offline funcionam na versão publicada do aplicativo.
            O Manual de Emergências precisa ser acessado uma vez com internet para baixar todos os dados.
            Depois disso, funciona sem conexão. Fixar o ícone serve apenas como atalho.
          </p>
        </motion.div>
      </motion.main>
    </div>
  );
};

export default InstallPage;
