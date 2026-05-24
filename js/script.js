function toggleNav() {
  document.getElementById('main-nav').classList.toggle('open');
}

document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('main-nav').classList.remove('open');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
