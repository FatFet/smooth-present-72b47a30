import { Shield, AlertTriangle, CheckCircle } from "lucide-react";

export function AuditorSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Shield className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">Auditor</h2>
          <p className="text-muted-foreground">Agent 6/7 - Audit de sécurité et qualité</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Fonctionnalités</h3>
          <div className="space-y-3">
            {[
              "Analyse de 142 fichiers (PHP, JS, CSS, config)",
              "Détection de vulnérabilités (SQL injection, XSS)",
              "Identification de code deprecated",
              "Rapport de conformité détaillé",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-card border border-border rounded-lg">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Résultats</h3>
          <div className="p-6 bg-gradient-to-br from-destructive/10 to-destructive/5 border-2 border-destructive/30 rounded-xl">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="h-8 w-8 text-destructive" />
              <div>
                <div className="text-3xl font-bold text-destructive">8</div>
                <div className="text-sm text-muted-foreground">Problèmes critiques</div>
              </div>
            </div>
            <div className="space-y-2 mt-4">
              {["SQL Injection", "XSS potentiels", "Sessions non sécurisées"].map((issue, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                  <span>{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 bg-muted/50 border border-border rounded-lg">
        <p className="text-center text-muted-foreground">
          Identification des vulnérabilités du code legacy pour garantir la sécurité de la
          migration
        </p>
      </div>
    </div>
  );
}
