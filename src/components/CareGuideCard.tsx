
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, BookOpen } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CareGuide } from "../data/careGuides";

interface CareGuideCardProps {
  guide: CareGuide;
}

const difficultyColors = {
  easy: "bg-green-100 text-green-800 border-green-200",
  moderate: "bg-orange-100 text-orange-800 border-orange-200",
  advanced: "bg-red-100 text-red-800 border-red-200",
};

const CareGuideCard = ({ guide }: CareGuideCardProps) => {
  const formattedDate = new Date(guide.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Link to={`/care-guides/${guide.slug}`}>
      <Card className="overflow-hidden h-full transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
        <div className="relative h-48 overflow-hidden">
          <img
            src={guide.image}
            alt={guide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <Badge
              className={`${
                difficultyColors[guide.difficulty]
              } font-medium capitalize border`}
            >
              {guide.difficulty}
            </Badge>
          </div>
        </div>
        
        <CardContent className="pt-6">
          <h3 className="text-xl font-semibold text-garden-900 mb-2 line-clamp-2">
            {guide.title}
          </h3>
          <p className="text-garden-600 mb-4 line-clamp-3">
            {guide.summary}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-2">
            {guide.plantTypes.slice(0, 3).map((type, index) => (
              <Badge variant="outline" key={index} className="bg-garden-50">
                {type}
              </Badge>
            ))}
            {guide.plantTypes.length > 3 && (
              <Badge variant="outline">+{guide.plantTypes.length - 3}</Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="text-xs text-garden-500 flex items-center gap-4 border-t pt-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3" />
            <span>{guide.content.sections.length} sections</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default CareGuideCard;
