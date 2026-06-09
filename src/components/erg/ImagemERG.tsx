import { useState } from "react";
import { ImageIcon } from "lucide-react";

interface ImagemERGProps {
  arquivo: string;
  pagina: number;
  descricao: string;
  alt: string;
  className?: string;
}

const ImagemERG = ({ arquivo, pagina, descricao, alt, className = "" }: ImagemERGProps) => {
  const [erro, setErro] = useState(false);
  const [zoom, setZoom] = useState(false);
  const src = `/images/erg/${arquivo}`;

  if (erro) {
    return (
      <div className={`border-2 border-dashed border-muted-foreground/30 rounded-lg bg-muted/30 p-4 flex flex-col items-center justify-center gap-2 text-center ${className}`}>
        <ImageIcon className="h-8 w-8 text-muted-foreground/40" />
        <p className="text-xs font-bold text-muted-foreground">ERG 2024 — Página {pagina}</p>
        <p className="text-xs text-muted-foreground/70">{descricao}</p>
        <code className="text-[10px] bg-muted px-2 py-0.5 rounded text-muted-foreground/60">{src}</code>
      </div>
    );
  }

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={`rounded-lg cursor-zoom-in ${className}`}
        onError={() => setErro(true)}
        onClick={() => setZoom(true)}
      />
      {zoom && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
          onClick={() => setZoom(false)}
        >
          <img src={src} alt={alt} className="max-w-full max-h-full object-contain" />
        </div>
      )}
    </>
  );
};

export default ImagemERG;
