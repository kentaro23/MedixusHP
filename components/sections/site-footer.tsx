export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="container-shell flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Medixus, Inc.</p>
        <p>Medical DX / AI / Infrastructure OS</p>
      </div>
    </footer>
  );
}
