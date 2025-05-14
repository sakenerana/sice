import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MusicNotes from "./MusicNotes";

const AboutSection = () => {
  return (
    <section
      id="about-section"
      className="py-16 md:py-24 bg-[url(/img/notebg.jpg)] bg-cover bg-no-repeat relative overflow-hidden border-t-8 border-yellow-600"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-6">
              About <span className="bg-yellow-500 ">Our Choir</span>
            </h2>
            <p className="text-white mb-6 backdrop-blur-md">
              Saint Isidore Chorale Ensemble (SICE) is a dynamic and passionate
              group dedicated to glorifying God through music. Founded with the
              mission to inspire youth to develop their musical talents while
              strengthening their spiritual connection, we bring together voices
              of all ages to create harmonious worship.
            </p>
            <p className="text-white mb-6 backdrop-blur-md">
              Our repertoire spans sacred hymns, contemporary worship songs, and
              classical pieces. We perform at church services, community events,
              and special occasions, bringing joy and inspiration through our
              music.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                Sacred Music
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                Youth Development
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                Community Service
              </span>
              <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">
                Spiritual Growth
              </span>
            </div>
            <Button
              asChild
              className="bg-yellow-950 hover:bg-sice-darkOrange text-white"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/lovable-uploads/9dd375c9-722c-4f5a-8ca1-53ba7c75881e.png"
                alt="SICE Choir Members"
                className="object-cover w-full h-full transition-transform hover:scale-105 duration-500"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sice-orange rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-sice-pink rounded-full -z-10"></div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-[url(/img/palm.gif)] bg-cover bg-no-repeat p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-yellow-800 via-yellow-700 text-white flex items-center justify-center rounded-full mb-4">
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
                <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-gray-600">
              The mission of Saint Isidore Chorale Ensemble choirs is to enrich,
              inspire, motivate, and engage the community in hymns and sacred
              songs in the celebration of the Holy Eucharist and other
              liturgical celebrations. .
            </p>
          </div>

          <div className="bg-[url(/img/palm.gif)] bg-cover bg-no-repeat p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-lime-800 via-lime-700 text-white flex items-center justify-center rounded-full mb-4">
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
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-gray-600">
              Saint Isidore Chorale Ensemble choirs seek to achieve our mission
              by: <br /> 1. Being rooted in Catholic Spirituality that seeks the
              overall growth of the members; <br /> 2. Being committed to rehearsals;
              <br /> 3. Having discipline and respect for authority; <br /> 4. Learning new
              hymns; and Being knowledgeable of the liturgy and various
              liturgical seasons of the church
            </p>
          </div>

          <div className="bg-[url(/img/palm.gif)] bg-cover bg-no-repeat p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-800 via-teal-700 text-white flex items-center justify-center rounded-full mb-4">
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
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Our Reach</h3>
            <p className="text-gray-600">
              Performing at church services, community events, and special
              occasions throughout the region.
            </p>
          </div>

          <div className="bg-[url(/img/palm.gif)] bg-cover bg-no-repeat p-6 rounded-lg hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-800 via-amber-700 text-white flex items-center justify-center rounded-full mb-4">
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
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Join Us</h3>
            <p className="text-gray-600">
              Open to all who share our passion for music and faith, regardless
              of experience level.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
