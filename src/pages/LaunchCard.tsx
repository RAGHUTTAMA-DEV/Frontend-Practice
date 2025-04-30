import { Link } from "react-router-dom";
import { Eye, User, Bookmark, ArrowUpRight } from "lucide-react";

export function Card() {
  return (
    <div className="w-[310px] p-4 border-2 rounded-2xl shadow-sm flex flex-col gap-4">
      {/* Header with title and external link */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">AI Tool Name</h3>
        <Link to="#" className="text-blue-500">
          <ArrowUpRight size={20} />
        </Link>
      </div>

      {/* Stats Section */}
      <div className="flex justify-between text-gray-700 text-sm">
        <div className="flex items-center gap-1">
          <Eye size={16} />
          <span>1.2k Views</span>
        </div>
        <div className="flex items-center gap-1">
          <User size={16} />
          <span>400 Visits</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4">
        <button className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm flex items-center gap-1">
          <Bookmark size={14} /> 1.4k Saved
        </button>
        <button className="bg-blue-500 text-white rounded-full px-4 py-1 text-sm">
          Upvoted
        </button>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-800">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing.
      </p>
    </div>
  );
}

export default function LaunchCard(){
    return(
        <div className="flex flex-wrap gap-4 justify-center mt-10 ">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    )
}
