
import { useState } from "react";
import { cn } from "@/lib/utils";
import MusicNotes from "./MusicNotes";

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Joining the choir has transformed my relationship with music and my faith. The supportive environment has helped me grow as a singer while deepening my spiritual journey.",
      author: "Christian Borces",
      role: "Choir Member",
      image: "/img/christian.jpg",
    },
    {
      id: 2,
      quote: "I've watched these young people grow not only as musicians but as individuals deeply connected to their faith. Their dedication to both musical excellence and spiritual growth is truly inspirational.",
      author: "Charls Dave Erana",
      role: "Choir Member",
      image: "/img/dave.jpg",
    },
    {
      id: 3,
      quote: "The workshop series conducted by SICE gave our church youth a newfound appreciation for sacred music. Their teaching methods are engaging and effective for all skill levels.",
      author: "Ann Rhianne",
      role: "Choir Leader",
      image: "/img/ann.jpg",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-[#e8dfd3] relative overflow-hidden border-t-8 border-amber-700">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-sice-orange opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-sice-pink opacity-5 rounded-full transform translate-x-1/3 translate-y-1/3"></div>
      <MusicNotes />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            What People <span className="bg-gradient-to-r from-yellow-800 via-yellow-700">Are Saying</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Hear from members of our community about their experiences with our choir.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Testimonial Carousel */}
          
          <div className="relative bg-[url(/img/palm.gif)] rounded-xl shadow-lg p-6 md:p-10">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="60" 
              height="60" 
              fill="currentColor" 
              className="absolute top-6 left-6 text-gray-100 z-0"
              viewBox="0 0 16 16"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z"/>
            </svg>
            
            <div className="relative z-10">
              <div className="min-h-[200px]">
                <p className="text-lg md:text-xl text-gray-700 italic mb-6 relative z-10">
                  "{testimonials[activeIndex].quote}"
                </p>
              </div>

              <div className="flex items-center">
                {testimonials[activeIndex].image && (
                  <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                    <img 
                      src={testimonials[activeIndex].image} 
                      alt={testimonials[activeIndex].author} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                  <p className="text-sm text-gray-500">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="absolute top-1/2 -translate-y-1/2 left-0 flex justify-between w-full px-4">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sice-orange"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m15 18-6-6 6-6"/>
                </svg>
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sice-orange"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m9 18 6-6-6-6"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  activeIndex === index ? "bg-sice-orange w-6" : "bg-gray-300"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
