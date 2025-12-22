const PartnershipSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            In partnership with
          </p>
          
          <div className="flex items-center justify-center gap-4">
            {/* Logo placeholder - clean circular mark */}
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-serif text-lg font-medium">
                R
              </span>
            </div>
            <div className="text-left">
              <p className="text-lg md:text-xl font-serif text-foreground">
                Rotaract Club of Baneshwor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
