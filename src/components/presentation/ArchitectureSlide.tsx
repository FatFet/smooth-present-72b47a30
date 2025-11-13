import { Layers, Database, Code2 } from "lucide-react";

export function ArchitectureSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        🏗️ Architecture de la Solution
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Stack Technique */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Layers className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Stack Technique</h3>
          </div>
          <div className="space-y-3">
            {[
              { label: "IA", value: "Azure OpenAI (GPT-4 via model-router)" },
              { label: "Langage", value: "Python 3.13" },
              { label: "API", value: "OpenAI SDK >= 1.0.0" },
              { label: "Configuration", value: ".env et config.json" },
            ].map((item, i) => (
              <div key={i} className="flex gap-2">
                <span className="font-semibold text-primary min-w-[120px]">{item.label}:</span>
                <span className="text-muted-foreground">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Référentiels */}
        <div className="space-y-4 p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Database className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Référentiels Impliqués</h3>
          </div>
          <div className="space-y-4">
            {[
              {
                name: "AndonManager",
                desc: "Application PHP legacy",
                details: "38 fichiers PHP, 11 JS, 9 CSS",
              },
              {
                name: "InnovationDay-REACT",
                desc: "Nouvelle application React TypeScript",
                details: "Frontend moderne",
              },
              {
                name: "InnovationDay-DotNet",
                desc: "Nouveau backend .NET",
                details: "Clean Architecture",
              },
            ].map((repo, i) => (
              <div key={i} className="space-y-1">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-primary" />
                  <span className="font-semibold">{repo.name}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">{repo.desc}</p>
                <p className="text-xs text-muted-foreground/70 ml-6">{repo.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
