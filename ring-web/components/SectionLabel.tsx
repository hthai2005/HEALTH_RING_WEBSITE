export default function SectionLabel({
  index,
  label,
}: {
  index: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow">({index})</span>
      <span className="h-px w-10 bg-border" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}
