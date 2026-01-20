document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const count = 30; // количество снежинок

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.textContent = '❄';
    flake.className = 'snowflake';
    flake.style.left = Math.random() * 100 + 'vw';
    flake.style.fontSize = (Math.random() * 1.4 + 0.8) + 'em';
    flake.style.opacity = Math.random() * 0.6 + 0.4;
    flake.style.animationDuration = (Math.random() * 10 + 5) + 's';
    flake.style.animationDelay = Math.random() * 5 + 's';
    body.appendChild(flake);
  }
});
