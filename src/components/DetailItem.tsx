interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem = ({ label, value }: DetailItemProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      <span className="text-base md:text-lg font-medium text-foreground">
        {value}
      </span>
    </div>
  );
};

export default DetailItem;
