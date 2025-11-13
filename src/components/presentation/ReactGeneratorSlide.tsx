import { Zap, Layers, Code } from "lucide-react";

export function ReactGeneratorSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Code className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">ReactGenerator</h2>
          <p className="text-muted-foreground">Agent 3/7 - Génération React TypeScript</p>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl mb-6">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold">Innovation : Génération en 2 Phases</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                1
              </div>
              <span className="font-semibold">Phase 1 : Métadonnées</span>
            </div>
            <p className="text-sm text-muted-foreground ml-10">
              Nom, type, description, props, hooks
            </p>
          </div>
          <div className="p-4 bg-background/50 rounded-lg border border-border">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                2
              </div>
              <span className="font-semibold">Phase 2 : Code TypeScript</span>
            </div>
            <p className="text-sm text-muted-foreground ml-10">
              Génération du code pour chaque composant
            </p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-primary/10 rounded-lg">
          <p className="text-sm text-center">
            <strong className="text-primary">Résultat :</strong> 100% de réussite du parsing JSON,
            évite les erreurs de génération
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Bonnes Pratiques React</h3>
          <div className="space-y-2">
            {["Hooks modernes", "Composition de composants", "Typage TypeScript fort", "Props interfaces"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-6 bg-card border border-border rounded-lg">
          <h3 className="font-semibold mb-4">Identification API</h3>
          <p className="text-sm text-muted-foreground">
            Détection automatique des appels API nécessaires pour chaque composant
          </p>
        </div>
      </div>
    </div>
  );
}
