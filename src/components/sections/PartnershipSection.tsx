import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

const PartnershipSection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary/50">
      <div className="container max-w-4xl">
        <div className="flex flex-col items-center text-center space-y-6">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            In partnership with
          </p>

          <div className="flex items-center justify-center gap-4">
            {/* Logo - replace src with actual logo when available */}
            <div
              className="rounded overflow-hidden flex items-center justify-center "
              style={{ width: "120px", height: "120px", borderRadius:"8px" ,border:"1px solid transparent"  }}
            >
              <img
                src="/RAC Baneshwor Logo.png"
                alt="Rotaract Club of Baneshwor Logo"
                className="w-full h-full object-contain"
              />
              {/* <p className="text-xs font-medium">Rotaract Club of Baneshwor</p> */}
            </div>
            <div
              className="rounded overflow-hidden flex items-center justify-center "
              style={{ width: "120px", height: "120px", borderRadius:"8px" ,border:"1px solid transparent"  }}
            >
              <img
                src="/ASCOL Logo.png"
                alt="Rotaract Club of Baneshwor Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipSection;
