(function () {
  const BASE = 50, MIN = 50, MAX = 200;
  const $ = (id) => document.getElementById(id);
  const type = $('type'), pages = $('pages'), pagesOut = $('pagesOut'),
        timeline = $('timeline'), totalEl = $('total'), bar = $('bar'),
        cap = $('capNote'), cta = $('estCta');

  function calc() {
    let t = BASE;
    t += parseInt(type.value, 10) || 0;
    t += (parseInt(pages.value, 10) - 1) * 8; // $8 per extra page
    t += parseInt(timeline.value, 10) || 0;
    document.querySelectorAll('[data-addon]:checked').forEach(c => t += parseInt(c.value, 10));
    const raw = t;
    t = Math.max(MIN, Math.min(MAX, t));
    pagesOut.textContent = pages.value;
    // animate
    totalEl.style.transform = 'scale(1.08)';
    setTimeout(() => totalEl.style.transform = 'scale(1)', 180);
    totalEl.textContent = t;
    bar.style.width = ((t - MIN) / (MAX - MIN) * 100) + '%';
    cap.textContent = raw > MAX ? 'Capped at $200 — let’s scope it together.' :
                      raw < MIN ? 'Minimum is $50.' : 'Within range.';
    cta.href = 'contact.html?est=' + t;
  }

  ['change', 'input'].forEach(ev => document.getElementById('estimate').addEventListener(ev, calc));
  calc();
})();
