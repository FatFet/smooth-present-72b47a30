import { Lightbulb, Zap, FolderTree, Layers } from "lucide-react";

export function InnovationsSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">🎯 Innovations Clés</h2>

      <div className="space-y-6">
        {/* Innovation 1 */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Zap className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">1. Génération en Deux Phases</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <div className="text-sm font-semibold text-destructive mb-2">Problème</div>
              <p className="text-xs text-muted-foreground">
                JSON invalides avec milliers de lignes de code
              </p>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <div className="text-sm font-semibold text-primary mb-2">Solution</div>
              <p className="text-xs">Phase 1: Métadonnées → Phase 2: Code</p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                Résultat
              </div>
              <p className="text-xs text-muted-foreground">100% de réussite du parsing</p>
            </div>
          </div>
        </div>

        {/* Innovation 2 */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <FolderTree className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">2. Placement Intelligent des Fichiers</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="p-4 bg-destructive/10 border border-destructive/30 rounded-lg">
              <div className="text-sm font-semibold text-destructive mb-2">Problème</div>
              <p className="text-xs text-muted-foreground">
                Composants tous au même endroit
              </p>
            </div>
            <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg">
              <div className="text-sm font-semibold text-primary mb-2">Solution</div>
              <p className="text-xs">Détection auto + RepoAnalyzer</p>
            </div>
            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
              <div className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">
                Résultat
              </div>
              <p className="text-xs text-muted-foreground">Architecture React conforme</p>
            </div>
          </div>
        </div>

        {/* Innovation 3 */}
        <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border-2 border-primary/30 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Layers className="h-8 w-8 text-primary" />
            <h3 className="text-2xl font-semibold">3. Architecture CQRS Automatique</h3>
          </div>
          <div className="grid md:grid-cols-4 gap-3 mt-4">
            {["Commands", "Queries", "Handlers", "Séparation"].map((item, i) => (
              <div key={i} className="p-3 bg-background/50 border border-border rounded-lg text-center">
                <p className="text-sm font-semibold">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
