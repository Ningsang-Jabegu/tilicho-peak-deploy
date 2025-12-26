import DetailItem from "../DetailItem";
import Divider from "../Divider";

const DetailsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground mb-8">
          Deployment Details
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
          <DetailItem 
            label="Location" 
            value="Tilicho Lake, Manang" 
          />
          <DetailItem 
            label="Country" 
            value="Nepal" 
          />
          <DetailItem 
            label="Altitude" 
            value="4,919 m ASL" 
          />
          <DetailItem 
            label="Date" 
            value="23 Dec 2025" 
          />
          <DetailItem 
            label="Time (NPT)" 
            value="06:55 AM" 
          />
        </div>

        <Divider />

        <div className="space-y-6">
          <h2 className="text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground">
            Reflection
          </h2>
          <div className="space-y-4 max-w-2xl">
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Reaching Tilicho Lake requires patience, teamwork, and mental endurance.
            </p>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Deploying this website here reflects the same principles used in 
              engineering and problem-solving. Constraints change, but execution 
              remains a choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
