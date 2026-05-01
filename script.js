// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const nav = document.querySelector(".nav");
const toggle = document.getElementById("menuToggle");
toggle?.addEventListener("click", () => nav.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add("visible");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".section, .hero-copy, .hero-card").forEach(el => {
  el.classList.add("reveal");
  io.observe(el);
});

// Contact form (no backend — friendly fake submit)
const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form?.addEventListener("submit", e => {
  e.preventDefault();
  const data = new FormData(form);
  if (!data.get("name") || !data.get("email") || !data.get("message")) {
    status.textContent = "Please fill in every field.";
    status.style.color = "#ffd84d";
    return;
  }
  status.textContent = "Sending…";
  status.style.color = "";
  setTimeout(() => {
    status.textContent = "Thanks! We'll be in touch within 1 business day.";
    form.reset();
  }, 700);
});

// Remove any Lovable badge that gets injected at runtime
const killBadge = () => {
  document.querySelectorAll('[id*="lovable-badge"], a[href*="lovable.dev"]').forEach(el => el.remove());
};
killBadge();
new MutationObserver(killBadge).observe(document.body, { childList: true, subtree: true });
