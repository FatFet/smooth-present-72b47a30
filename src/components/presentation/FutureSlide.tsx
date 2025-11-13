import { Rocket, Wrench } from "lucide-react";

export function FutureSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">🔮 Perspectives et Évolutions</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Améliorations Futures */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Wrench className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Améliorations Futures</h3>
          </div>
          <div className="space-y-3">
            {[
              "Support de migrations partielles",
              "Intégration de tests automatiques (Jest, xUnit)",
              "Validation fonctionnelle automatique",
              "Support multi-langages (Java, Python)",
              "Interface utilisateur pour piloter les agents",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg"
              >
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4"
                  disabled
                />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Extensibilité */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Rocket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Extensibilité</h3>
          </div>
          <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">
              Le système est conçu pour être extensible :
            </p>
            <div className="space-y-2">
              {[
                "Ajout de nouveaux agents spécialisés",
                "Personnalisation des prompts par projet",
                "Support de nouvelles architectures cibles",
                "Intégration d'autres modèles IA (Claude, etc.)",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-muted/50 border border-border rounded-lg text-center">
        <p className="text-muted-foreground">
          Plateforme évolutive pour accompagner tous vos projets de modernisation
        </p>
      </div>
    </div>
  );
}
