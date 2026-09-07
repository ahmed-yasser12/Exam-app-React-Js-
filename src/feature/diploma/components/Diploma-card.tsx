
import { Link } from "react-router";
import type { IDiploma } from "../types/diploma";

interface DiplomaCardProps {
  diploma: IDiploma;
}

function DiplomaCard({ diploma }: DiplomaCardProps) {
  return (
     <article  className="overflow-hidden  group relative  bg-white">
    
      <div className="aspect-video overflow-hidden cursor-pointer h-112">
      <Link to={`/diplomas/${diploma.id}`}>
           <img  
          src={diploma.image!}
          alt={diploma.title}
          className=" w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
    
      </div>

      <div className="p-4 bg-blue-600/75 absolute inset-x-0 bottom-0 max-h-69.5   backdrop-blur-sm">
        <h2 className="text-xl font-semibold text-gray-200">
          {diploma.title}
        </h2>
        <p className="mt-1 line-clamp-2 text-sm group-hover:line-clamp-none text-gray-700">
          {diploma.description}
        </p>
      </div>
    </article>
  );
}

export default DiplomaCard;