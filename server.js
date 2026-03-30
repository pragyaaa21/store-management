const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors"); // ✅ added
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express(); // ✅ ONLY ONCE

// ✅ middlewares
app.use(cors({
  origin: "http://localhost:5173"
}));

app.use(express.json());

// ✅ routes
app.use("/products", productRoutes);

// ✅ error handler
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});