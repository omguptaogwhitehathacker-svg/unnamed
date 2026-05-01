// Year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

// Active nav
document.querySelectorAll('.nav nav a').forEach(a => {
  if (a.getAttribute('href') === location.pathname) a.classList.add('active');
});

// Reveal on scroll
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
