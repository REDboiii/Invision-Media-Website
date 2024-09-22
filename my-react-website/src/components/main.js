document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.cta-button');
  
  buttons.forEach(button => {
    button.addEventListener('mousemove', (e) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const xPercent = Math.round((x / rect.width) * 100);
      const yPercent = Math.round((y / rect.height) * 100);
      
      button.style.setProperty('--x', `${xPercent}%`);
      button.style.setProperty('--y', `${yPercent}%`);
    });
    
    button.addEventListener('mouseleave', () => {
      button.style.setProperty('--x', '50%');
      button.style.setProperty('--y', '50%');
    });
  });

  // Example: Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      targetElement.scrollIntoView({ behavior: 'smooth' });
    });
  });
});
