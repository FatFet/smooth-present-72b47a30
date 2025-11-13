import { BarChart3, FileCode, Package, Shield } from "lucide-react";

export function ResultsSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">📊 Résultats et Métriques</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Application Analysée */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Application AndonManager</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "Fichiers traités", value: "142", unit: "fichiers" },
              { label: "Code analysé", value: "555.7", unit: "KB" },
              { label: "Features identifiées", value: "4", unit: "principales" },
              { label: "Vulnérabilités", value: "8", unit: "critiques" },
            ].map((metric, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <span className="text-sm text-muted-foreground">{metric.label}</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-primary">{metric.value}</span>
                  <span className="text-xs text-muted-foreground">{metric.unit}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features Documentées */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <Package className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-semibold">Features Documentées</h3>
          </div>
          <div className="space-y-3">
            {[
              { name: "Authentification", files: "auth.php, logout.php" },
              { name: "Tableau de Bord", files: "6 composants React" },
              { name: "Administration", files: "18 fichiers admin/*.php" },
              { name: "Gestion Zones", files: "10 fichiers site/*.php" },
            ].map((feature, i) => (
              <div key={i} className="p-3 bg-muted/30 rounded-lg">
                <div className="font-semibold text-sm mb-1">{feature.name}</div>
                <div className="text-xs text-muted-foreground">{feature.files}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Code Généré */}
      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center gap-3 mb-4">
          <FileCode className="h-6 w-6 text-primary" />
          <h3 className="text-xl font-semibold">Code Généré</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div>
              <div className="font-semibold">Composants React</div>
              <div className="text-sm text-muted-foreground">
                TypeScript avec hooks, interfaces, typage complet
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-primary mt-2" />
            <div>
              <div className="font-semibold">Backend .NET</div>
              <div className="text-sm text-muted-foreground">
                Clean Architecture, CQRS, MediatR, RESTful APIs
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
