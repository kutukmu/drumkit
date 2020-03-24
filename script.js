function playSound(e) {
  const keys = document.querySelectorAll(".key");
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running all together
  audio.currentTime = 0; //
  audio.play();

  key.classList.add("playing");

  function removeClass() {
    this.classList.remove("playing");
  }

  keys.forEach(n => {
    n.addEventListener("transitionend", removeClass);
  });
}

window.addEventListener("keydown", playSound);
