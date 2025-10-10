const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://asim925:Hello1World@cluster.jayxiyb.mongodb.net/playground?retryWrites=true&w=majority&appName=Cluster"
  )
  .then(() => console.log("✅ Connected to MongoDB Atlas.."))
  .catch((err) => console.error("❌ Connection failed:", err));

// defining shape of the objects: blueprint
const courseSchema = new mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
});

// providing blueprint:
const Course = mongoose.model("course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "frontend",
    author: "asim",
    tags: ["react", "next"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

// createCourse();

async function getCourses() {
  const courses = await Course.find({ name: "frontend" })
    .limit(10)
    .sort({ name: 1 }); // we can apply filters
  console.log(courses);
}
getCourses();
