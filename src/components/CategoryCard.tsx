
import { Link } from "react-router-dom";

interface Category {
  id: number;
  name: string;
  image: string;
  count: number;
}

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link to={`/categories/${category.id}`}>
      <div className="group relative overflow-hidden rounded-lg shadow-md hover-grow">
        {/* Category Image */}
        <div className="h-64 overflow-hidden">
          <img 
            src={category.image} 
            alt={category.name} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-garden-900/80 via-garden-900/30 to-transparent flex flex-col justify-end p-6">
          <h3 className="text-white text-xl font-semibold mb-1">{category.name}</h3>
          <p className="text-garden-100 text-sm">{category.count} products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
