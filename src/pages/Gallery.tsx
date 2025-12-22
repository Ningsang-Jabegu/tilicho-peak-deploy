import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gallery = () => {
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
            <h1 className="text-4xl md:text-5xl font-serif">Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Visual moments from the Tilicho Lake expedition
            </p>
          </div>

          <div className="bg-muted rounded-lg p-12 text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-serif">Coming Soon</h2>
              <p className="text-muted-foreground">
                A curated collection of photos from the expedition is being prepared.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="aspect-video bg-muted rounded-lg flex items-center justify-center"
              >
                <div className="text-center space-y-2">
                  <p className="text-muted-foreground">Gallery Item {index}</p>
                  <p className="text-sm text-muted-foreground/60">Coming soon...</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-muted p-6 rounded-lg space-y-4">
            <h3 className="text-lg font-serif">Photo Categories</h3>
            <ul className="text-muted-foreground space-y-2">
              <li>• The Trek - Journey to the summit</li>
              <li>• Arrival at Tilicho Lake - The moment of deployment</li>
              <li>• Team & Expedition - People behind the mission</li>
              <li>• Panoramic Views - The Himalayan landscape</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Gallery;
