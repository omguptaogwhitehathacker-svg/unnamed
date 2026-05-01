(function () {
  const form = document.getElementById('contactForm');
  // Prefill budget from ?est=
  const params = new URLSearchParams(location.search);
  const est = params.get('est');
  if (est && form.budget) form.budget.value = Math.min(200, Math.max(50, parseInt(est, 10) || 50));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get('name') || '').toString().trim();
    const email = (data.get('email') || '').toString().trim();
    const type = (data.get('type') || '').toString();
    const budget = (data.get('budget') || '').toString();
    const message = (data.get('message') || '').toString().trim();

    if (!name || !email || !message) { form.reportValidity(); return; }

    const subject = `New project inquiry — ${type} (${name})`;
    const body =
`Hi unnamed,

Name: ${name}
Email: ${email}
Project type: ${type}
Estimated budget: $${budget}

${message}

— Sent from unnamed.site contact form`;

    const href = `mailto:theunnamedproject@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  });
})();
