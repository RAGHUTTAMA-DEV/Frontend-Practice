import Navbar from "../layouts/Navbar";
import { Button, Input, Link } from "@mui/material";

export default function DashBoard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar  />

      <div className="flex flex-col items-center justify-center px-4 mt-12 text-center">
        {/* Title Link */}
        <Link href="/AItools" className="text-[25px] font-bold text-black mb-4">
          Tile Sponsor
        </Link>

        {/* Headline + Paragraph */}
        <h3 className="font-bold text-[36px] leading-[48px] text-blue-600 max-w-3xl mb-4">
          Find the Best AI Tools, AI Agents & GPTs Instantly
        </h3>
        <p className="font-normal text-[16px] leading-[24px] text-black max-w-2xl mb-6">
          We help you discover the right AI solution for any use case - whether you're scaling a business,
          experimenting with ideas, automating tasks, or just exploring the future of AI.
        </p>

        {/* Input + Button side-by-side */}
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search for AI tools, agents or GPTs"
            className="bg-white px-4 py-2 rounded-full w-[400px]"
            disableUnderline
          />
          <Button variant="contained" className="rounded-full h-[45px]">
            Get Started
          </Button>
        </div>
        
      </div>
    </div>
  );
}

