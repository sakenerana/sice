import MusicNotes from "@/components/MusicNotes";
import TestimonialsSection from "@/components/TestimonialsSection";

const TestimonialsPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-[url(/img/sice2.jpg)] text-white py-16 md:py-24">
        <div className="backdrop-blur-sm container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Testimonials</h1>
            <p className="text-lg opacity-80">What people are saying about Saint Isidore Chorale Ensemble.</p>
          </div>
        </div>
      </div>

      <div className="mx-auto">
        <MusicNotes />
        <TestimonialsSection />
      </div>
    </div>
  );
};

export default TestimonialsPage;
