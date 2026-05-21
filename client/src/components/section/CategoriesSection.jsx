import React, { Suspense } from "react";
// import { Skeleton } from '../atom/Skeleton'
import { getWatchUrl, media } from "@/lib/api";
import Image from "next/image";
import { InboxIcon } from "lucide-react";
import Link from "next/link";
import { genreMap } from "@/app/constant/genres";
import { Button } from "../ui/button";

function CategoriesSection({ title, id, fetcher, mediaType }) {
  return (
    <div className="py-8 px-6">
      <div className="flex items-center justify-between">
        <h2
          id={id}
          className="text-2xl font-medium mb-6 scroll-m-25 text-white"
        >
          {title}
        </h2>
        {/* <p className='text-white'>View All</p> */}
      </div>
      {/* <Suspense fallback={<CategoriesFallback />}> */}
      <CategoriesContent fetcher={fetcher} mediaType={mediaType} />
      {/* </Suspense> */}
    </div>
  );
}

async function CategoriesContent({ fetcher, mediaType }) {
  const data = await fetcher();

  if (!data || data.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-75 py-12">
        <InboxIcon
          className="w-32 h-32 text-slate-400 mb-10"
          strokeWidth={1.2}
        />
        <p className="text-lg text-gray-500">No items found.</p>
      </div>
    );
  }

  return (
    <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide">
      {data?.map((post) => {
        return (
          <div className="gird" key={post.id}>
            <Link
              href={getWatchUrl(post.id, mediaType, post?.poster_path)}
              
            >
              <Image
                src={media(post?.poster_path)}
                alt=""
                width={200}
                height={300}
                className="min-w-50 h-75 rounded-sm object-cover"
                quality={30}
                key={post.id}
              />
            </Link>
            <div className="p-2">
              <p className="text-white text-md mt-2">{post.title}</p>
              <p className="flex items-center text-[#b4b4bf] text-sm">
                {post.genre_ids
                  ?.map((id) => genreMap[id])
                  .filter(Boolean)
                  .join(" • ")}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <Link
                  href={getWatchUrl(post.id, mediaType, post?.poster_path)}
                  key={post.id}
                >
                  <Button className="cursor-pointer flex items-center gap-3 border border-white text-white px-3 py-3 h-8 rounded-sm hover:bg-white hover:text-black transition-all duration-300">
                    <span className="text-sm">▶</span>
                    <span className="font-semibold text-sm">Watch</span>
                  </Button>
                </Link>
                <Button className="flex items-center gap-2 hover:cursor-pointer text-[#b4b4bf]">
                  <span className="text-sm">↪</span>
                  <span className="font-semibold text-sm">Share</span>
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

// export function CategoriesFallback() {
//     return (
//         <ul className="flex gap-4 w-full overflow-scroll scrollbar-hide ">
//             {new Array(12).fill(0).map((e, index) => (
//                 <Skeleton key={index} className="min-w-[200px] h-[300px] " />
//             ))}
//         </ul>
//     )
// }

export default CategoriesSection;
