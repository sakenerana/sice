import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Music, Award, Heart } from "lucide-react";
import MusicNotes from "@/components/MusicNotes";

const AboutPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-[url(/img/sice2.jpg)] bg-no-repeat bg-cover text-white py-16 md:py-24">
        <div className="backdrop-blur-sm container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center ">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              About Us
            </h1>
            <p className="text-lg">
              Learn more about Saint Isidore Chorale Ensemble, our mission, and
              our journey.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <MusicNotes />
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold font-playfair mb-6 text-gradient-orange-pink">
              Our Story
            </h2>
            <p className="mb-6">
              Saint Isidore Chorale Ensemble (SICE) began as a small group of
              passionate singers determined to enhance the worship experience at
              Saint Isidore Parish. What started as a choir of just 12 members
              has grown into a vibrant community of over 40 vocalists and
              musicians spanning all age groups and backgrounds.
            </p>
            <p>
              Singing should always be a joyous activity. The Ministry of Choir
              is one means by which joy is expressed through singing. The
              members of the choirs at St. Isidore Chorale Ensemble seek to
              celebrate the liturgy in a manner that promotes participation by
              all with joy and reverence. These guidelines have been prepared
              and implemented after consultation with the directors of each
              choir and discussion with the pastor. Through it we hope to
              accomplish unity and a sense of holiness among members of the
              choir. All involved in the ministry of sacred music at St. Isidore
              Chorale Ensemble are expected to abide by these guidelines and
              help in opening the minds and hearts of the worshipping community,
              to give glory to God.
            </p>
            <div className="my-12 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative">
                  <img
                    src="./img/sice4.jpg"
                    alt="SICE Choir Members"
                    className="rounded-lg shadow-lg w-full object-cover"
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-sice-orange rounded-full -z-10"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-playfair mb-4">
                    Our Mission
                  </h3>
                  <p className="text-gray-700 mb-6">
                    To inspire youth to develop their musical talents while
                    strengthening their spiritual connection with God. We
                    believe in the transformative power of sacred music to
                    elevate worship and create moments of profound spiritual
                    communion.
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold font-playfair mb-6 mt-12 text-gradient-orange-pink">
              What We Do
            </h2>
            <p className="mb-6">
              At Saint Isidore Chorale Ensemble, we combine musical excellence
              with spiritual devotion to create meaningful worship experiences.
              Our repertoire spans traditional hymns, contemporary Christian
              music, classical sacred compositions, and original pieces created
              by our own members.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-orange-pink rounded-full flex items-center justify-center mr-4">
                      <Music className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Worship Services
                      </h3>
                      <p className="text-gray-600">
                        We enhance weekly masses and special liturgical
                        celebrations with our sacred music ministry.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-orange-pink rounded-full flex items-center justify-center mr-4">
                      <Award className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Concerts & Events
                      </h3>
                      <p className="text-gray-600">
                        We organize seasonal concerts, community performances,
                        and participate in choral competitions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-orange-pink rounded-full flex items-center justify-center mr-4">
                      <Users className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Music Education
                      </h3>
                      <p className="text-gray-600">
                        We offer vocal training, musicianship classes, and
                        mentorship for young singers in our community.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-gray-200 hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-gradient-orange-pink rounded-full flex items-center justify-center mr-4">
                      <Heart className="text-white h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">
                        Community Outreach
                      </h3>
                      <p className="text-gray-600">
                        We bring music to hospitals, senior centers, and
                        underserved communities as part of our ministry.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-3xl font-bold font-playfair mb-6 mt-12 text-gradient-orange-pink">
              What Makes Us Different
            </h2>
            <p className="mb-6">
              Unlike many traditional church choirs, Saint Isidore Chorale
              Ensemble embraces a unique approach that sets us apart:
            </p>

            <ul className="list-disc pl-6 mb-8 space-y-3">
              <li className="text-gray-700">
                <span className="font-semibold">
                  Intergenerational Community
                </span>
                : Our members range from 8 to 80 years old, creating a unique
                mentorship dynamic where musical knowledge and spiritual wisdom
                are shared across generations.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Musical Innovation</span>: We
                blend traditional sacred music with contemporary arrangements,
                embracing both the rich history of church music and its evolving
                future.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Spiritual Formation</span>:
                Beyond music, we focus on the spiritual growth of our members
                through prayer, reflection, and community service.
              </li>
              <li className="text-gray-700">
                <span className="font-semibold">Inclusive Environment</span>: We
                welcome singers of all experience levels, believing that
                everyone has a voice worth developing.
              </li>
            </ul>

            <h2 className="text-3xl font-bold font-playfair mb-6 mt-12 text-gradient-orange-pink">
              Our Team & Culture
            </h2>

            <p className="mb-10">
              Led by Music Director Maria Gonzales, our leadership team includes
              vocal coaches, section leaders, and music ministers who are
              dedicated to nurturing both musical excellence and spiritual
              growth. We foster a culture of respect, creativity, and joyful
              service where every member is valued for their unique
              contributions.
            </p>

            <div className="bg-gray-50 p-8 rounded-lg text-center mb-12">
              <h2 className="text-3xl font-bold font-playfair mb-4">
                Join Our Choir Family
              </h2>
              <p className="mb-8 max-w-2xl mx-auto">
                Whether you're an experienced vocalist or simply love to sing,
                there's a place for you in the Saint Isidore Chorale Ensemble.
                We invite you to share your gifts and become part of our musical
                ministry.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button
                  asChild
                  className="bg-gradient-orange-pink hover:opacity-90"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
