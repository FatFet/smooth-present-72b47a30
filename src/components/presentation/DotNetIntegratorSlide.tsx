import { Server, Layers, Code2 } from "lucide-react";

export function DotNetIntegratorSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Server className="h-10 w-10 text-primary" />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-foreground">DotNetIntegrator</h2>
          <p className="text-muted-foreground">Agent 5/7 - Génération backend .NET</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Génération Automatique</h3>
          <div className="space-y-3">
            {[
              { icon: Code2, label: "Controllers RESTful" },
              { icon: Layers, label: "Commands et Queries (CQRS)" },
              { icon: Server, label: "Handlers avec MediatR" },
              { icon: Code2, label: "Entities (Domain)" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-4 bg-card border border-border rounded-lg"
              >
                <div className="p-2 bg-primary/10 rounded-lg">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold mb-4">Clean Architecture</h3>
          <div className="space-y-2">
            {["Domain", "Application", "Infrastructure", "API"].map((layer, i) => (
              <div
                key={i}
                className="p-4 bg-muted/30 border-l-4 border-primary rounded-r-lg"
                style={{ marginLeft: `${i * 12}px` }}
              >
                <span className="font-mono text-sm font-semibold">{layer}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-primary/10 rounded-lg">
            <p className="text-sm text-center">
              <strong className="text-primary">Séparation claire</strong> des responsabilités et
              des layers
            </p>
          </div>
        </div>
      </div>

      <div className="p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <p className="text-center">
          <strong className="text-primary">Output :</strong> Code .NET structuré et prêt à
          l'emploi
        </p>
      </div>
    </div>
  );
}
