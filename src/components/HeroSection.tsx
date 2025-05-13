import MusicNotes from "./MusicNotes";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById("about-section");
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-[url(/img/gradientgreen.png)] bg-no-repeat bg-cover text-white overflow-hidden">
      <MusicNotes />
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="mb-8">
            <img
              src="./img/sicelogo.png"
              alt="SICE Logo"
              className="w-64 h-64 mx-auto mb-[-30px]"
            />
            <h1 className="flex flex-wrap text-center justify-center font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
              Saint Isidore
              <span className="pb-[-10px] mb-[-10px] bg-gradient-to-r from-indigo-600 via-pink-600">
                Chorale Ensemble
              </span>
            </h1>
          </div>
          <p className="text-lg md:text-xl italic">
            "In Harmony We Inspire, In GOD We Live."
          </p>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            We encourage all the youth to stay close to GOD and to learn music,
            nurturing both spiritual growth and musical talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="/services">
              <Button className="bg-sice-orange hover:bg-sice-darkOrange text-white">
                Our Services
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="border-white text-white hover:bg-white/10">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button
            onClick={scrollToContent}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20"
          >
            <ChevronDown className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
