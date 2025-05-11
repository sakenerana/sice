
import MusicNotes from "./MusicNotes";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToContent = () => {
    const contentSection = document.getElementById('about-section');
    if (contentSection) {
      contentSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <MusicNotes />
      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
          <div className="mb-8">
            <img 
              src="/lovable-uploads/97731657-df8f-4842-82c4-0d2b8abb6e1f.png" 
              alt="SICE Logo" 
              className="w-24 h-24 mx-auto mb-4"
            />
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold">
              Saint Isidore<br />
              <span className="text-gradient-orange-pink">Chorale Ensemble</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl italic">
            "In Harmony We Inspire, In GOD We Live."
          </p>
          <p className="text-base md:text-lg max-w-xl mx-auto">
            We encourage all the youth to stay close to GOD and to learn music, nurturing both spiritual growth and musical talent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button className="bg-sice-orange hover:bg-sice-darkOrange text-white">
              Our Services
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10">
              Contact Us
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
          <button onClick={scrollToContent} className="p-2 rounded-full bg-white/10 hover:bg-white/20">
            <ChevronDown className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
