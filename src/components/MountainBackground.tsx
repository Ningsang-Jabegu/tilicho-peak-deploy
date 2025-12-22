const MountainBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Mountain silhouette SVG */}
      <svg 
        className="absolute bottom-0 left-0 w-full h-auto opacity-[0.04]"
        viewBox="0 0 1440 400" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMax slice"
      >
        {/* Far mountains - lighter */}
        <path 
          d="M0 400L120 320L240 360L360 280L480 340L600 260L720 320L840 240L960 300L1080 220L1200 280L1320 200L1440 260V400H0Z" 
          fill="currentColor" 
          className="text-foreground"
          opacity="0.3"
        />
        {/* Mid mountains */}
        <path 
          d="M0 400L80 340L160 380L280 300L400 350L520 270L640 330L760 250L880 310L1000 230L1120 290L1240 210L1360 270L1440 220V400H0Z" 
          fill="currentColor"
          className="text-foreground"
          opacity="0.5"
        />
        {/* Near mountains - darker */}
        <path 
          d="M0 400L60 360L140 390L220 340L340 370L460 320L580 360L700 300L820 350L940 290L1060 340L1180 280L1300 330L1440 290V400H0Z" 
          fill="currentColor"
          className="text-foreground"
          opacity="0.8"
        />
      </svg>
      
      {/* Topographic pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 10 Q70 30 50 50 Q30 70 50 90' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3Cpath d='M30 20 Q50 40 30 60 Q10 80 30 100' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3Cpath d='M70 0 Q90 20 70 40 Q50 60 70 80' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3Cpath d='M10 30 Q30 50 10 70' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3Cpath d='M90 40 Q70 60 90 80' stroke='%23000' stroke-width='0.5' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};

export default MountainBackground;
