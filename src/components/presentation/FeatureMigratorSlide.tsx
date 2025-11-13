import { GitBranch, Workflow } from "lucide-react";

export function FeatureMigratorSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Workflow className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">FeatureMigrator</h2>
          <p className="text-muted-foreground">Agent 7/7 - Orchestrateur complet</p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl mb-6">
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <GitBranch className="h-6 w-6 text-primary" />
          Workflow d'Orchestration
        </h3>
        <div className="space-y-3">
          {[
            { step: 1, text: "Extraction des fichiers PHP depuis la documentation" },
            { step: 2, text: "Analyse de chaque fichier PHP avec PHPAnalyst" },
            { step: 3, text: "Combinaison des analyses en contexte unifié" },
            { step: 4, text: "Génération des composants React avec ReactGenerator" },
            { step: 5, text: "Révision et placement avec Reviewer" },
            { step: 6, text: "Génération du backend avec DotNetIntegrator" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4 p-3 bg-background/50 rounded-lg">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-primary-foreground flex-shrink-0">
                {item.step}
              </div>
              <span className="text-sm pt-1">{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <p className="text-center">
          <strong className="text-primary">Avantage :</strong> Migration complète et cohérente
          d'une feature de bout en bout
        </p>
      </div>
    </div>
  );
}
