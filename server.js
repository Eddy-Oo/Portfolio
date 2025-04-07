const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const projects = [
  { 
    name: "Movie Review Anime", 
    description: "Anime movie review platform with cute UI",
    link: "https://github.com/Eddy-Oo/Movie_Review_Anime.git",
    image: "/images/movie-review.png",
    tags: ["Anime", "Reviews", "Movie"]
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
    image: "/images/LOL-Champion-Search.png",
    tags: ["Gaming", "Anime", "Database"]
  }
];


app.get('/', (req, res) => res.render('index', { 
  title: "Kawaii Portfolio",
  images: {
    background: "/images/anime-bg.png",
    sakura: "/images/sakura.png",
    character: "/images/anime-girl.png"
  }
}));

app.get('/projects', (req, res) => res.render('projects', { 
  projects, 
  title: "Anime Projects"
}));

app.get('/contact', (req, res) => res.render('contact', { 
  title: "Contact Me"
}));

app.post('/submit-form', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`New message from ${name} (${email}): ${message}`);
  res.render('success', { 
    name, 
    title: "Message Sent!",
    image: "/images/anime-girl.png"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
