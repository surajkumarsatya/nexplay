import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#191922] border-t border-zinc-900 text-zinc-400">
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border-b border-zinc-900 pb-8">
          
          {/* Download Apps */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              Download Apps
            </h3>

            <div className="flex items-center gap-4">
              <Image
                src="/svg/googlePlay.svg"
                alt="playstore"
                width={140}
                height={42}
                className="cursor-pointer transition hover:opacity-80"
              />

              <Image
                src="/svg/appleStore.svg"
                alt="appstore"
                width={140}
                height={42}
                className="cursor-pointer transition hover:opacity-80"
              />
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-left lg:text-right">
              Connect with us
            </h3>

            <div className="flex items-center gap-4 lg:justify-end">
              
              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                <Image
                  src="/svg/facebook.svg"
                  alt="facebook"
                  width={16}
                  height={16}
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                <Image
                  src="/svg/instagram.svg"
                  alt="instagram"
                  width={16}
                  height={16}
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                <Image
                  src="/svg/x.svg"
                  alt="twitter"
                  width={16}
                  height={16}
                />
              </div>

              <div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center hover:bg-zinc-800 transition cursor-pointer">
                <Image
                  src="/svg/youtube.svg"
                  alt="youtube"
                  width={16}
                  height={16}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm py-6 border-b border-zinc-900">
          <p className="hover:text-white transition cursor-pointer">
            About Us
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Help Center
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Privacy Policy
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Terms of Use
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Preferences
          </p>

          <p className="hover:text-white transition cursor-pointer">
            Do not Sell or Share my Personal Information
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 py-10">
          
          {/* Column 1 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Popular TV Shows
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Mahabharat</li>
              <li>Tumm Se Tumm Tak</li>
              <li>Jhansi ki Rani</li>
              <li>Kumkum Bhagya</li>
              <li>Kundali Bhagya</li>
              <li>Bhagya Lakshmi</li>
              <li>Meet</li>
              <li>Annapoorna</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Premium Movies
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Bhagwat Chapter One</li>
              <li>Saali Mohabbat</li>
              <li>Kennedy</li>
              <li>Tehran</li>
              <li>Mrs</li>
              <li>Sirai</li>
              <li>The Kerala Story</li>
              <li>RRR</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Popular LIVE TV Channels
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Zee News</li>
              <li>Zee TV HD</li>
              <li>&TV HD</li>
              <li>Zee Marathi HD</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Popular Web Series
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Ayana Mane</li>
              <li>Murshid</li>
              <li>Gyaarah Gyaarah</li>
              <li>Black Widows</li>
              <li>Duranga 2</li>
              <li>Taj</li>
              <li>Sunflower</li>
              <li>Pitchers</li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Bollywood Top Celebrities
            </h3>

            <ul className="space-y-3 text-sm">
              <li>R Madhavan</li>
              <li>Vikrant Massey</li>
              <li>Deepika Padukone</li>
              <li>Salman Khan</li>
              <li>Pankaj Tripathi</li>
              <li>Vicky Kaushal</li>
              <li>Amitabh Bachchan</li>
              <li>Kangana Ranaut</li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="text-white font-semibold mb-5">
              Games & News
            </h3>

            <ul className="space-y-3 text-sm">
              <li>Blog</li>
              <li>Web Stories</li>
              <li>ILT20 2025</li>
              <li>Abu Dhabi Knight Riders</li>
              <li>Dubai Capitals</li>
              <li>Gulf Giants</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-zinc-900 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div>
            <p className="text-sm text-zinc-500">
              Best viewed on Google Chrome 80+, Safari 5.1.5+
            </p>

            <p className="text-sm text-zinc-600 mt-1">
              Copyright © 2026 NexPlay Media Pvt Ltd. All rights reserved.
            </p>
          </div>

          <Image
            src="/svg/nexplaylogo.svg"
            alt="jio"
            width={48}
            height={48}
            className="opacity-90"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;