import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Presentation } from "lucide-react";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold">Welcome to Lovable</h1>
        <Link to="/presentation">
          <Button size="lg" className="gap-2">
            <Presentation className="h-5 w-5" />
            View Presentation
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
