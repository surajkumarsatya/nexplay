"use client";

import WatchlistContent from "@/components/atom/WatchlistContent";
import { buttonVariants } from "@/components/ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { cn } from "@/lib/utils";
import { FolderLockIcon } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";


function WatchList() {
  const userData = useSelector((state) => state.user);
  const [watchlistData, setWatchlistData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (userData.isLoggedIn) {
        try {
          const res = await api.get(ENDPOINT.getWishlist);
          console.log("API response:", res.data);
          setWatchlistData(res?.data?.data);
          console.log("watchlist", watchlistData)
        } catch (error) {
          console.error("Error fetching watchlist:", error);
        }
      }
    };
    fetchData();
  }, [userData.isLoggedIn]);

  return (
    <div className="p-2">
      {userData.isLoggedIn ? (
        <WatchlistContent data={watchlistData} title="Watchlist" />
      ) : (
        <div className="flex flex-col items-center justify-center h-[80vh] w-full gap-4">
          <FolderLockIcon className="w-32 h-32 text-slate-400" strokeWidth={1.2} />
          <p className="text-base text-slate-400">Login to see your watchlist</p>
          <Link href={"/login"} className={cn(buttonVariants(), "rounded-full px-6 mt-4")}>
            Login
          </Link>
        </div>
      )}
    </div>
  );
}

export default WatchList;