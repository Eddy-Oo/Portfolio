const text =
  "Hi, My Name Is Tin Aung Oo. I'm passionate about creating web and game development projects. I am constantly learning and improving my skills";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

typeWriter();