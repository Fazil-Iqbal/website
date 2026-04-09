export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-[var(--muted-foreground)] sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Fazil Farhan Iqbal</p>
        <p>Built with Next.js, Tailwind CSS & Motion</p>
      </div>
    </footer>
  );
}
