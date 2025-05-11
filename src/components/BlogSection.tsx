
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Our Journey to the Regional Choir Festival",
      excerpt: "Experience the highlights of our performance at this year's regional choir festival and the lessons we learned along the way.",
      date: "May 8, 2025",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      author: "Maria Santos"
    },
    {
      id: 2,
      title: "The Spiritual Impact of Sacred Music",
      excerpt: "Exploring how sacred music touches the soul and deepens our connection to faith and spirituality.",
      date: "April 22, 2025",
      image: "https://images.unsplash.com/photo-1610805156431-833675221166?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      author: "Fr. Joseph Cruz"
    },
    {
      id: 3,
      title: "Vocal Training Tips for Young Singers",
      excerpt: "Essential techniques and practices to help young singers develop their vocal abilities and confidence.",
      date: "April 10, 2025",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
      author: "Antonio Reyes"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Latest from <span className="text-gradient-orange-pink">Our Blog</span>
            </h2>
            <p className="max-w-2xl text-gray-600">
              Stories, insights, and updates from our choir community.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="border-sice-orange text-sice-orange hover:bg-sice-orange hover:text-white">
              <Link to="/blog">View All Posts</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>By {post.author}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  <Link to={`/blog/${post.id}`} className="hover:text-sice-orange transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="text-sice-orange font-medium hover:underline mt-auto flex items-center"
                >
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">Never Miss an Update</h3>
          <p className="max-w-xl mx-auto text-gray-600 mb-8">
            Subscribe to our newsletter to receive the latest news, event announcements, and blog posts directly in your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sice-orange flex-grow"
            />
            <Button className="bg-sice-orange hover:bg-sice-darkOrange">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
