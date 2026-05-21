export default function Subscription() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white overflow-hidden relative pb-10">     

      {/* Content */}
      <div className="relative z-10 px-6 md:px-12 py-10">

        {/* Hero */}
        <div className="max-w-3xl">
          <p className="text-pink-500 font-medium mb-3 tracking-wide uppercase">
            Premium Membership
          </p>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Unlimited Entertainment,
            <span className="block text-zinc-400">
              One Premium Plan
            </span>
          </h1>

          <p className="mt-6 text-zinc-300 text-lg leading-8 max-w-2xl">
            Stream blockbuster movies, binge-worthy TV shows, exclusive
            originals and live sports without interruptions.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          
          {/* Basic */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-7 hover:border-zinc-700 transition">
            
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Basic
              </h2>

              <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                Starter
              </span>
            </div>

            <p className="text-zinc-400 mt-3">
              Perfect for solo streaming.
            </p>

            <div className="mt-8 flex items-end gap-1">
              <span className="text-5xl font-bold">₹49</span>
              <span className="text-zinc-500 mb-1">
                /month
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>• HD Streaming</li>
              <li>• Watch on 1 Device</li>
              <li>• Limited Downloads</li>
              <li>• Ad-Free Movies</li>
            </ul>

            <button className="mt-10 w-full h-12 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition">
              Choose Plan
            </button>
          </div>

          {/* Premium */}
          <div className="relative rounded-3xl border border-pink-500/40 bg-linear-to-b from-pink-600/20 to-zinc-900/80 backdrop-blur-xl p-7 scale-105 shadow-[0_0_40px_rgba(236,72,153,0.15)]">
            
            {/* Badge */}
            <div className="absolute -top-3 left-6">
              <span className="bg-pink-500 text-white text-xs px-4 py-1 rounded-full font-medium">
                MOST POPULAR
              </span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <h2 className="text-2xl font-semibold">
                Premium
              </h2>

              <span className="text-xs bg-pink-500/20 border border-pink-500/30 px-3 py-1 rounded-full text-pink-300">
                Best Value
              </span>
            </div>

            <p className="text-zinc-300 mt-3">
              Best experience for families.
            </p>

            <div className="mt-8 flex items-end gap-1">
              <span className="text-5xl font-bold">₹149</span>
              <span className="text-zinc-400 mb-1">
                /month
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-zinc-200">
              <li>• 4K Ultra HD</li>
              <li>• Watch on 4 Devices</li>
              <li>• Unlimited Downloads</li>
              <li>• Live Sports Included</li>
              <li>• Early Access Content</li>
            </ul>

            <button className="mt-10 w-full h-12 rounded-xl bg-pink-500 hover:bg-pink-400 transition font-semibold">
              Continue & Pay
            </button>
          </div>

          {/* Family */}
          <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-xl p-7 hover:border-zinc-700 transition">
            
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Family
              </h2>

              <span className="text-xs bg-zinc-800 px-3 py-1 rounded-full text-zinc-300">
                Shared
              </span>
            </div>

            <p className="text-zinc-400 mt-3">
              Stream together with family.
            </p>

            <div className="mt-8 flex items-end gap-1">
              <span className="text-5xl font-bold">₹249</span>
              <span className="text-zinc-500 mb-1">
                /3 months
              </span>
            </div>

            <ul className="mt-8 space-y-4 text-zinc-300">
              <li>• 4K + HDR Support</li>
              <li>• 6 Devices Access</li>
              <li>• Kids Safe Profiles</li>
              <li>• Exclusive Premieres</li>
            </ul>

            <button className="mt-10 w-full h-12 rounded-xl border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}