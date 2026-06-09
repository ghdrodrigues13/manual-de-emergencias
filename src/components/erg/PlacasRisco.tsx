import ImagemERG from "./ImagemERG";

const PlacasRisco = () => {
  return (
    <div className="space-y-6">
      <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 text-sm text-amber-800 dark:text-amber-200">
        <p className="font-bold mb-1">📋 Como identificar</p>
        <p>A <strong>placa de risco</strong> (losango colorido) indica a classe de risco do material. O <strong>painel de segurança</strong> (retângulo laranja) mostra o número de risco (superior) e o número ONU (inferior). Use essas informações para localizar o guia de emergência correto.</p>
      </div>

      <div>
        <h4 className="font-bold text-sm mb-2">Placas de Risco (Losangos) e Painéis de Segurança</h4>
        <ImagemERG
          arquivo="placas-risco-classes.png"
          pagina={8}
          descricao="Tabela completa de placas de risco (losangos) — Classes 1 a 9 com cores, símbolos e divisões"
          alt="Placas de risco do ERG 2024 — Classes 1 a 9"
          className="w-full"
        />
      </div>

      <div>
        <h4 className="font-bold text-sm mb-2">Placas Adicionais e Marcações</h4>
        <ImagemERG
          arquivo="placas-risco-adicionais.png"
          pagina={9}
          descricao="Placas adicionais: marcas de fumigação, substâncias perigosas ao meio ambiente, número de risco e painel de segurança"
          alt="Placas adicionais e marcações do ERG 2024"
          className="w-full"
        />
      </div>

      <div className="bg-muted/50 rounded-lg p-3 text-xs text-muted-foreground space-y-1.5">
        <p><strong>Nota:</strong> Para Classe 1 (Divisões 1.1, 1.2, 1.3 e 1.5), inserir o número da divisão e a letra do grupo de compatibilidade no losango.</p>
        <p><strong>Número de Risco:</strong> Se precedido pela letra "X", o material reage perigosamente com água.</p>
        <p><strong>Repetição de dígitos:</strong> indica intensificação do risco (ex: 33 = muito inflamável; 66 = muito tóxico).</p>
        <p><strong>Significado dos algarismos:</strong></p>
        <ul className="list-disc list-inside space-y-0.5 ml-2">
          <li>2 — Emissão de gás devido à pressão ou reação química</li>
          <li>3 — Inflamabilidade de líquidos (vapores) e gases</li>
          <li>4 — Inflamabilidade de sólidos</li>
          <li>5 — Efeito oxidante (comburente)</li>
          <li>6 — Toxicidade ou risco de infecção</li>
          <li>7 — Radioatividade</li>
          <li>8 — Corrosividade</li>
          <li>9 — Risco de reação violenta espontânea</li>
        </ul>
      </div>
    </div>
  );
};

export default PlacasRisco;
