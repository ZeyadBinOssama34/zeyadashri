AOS.init({
  duration: 1000,
  once: true
});

// Smooth scrolling
document.querySelectorAll('a.nav-link, a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    if (targetId.startsWith('#')) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = targetId;
    }
  });
});