export function TitleSlide() {
  return (
    <div className="text-center space-y-8 animate-fade-in">
      <div className="space-y-4">
        <h1 className="text-6xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
          Migration Automatisée
        </h1>
        <h2 className="text-4xl font-semibold text-foreground">
          AndonManager vers Architecture Moderne
        </h2>
      </div>

      <div className="h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="space-y-4 text-xl text-muted-foreground">
        <p>Automatisation par IA avec Azure OpenAI</p>
        <p className="text-lg">PHP Legacy → React TypeScript + .NET Clean Architecture</p>
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        <p>Innovation Day - Novembre 2025</p>
      </div>
    </div>
  );
}
