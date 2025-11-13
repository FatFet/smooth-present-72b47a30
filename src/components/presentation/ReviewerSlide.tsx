import { FolderTree, CheckCircle } from "lucide-react";

export function ReviewerSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <FolderTree className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">Reviewer</h2>
          <p className="text-muted-foreground">Agent 4/7 - Placement intelligent</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Détection Intelligente</h3>
          <div className="grid grid-cols-2 gap-3">
            {[
              { folder: "pages/", desc: "Dashboard, Login, etc." },
              { folder: "features/", desc: "Logique métier spécifique" },
              { folder: "ui/", desc: "Button, Form, etc." },
              { folder: "shared/", desc: "Menu, Navbar, etc." },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors"
              >
                <div className="font-mono text-sm text-primary mb-2">{item.folder}</div>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Processus</h3>
          <div className="space-y-3">
            {[
              "Analyse du type de composant",
              "Détection basée sur nom et contenu",
              "Amélioration de la qualité du code",
              "Placement automatique dans le repo",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <p className="text-center">
          <strong className="text-primary">Avantage :</strong> Respect automatique de
          l'architecture React recommandée
        </p>
      </div>
    </div>
  );
}
