const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Dynamic school object
const school = {
  name: "Greenfield Academy",
  motto: "Knowledge for a Brighter Future",
  about: "We nurture young minds with quality education, innovation, and character development.",
  programs: [
    "Nursery & Primary School",
    "Secondary School",
    "Science & Technology Labs",
    "Sports & Extracurricular Activities"
  ],
  contact: {
    email: "info@greenfieldacademy.com",
    phone: "+234 812 345 6789"
  }
};

// Home route
app.get("/", (req, res) => {
  res.render("index", { school });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
