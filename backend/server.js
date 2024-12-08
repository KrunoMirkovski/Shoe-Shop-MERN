const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
mongoose.connect(
  "https://cloud.mongodb.com/v2/64a5c247a4ae6e11e62076a8#/metrics/replicaSet/67552a02dc42aa155379d916/explorer/ShoeShop",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Middleware
app.use(express.json());
app.use(cors());

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
