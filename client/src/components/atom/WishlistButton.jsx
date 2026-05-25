"use client";

import { api, ENDPOINT } from "@/lib/api";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "sonner"

const WishlistButton = ({ wishlist }) => {
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  if (!user.isLoggedIn) return <></>;
  const addToWatchlish = async () => {
    try {
      setLoading(true);
      const res = await api.post(ENDPOINT.addToWishlist, wishlist);
      if (res.status == 200) {
        toast("Added to watchlist!");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button
        data-testid="watchlist"
        className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl hover:scale-105 transition"
        onClick={addToWatchlish}
      >
        ♥
      </button>
    </div>
  );
};

export default WishlistButton;
