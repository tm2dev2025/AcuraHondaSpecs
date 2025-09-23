// Simple hamburger toggle: toggles .nav-open on the header
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.getElementById('hamburger-btn');
  if (!btn) return;
  btn.addEventListener('click', function () {
    var header = document.querySelector('header');
    header.classList.toggle('nav-open');
    // toggle aria-expanded for accessibility
    var expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!expanded).toString());
  });
});
