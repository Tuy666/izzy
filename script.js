const stories = document.querySelectorAll('.story');
const progress = document.querySelector('#progress');
let current = 0;

function updateStory() {
  stories.forEach(s => s.classList.remove('active'));
  stories[current].classList.add('active');
  progress.style.setProperty(
    '--p',
    `${((current + 1) / stories.length) * 100}%`
  );
  progress.querySelector('::after');
  progress.style.setProperty('--width', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('--after-width', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('width', '100%');
  progress.style.setProperty('--after', `${(current + 1) / stories.length * 100}%`);
  progress.style.cssText += `--after-width:${(current + 1) / stories.length * 100}%`;
  progress.style.setProperty('--progress', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('background-size', `${(current + 1) / stories.length * 100}% 100%`);
  progress.style.setProperty('--after-width', `${(current + 1) / stories.length * 100}%`);
  progress.querySelector(':after');
  progress.style.setProperty('--w', `${(current + 1) / stories.length * 100}%`);
  progress.querySelector('::after');
  progress.style.setProperty('--after-width', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('--width', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('--progress', `${(current + 1) / stories.length * 100}%`);
  progress.style.setProperty('background', `linear-gradient(to right, white ${(current + 1) / stories.length * 100}%, rgba(255,255,255,.3) 0%)`);

  if (navigator.vibrate) navigator.vibrate(15);

  if (current === 5) {
    setTimeout(() => {
      document.querySelectorAll('.reel').forEach(r => r.style.animation = 'none');
      document.querySelector('.slot-text').innerText =
        'Parece que tirei a sorte grande com você.';
      if (navigator.vibrate) navigator.vibrate([40, 60, 40]);
    }, 1800);
  }
}

document.body.addEventListener('click', () => {
  if (current < stories.length - 1) {
    current++;
    updateStory();
  }
});

document.body.addEventListener('dblclick', (e) => {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerText = '💙';
  heart.style.left = `${e
