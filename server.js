const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const projects = [
  {
    name: "Portfolio Terminal Style",
    description:
      "This Terminal-Style Portfolio is a unique and minimalistic personal website designed to resemble a command-line interface. Built with a sleek, retro aesthetic, it offers a nostalgic yet modern way to showcase skills, projects, and experiences. The design emphasizes simplicity and efficiency, making it an eye-catching portfolio for tech enthusiasts.",
    date: "3/10/2025",
    photo: "https://i.postimg.cc/DwQkq88F/Screenshot-2025-04-02-020442.png",
    link: "https://minokkar.github.io/",
  },
  {
    name: "Movie-Review-Website (static)",
    description:
      "This Movie Review Website is a simple static site built with HTML and CSS. It allows users to explore movie reviews, discover new films, and read insights on the latest blockbusters and classics. Designed with a clean and responsive layout, the website provides an easy-to-navigate experience. Perfect for movie enthusiasts looking for quick and honest reviews!",
    date: "10/23/2024",
    photo: "https://i.postimg.cc/15HvR4sY/movie.png",
    link: "https://minokkar.github.io/Movie-Review-Website/",
  },
  {
    name: "Color-Picker-HTML",
    description:
      "a simple and interactive color picker tool that allows users to select a color and see the result in multiple formats (hexadecimal, RGB, and HSL).",
    date: "11/10/2024",
    photo: "https://i.postimg.cc/3JZNNQyw/colorpicker.png",
    link: "https://github.com/MinOkkar/Color-Picker-HTML",
  },
  {
    name: "Blackmarket Firearm Management System",
    description:
      "The Blackmarket Firearm Management System is a simple graphical user interface (GUI) application built using Python's tkinter library. It allows users to manage a list of firearms by adding, updating, searching, and deleting firearms from the system. The data is stored in a CSV file, and the application dynamically updates the total count of firearms.",
    date: "5/8/2024",
    photo: "https://i.postimg.cc/7h94HDB8/managementsystem.png",
    link: "https://github.com/MinOkkar/GUI-DIT102",
  },
  {
    name: "Phonix",
    description:
      "A efficient Phone Book Management System built with Python, utilizing Binary Search Tree (BST) data structure for storing and managing contacts. This project allows users to add, search, update, and delete contacts, providing an efficient way to manage large sets of data.",
    date: "11/2/2024",
    photo: "https://i.postimg.cc/Y9typFT0/phonix.png",
    link: "https://github.com/MinOkkar/Phonix",
  },
];

// Routes
app.get("/", (req, res) => res.render("index"));
app.get("/contact", (req, res) => res.render("contact"));
app.get("/projects", (req, res) => res.render("projects", { projects }));

//form
app.post("/submit-form", (req, res) => {
  const { name, email, message } = req.body;
  console.log(` ${name}| (${email}): ${message}`);
  res.render("success", { name });
});

//server
const CUSTOM_PORT = process.env.PORT || 3000;
app.listen(CUSTOM_PORT, "0.0.0.0", () => {
  console.log(`Server is running on ${CUSTOM_PORT}`);
});