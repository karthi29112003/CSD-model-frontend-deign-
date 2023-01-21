document.getElementById("party").style.display = "none";
let i = 1;
const pop = document.getElementById("popbutton");
pop.addEventListener("click", () => {
  if (i === 1) {
    document.getElementById("party").style.display = "flex";
    pop.textContent = "Stop vibe";
    i = 0;
  } else if (i === 0) {
    document.getElementById("party").style.display = "none";
    pop.textContent = "Let's vibe";
    i = 1;
  }
});

/////

const letsgo = document.getElementById("letsgo");
letsgo.addEventListener("click", () => {
  window.location.href = "/CSD-model-frontend-deign-/page1/page2/index2.html";
});
