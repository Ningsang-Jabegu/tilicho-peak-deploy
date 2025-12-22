import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <main className="min-h-screen bg-background py-12 md:py-24">
      <div className="container max-w-4xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back Home
          </Button>
        </Link>

        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-serif">About This Project</h1>
            <p className="text-lg text-muted-foreground">
              Learn more about the Tilicho Lake deployment expedition
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-6">
            <section className="space-y-4">
              <h2 className="text-2xl font-serif">The Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                This project represents a symbolic deployment at one of the world's highest lakes. 
                During a college trekking expedition to Tilicho Lake in Nepal, we carried this deployment 
                to 4,919 meters above sea level to demonstrate that innovation and technology can reach 
                even the most remote and challenging locations.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Why Tilicho Lake?</h2>
              <p className="text-muted-foreground leading-relaxed">
                Tilicho Lake is one of the highest lakes in the world, located in the Manang district of Nepal. 
                At 4,919 meters, it presents a unique challenge for any technical endeavor. The decision to 
                deploy code at this altitude symbolizes the ambition to push boundaries and achieve the extraordinary.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-serif">Coming Soon</h2>
              <p className="text-muted-foreground leading-relaxed">
                More detailed information about the project, its technical implementation, and the expedition itself 
                will be added in the upcoming days. Stay tuned for updates!
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
