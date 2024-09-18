import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-3xl"> {/* Increased max width for the carousel */}
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Image src="/stats.png" alt="stats-1" width={1000} height={1000} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Image src="/stats-2.jpeg" alt="stats-2" width={1000} height={1000} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Image src="/stats-3.jpeg" alt="stats-3" width={1000} height={1000} />
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Image src="/stats-4.jpeg" alt="stats-4" width={1000} height={1000} />
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
