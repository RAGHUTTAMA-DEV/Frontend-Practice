import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="w-[300px] h-[320px] bg-gradient-to-b from-blue-500 to-blue-700 rounded-2xl shadow-lg p-6 flex flex-col justify-center text-center">
      {/* Heading */}
      <h3 className="text-white text-xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
        In-depth Comparison
      </h3>

      {/* Description */}
      <p className="text-white text-sm mb-6 px-2">
        Narrow down your options.<br />
        Compare and evaluate features, pricing, and ratings
      </p>

      {/* Link */}
      <Link
        to="/AItools"
        className="text-white underline text-sm font-medium hover:text-blue-200 transition"
      >
        Compare tools side-by-side
      </Link>
    </div>
  );
}
