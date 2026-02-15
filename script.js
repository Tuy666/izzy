const start = document.getElementById("start");
const stories = document.getElementById("stories");
const slot = document.getElementById("slot");
const final = document.getElementById("final");

const storyEls = document.querySelectorAll(".story");
const bars = document.querySelectorAll(".bar");

const reels = ["✨", "🍀", "💫", "❤️"];
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

const slotText = document.getElementById("slotText");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");
const noBtn = document.getElementById("noBtn");

let index = 0;
let spinning;

/* START */
start.onclick = () => {
  start.classList.add("hidden");
  stories.classList.remove("hidden");
};

/* STORIES */
stories.onclick = () => {
  if (index < storyEls.length - 1) {
    storyEls[index].classList.remove("active");
    bars[index].classList.remove("active");
    index++;
    storyEls[index].classList.add("active");
    bars[index].classList.add("active");
  } else {
    stories.classList.add("hidden");
    startSlot();
  }
};

/* SLOT */
function startSlot() {
  slot.classList.remove("hidden");

  spinning = setInterval(() => {
    r1.textContent = reels[Math.floor(Math.random()*reels.length)];
    r2.textContent = reels[Math.floor(Math.random()*reels.length)];
    r3.textContent = reels[Math.floor(Math.random()*reels.length)];
  }, 100);

  setTimeout(stopSlot, 2500);
}

function stopSlot() {
  clearInterval(spinning);
  r1.textContent = "❤️";
  r2.textContent = "❤️";
  r3.textContent = "❤️";

  slotText.classList.remove("hidden");

  setTimeout(() => {
    question.classList.remove("hidden");
    buttons.classList.remove("hidden");
  }, 1200);
}

/* NÃO FOGE */
noBtn.addEventListener("touchstart", () => {
  noBtn.style.transform = `translate(${Math.random()*200 - 100}px, ${Math.random()*200 - 100}px)`;
});

/* SIM */
function yesClicked() {
  slot.classList.add("hidden");
  final.classList.remove("hidden");

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}
