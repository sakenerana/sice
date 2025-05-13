import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import BlogSection from "@/components/BlogSection";

const BlogPage = () => {
  return (
    <div className="pt-20">
      <div className="bg-[url(./img/sice2.jpg)] bg-no-repeat bg-cover text-white py-16 md:py-24">
        <div className="backdrop-blur-sm container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Our Blog
            </h1>
            <p className="text-lg">
              Stories, insights, and updates from our choir community.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <article className="prose lg:prose-xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 mb-3">
              <span>May 10, 2025</span>
              <span className="mx-2">•</span>
              <span>By Maria Santos</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              5 Surprising Benefits of Singing in a Choir
            </h1>
            <div className="w-full h-80 mb-6 overflow-hidden rounded-lg">
              <img
                src="./img/sice4.jpg"
                alt="Choir members singing together"
                className="w-full h-full object-cover"
              />
            </div>
          </header>

          <div className="text-gray-700 space-y-6">
            <p className="text-lg">
              Last Sunday, after our final note faded into silence, something
              magical happened. Instead of rushing to pack up, our entire choir
              lingered, laughing and sharing stories over coffee. As our
              director Maria often says, "We come for the music, but we stay for
              the community." That simple moment perfectly captures what makes
              choir singing so special—it's never just about the notes on the
              page.
            </p>

            <p className="text-lg">
              While most of us join choirs because we love music, many are
              surprised to discover the profound and unexpected ways that
              singing together enhances our lives. Science is catching up to
              what choral singers have known intuitively for centuries: singing
              in harmony with others offers benefits that extend far beyond
              music.
            </p>

            <div className="w-full h-80 mb-6 overflow-hidden rounded-lg">
              <img
                src="./img/sice-m.jpg"
                alt="Choir members singing together"
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold font-playfair mt-8 mb-4">
              1. Stress Relief That Rivals Meditation
            </h2>
            <p>
              When you're focusing on rhythm, pitch, and lyrics, it's nearly
              impossible to simultaneously worry about your unfinished to-do
              list. Singing requires a level of presence that naturally induces
              a meditative state. According to a 2016 study published in the
              Journal of Behavioral Medicine, choir singers experience decreased
              levels of cortisol (the stress hormone) after just one hour of
              rehearsal.
            </p>
            <p>
              "Singing demands deep breathing and controlled exhalation, which
              activates your parasympathetic nervous system," explains Dr.
              Juliana Rodriguez, music therapist and neuroscientist. "This is
              the same physiological state achieved through meditation
              practices, but many find it easier to access through singing."
            </p>

            <h2 className="text-2xl font-bold font-playfair mt-8 mb-4">
              2. A Social Connection Unlike Any Other
            </h2>
            <p>
              In an age of digital relationships, choir provides something
              increasingly rare: genuine face-to-face connection with a diverse
              group of people united by a common purpose. What makes this
              connection unique is that it transcends typical social barriers.
              Age, profession, political views—all fade into the background when
              voices blend in harmony.
            </p>
            <p>
              Research from Oxford University found that choir singing helps
              people bond quickly—more rapidly than other group activities. The
              synchronization of breath and voice creates what researchers call
              "collective effervescence," a heightened sense of belonging and
              shared identity.
            </p>

            <h2 className="text-2xl font-bold font-playfair mt-8 mb-4">
              3. Improved Cognitive Function and Memory
            </h2>
            <p>
              Learning new music challenges your brain in ways few other
              activities can. Reading notation, remembering lyrics, following a
              conductor—these tasks engage multiple cognitive processes
              simultaneously. For older adults especially, this mental workout
              pays dividends.
            </p>
            <p>
              A longitudinal study from the University of Helsinki found that
              choir participants showed better verbal flexibility, information
              processing speed, and memory over a five-year period compared to
              non-musical peers of the same age. Next time someone questions
              your choir hobby, you can tell them you're actually engaged in
              preventative brain health!
            </p>

            <h2 className="text-2xl font-bold font-playfair mt-8 mb-4">
              4. Physical Health Boost From Head to Toe
            </h2>
            <p>
              Proper singing technique involves the entire body. From posture to
              breath support, singing is surprisingly physical. Regular choir
              participation has been linked to improved lung function, better
              posture, stronger immune response, and even pain reduction.
            </p>
            <p>
              "The respiratory control developed through regular singing can be
              particularly beneficial for those with mild asthma or COPD," notes
              Dr. Marcus Wei, pulmonologist at Central Community Hospital. "Many
              of my patients report improved breathing capacity after joining
              community choirs."
            </p>

            <h2 className="text-2xl font-bold font-playfair mt-8 mb-4">
              5. Spiritual and Emotional Transcendence
            </h2>
            <p>
              Perhaps the most profound but least measurable benefit is the
              transcendent experience choir singing can provide. There's
              something about creating harmony with others that touches the
              human spirit in a unique way. Many choir members describe moments
              of performance where time seems to stand still, and they feel
              connected to something larger than themselves.
            </p>
            <p>
              "When we're truly in sync, it's like we become one organism
              breathing and expressing together," says Thomas Reynolds, a tenor
              who's been with our choir for fifteen years. "Those moments are
              rare in everyday life, but they're why I keep coming back week
              after week."
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8 border-l-4 border-sice-orange">
              <h3 className="text-xl font-bold mb-2">
                Member Spotlight: Rebecca's Story
              </h3>
              <p className="italic">
                "I joined the choir during one of the darkest periods of my
                life. My mother had recently passed away, and I was struggling
                to find my footing. The weekly rehearsals became my anchor—the
                one place where I could express all those complex emotions
                through music.
              </p>
              <p className="italic mt-2">
                What surprised me most was how quickly I felt like I belonged.
                Three years later, choir night is still sacred on my calendar,
                and some of my closest friendships began in that rehearsal room.
                The music healed me in ways I couldn't have imagined."
              </p>
              <p className="text-right mt-2">
                —Rebecca Chen, Alto Section Leader
              </p>
            </div>

            <p className="text-lg font-medium">
              Ready to experience these benefits yourself? We'd love to welcome
              you to our choir family! The Saint Isidore Chorale Ensemble holds
              open rehearsals on the first Monday of each month, where newcomers
              can observe, participate, and connect with current members without
              any pressure to commit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center my-12">
              <Button
                asChild
                className="bg-sice-orange hover:bg-sice-darkOrange"
              >
                <Link to="/contact" className="flex items-center">
                  Register for Next Open Rehearsal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-sice-orange text-sice-orange hover:bg-sice-orange hover:text-white"
              >
                <Link to="/about">Learn More About Our Choir</Link>
              </Button>
            </div>
          </div>
        </article>

        <div className="mt-16 border-t pt-12">
          <BlogSection />
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
