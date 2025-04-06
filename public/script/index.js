const text = "Hi, My Name Is Tin Aung Oo. I'm passionate about creating web and game development projects. I am constantly learning and improving my skills";
let i = 0;

function typeWriter() {
  const textElement = document.getElementById("text");
  if (textElement && i < text.length) {
    textElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// Add glowing cursor effect
function cursorEffect() {
  const textElement = document.getElementById("text");
  if (textElement) {
    const cursor = document.createElement('span');
    cursor.id = 'cursor';
    cursor.innerHTML = '|';
    cursor.style.animation = 'blink 1s infinite';
    textElement.appendChild(cursor);
  }
}

// Wait for DOM to be fully loaded before executing
document.addEventListener("DOMContentLoaded", function() {
  typeWriter();
  setTimeout(cursorEffect, 100);

  // Create and append the Skills section with anime-style effects
  const mainElement = document.querySelector('main');
  if (mainElement) {
    const skillsSection = document.createElement('section');
    skillsSection.id = 'skills';
    skillsSection.innerHTML = `
      <h2 class="heading">✧ Skills ✧</h2>
      <ul class="skills-grid">
        <li><span class="skill-icon">🌸</span> HTML, CSS, and JavaScript</li>
        <li><span class="skill-icon">🎀</span> Responsive Web Design</li>
        <li><span class="skill-icon">🐱</span> Python Programming</li>
        <li><span class="skill-icon">✨</span> Accessibility and ARIA Implementation</li>
        <li><span class="skill-icon">🎮</span> Unreal Engine</li>
        <li><span class="skill-icon">👾</span> Unity</li>
      </ul>
    `;
    mainElement.appendChild(skillsSection);
  }
});