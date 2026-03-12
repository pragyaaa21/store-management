const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const errorHandler = require("./middleware/errorMiddleware");

dotenv.config();

const app = express();

app.use(express.json());

connectDB();

app.use("/products", productRoutes);

app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});