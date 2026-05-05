import { Search } from "lucide-react";
import { Button } from "./ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "./ui/input-group";
import Image from "next/image";
import Link from "next/link";
import { ProfileSheet } from "./atom/ProfileSheet";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-3 bg-black text-white border-b border-gray-800">
      
      {/* Left Section */}
      <div className="flex items-center gap-6">
        <Image
          src="/svg/jio-clone.svg"  
          alt="logo"
          width={100}             
          height={40}              
          className="h-8 w-auto"
        />

        <Button className="border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full px-4 py-1 text-sm transition-all">
          Go Premium
        </Button>

        <ul className="flex items-center gap-5 text-sm font-medium">
          <Link href="/" className="hover:text-yellow-400 transition">
            Home
          </Link>
          <Link href="/movies" className="hover:text-yellow-400 transition">
            Movies
          </Link>
          <Link href="/tv" className="hover:text-yellow-400 transition">
            TV Shows
          </Link>
          <Link
            href="/watchlist"
            className="hover:text-yellow-400 transition"
          >
            Watchlist
          </Link>
          <Link href="/jio-plus" className="hover:text-yellow-400 transition">
            Jio+
          </Link>
        </ul>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        
        {/* Search */}
        <div className="bg-[#1a1c22] rounded-full px-3 py-1 flex items-center">
          <InputGroup className="border-none">
            <InputGroupInput
              placeholder="Search..."
              className="bg-transparent text-sm"
            />
            <InputGroupAddon>
              <Search className="w-4 h-4 text-gray-400" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Profile */}
        {/* <Image
          src="/images/logo.webp"
          alt="profile"
          width={36}
          height={36}
          className="rounded-full border border-gray-600 hover:border-yellow-400 transition"
        /> */}
        <ProfileSheet />
      </div>
    </header>
  );
};

export default Header;