
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Music, Calendar, Headphones, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesPage = () => {
  const services = [
    {
      icon: <Music className="h-6 w-6" />,
      title: "Live Performances",
      description: "From elegant weddings to corporate gatherings and public concerts, our choir brings life to any event with our diverse repertoire spanning classical, contemporary, sacred, and popular music. Each performance is tailored to match the mood and theme of your special occasion.",
      points: [
        "Weddings & Ceremonies",
        "Corporate Events",
        "Community Concerts",
        "Holiday Celebrations"
      ]
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Workshops",
      description: "Our experienced vocalists offer engaging choral training workshops for schools, community groups, and organizations looking to develop their musical skills. We provide customized sessions focusing on harmony, technique, and ensemble performance.",
      points: [
        "School Music Programs",
        "Community Choir Development",
        "Team Building Through Music",
        "Vocal Technique Masterclasses"
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Virtual Choir Productions",
      description: "Embrace the digital age with our custom-recorded virtual choir arrangements. Perfect for special projects, social media campaigns, or when physical gatherings aren't possible, our professional audio and video productions deliver the full emotional impact of choral music.",
      points: [
        "Custom Song Arrangements",
        "Professional Audio Mixing",
        "Video Production",
        "Digital Distribution"
      ]
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: "Event Planning",
      description: "Let us help plan the musical aspects of your event from start to finish. Our experienced team can collaborate with your event planners to ensure seamless integration of choral performances that perfectly complement your occasion.",
      points: [
        "Music Selection Consultation",
        "Performance Timing",
        "Space & Acoustics Assessment",
        "Coordination with Other Performers"
      ]
    }
  ];

  return (
    <div className="pt-20">
      <div className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">Our Services</h1>
            <p className="text-lg opacity-80">
              Bringing harmony and inspiration to every occasion through the power of choral music.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-center text-gray-700 mb-12">
            The Saint Isidore Chorale Ensemble is dedicated to creating meaningful musical experiences that elevate any event or occasion. 
            Our versatile group of talented vocalists offers a range of services designed to bring the transformative power of choral music to diverse audiences and settings.
          </p>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3 flex justify-center md:justify-start">
                  <div className="w-20 h-20 bg-gradient-orange-pink rounded-lg flex items-center justify-center text-white shadow-lg">
                    {service.icon}
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold font-playfair mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {service.points.map((point, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-sice-orange rounded-full mr-2"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 md:p-12 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold font-playfair mb-6 text-center">Why Choose Us?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Experienced Singers</h3>
                <p className="text-gray-700">Our choir consists of dedicated vocalists with years of performance experience across various musical styles and venues.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Flexible Arrangements</h3>
                <p className="text-gray-700">We adapt our performances to suit your specific needs, from intimate gatherings to large-scale events with customized repertoires.</p>
              </CardContent>
            </Card>
            
            <Card className="border-none shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <h3 className="font-semibold text-xl mb-3">Passion for Connection</h3>
                <p className="text-gray-700">We believe in music's power to unite people, creating meaningful experiences that resonate with audiences and participants alike.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <p className="text-lg mb-6">Our commitment to musical excellence and heartfelt performances ensures that your event will be remembered for years to come.</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-sice-orange to-sice-pink rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <div className="p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold font-playfair mb-4">Ready to Bring Your Event to Life?</h2>
            <p className="mb-8 text-lg max-w-2xl mx-auto">
              Get in touch with us to discuss how our choir can create the perfect musical atmosphere for your special occasion.
            </p>
            <Button asChild size="lg" className="bg-white text-sice-orange hover:bg-gray-100">
              <Link to="/contact">Contact Us About Your Event</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
