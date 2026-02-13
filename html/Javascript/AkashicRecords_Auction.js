document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('#sectionNav .nav-link');
  const sections = document.querySelectorAll('.content-section');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.section;

      // Button styles
      buttons.forEach(b => {
        b.classList.remove('active', 'bg-primary', 'text-white');
        b.classList.add('text-secondary');
      });

      btn.classList.add('active', 'bg-primary', 'text-white');
      btn.classList.remove('text-secondary');

      // Section toggle
      sections.forEach(section => {
        section.classList.toggle('d-none', section.id !== target);
      });
    });
  });
});
