
import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Tag } from "lucide-react";
import { careGuides, CareGuide } from "../data/careGuides";
import CareGuideCard from "../components/CareGuideCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Layout from "../components/Layout";
import { useToast } from "@/hooks/use-toast";

const difficultyColors = {
  easy: "bg-garden-100 text-garden-900",
  moderate: "bg-garden-300 text-garden-900",
  advanced: "bg-garden-500 text-garden-900",
};

// Extract unique plant types from all guides
const allPlantTypes = Array.from(
  new Set(careGuides.flatMap((guide) => guide.plantTypes))
);

const CareGuides = () => {
  const { toast } = useToast();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(
    null
  );

  // Filter guides based on search and filters
  const filteredGuides = careGuides.filter((guide) => {
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.summary.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesType =
      selectedTypes.length === 0 ||
      guide.plantTypes.some((type) => selectedTypes.includes(type));

    const matchesDifficulty =
      !selectedDifficulty || guide.difficulty === selectedDifficulty;

    return matchesSearch && matchesType && matchesDifficulty;
  });

  const toggleTypeFilter = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  };

  const toggleDifficultyFilter = (difficulty: string) => {
    setSelectedDifficulty((prev) =>
      prev === difficulty ? null : difficulty
    );
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedTypes([]);
    setSelectedDifficulty(null);
    toast({
      title: "Filters Reset",
      description: "All filters have been cleared",
    });
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-garden-900 mb-4">Plant Care Guides</h1>
          <p className="text-lg text-garden-700 max-w-2xl mx-auto">
            Discover expert tips and guidance for keeping your plants healthy and
            thriving all year round.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search care guides..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button
              variant="outline"
              onClick={resetFilters}
              className="whitespace-nowrap"
            >
              Reset Filters
            </Button>
          </div>

          {/* Filters */}
          <div className="bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-4 w-4" />
              <h3 className="font-medium">Filters</h3>
            </div>
            
            <div className="space-y-4">
              {/* Plant Type Filters */}
              <div>
                <p className="text-sm font-medium mb-2 flex items-center gap-1">
                  <Tag className="h-3 w-3" /> Plant Types
                </p>
                <div className="flex flex-wrap gap-2">
                  {allPlantTypes.map((type) => (
                    <Badge
                      key={type}
                      variant={selectedTypes.includes(type) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => toggleTypeFilter(type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Difficulty Filters */}
              <div>
                <p className="text-sm font-medium mb-2">Difficulty Level</p>
                <div className="flex flex-wrap gap-2">
                  {["easy", "moderate", "advanced"].map((difficulty) => (
                    <Badge
                      key={difficulty}
                      variant={
                        selectedDifficulty === difficulty ? "default" : "outline"
                      }
                      className="cursor-pointer capitalize"
                      onClick={() => toggleDifficultyFilter(difficulty)}
                    >
                      {difficulty}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className="text-garden-700 mb-6">
          Showing {filteredGuides.length} care guides
        </p>

        {/* Care Guides Grid */}
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGuides.map((guide) => (
              <CareGuideCard key={guide.id} guide={guide} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-garden-800 mb-2">
              No guides found
            </h3>
            <p className="text-garden-600 mb-6">
              Try adjusting your filters or search term
            </p>
            <Button onClick={resetFilters}>Reset All Filters</Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CareGuides;
