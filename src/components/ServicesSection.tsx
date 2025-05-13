import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18V5l12-2v13"></path>
          <circle cx="6" cy="18" r="3"></circle>
          <circle cx="18" cy="16" r="3"></circle>
        </svg>
      ),
      title: "Church Services",
      description:
        "We provide musical accompaniment for regular church services, creating an atmosphere of worship and devotion through carefully selected hymns and songs.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5Z"></path>
          <path d="m3 3 18 18"></path>
          <path d="M10.5 10.5 8 13"></path>
          <path d="M13.5 10.5 16 13"></path>
          <path d="M10.5 13.5 8 16"></path>
          <path d="M13.5 13.5 16 16"></path>
        </svg>
      ),
      title: "Special Events",
      description:
        "From weddings to baptisms, our choir brings a special touch to life's most important moments with beautiful musical arrangements tailored to your occasion.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 3h20"></path>
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 12v9"></path>
          <path d="M12 3v5"></path>
          <path d="M20 3v18"></path>
          <path d="M4 3v18"></path>
        </svg>
      ),
      title: "Music Workshops",
      description:
        "We offer workshops and training sessions for aspiring singers and musicians, helping them develop their talents and techniques in a supportive environment.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 13V2l8 4-8 4"></path>
          <path d="M20.55 10.23A9 9 0 1 1 8 4.94"></path>
          <path d="M8 10a5 5 0 1 0 8.9 2.02"></path>
        </svg>
      ),
      title: "Community Outreach",
      description:
        "Through the power of music, we extend our ministry to hospitals, nursing homes, and community centers, bringing comfort and joy to those in need.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Our <span className="text-gradient-orange-pink">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We offer a range of musical services for various occasions, bringing
            harmony and inspiration to every event.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
            >
              <div className="w-14 h-14 bg-gradient-orange-pink text-white flex items-center justify-center rounded-lg mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">
                {service.description}
              </p>
              <Link to={"/services"}>
                <Button
                  variant="outline"
                  className="w-full mt-auto border-sice-orange text-sice-orange hover:bg-sice-orange hover:text-white transition-colors"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-lime-900 rounded-xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold font-playfair mb-4">
                Need our choir for your event?
              </h3>
              <p className="mb-6">
                Whether it's a wedding, baptism, special church service, or
                community event, we're here to bring the gift of music to your
                special occasion.
              </p>
              <Button
                asChild
                className="bg-white text-sice-orange hover:bg-gray-100 transition-colors"
              >
                <Link to="/contact">Request a Booking</Link>
              </Button>
            </div>
            <div className="relative min-h-[300px] lg:min-h-full bg-gray-300 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <img src="./img/sice3.jpg" alt="sice3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
