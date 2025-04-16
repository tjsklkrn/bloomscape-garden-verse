
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Share2, Heart, BookOpen, Calendar, Tag, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { careGuides, CareGuide } from "../data/careGuides";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import Layout from "../components/Layout";

const difficultyColors = {
  easy: "bg-green-100 text-green-800 border-green-200",
  moderate: "bg-yellow-100 text-yellow-800 border-yellow-200",
  advanced: "bg-red-100 text-red-800 border-red-200",
};

const CareGuideDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [guide, setGuide] = useState<CareGuide | null>(null);
  const [liked, setLiked] = useState(false);
  const [relatedGuides, setRelatedGuides] = useState<CareGuide[]>([]);

  useEffect(() => {
    // Find the guide by slug
    const foundGuide = careGuides.find((g) => g.slug === slug);
    
    if (foundGuide) {
      setGuide(foundGuide);
      
      // Find related guides with similar plant types
      const related = careGuides
        .filter(
          (g) =>
            g.id !== foundGuide.id &&
            g.plantTypes.some((type) => foundGuide.plantTypes.includes(type))
        )
        .slice(0, 3);
      
      setRelatedGuides(related);
      
      // Scroll to top when guide changes
      window.scrollTo(0, 0);
    } else {
      navigate("/care-guides", { replace: true });
    }
  }, [slug, navigate]);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: guide?.title,
          text: guide?.summary,
          url: window.location.href,
        })
        .catch((error) => console.log("Error sharing", error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard");
    }
  };

  const toggleLike = () => {
    setLiked(!liked);
    toast.success(liked ? "Removed from saved guides" : "Added to saved guides");
  };

  if (!guide) {
    return null; // Or a loading state
  }

  const formattedDate = new Date(guide.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb Navigation */}
        <Link
          to="/care-guides"
          className="inline-flex items-center text-garden-600 hover:text-garden-800 mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Care Guides
        </Link>

        {/* Guide Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <Badge
              className={`${
                difficultyColors[guide.difficulty]
              } font-medium capitalize border`}
            >
              {guide.difficulty} difficulty
            </Badge>
            
            {guide.plantTypes.map((type, index) => (
              <Badge key={index} variant="outline">
                {type}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-garden-900 mb-4">
            {guide.title}
          </h1>
          
          <p className="text-xl text-garden-700 mb-6">{guide.summary}</p>
          
          <div className="flex flex-wrap items-center text-sm text-garden-500 gap-6 mb-6">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{guide.content.sections.length} sections</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>5 min read</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={toggleLike} 
              variant={liked ? "default" : "outline"}
              className={liked ? "bg-garden-500 hover:bg-garden-600" : ""}
            >
              <Heart className={`h-4 w-4 mr-2 ${liked ? "fill-current" : ""}`} />
              {liked ? "Saved" : "Save Guide"}
            </Button>
            
            <Button variant="outline" onClick={handleShare}>
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8 rounded-xl overflow-hidden">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full object-cover h-[300px] md:h-[400px]"
          />
        </div>

        {/* Guide Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            {/* Main Content */}
            <div className="prose prose-garden max-w-none">
              {guide.content.sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold text-garden-800 mb-4">
                    {section.title}
                  </h2>
                  <p className="text-garden-600 whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Pro Tips Section */}
            <div className="bg-garden-50 border border-garden-100 rounded-lg p-6 mt-8">
              <h3 className="text-xl font-semibold text-garden-800 mb-4">
                Pro Tips
              </h3>
              <ul className="space-y-3">
                {guide.content.tips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-garden-700 items-start"
                  >
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-garden-200 text-garden-800 text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-white rounded-lg shadow-sm border p-5 mb-6">
                <h3 className="font-medium text-garden-800 mb-3">
                  In This Article
                </h3>
                <nav className="space-y-2">
                  {guide.content.sections.map((section, index) => (
                    <a
                      key={index}
                      href={`#section-${index}`}
                      className="block text-sm text-garden-600 hover:text-garden-900"
                    >
                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="bg-garden-50 rounded-lg p-5">
                <h3 className="font-medium text-garden-800 mb-3">
                  Recommended Products
                </h3>
                <div className="space-y-4">
                  <Link
                    to="/product/1"
                    className="flex gap-3 items-center hover:bg-garden-100 p-2 rounded-md transition-colors"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1614594575597-1a374ca59543?w=100&h=100&auto=format&fit=crop"
                      alt="Product"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-garden-800 text-sm">
                        Monstera Deliciosa
                      </p>
                      <p className="text-garden-600 text-xs">$29.99</p>
                    </div>
                  </Link>
                  <Link
                    to="/product/3"
                    className="flex gap-3 items-center hover:bg-garden-100 p-2 rounded-md transition-colors"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1598880940952-6e9060e721a3?w=100&h=100&auto=format&fit=crop"
                      alt="Product"
                      className="w-12 h-12 object-cover rounded"
                    />
                    <div>
                      <p className="font-medium text-garden-800 text-sm">
                        Snake Plant
                      </p>
                      <p className="text-garden-600 text-xs">$24.99</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Guides */}
        {relatedGuides.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-8" />
            <h2 className="text-2xl font-bold text-garden-900 mb-6">
              Related Care Guides
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedGuides.map((relatedGuide) => (
                <Link
                  key={relatedGuide.id}
                  to={`/care-guides/${relatedGuide.slug}`}
                  className="group"
                >
                  <div className="rounded-lg overflow-hidden shadow-sm border group-hover:shadow-md transition-shadow">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedGuide.image}
                        alt={relatedGuide.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-garden-800 mb-2 group-hover:text-garden-600 transition-colors">
                        {relatedGuide.title}
                      </h3>
                      <p className="text-sm text-garden-600 line-clamp-2">
                        {relatedGuide.summary}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CareGuideDetail;
