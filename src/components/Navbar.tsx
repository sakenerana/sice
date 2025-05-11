
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-md py-2"
          : "bg-black/30 backdrop-blur-sm py-4" // Added semi-transparent background for better readability
      )}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/97731657-df8f-4842-82c4-0d2b8abb6e1f.png" 
            alt="Saint Isidore Chorale Ensemble Logo" 
            className="h-12 w-12"
          />
          <div className={cn(
            "hidden sm:block",
            !isScrolled && "text-white" // Make logo text white when navbar is transparent
          )}>
            <h1 className="font-playfair font-bold text-xl">SICE</h1>
            <p className="text-xs -mt-1">Saint Isidore Chorale Ensemble</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "font-medium text-sm transition-colors hover:text-sice-orange",
                location.pathname === link.path
                  ? "text-sice-orange"
                  : isScrolled ? "text-foreground" : "text-white drop-shadow-md", // White text with shadow when transparent
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className={cn(
            "bg-gradient-orange-pink hover:opacity-90 transition-opacity",
            !isScrolled && "shadow-md" // Add shadow to button when navbar is transparent
          )}>
            Join Us
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 transition-transform duration-300",
                isScrolled ? "bg-foreground" : "bg-white", // White hamburger when navbar is transparent
                isMobileMenuOpen && "rotate-45 translate-y-2"
              )}
            />
            <span
              className={cn(
                "block h-0.5 transition-opacity duration-300",
                isScrolled ? "bg-foreground" : "bg-white", // White hamburger when navbar is transparent
                isMobileMenuOpen && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-0.5 transition-transform duration-300",
                isScrolled ? "bg-foreground" : "bg-white", // White hamburger when navbar is transparent
                isMobileMenuOpen && "-rotate-45 -translate-y-2"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed top-[60px] left-0 right-0 bg-white shadow-lg transition-transform duration-300 py-4",
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="container flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={cn(
                "py-2 font-medium transition-colors hover:text-sice-orange",
                location.pathname === link.path
                  ? "text-sice-orange"
                  : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Button className="bg-gradient-orange-pink hover:opacity-90 transition-opacity w-full mt-2">
            Join Us
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
