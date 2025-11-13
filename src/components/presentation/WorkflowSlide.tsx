export function WorkflowSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">🔄 Workflow de Migration</h2>

      <div className="max-w-2xl mx-auto">
        <div className="space-y-4">
          {[
            {
              agent: "FeatureAnalyzer",
              action: "Scan du code legacy",
              output: "Génère .md docs",
            },
            {
              agent: "FeatureMigrator",
              action: "Sélection d'une feature",
              output: "Orchestration",
            },
            {
              agent: "PHPAnalyst",
              action: "Analyse fichiers PHP",
              output: "Rapport JSON",
            },
            {
              agent: "ReactGenerator",
              action: "Génération composants",
              output: "React TypeScript",
            },
            {
              agent: "Reviewer",
              action: "Amélioration + placement",
              output: "Structure organisée",
            },
            {
              agent: "DotNetIntegrator",
              action: "Génération backend",
              output: ".NET CQRS",
            },
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="p-6 bg-card border-2 border-border rounded-lg hover:border-primary/50 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-lg font-bold text-primary-foreground">
                      {i + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-lg">{step.agent}</div>
                      <div className="text-sm text-muted-foreground">{step.action}</div>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-primary/10 rounded-lg text-sm font-medium text-primary">
                    {step.output}
                  </div>
                </div>
              </div>
              {i < 5 && (
                <div className="flex justify-center my-2">
                  <div className="w-0.5 h-6 bg-gradient-to-b from-primary to-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 text-center text-muted-foreground">
        <p>Pipeline complet d'automatisation de la migration</p>
      </div>
    </div>
  );
}
