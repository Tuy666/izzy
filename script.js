const start = document.getElementById("startScreen");
const stories = document.getElementById("stories");
const storyEls = document.querySelectorAll(".story");
const bars = document.querySelectorAll(".bar");
const celebrate = document.getElementById("celebrate");

let index = 0;

/* START */
start.addEventListener("click", () => {
  start.classList.add("hidden");
  stories.classList.remove("hidden");
});

/* AVANÇAR STORY */
stories.addEventListener("click", () => {
  if (index < storyEls.length - 1) {
    storyEls[index].classList.remove("active");
    bars[index].classList.remove("active");
    index++;
    storyEls[index].classList.add("active");
    bars[index].classList.add("active");
  }
});

/* SIM */
function yesClicked() {
  stories.classList.add("hidden");
  celebrate.classList.remove("hidden");

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }
}
