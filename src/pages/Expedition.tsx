import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Expedition = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif">Expedition Details</h1>
            <p className="text-lg text-muted-foreground">
              Journey to Tilicho Lake - 4,919m
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Location</h2>
              <p className="text-muted-foreground">
                Tilicho Lake is located in the Manang district of the Gandaki Zone in Nepal, 
                in the Himalayas. It's one of the highest lakes in the world.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Altitude</h2>
              <p className="text-muted-foreground">
                At 4,919 meters (16,138 feet) above sea level, Tilicho Lake stands among 
                the world's highest lakes, presenting a challenging environment for any deployment.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Route</h2>
              <p className="text-muted-foreground">
                The expedition follows the classic Tilicho Lake trekking route through 
                Manang Valley, offering breathtaking Himalayan views along the way.
              </p>
            </div>

            <div className="space-y-4 bg-muted p-6 rounded-lg">
              <h2 className="text-2xl font-serif">Challenge</h2>
              <p className="text-muted-foreground">
                Deploying technology at high altitude requires careful planning due to 
                thin oxygen, extreme cold, and challenging weather conditions.
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-serif">More Information Coming Soon</h2>
            <p className="text-muted-foreground">
              Detailed day-by-day expedition logs, photos, and technical insights will be 
              added in the upcoming days. Check back soon for more!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Expedition;
