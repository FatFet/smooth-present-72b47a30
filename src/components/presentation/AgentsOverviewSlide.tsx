import { Bot, Network } from "lucide-react";

export function AgentsOverviewSlide() {
  const agents = [
    "FeatureAnalyzer",
    "PHPAnalyst",
    "ReactGenerator",
    "Reviewer",
    "DotNetIntegrator",
    "Auditor",
    "FeatureMigrator",
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        🤖 Système d'Agents Intelligents
      </h2>

      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
          <Network className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold">
            7 Agents Spécialisés Orchestrés
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {agents.map((agent, i) => (
          <div
            key={i}
            className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all hover:shadow-lg hover:scale-105"
          >
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors">
                <Bot className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-sm">{agent}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-muted/50 border border-border rounded-lg">
        <p className="text-center text-muted-foreground">
          <strong className="text-foreground">Migration cohérente et complète</strong> grâce à
          l'orchestration intelligente de chaque agent spécialisé
        </p>
      </div>
    </div>
  );
}
