import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import GuiaPage from "./pages/GuiaPage.tsx";
import SecaoPage from "./pages/SecaoPage.tsx";
import IsolamentoPage from "./pages/IsolamentoPage.tsx";
import InstallPage from "./pages/InstallPage.tsx";
import TutorialPage from "./pages/TutorialPage.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/guia/:numero" element={<GuiaPage />} />
          <Route path="/secao/:cor" element={<SecaoPage />} />
          <Route path="/isolamento" element={<IsolamentoPage />} />
          <Route path="/install" element={<InstallPage />} />
          <Route path="/tutorial" element={<TutorialPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
