"use client";

import { Menu, Search, LayoutGrid, Crown } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
import { ProfileSheet } from "../atom/ProfileSheet";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/tv", label: "TV Shows" },
    { href: "/movies", label: "Movies" },
    { href: "/watchlist", label: "Watchlist" },
  ];

  return (
    <header className="w-full bg-[#191922] text-white fixed z-11">
      <div className="flex items-center justify-between px-6 py-4">
        {/* LEFT */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/svg/nexplaylogo.svg"
              alt="logo"
              width={10}
              height={20}
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Nav Links */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition ${
                    isActive
                      ? "text-white after:absolute after:left-0 after:-bottom-2 after:h-0.5 after:w-full after:bg-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex items-center gap-3 border border-white rounded-sm px-4 py-2.5 w-75 bg-white/5 backdrop-blur-md">
            <Search className="w-5 h-5 text-white/70" />

            <input
              type="text"
              placeholder="Search for Movies, Shows, Channels etc."
              className="text-xs bg-transparent outline-none border-none w-full placeholder:text-white"
            />
          </div>

          {/* Login */}
          <Link href="/login">
            <Button className="cursor-pointer h-10 px-4 rounded-sm border-2 border-white bg-transparent hover:bg-white hover:text-black text-white font-semibold transition">
              LOGIN
            </Button>
          </Link>

          {/* Buy Plan */}
          <Link href="/subscription">
            <Button className="cursor-pointer h-10 px-4 rounded-sm bg-white text-black hover:bg-white/90 font-semibold flex items-center gap-2">
              <Crown />
              BUY PLAN
            </Button>
          </Link>

          {/* Profile */}
          <ProfileSheet />
        </div>
      </div>
    </header>
  );
};

export default Header;
