interface AltitudeMarkerProps {
  altitude: string;
  unit?: string;
}

const AltitudeMarker = ({ altitude, unit = "m" }: AltitudeMarkerProps) => {
  return (
    <div className="inline-flex items-baseline gap-1">
      <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight text-foreground">
        {altitude}
      </span>
      <span className="text-2xl md:text-3xl font-sans font-medium text-muted-foreground">
        {unit}
      </span>
    </div>
  );
};

export default AltitudeMarker;
