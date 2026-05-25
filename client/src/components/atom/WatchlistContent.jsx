// components/section/WatchlistContent.jsx
// No "use client" needed - pure render component
import { getWatchUrl, media } from "@/lib/api";
import Image from "next/image";
import { InboxIcon } from "lucide-react";
import Link from "next/link";
import { genreMap } from "@/app/constant/genres";
import { Button } from "@/components/ui/button";

function WatchlistContent({ data, title }) {
  return (
    <div className="py-8 px-6">
      <h2 className="text-2xl font-medium mb-6 text-white">{title}</h2>
      {!data || data.length === 0 ? (
        <div className="flex flex-col items-center justify-center w-full h-75 py-12">
          <InboxIcon className="w-32 h-32 text-slate-400 mb-10" strokeWidth={1.2} />
          <p className="text-lg text-gray-500">No items found.</p>
        </div>
      ) : (
        <ul className="grid grid-cols-5 gap-4 w-full overflow-scroll scrollbar-hide">
          {data.map((post) => (
            <div className="gird" key={post._id}>
              {/* <Link href={getWatchUrl(post.id, post.mediaType, post?.poster_path)}> */}
              <Link href={getWatchUrl(post.id, post.mediaType, post?.poster_path)}>
                <Image
                  src={media(post?.poster_path)}
                  alt=""
                  width={200}
                  height={300}
                  className="min-w-50 h-75 rounded-sm object-cover"
                  quality={30}
                />
              </Link>
              <div className="p-2">
                {/* <p className="text-white text-md mt-2">{post.title}</p> */}
                <p className="text-white text-md mt-2">{post.name}</p>
                <p className="flex items-center text-[#b4b4bf] text-sm">
                  {post.genre_ids?.map((id) => genreMap[id]).filter(Boolean).join(" • ")}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {/* <Link href={getWatchUrl(post.id, post.mediaType, post?.poster_path)}> */}
                  <Link href={getWatchUrl(post.id, post.mediaType, post?.poster_path)}>
                    <Button className="cursor-pointer flex items-center gap-3 border border-white text-white px-3 py-3 h-8 rounded-sm hover:bg-white hover:text-black transition-all duration-300">
                      <span className="text-sm">▶</span>
                      <span className="font-semibold text-sm">Watch</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WatchlistContent;