const text = "Hi, My Name Is Tin Aung Oo. I'm passionate about creating web and game development projects. I am constantly learning and improving my skills";
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 40);
  }
}

// Add glowing cursor effect
function cursorEffect() {
  const cursor = document.createElement('span');
  cursor.id = 'cursor';
  cursor.innerHTML = '|';
  cursor.style.animation = 'blink 1s infinite';
  document.getElementById("text").appendChild(cursor);
}

typeWriter();
setTimeout(cursorEffect, 100);

// Create and append the Skills section with anime-style effects
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
// Add this to your existing index.js
document.addEventListener('DOMContentLoaded', () => {
    // Create sakura petals
    function createSakura() {
        const sakura = document.createElement('div');
        sakura.className = 'sakura-petal';
        sakura.innerHTML = '🌸';
        sakura.style.left = Math.random() * window.innerWidth + 'px';
        sakura.style.top = '-50px';
        sakura.style.fontSize = (Math.random() * 20 + 10) + 'px';
        sakura.style.opacity = Math.random() * 0.5 + 0.3;
        sakura.style.animationDuration = `${Math.random() * 5 + 5}s`;
        document.body.appendChild(sakura);

        setTimeout(() => {
            sakura.remove();
        }, 10000);
    }

    // Add sakura petals every 300ms
    setInterval(createSakura, 300);
    createSakura(); // Initial petal
});
// Add anime-style hover effects to skills
skillsSection.addEventListener('mouseover', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.color = '#ff69b4';
    e.target.style.textShadow = '0 0 10px #ff1493';
  }
});

skillsSection.addEventListener('mouseout', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.style.transform = 'scale(1)';
    e.target.style.color = '#ffc0cb';
    e.target.style.textShadow = 'none';
  }
});

document.body.appendChild(skillsSection);

// Add dynamic sakura petals background
function createSakura() {
  const sakura = document.createElement('div');
  sakura.innerHTML = '🌸';
  sakura.style.position = 'fixed';
  sakura.style.left = Math.random() * window.innerWidth + 'px';
  sakura.style.top = '-50px';
  sakura.style.fontSize = (Math.random() * 20 + 10) + 'px';
  sakura.style.opacity = Math.random() * 0.5 + 0.3;
  sakura.style.animation = `fall ${Math.random() * 5 + 5}s linear infinite`;
  document.body.appendChild(sakura);

  setTimeout(() => {
    sakura.remove();
  }, 10000);
}

// Add sakura petals every 300ms
setInterval(createSakura, 300);