const text = "Hi, I'm Eddy Oo. I create web and game development projects.";
const textElement = document.getElementById("text");
let i = 0;

function typeWriter() {
  if (i < text.length) {
    textElement.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  } else {
    // Add cursor after typing completes
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '|';
    textElement.appendChild(cursor);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
<footer>
  <div id="app"></div>
  <a href="">
    <i class="devicon-github-original"></i>
  </a>
  <a href="">
    <i class="devicon-linkedin-plain"></i>
  </a>
  <p>@2025 Eddy Oo</p>
</footer>
