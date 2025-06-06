import ContactSection from "@/components/ContactSection";
import MusicNotes from "@/components/MusicNotes";

const ContactPage = () => {
  return (
    <div className="pt-20">
      
      <div className="bg-[url(/img/sice2.jpg)] bg-no-repeat bg-cover text-white py-16 md:py-24">
        {/* <div className="bg-gray-900 text-white py-16 md:py-24"> */}
        <div className="backdrop-blur-sm container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Contact Us
            </h1>
            <p className="text-lg">
              Get in touch with Saint Isidore Chorale Ensemble.
            </p>
          </div>
        </div>
      </div>
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;
