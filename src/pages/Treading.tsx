import { Link } from "react-router-dom";
import { Star, LinkIcon, MessageCircle, Eye, User } from "lucide-react";

export default function Treading() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen bg-white text-black px-4 py-8">
      <h1 className="text-3xl font-extrabold mb-6">Trending AIs</h1>

      {/* Tabs */}
      <div className="flex space-x-6 border-b-2 border-gray-300 w-full max-w-5xl">
        {["Top Rated", "Most Upvoted", "Most Saved", "Most Reviewed", "Most Viewed", "Most Visited"].map((tab, i) => (
          <button
            key={i}
            className={`pb-2 ${i === 0 ? "border-b-2 border-blue-500 text-blue-600 font-semibold" : "text-gray-600"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex flex-col gap-6 mt-10 w-full max-w-5xl">
        {[...Array(5)].map((_, i) => (
          <TreadingCard key={i} />
        ))}
      </div>
    </div>
  );
}

export function TreadingCard() {
  return (
    <div className="flex justify-between items-start border border-gray-300 rounded-xl p-4 bg-gray-100 shadow-sm">
      <div className="flex flex-col gap-2">
        <Link to="/drop" className="flex items-center gap-1 text-xl font-bold text-blue-700">
          DROP <LinkIcon className="w-4 h-4" />
        </Link>

        <div className="flex gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1"><Star className="w-4 h-4 text-blue-500" /> 4.5</div>
          <div className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 100 Reviews</div>
          <div className="flex items-center gap-1"><Eye className="w-4 h-4" /> 1.2k Views</div>
          <div className="flex items-center gap-1"><User className="w-4 h-4" /> 400 Visits</div>
        </div>

        <div className="flex flex-wrap gap-2 mt-2">
          {["Categories 1", "Categories 2", "Categories 3", "Categories 4", "Categories 5"].map((cat, i) => (
            <span key={i} className="bg-gray-200 text-xs px-3 py-1 rounded-full"><Link to='/${cat}/2'>{cat}</Link></span>
          ))}
        </div>
      </div>

      <button className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">Upvoted</button>
    </div>
  );
}
