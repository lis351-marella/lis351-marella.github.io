document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('first-and-last-name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    const to = 'amarella@wisc.edu';
    const subject = encodeURIComponent(`New contact form message from ${name}`);
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Message:',
      message,
    ];
    const body = encodeURIComponent(bodyLines.join('\n'));
    const mailtoUrl = `mailto:${to}?subject=${subject}&body=${body}`;
    window.location.href = mailtoUrl;
  });
});