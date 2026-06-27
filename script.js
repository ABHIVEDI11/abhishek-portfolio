// ============================================================
// Abhishek Dwivedi — Portfolio JS
// Mobile nav, footer year, mailto contact form, and a
// fallback for certificate thumbnails that haven't been
// uploaded yet (shows an emoji icon instead of a broken image).
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ---- mobile menu toggle ----
  var menuToggle = document.getElementById('menuToggle');
  var navlinks = document.getElementById('navlinks');

  if (menuToggle && navlinks) {
    menuToggle.addEventListener('click', function () {
      var isOpen = navlinks.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    navlinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navlinks.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- contact form -> opens mail client with prefilled message ----
  var contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var name = document.getElementById('name').value.trim();
      var email = document.getElementById('email').value.trim();
      var message = document.getElementById('message').value.trim();

      var subject = encodeURIComponent('Portfolio inquiry from ' + name);
      var body = encodeURIComponent(message + '\n\n— ' + name + ' (' + email + ')');

      window.location.href =
        'mailto:abhishekdwivedi7754@gmail.com?subject=' + subject + '&body=' + body;
    });
  }

  // ---- certificate thumbnails: fall back to an emoji icon ----
  // if the preview image (certificates/<name>.png) doesn't exist yet.
  // Also, if the linked "full file" (the href, usually a .pdf) is
  // missing, the link just opens nothing useful - so we disable the
  // click in that case too, and label the card clearly.
  var certCards = document.querySelectorAll('[data-cert]');
  certCards.forEach(function (card) {
    var img = card.querySelector('[data-cert-img]');
    var thumb = card.querySelector('.cert-thumb');

    if (img) {
      img.addEventListener('error', function () {
        thumb.classList.add('no-preview');
      }, { once: true });

      // if it's already broken by the time JS runs, error already fired
      if (img.complete && img.naturalWidth === 0) {
        thumb.classList.add('no-preview');
      }
    }

    // check whether the actual linked file (PDF/image) exists;
    // if not, prevent the click and tag the card visually
    var fullFileUrl = card.getAttribute('href');
    fetch(fullFileUrl, { method: 'HEAD' })
      .then(function (res) {
        if (!res.ok) markNoFile(card);
      })
      .catch(function () {
        markNoFile(card);
      });
  });

  function markNoFile(card) {
    card.style.cursor = 'default';
    card.removeAttribute('target');
    card.addEventListener('click', function (e) {
      e.preventDefault();
    });
  }

});
