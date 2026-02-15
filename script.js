let current = 0;
const stories = document.querySelectorAll(".story");

function nextStory() {
  stories[current].classList.remove("active");
  current++;
  stories[current].classList.add("active");
}

const symbols = ["💙", "✨", "💍", "🔥", "🥰"];

function spin() {
  let spins = 15;
  const slots = [
    document.getElementById("slot1"),
    document.getElementById("slot2"),
    document.getElementById("slot3")
  ];

  const interval = setInterval(() => {
    slots.forEach(slot => {
      slot.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    });
    spins--;
    if (spins === 0) {
      clearInterval(interval);
      slots[0].textContent = "💙";
      slots[1].textContent = "💙";
      slots[2].textContent = "💙";
      setTimeout(nextStory, 800);
    }
  }, 120);
}

// BOTÃO NÃO FUGINDO
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", () => {
    noBtn.style.transform = `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px)`;
  });
}
