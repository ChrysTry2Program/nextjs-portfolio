export default function Section({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="muted mt-1">{subtitle}</p>}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
