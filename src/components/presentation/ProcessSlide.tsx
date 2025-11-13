import { Target, Code, CheckCircle, Rocket } from "lucide-react";

export function ProcessSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        🚀 Processus de Migration
      </h2>

      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold mb-4">Approche Feature-Driven</h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Migration par fonctionnalité métier plutôt que fichier par fichier
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {
            icon: Target,
            title: "Identification",
            desc: "FeatureAnalyzer scanne et documente",
          },
          {
            icon: Code,
            title: "Sélection",
            desc: "Choix d'une feature à migrer",
          },
          {
            icon: Rocket,
            title: "Migration",
            desc: "FeatureMigrator exécute le workflow",
          },
          {
            icon: CheckCircle,
            title: "Validation",
            desc: "Code généré et documenté",
          },
        ].map((step, i) => (
          <div key={i} className="relative">
            <div className="p-6 bg-card border border-border rounded-lg text-center">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-primary/10 rounded-full">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h4 className="font-semibold mb-2">{step.title}</h4>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </div>
            {i < 3 && (
              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-primary/30" />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <h3 className="font-semibold mb-4 text-center">Avantages de cette Approche</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Migration cohérente par unité fonctionnelle",
            "Tests possibles feature par feature",
            "Déploiement incrémental",
            "Meilleure traçabilité",
          ].map((advantage, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
              <span className="text-sm">{advantage}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
