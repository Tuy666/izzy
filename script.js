const start = document.getElementById("start");
const stories = document.getElementById("stories");
const slot = document.getElementById("slot");
const final = document.getElementById("final");

const storyEls = document.querySelectorAll(".story");
const bars = document.querySelectorAll(".bar");

const reels = ["✨","🍀","💫","❤️"];
const r1 = document.getElementById("r1");
const r2 = document.getElementById("r2");
const r3 = document.getElementById("r3");

const slotText = document.getElementById("slotText");
const question = document.getElementById("question");
const buttons = document.getElementById("buttons");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let storyIndex = 0;
let spinInterval;

/* START */
start.addEventListener("click", () => {
  start.classList.add("hidden");
  stories.classList.remove("hidden");
});

/* STORIES */
stories.addEventListener("click", () => {
  if (storyIndex < storyEls.length - 1) {
    storyEls[storyIndex].classList.remove("active");
    bars[storyIndex].classList.remove("active");

    storyIndex++;

    storyEls[storyIndex].classList.add("active");
    bars[storyIndex].classList.add("active");
  } else {
    stories.classList.add("hidden");
    startSlot();
  }
});

/* SLOT */
function startSlot() {
  slot.classList.remove("hidden");

  spinInterval = setInterval(() => {
    r1.textContent = reels[Math.floor(Math.random()*reels.length)];
    r2.textContent = reels[Math.floor(Math.random()*reels.length)];
    r3.textContent = reels[Math.floor(Math.random()*reels.length)];
  }, 100);

  setTimeout(stopSlot, 2500);
}

function stopSlot() {
  clearInterval(spinInterval);

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
  noBtn.style.transform =
    `translate(${Math.random()*150 - 75}px, ${Math.random()*150 - 75}px)`;
});

/* SIM */
yesBtn.addEventListener("click", () => {
  slot.classList.add("hidden");
  final.classList.remove("hidden");

  if (navigator.vibrate) {
    navigator.vibrate([120, 60, 120]);
  }
});
