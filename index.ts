const clays = document.querySelectorAll(".clay");
const buttons = document.querySelectorAll(".button");

const className = {
  clay: "clay",
  box: "box",
};

const addControls = () => {
  clays.forEach((clay) => {
    clay.classList.toggle(className.clay);
    clay.classList.toggle(className.box);
  });
};

buttons.forEach((button) => {
  (button as HTMLButtonElement).onclick = addControls;
});
