import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* JioCinema */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">JIOCINEMA</h3>
          <ul className="space-y-2">
            <li>For You</li>
            <li>Sports</li>
            <li>Movies</li>
            <li>TV Shows</li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">SUPPORT</h3>
          <ul className="space-y-2">
            <li>Help Center</li>
            <li>Terms Of Use</li>
            <li>Privacy Policy</li>
            <li>Content Complaints</li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            CONNECT WITH US
          </h3>
          <div className="flex gap-4">
            <Image src="/svg/facebook.svg" alt="facebook" width={40} height={40} className="bg-gray-700 rounded-full p-2" />
            <Image src="/svg/x.svg" alt="twitter" width={40} height={40} className="bg-gray-700 rounded-full p-2" />
            <Image src="/svg/instagram.svg" alt="instagram" width={40} height={40} className="bg-gray-700 rounded-full p-2" />
            <Image src="/svg/youtube.svg" alt="youtube" width={40} height={40} className="bg-gray-700 rounded-full p-2" />
          </div>
        </div>

        {/* Download */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            DOWNLOAD THE APP
          </h3>
          <div className="flex gap-4">
            <Image src="/svg/googlePlay.svg" alt="playstore" width={120} height={40} className="h-auto w-full"/>
            <Image src="/svg/appleStore.svg" alt="appstore" width={120} height={40} className="h-auto w-full"/>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 px-6 py-6 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-400 text-center md:text-left">
          Copyright © 2024 Viacom18 Media PVT LTD. All rights reserved.
        </p>

        {/* Jio Logo */}
        <Image
          src="/images/jioLogo.webp"
          alt="jio"
          width={48}
          height={48}
          className="mt-4 md:mt-0"
        />
      </div>
    </footer>
  );
};

export default Footer;