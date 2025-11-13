import { CheckCircle, Clock, Shield, FileCheck, Sparkles } from "lucide-react";

export function ConclusionSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-8">
        📝 Conclusion
      </h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <p className="text-xl text-center text-muted-foreground">
          Démonstration de la capacité de l'IA générative à automatiser des tâches complexes de
          migration de code
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Clock,
              title: "Gagner du temps",
              desc: "Migration automatique vs. réécriture manuelle",
            },
            {
              icon: Shield,
              title: "Maintenir la qualité",
              desc: "Respect des bonnes pratiques architecturales",
            },
            {
              icon: FileCheck,
              title: "Assurer la traçabilité",
              desc: "Documentation complète et structurée",
            },
            {
              icon: CheckCircle,
              title: "Faciliter la maintenance",
              desc: "Code moderne et bien organisé",
            },
          ].map((benefit, i) => (
            <div
              key={i}
              className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-xl"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">{benefit.title}</h3>
              </div>
              <p className="text-sm text-muted-foreground ml-11">{benefit.desc}</p>
            </div>
          ))}
        </div>

        <div className="p-8 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/5 border-2 border-primary/30 rounded-2xl text-center">
          <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold mb-4">Système Réutilisable</h3>
          <p className="text-muted-foreground">
            Le système créé est adaptable pour d'autres projets de migration ou de modernisation
            d'applications legacy
          </p>
        </div>

        <div className="text-center pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground mb-2">Innovation Day - Novembre 2025</p>
          <p className="text-lg font-semibold">
            Migration Automatisée avec Azure OpenAI
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Python • React TypeScript • .NET Clean Architecture • CQRS
          </p>
        </div>
      </div>
    </div>
  );
}
