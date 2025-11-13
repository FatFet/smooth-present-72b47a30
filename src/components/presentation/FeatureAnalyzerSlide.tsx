import { Search, FileText, Package } from "lucide-react";

export function FeatureAnalyzerSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Search className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">FeatureAnalyzer</h2>
          <p className="text-muted-foreground">Agent 1/7 - Analyse globale</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Fonctionnalités */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Fonctionnalités</h3>
          <div className="space-y-3">
            {[
              "Scanne l'ensemble du code source (PHP, JS, CSS, config)",
              "Identifie et regroupe les fonctionnalités par feature",
              "Génère une documentation Markdown pour chaque feature",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Résultats */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Résultats</h3>
          <div className="flex items-center gap-2 mb-4">
            <Package className="h-5 w-5 text-primary" />
            <span className="font-semibold">4 features principales identifiées :</span>
          </div>
          <div className="space-y-2">
            {[
              "Authentification et Gestion de Session",
              "Tableau de Bord / Accueil",
              "Gestion des Droits et Administration",
              "Gestion des Zones et Actionneurs",
            ].map((feature, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-3 bg-muted/30 rounded-lg"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                  {i + 1}
                </div>
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
