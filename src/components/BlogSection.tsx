
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Confirmation Done",
      excerpt: "Experience the highlights of our performance at this year's regional choir festival and the lessons we learned along the way.",
      date: "May 10, 2025",
      image: "./img/confirmation.png",
      author: "Charls Dave Erana"
    },
    {
      id: 2,
      title: "Kusog Panaghiusa ",
      excerpt: "Thank you maam cathy for the great experience you have brought upon this children living unforgetable memories they will hold on to for life!",
      date: "May 1, 2025",
      image: "./img/pulong.jpg",
      author: "Charls Dave Erana"
    },
    {
      id: 3,
      title: "Saint Isidore Chorale Ensemble ",
      excerpt: "The priest homily states that 'There is always sunshine after the rain. It stands significant role to be patient and meek for hope is at hand.'",
      date: "April 20, 2025",
      image: "./img/april20.jpg",
      author: "Charls Dave Erana"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[url(/img/notebook.png)] bg-cover bg-no-repeat border-t-8 border-yellow-500">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4">
              Latest from <span className="bg-yellow-500">Our Blog</span>
            </h2>
            <p className="max-w-2xl text-gray-900 backdrop-blur-md">
              Stories, insights, and updates from our choir community.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button asChild variant="outline" className="bg-yellow-950 hover:bg-sice-darkOrange text-white">
              <a href="https://www.facebook.com/profile.php?id=100091922100082" target="_blank">View All Posts</a>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-orange-100 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
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
                  <Link to={`https://www.facebook.com/profile.php?id=100091922100082`} className="hover:text-sice-orange transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                <Link 
                  to={`https://www.facebook.com/profile.php?id=100091922100082`}
                  className="text-amber-800 font-medium hover:underline mt-auto flex items-center"
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
          <p className="max-w-xl mx-auto text-gray-600 mb-8 backdrop-blur-md">
            Join to our Choir to receive the latest news, event announcements, and blog posts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
