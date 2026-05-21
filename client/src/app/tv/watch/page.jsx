// import ShareButton from "@/components/atom/ShareButton";
// import WishlistButton from "@/components/atom/WishListButton";
import { buttonVariants } from "@/components/ui/button";
import { api, ENDPOINT } from "@/lib/api";
import { FilmIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
const page = async ({ searchParams }) => {
  const params = await searchParams;
  const id = params.id;
  const poster_path = params.poster_path;
  console.log(ENDPOINT.getTvShowsDetails(id));
  console.log(id);
  const details = (await api.get(ENDPOINT.getTvShowsDetails(id))).data.response;
  // console.log(details);
  console.log("posterpath", poster_path);

  return (
    <div className="relative min-h-screen text-white">
      {/* HERO SECTION */}
      <div className="relative h-[95vh] overflow-hidden">
        {/* BACKDROP */}
        <img
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt={details.name}
          className="w-full h-full object-cover"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />

        {/* HERO CONTENT */}
        <div className="absolute bottom-0 left-0 w-full z-10 px-6 lg:px-10 pb-10">
          {/* TITLE */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {details.name}

              <span className="text-gray-300 font-medium">
                {" "}
                ({details.first_air_date?.split("-")[0]})
              </span>
            </h1>

            {/* META */}
            <div className="flex flex-wrap items-center gap-3 text-md text-gray-200">
              <span className="border border-gray-400 px-2 py-1 rounded">
                TV
              </span>

              <span>
                {details.first_air_date} ({details.origin_country?.[0]})
              </span>

              <span>•</span>

              <span>
                {details.genres?.map((genre) => genre.name).join(", ")}
              </span>

              <span>•</span>

              <span>{details.number_of_seasons} Seasons</span>

              <span>•</span>

              <span>{details.number_of_episodes} Episodes</span>
            </div>
          </div>

          {/* SCORE */}
          <div className="flex flex-wrap items-center gap-8 mt-5">
            <div className="flex items-center gap-4">
              <div className="w-15 h-15 rounded-full border-4 border-green-400 flex items-center justify-center bg-black/70">
                <span className="text-xl font-bold">
                  {Math.round(details.vote_average * 10)}%
                </span>
              </div>

              <p className="font-semibold text-md leading-6">
                User <br /> Score
              </p>
            </div>

            {/* ACTIONS */}
            <div className="flex items-center gap-4">
              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl">
                ☰
              </button>

              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl">
                ♥
              </button>

              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl">
                🔖
              </button>
            </div>

            <button className="flex items-center gap-3 text-md font-semibold">
              ▶ Play Trailer
            </button>
          </div>

          {/* TAGLINE */}
          {details.tagline && (
            <p className="mt-5 text-xl italic text-gray-300">
              {details.tagline}
            </p>
          )}
        </div>
      </div>

      {/* BELOW CONTENT */}
      <div className="bg-[#191922]/20 px-6 lg:px-16 py-14">
        {/* OVERVIEW */}
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>

          <p className="text-lg leading-8 text-gray-300">{details.overview}</p>
        </div>

        {/* TV DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <div>
            <h3 className="font-bold text-xl">Status</h3>
            <p className="text-gray-300 mt-1">{details.status}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Type</h3>
            <p className="text-gray-300 mt-1">{details.type}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Original Language</h3>

            <p className="text-gray-300 mt-1">{details.original_language}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Popularity</h3>

            <p className="text-gray-300 mt-1">{details.popularity}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Vote Count</h3>

            <p className="text-gray-300 mt-1">{details.vote_count}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">In Production</h3>

            <p className="text-gray-300 mt-1">
              {details.in_production ? "Yes" : "No"}
            </p>
          </div>
        </div>

        {/* CREATED BY */}
        {details.created_by?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Created By</h2>

            <div className="flex flex-wrap gap-8">
              {details.created_by.map((creator) => (
                <div
                  key={creator.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 w-62.5"
                >
                  {creator.profile_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${creator.profile_path}`}
                      alt={creator.name}
                      className="w-20 h-20 rounded-full object-cover mb-4"
                    />
                  )}

                  <h3 className="font-bold text-lg">{creator.name}</h3>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NETWORKS */}
        {details.networks?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Networks</h2>

            <div className="flex flex-wrap gap-8">
              {details.networks.map((network) => (
                <div
                  key={network.id}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 w-55"
                >
                  {network.logo_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w500${network.logo_path}`}
                      alt={network.name}
                      className="h-16 object-contain mb-5"
                    />
                  )}

                  <h3 className="font-bold text-lg">{network.name}</h3>

                  <p className="text-gray-400 text-sm mt-2">
                    {network.origin_country}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEASONS */}
        {details.seasons?.length > 0 && (
          <div className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Seasons</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {details.seasons.map((season) => (
                <div
                  key={season.id}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${season.poster_path}`}
                    alt={season.name}
                    className="w-full h-80"
                  />

                  <div className="p-5">
                    <h3 className="font-bold text-lg">{season.name}</h3>

                    <p className="text-gray-400 mt-2">
                      Episodes: {season.episode_count}
                    </p>

                    <p className="text-gray-400">
                      Rating: {season.vote_average}
                    </p>

                    <p className="text-gray-400">Air Date: {season.air_date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WEBSITE */}
        {details.homepage && (
          <a
            href={details.homepage}
            target="_blank"
            className="inline-block mt-16 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </div>
  );
};

export default page;

// https://api.themoviedb.org/3/tv/456?api_key=d744862dce9fb4b1ff7500e0c0f90183
