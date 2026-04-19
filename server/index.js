import "./src/config/env.js";
import app from "./src/app.js";
import connectDB from "./src/config/db.js"

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});