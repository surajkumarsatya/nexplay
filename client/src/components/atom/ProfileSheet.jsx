import Image from "next/image";
import Link from "next/link";
import { X, ExternalLink, ChevronRight } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function ProfileSheet() {
  return (
    <Sheet>
      <SheetTrigger>
        <div className="cursor-pointer">
          <Image
            src="/images/logo.webp"
            alt="profile"
            width={36}
            height={36}
            className="rounded-full border border-zinc-700 hover:border-white transition"
          />
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[85%] max-w-85! border-l border-zinc-800 bg-zinc-950 text-white p-0 [&>button]:hidden"
      >
        <div className="flex flex-col h-full">
          {/* Close Button */}
          <div className="flex justify-end p-3">
            <SheetClose>
              <div className="p-2 rounded-full border border-zinc-700 hover:border-white transition cursor-pointer">
                <X size={16} />
              </div>
            </SheetClose>
          </div>

          {/* Profile Card */}
          <div className="px-4 pb-4 pt-10">
            <div className="relative rounded-xl bg-zinc-900/60 backdrop-blur-xl border border-zinc-800 p-6 pt-10 flex flex-col items-center text-center">
              <Image
                src="/images/logo.webp"
                alt="avatar"
                width={72}
                height={72}
                className="absolute -top-9 rounded-full border-2 border-zinc-700 bg-zinc-800"
              />

              <p className="mt-4 text-lg font-semibold">Guest</p>

              <Button className="mt-4 bg-pink-600 hover:bg-pink-500 text-white rounded-full px-6">
                Login
              </Button>
            </div>
          </div>

          {/* Menu */}
          <div className="flex-1 px-4 pb-6 text-sm">
            <div className="border-b border-zinc-800 pb-2 mb-2">
              <MenuItem label="Subscribe Now" href="#" arrow />
            </div>

            <MenuItem label="Home" href="/" external />
            <MenuItem label="Movies" href="/movies" external />
            <MenuItem label="TV Shows" href="/tv" external />
            <MenuItem label="Watchlist" href="/watchlist" external />
            <MenuItem label="Jio+" href="/jio" external />

            <div className="border-t border-zinc-800 mt-4 pt-3">
              <MenuItem label="Help and Legal" href="/help" arrow />
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* Menu Item */
function MenuItem({ label, href = "#", external, arrow }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between py-3 px-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-900/60 transition"
    >
      <span>{label}</span>

      {external && <ExternalLink size={14} />}
      {arrow && <ChevronRight size={16} />}
    </Link>
  );
}
