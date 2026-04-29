document.addEventListener('DOMContentLoaded', () => {
  const yearTargets = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearTargets.forEach((node) => {
    node.textContent = String(currentYear);
  });

  const inquiryForm = document.getElementById('inquiry-form');
  const status = document.getElementById('form-status');

  if (inquiryForm && status) {
    inquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name')?.value.trim();

      status.textContent = name
        ? `Thank you, ${name}! Your inquiry has been received.`
        : 'Thank you! Your inquiry has been received.';

      inquiryForm.reset();
    });
  }
});
