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
  console.log(ENDPOINT.getMovieDetails(id));
  console.log(id);
  // const details = (await api.get(ENDPOINT.getMovieDetails(id))).data.data.results?.[0];
  const details = (await api.get(ENDPOINT.getMovieDetails(id))).data.data;
  // console.log(details);
  console.log("poster_path", poster_path);

  return (
    <div className="relative min-h-screen text-white">
      {/* HERO SECTION */}
      <div className="relative h-[90vh] overflow-hidden">
        {/* BACKDROP */}
        <img
          src={`https://image.tmdb.org/t/p/original${details.backdrop_path}`}
          alt={details.title}
          className="w-full h-full"
        />

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/30" />

        {/* HERO CONTENT */}
        <div className="absolute bottom-0 left-0 w-full z-10 px-6 lg:px-10 pb-10">
          {/* TITLE */}
          <div className="space-y-3">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {details.title}
              <span className="text-gray-300 font-medium">
                {" "}
                ({details.release_date?.split("-")[0]})
              </span>
            </h1>

            {/* META INFO */}
            <div className="flex flex-wrap items-center gap-3 text-lg text-gray-200">
              <span className="border border-gray-400 px-2 py-1 rounded">
                {details.adult ? "A" : "U/A"}
              </span>

              <span>
                {details.release_date} (
                {details.production_countries?.[0]?.iso_3166_1})
              </span>

              <span>•</span>

              <span>
                {details.genres?.map((genre) => genre.name).join(", ")}
              </span>

              <span>•</span>

              <span>{details.runtime}m</span>
            </div>
          </div>

          {/* SCORE + ACTIONS */}
          <div className="flex flex-wrap items-center gap-8 mt-5">
            {/* USER SCORE */}
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
              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl hover:scale-105 transition">
                ☰
              </button>

              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl hover:scale-105 transition">
                ♥
              </button>

              <button className="w-10 h-10 rounded-full bg-blue-950 flex items-center justify-center text-xl hover:scale-105 transition">
                🔖
              </button>
            </div>

            {/* TRAILER */}
            <button className="flex items-center gap-3 text-md font-semibold hover:text-gray-300 transition">
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

      {/* BELOW IMAGE CONTENT */}
      <div className="bg-black/20 px-6 lg:px-10 py-10">
        {/* OVERVIEW */}
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold mb-4">Overview</h2>

          <p className="text-lg leading-8 text-gray-300">{details.overview}</p>
        </div>

        {/* EXTRA DETAILS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          <div>
            <h3 className="font-bold text-xl">Status</h3>
            <p className="text-gray-300 mt-1">{details.status}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Original Language</h3>

            <p className="text-gray-300 mt-1">
              {details.spoken_languages?.[0]?.english_name}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Budget</h3>

            <p className="text-gray-300 mt-1">
              ${details.budget?.toLocaleString() || "N/A"}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Revenue</h3>

            <p className="text-gray-300 mt-1">
              ${details.revenue?.toLocaleString() || "N/A"}
            </p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Popularity</h3>

            <p className="text-gray-300 mt-1">{details.popularity}</p>
          </div>

          <div>
            <h3 className="font-bold text-xl">Vote Count</h3>

            <p className="text-gray-300 mt-1">{details.vote_count}</p>
          </div>
        </div>

        {/* PRODUCTION COMPANIES */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Production Companies</h2>

          <div className="flex flex-wrap gap-8">
            {details.production_companies?.map((company) => (
              <div
                key={company.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 w-57.5 backdrop-blur-md"
              >
                {company.logo_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                    alt={company.name}
                    className="h-16 object-contain mb-5"
                  />
                )}

                <h3 className="font-bold text-lg">{company.name}</h3>

                <p className="text-gray-400 text-sm mt-2">
                  {company.origin_country}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* OFFICIAL WEBSITE */}
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
