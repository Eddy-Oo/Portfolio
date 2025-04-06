// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', () => {
  console.log('Contact page loaded');
  
  const form = document.querySelector('.contact-form');
  
  if (form) {
    form.addEventListener('submit', (e) => {
      // You could add form validation here
      console.log('Form submitted');
    });
  }
});
