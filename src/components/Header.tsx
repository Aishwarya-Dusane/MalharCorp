import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="/" className="flex items-center gap-2 group">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-brand transition-transform group-hover:scale-125" />
          <span className="font-serif text-xl font-semibold tracking-tight text-brand">
            {siteConfig.brand}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-brand transition-colors">About</a>
          <a href="#contact" className="hover:text-brand transition-colors">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
