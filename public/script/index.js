const text = "Hi, My Name Is Tin Aung Oo. I'm passionate about creating web and game development projects. I am constantly learning and improving my skills";
const textElement = document.getElementById("text");
let i = 0;

function typeWriter() {
  if (textElement && i < text.length) {
    textElement.textContent += text[i];
    i++;
    setTimeout(typeWriter, 40);
  }
}

function cursorEffect() {
  if (textElement) {
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.textContent = '|';
    cursor.style.animation = 'blink 1s infinite';
    textElement.appendChild(cursor);
  }
}

function createSkillsSection() {
  const mainElement = document.querySelector('main');
  if (!mainElement) return;

  const skillsHTML = `
    <section id="skills">
      <h2 class="heading">✧ Skills ✧</h2>
      <ul class="skills-grid">
        <li><span class="skill-icon">🌸</span> HTML, CSS, and JavaScript</li>
        <li><span class="skill-icon">🎀</span> Responsive Web Design</li>
        <li><span class="skill-icon">🐱</span> Python Programming</li>
        <li><span class="skill-icon">✨</span> Accessibility and ARIA Implementation</li>
        <li><span class="skill-icon">🎮</span> Unreal Engine</li>
        <li><span class="skill-icon">👾</span> Unity</li>
      </ul>
    </section>
  `;

  mainElement.insertAdjacentHTML('beforeend', skillsHTML);
}

document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
  setTimeout(cursorEffect, 100);
  createSkillsSection();
});
