document.addEventListener('DOMContentLoaded', () => {
  console.log('Contact page loaded');
  
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      console.log('Form submitted');
    });
  }
});
