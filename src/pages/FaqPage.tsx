import { useState } from "react";
import { cn } from "@/lib/utils";
import MusicNotes from "@/components/MusicNotes";

interface FaqItem {
  question: string;
  answer: string;
}

const FaqPage = () => {
  const faqs: FaqItem[] = [
    {
      question: "How can I join the choir?",
      answer:
        "We welcome new members who have a passion for music and faith! To join, simply attend one of our rehearsals or contact us through our website. No professional experience is required, just enthusiasm and commitment.",
    },
    {
      question: "When and where do you rehearse?",
      answer:
        "We typically rehearse every Saturday from 2:00 PM to 4:00 PM at Saint Isidore Church. Additional rehearsals may be scheduled before major performances or events.",
    },
    {
      question: "Do I need to audition to join?",
      answer:
        "We don't require formal auditions for general membership. Our choir director will assess your vocal range to place you in the appropriate section. We believe everyone has the ability to contribute to our musical ministry.",
    },
    {
      question: "Can I request your choir for my event?",
      answer:
        "Yes! We're available for weddings, baptisms, and other special events. Please contact us through the form on our website at least two months in advance so we can check availability and discuss your specific needs.",
    },
    {
      question: "Do you offer music lessons or workshops?",
      answer:
        "Yes, we regularly conduct workshops for vocal training, music theory, and spiritual development. These are open to both choir members and the general public. Check our events calendar for upcoming sessions.",
    },
    {
      question: "Are there any fees to join the choir?",
      answer:
        "There are no mandatory fees to join our choir. We occasionally collect voluntary contributions for sheet music, uniforms, and special events, but these are not required for participation.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="pt-20">
      <div className="bg-[url(/img/sice2.jpg)] bg-no-repeat bg-cover text-white py-16 md:py-24">
        <div className="backdrop-blur-sm container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-lg">
              Find answers to common questions about our choir.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <MusicNotes />
        <h2 className="text-3xl font-bold font-playfair mb-8 text-center">
          FAQ page content will be added in the next update
        </h2>
        <section className="py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
                Frequently{" "}
                <span className="text-gradient-orange-pink">
                  Asked Questions
                </span>
              </h2>
              <p className="max-w-2xl mx-auto text-gray-600">
                Get answers to common questions about our choir and services.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                >
                  <button
                    className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="text-lg font-medium">{faq.question}</h3>
                    <span
                      className={cn(
                        "transform transition-transform duration-200",
                        openIndex === index ? "rotate-180" : ""
                      )}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div
                    className={cn(
                      "overflow-hidden transition-all max-h-0 duration-300",
                      openIndex === index ? "max-h-96" : ""
                    )}
                  >
                    <p className="py-4 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FaqPage;
