const stories = document.querySelectorAll('.story');
const progressFill = document.getElementById('progress-fill');

let current = 0;
const total = stories.length;

function showStory(index) {
  stories.forEach(s => s.classList.remove('active'));
  stories[index].classList.add('active');

  const percent = ((index + 1) / total) * 100;
  progressFill.style.width = percent + '%';

  if (navigator.vibrate) navigator.vibrate(15);

  // SLOT MACHINE
  if (index === 5) {
    setTimeout(() => {
      document.querySelectorAll('.reel').forEach(r => {
        r.style.animation = 'none';
      });
      document.querySelector('.slot-text').innerText =
        'Parece que tirei a sorte grande com você.';
      if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
    }, 1800);
  }
}

document.body.addEventListener('click', () => {
  if (current < total - 1) {
    current++;
    showStory(current);
  }
});

// DOUBLE TAP → CORAÇÃO 💙
document.body.addEventListener('dblclick', (e) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💙';
  heart.style.left = e.clientX + 'px';
  heart.style.top = e.clientY + 'px';
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 1200);
});

// SIM
document.getElementById('yes').addEventListener('click', (e) => {
  e.stopPropagation();
  document.getElementById('celebrate').style.opacity = 1;
  if (navigator.vibrate) navigator.vibrate([60, 120, 60]);
});

// NÃO → silêncio
document.getElementById('no').addEventListener('click', (e) => {
  e.stopPropagation();
});
