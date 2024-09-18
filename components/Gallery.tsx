"use client";

import React from "react";
import Image from "next/image";
import stats from "@/public/stats.png";

const Gallery = () => {
  return (
    <div>
      <ul className="">
        <li>
          <a href="#" className="group block overflow-hidden">
            <Image
              src={stats}
              alt="Gallery stats"
              width={400}
              height={300}
              className="h-[350px] w-full object-contain transition duration-500 group-hover:scale-105 sm:h-[350px]"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
