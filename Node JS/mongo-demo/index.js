const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://asim925:Hello1World@cluster.jayxiyb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ Connection failed:", err));
