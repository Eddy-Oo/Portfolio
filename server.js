const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

const projects = [
  { 
    name: "Movie Review Anime", 
    description: "Anime movie review platform with cute UI",
    link: "https://github.com/Eddy-Oo/Movie_Review_Anime.git",
    image: "/images/movie-review.png",
    tags: ["Anime", "Reviews", "Kawaii"]
  },
  { 
    name: "Personal Profile Website", 
    description: "A personal portfolio with anime styling",
    link: "https://github.com/Eddy-Oo/Personal-Profile-Website.git",
    image: "/images/profile.png",
    tags: ["Portfolio", "Anime", "Pink"]
  },
  { 
    name: "Color Picker", 
    description: "Interactive color selection tool with pastel palette",
    link: "https://github.com/Eddy-Oo/ColorPicker.git",
    image: "/images/color-picker.png",
    tags: ["Colors", "Cute", "UI"]
  },
  { 
    name: "LOL Champion Search", 
    description: "League of Legends champion database with anime flair",
    link: "https://github.com/Eddy-Oo/LOL-Champion-Search-.git",
    image: "/images/lol-search.png",
    tags: ["Gaming", "Anime", "Database"]
  }
];


app.get('/', (req, res) => res.render('index', { title: "Kawaii Portfolio" }));
app.get('/projects', (req, res) => res.render('projects', { projects, title: "Anime Projects" }));
app.get('/contact', (req, res) => res.render('contact', { title: "Contact Me" }));


app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} (${email}): ${message}`);
  res.render('success', { name, title: "Message Sent!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
