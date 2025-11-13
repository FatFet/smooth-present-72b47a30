import { Target, Code, FileCode, CheckCircle2 } from "lucide-react";

export function ContextSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        📋 Contexte et Objectifs
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problématique */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Problématique Initiale</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Migration d'une application PHP legacy (AndonManager) vers :
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-semibold">Frontend:</span>
              <span className="text-muted-foreground">React avec TypeScript</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="font-semibold">Backend:</span>
              <span className="text-muted-foreground">.NET Clean Architecture + CQRS</span>
            </div>
          </div>
        </div>

        {/* Objectif */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Objectif Principal</h3>
          </div>
          <p className="text-muted-foreground mb-4">
            Automatiser la migration avec <strong>Azure OpenAI</strong> :
          </p>
          <div className="space-y-3">
            {[
              "Analyser le code legacy existant",
              "Générer automatiquement le code React et .NET",
              "Respecter les bonnes pratiques architecturales",
              "Documenter chaque étape du processus",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
