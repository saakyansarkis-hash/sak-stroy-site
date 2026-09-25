document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('calcForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('clientName').value.trim();
  const service = document.getElementById('service').value;
  const details = document.getElementById('details').value.trim();
  const lines = [
    'Здравствуйте! Нужен расчёт по объекту.',
    name ? `Имя: ${name}` : '',
    `Услуга: ${service}`,
    details ? `Описание: ${details}` : ''
  ].filter(Boolean);
  const url = 'https://wa.me/79854558444?text=' + encodeURIComponent(lines.join('\n'));
  window.open(url, '_blank', 'noopener');
});
