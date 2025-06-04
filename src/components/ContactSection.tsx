import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import MusicNotes from "./MusicNotes";
import { useState } from "react";
import { Resend } from 'resend';

const ContactSection = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        subject: formData.get("subject") as string,
        message: formData.get("message") as string,
      };

      // Basic validation
      if (!data.name || !data.email || !data.subject || !data.message) {
        throw new Error("Please fill in all fields");
      }

      const resend = new Resend('re_8a8H7Qiu_131uxjbFTd3NeoEVo4WtLYdN');
      const { error } = await resend.emails.send({
        from: data.email, // Replace with your domain after setting it up in Resend
        to: 'erana.chardic@gmail.com',
        subject: `New Contact: ${data.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #92400e;">New Contact Form Submission</h1>
            <p><strong style="color: #92400e;">Name:</strong> ${data.name}</p>
            <p><strong style="color: #92400e;">Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong style="color: #92400e;">Subject:</strong> ${data.subject}</p>
            <div style="margin-top: 20px; padding: 15px; background-color: #fef3c7; border-left: 4px solid #92400e;">
              <p><strong style="color: #92400e;">Message:</strong></p>
              <p>${data.message.replace(/\n/g, '<br>')}</p>
            </div>
          </div>
        `,
        text: `
          New Contact Form Submission
          Name: ${data.name}
          Email: ${data.email}
          Subject: ${data.subject}
          Message:
          ${data.message}
        `,
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      e.currentTarget.reset();
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error sending message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-[url(/img/book.png)] bg-cover bg-no-repeat w-full relative overflow-hidden border-t-8 border-amber-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
            Get in <span className="bg-gradient-to-r from-amber-800 via-amber-700 to-amber-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-700 backdrop-blur-sm bg-white/30 rounded-lg p-2">
            Have questions or want to book our choir? Reach out to us!
          </p>
        </div>
        
        <MusicNotes />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-[url(/img/palm.gif)] bg-cover bg-no-repeat rounded-lg shadow-lg p-6 md:p-8 order-2 lg:order-1 backdrop-blur-sm bg-white/70">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Send us a message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-amber-600">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject <span className="text-amber-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-amber-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                ></textarea>
              </div>

              <Button
                type="submit"
                className="w-full bg-amber-800 hover:bg-amber-700 transition-colors"
                disabled={isLoading}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="bg-[url(/img/palm.gif)] rounded-lg shadow-lg p-6 md:p-8 backdrop-blur-sm bg-white/70">
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Contact Information</h3>
              <div className="space-y-4">
                <ContactInfoItem 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                  }
                  title="Address"
                  content="Upper Bacayan, Cebu City"
                />

                <ContactInfoItem 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  }
                  title="Phone"
                  content="+63 932 944 6383"
                />

                <ContactInfoItem 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  }
                  title="Email"
                  content="erana.chardic@gmail.com"
                  isEmail={true}
                />

                <ContactInfoItem 
                  icon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  }
                  title="Rehearsal Hours"
                  content="Saturday: 8:00 PM - 10:00 PM"
                />
              </div>

              <div className="mt-8">
                <h4 className="font-medium mb-4 text-gray-800">Follow Us</h4>
                <div className="flex gap-4">
                  <SocialLink 
                    href="https://www.facebook.com/profile.php?id=100091922100082"
                    iconSrc="/img/facebook.svg"
                    alt="Facebook"
                  />
                </div>
              </div>
            </div>

            <div className="bg-amber-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Interested in joining our choir?</h3>
              <p className="mb-6">
                We welcome new members of all ages and experience levels. Come to one of our rehearsals or contact us to learn more.
              </p>
              <Button
                asChild
                className="bg-white text-amber-800 hover:bg-gray-100 transition-colors"
              >
                <a href="/about#join-us">Learn About Joining</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable Contact Info Item Component
const ContactInfoItem = ({ icon, title, content, isEmail = false }: { 
  icon: React.ReactNode, 
  title: string, 
  content: string, 
  isEmail?: boolean 
}) => (
  <div className="flex items-start gap-4">
    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-1 text-amber-600">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      {isEmail ? (
        <a href={`mailto:${content}`} className="text-gray-600 hover:text-amber-600 transition-colors">
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </div>
);

// Reusable Social Link Component
const SocialLink = ({ href, iconSrc, alt }: { 
  href: string, 
  iconSrc: string, 
  alt: string 
}) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
    aria-label={alt}
  >
    <img className="h-6 w-6" src={iconSrc} alt={alt} />
  </a>
);

export default ContactSection;