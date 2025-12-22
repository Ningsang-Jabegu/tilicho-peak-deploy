import AltitudeMarker from "../AltitudeMarker";

const HeroSection = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center py-16 md:py-24">
      <div className="container max-w-4xl">
        <div className="space-y-8 md:space-y-12">
          {/* Altitude marker */}
          <div className="animate-fade-in">
            <AltitudeMarker altitude="4,919" />
          </div>

          {/* Main title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif leading-tight text-foreground animate-fade-in-delay-1">
            Deployed at Tilicho Lake
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-delay-2">
            A symbolic website deployment carried out during a college trekking 
            expedition to one of the world's highest lakes.
          </p>

          {/* One-liner */}
          <p className="text-sm font-medium uppercase tracking-widest text-glacial animate-fade-in-delay-3">
            Code pushed where oxygen is thin
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
