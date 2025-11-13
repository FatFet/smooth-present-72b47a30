import { Brain, Code, Server } from "lucide-react";

export function TechnologiesSlide() {
  return (
    <div className="space-y-8 animate-fade-in">
      <h2 className="text-4xl font-bold text-foreground mb-8">
        🎓 Technologies et Concepts Appliqués
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Intelligence Artificielle */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Brain className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Intelligence Artificielle</h3>
          </div>
          <div className="space-y-3">
            {["Azure OpenAI (GPT-4)", "Prompt Engineering", "Token Management"].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Logicielle */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Architecture Logicielle</h3>
          </div>
          <div className="space-y-3">
            {["Clean Architecture (.NET)", "CQRS Pattern", "Component-Based (React)"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Méthodologies */}
        <div className="p-6 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Server className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">Méthodologies</h3>
          </div>
          <div className="space-y-3">
            {["Feature-Driven Development", "Infrastructure as Code", "Documentation as Code"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-lg">
        <p className="text-center text-muted-foreground">
          Combinaison de technologies modernes et de méthodologies éprouvées pour une migration
          réussie
        </p>
      </div>
    </div>
  );
}
