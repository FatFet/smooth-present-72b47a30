import { FileCode, Database, Shield } from "lucide-react";

export function PHPAnalystSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <FileCode className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">PHPAnalyst</h2>
          <p className="text-muted-foreground">Agent 2/7 - Analyse détaillée PHP</p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            icon: FileCode,
            title: "Extraction HTML",
            items: ["Formulaires", "Tableaux", "Boutons", "Liens"],
          },
          {
            icon: Database,
            title: "Logique Serveur",
            items: ["Requêtes DB", "Sessions", "Validations", "Traitements"],
          },
          {
            icon: Shield,
            title: "Analyse Sécurité",
            items: ["Patterns sécurité", "Dépendances", "Vulnérabilités", "Code deprecated"],
          },
        ].map((section, i) => (
          <div key={i} className="p-6 bg-card border border-border rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <section.icon className="h-6 w-6 text-primary" />
              <h3 className="font-semibold">{section.title}</h3>
            </div>
            <div className="space-y-2">
              {section.items.map((item, j) => (
                <div key={j} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="px-3 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
            OUTPUT
          </div>
          <span className="text-muted-foreground">
            Rapport structuré <strong className="text-foreground">JSON</strong> avec tous les
            éléments identifiés
          </span>
        </div>
      </div>
    </div>
  );
}
