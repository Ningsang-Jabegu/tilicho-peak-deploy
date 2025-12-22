const FooterSection = () => {
  return (
    <footer className="py-12 md:py-16 border-t border-border">
      <div className="container max-w-4xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          {/* Credit */}
          <div className="space-y-2">
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
              Deployed by
            </p>
            <p className="text-lg font-serif text-foreground">
              Ningsang Jabegu
            </p>
            <p className="text-sm text-muted-foreground">
              College Trekking Expedition
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ningsang" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a 
              href="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Portfolio
            </a>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground max-w-lg">
            Built with focus on simplicity, speed, and reliability under limited connectivity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
