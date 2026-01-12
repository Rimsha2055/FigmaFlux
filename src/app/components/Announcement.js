"use client";
import { useState } from "react";

export default function Announcement() {
  const [hover, setHover] = useState(false);
  const baseBg = "#F5F0E6";
  const hoverBg = `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), ${baseBg}`;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
      style={{ background: hover ? hoverBg : baseBg, transition: "background 150ms ease" }}
      className="mx-4 my-4 rounded-lg px-4 py-3 flex flex-col items-center text-center gap-2 text-sm text-black md:mx-10 md:px-6 md:flex-row md:justify-between"
    >
      <p className="text-black">Announcement: Spring ASB Election is now live for voting!</p>
      <a href="#" className="underline text-black">
        Survey here
      </a>
    </div>
  );
}
