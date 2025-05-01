import { useEffect } from "react";
import Navbar from "../layouts/Navbar";
import { Button, Input, Link } from "@mui/material";
import Cards from "./cards";
import LaunchCard from "./LaunchCard";
import { Link as ScrollLink, Element } from "react-scroll";

export default function DashBoard() {
  // Setup intersection observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-10");
          }
        });
      },
      { threshold: 0.1 }
    );

    const hiddenElements = document.querySelectorAll(".animate-on-scroll");
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
        {/* Title */}
        <Link
          href="/AItools"
          className="text-[25px] font-bold text-black mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700"
        >
          Tile Sponsor
        </Link>

        {/* Headline */}
        <h3 className="font-bold text-[36px] leading-[48px] text-blue-600 max-w-3xl mb-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
          Find the Best AI Tools, AI Agents & GPTs Instantly
        </h3>
        <p className="font-normal text-[16px] leading-[24px] text-black max-w-2xl mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200">
          We help you discover the right AI solution for any use case - whether you're scaling a business,
          experimenting with ideas, automating tasks, or just exploring the future of AI.
        </p>

        {/* Search Input */}
        <div className="flex items-center gap-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-300">
          <Input
            placeholder="Search for AI tools, agents or GPTs"
            className="bg-white px-4 py-2 rounded-full w-[400px]"
            disableUnderline
          />
          <ScrollLink to="cards" smooth={true} duration={800}>
            <Button variant="contained" className="rounded-full h-[45px]">
              Get Started
            </Button>
          </ScrollLink>
        </div>

        {/* Top Searches */}
        <div className="w-full max-w-xl mt-8 px-4 py-2 rounded-full bg-[#F2F2F2] flex items-center flex-wrap gap-2 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-400">
          <h4 className="text-black font-semibold">Top Searches:</h4>

          {["Video Editor", "AI Chatbot", "Resume Builder"].map((label, i) => (
            <ScrollLink
              key={i}
              to="cards"
              smooth={true}
              duration={800}
              className="cursor-pointer text-black text-sm px-4 py-1 rounded-full bg-[#7d7c7c] hover:bg-[#6b6b6b] transition"
            >
              {label}
            </ScrollLink>
          ))}
        </div>

        {/* Down Arrow Scroll */}
        <div className="mt-16 mb-12 cursor-pointer animate-bounce animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-500">
          <ScrollLink to="cards" smooth={true} duration={800}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-500"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </ScrollLink>
        </div>

        {/* Cards Section (react-scroll Element wrapper) */}
        <Element name="cards">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-600">
            <Cards />
          </div>
        </Element>

        <Element name="linkCard">
          <div className="animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-700">
            <LaunchCard />
          </div>
        </Element>
      </div>

      <footer>
      <div className="flex justify-center items-start bg-black text-white py-4 mt-12">
        <div className="w-full max-w-5xl px-4">
        <h2 className="font-bold text-2xl text-left">AI ToolBox</h2>
        <p className="font-normal text-white ">We help you find the best AI tools & AI agents for you need</p>
     </div>
    </div>

      </footer>
    </div>
  );
}
