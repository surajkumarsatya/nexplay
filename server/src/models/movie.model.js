import { default as mongoose } from "mongoose";

// schema: structure (set of rules) of our movie document.
const schemaRules = {
  title: { type: String, required: [true, "title is required"] },
  description: { type: String, required: [true, "description is required"] },
  releaseYear: { type: Number, required: [true, "releaseYear is required"] },
  genre: {
    type: String,
    required: [true, "genre is required"],
    enum: ['Drama', 'Comedy', 'Action', 'Thriller', 'Horror', 'Romance', 'Sci-Fi', 'Animation', 'Documentary', 'Other']
  },
  rating: { type: Number, min: [1, "rating can't be less than 1"], max: [5, "rating can't be more than 5"] },
  cast: [String],
  director: String,
  thumbnail: String,
  trailerLink: String,
  isPremium: { type: Boolean, default: false }
}

// to convert our rules into mongoose schema. It is like a `blueprint`
// through converting this, mongoose understands your rules
const movieSchema = new mongoose.Schema(schemaRules);

// to convert our mongoose schema into model
// actual tool to talk to database
const MovieModel = mongoose.model("Movie", movieSchema)

export default MovieModel