import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/passoia.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Passoia" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("look")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Look
            </button>
            <button
              onClick={() => scrollToSection("lancamentos")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Lançamentos
            </button>
            <button
              onClick={() => scrollToSection("novidades")}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Novidades
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("look")}
                className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Look
              </button>
              <button
                onClick={() => scrollToSection("lancamentos")}
                className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Lançamentos
              </button>
              <button
                onClick={() => scrollToSection("novidades")}
                className="text-left px-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                Novidades
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
