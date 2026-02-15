const navItems = [
  { label: 'Our Story', href: '#story' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Travel', href: '#travel' },
  { label: 'Registry', href: '#registry' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-rose/40 bg-blush/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="font-display text-xl text-evergreen md:text-2xl">
          Owen & Ruz
        </a>
        <nav className="hidden gap-6 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium tracking-wide text-charcoal hover:text-evergreen">
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
