import { AlertCircle, CheckCircle2 } from "lucide-react";

export function LessonsLearnedSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">💡 Leçons Apprises</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Défis Résolus */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Défis Techniques Résolus</h3>
          <div className="space-y-3">
            {[
              {
                challenge: "Parsing JSON",
                solution: "Approche bi-phasée",
              },
              {
                challenge: "Structure de fichiers",
                solution: "RepoAnalyzer + détection intelligente",
              },
              {
                challenge: "Cohérence de migration",
                solution: "Approche feature-driven",
              },
            ].map((item, i) => (
              <div key={i} className="p-4 bg-card border border-border rounded-lg">
                <div className="flex items-start gap-3 mb-2">
                  <AlertCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm">{item.challenge}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 ml-8">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-muted-foreground">{item.solution}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bonnes Pratiques */}
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold mb-4">Bonnes Pratiques Adoptées</h3>
          <div className="space-y-3">
            {[
              "Séparation des responsabilités (1 agent = 1 rôle)",
              "Configuration centralisée (config.json)",
              "Documentation automatique systématique",
              "Gestion d'erreurs robuste avec fallback",
              "Validation du code généré avant écriture",
            ].map((practice, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-green-500/10 border border-green-500/20 rounded-lg"
              >
                <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{practice}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
