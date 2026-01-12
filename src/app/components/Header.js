'use client';
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#FCFAF6" }} className="w-full border-b border-gray-200">
      <div className="flex justify-between items-center px-6 md:px-10 py-6">
        <div className="flex items-center gap-6">
          <button
            className="md:hidden text-black font-medium"
            onClick={() => setOpen(true)}
            aria-expanded={open}
            aria-label="Open menu"
          >
            Menu
          </button>


          <nav className="hidden md:flex gap-20 text-sm text-black">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Details</a>
            <a href="#" className="hover:underline">News</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
        </div>
      </div>

      {open && (
        <div className="fixed  inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <div
            className="relative bg-[#FCFAF6] w-3/4 max-w-xs h-80 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            

            <nav className="flex flex-col gap-6 mt-4 text-black">
              <a href="#" onClick={() => setOpen(false)} className="text-lg">Home</a>
              <a href="#" onClick={() => setOpen(false)} className="text-lg">Details</a>
              <a href="#" onClick={() => setOpen(false)} className="text-lg">News</a>
              <a href="#" onClick={() => setOpen(false)} className="text-lg">Contact</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
