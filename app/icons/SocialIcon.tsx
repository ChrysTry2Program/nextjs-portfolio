export default function SocialIcon({ label }: { label: string }) {
  return (
    <span
      aria-hidden
      className="inline-block w-4 h-4 rounded-sm bg-brand"
      title={label}
    />
  );
}
