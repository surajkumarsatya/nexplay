import { getBannerData, getWatchUrl, media } from "@/lib/api";
import React, { Suspense } from "react";
// import { Skeleton } from '../atom/Skeleton';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { Skeleton } from "../atom/Skeleton";
import { Button } from "../ui/button";
import { Crown } from "lucide-react";

async function BannerSection({ fetcher }) {
  return (
    // <Suspense fallback={<BannerSectionFallback />}>
    <BannerSectionContent fetcher={fetcher} />
    // </Suspense>
  );
}

async function BannerSectionContent({ fetcher }) {
  const data = await fetcher();
  // console.log(data);
  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-[500px] py-12">
        <InboxIcon
          className="w-32 h-32 text-slate-400 mb-10"
          strokeWidth={1.2}
        />
        <p className="text-lg text-gray-500">No items found.</p>
      </div>
    );
  }
  return (
    <Carousel opts={{align: "center", loop: true}} className="relative w-full md:px-0 px-4">
        <CarouselPrevious className="absolute left-1/2 top-1/2 -translate-x-[31.5rem] -translate-y-1/2 z-2 w-15 h-15" />
        <CarouselContent>
            {data?.map((vid) => (
            <CarouselItem
                key={vid.id}
                className="relative overflow-hidden w-full max-w-[948px] h-[500px]"
            >
                <Link
                href={getWatchUrl(vid.id, vid.media_type, vid?.backdrop_path)}
                >
                <Image
                    src={media(vid?.backdrop_path)}
                    alt=""
                    width={700}
                    height={500}
                    className="w-full h-full object-cover"
                    quality={30}
                />
                </Link>
                <div className="absolute bottom-0 left-0 w-full z-20">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 " />

                {/* Content */}
                <div className="relative px-10 pb-10 pt-24 max-w-[55%]">
                    {/* Movie Title */}
                    <p className="text-white text-3xl font-bold mb-5 max-w-[500px]">
                    {vid?.title || vid?.name}
                    </p>

                    {/* Buttons */}
                    <div className="flex items-center gap-4">
                    {/* Watch Button */}
                    <Button className="flex items-center gap-3 border border-white text-white px-4 py-4 h-10 rounded-sm hover:bg-white hover:text-black transition-all duration-300">
                        <span className="text-lg">▶</span>
                        <span className="font-semibold">Watch</span>
                    </Button>

                    {/* Buy Plan */}
                    <Button className="h-10 px-4 rounded-sm bg-white text-black hover:bg-white/90 font-semibold flex items-center gap-2">
                        <span>
                        <Crown />
                        </span>
                        BUY PLAN
                    </Button>
                    </div>
                </div>
                </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselNext className="absolute left-1/2 top-1/2 translate-x-[27.5rem] -translate-y-1/2 z-2 w-15 h-15" />
    </Carousel>
  );
}

function BannerSectionFallback() {
  return (
    <div className="flex items-center justify-center gap-5">
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
      <Skeleton className="h-[500px] w-[700px] rounded-lg" />
    </div>
  );
}

export default BannerSection;
