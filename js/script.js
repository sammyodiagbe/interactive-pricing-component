const progressBar = document.querySelector("#progress");
const rangeSlider = document.querySelector("#range-slider");
const planToggle = document.querySelector("#choose-plan");
const planToggleParent = document.querySelector("#toggle-parent");
rangeSlider.addEventListener("input", (event) => {
  progressBar.value = event.target.value;
});

planToggle.addEventListener("change", (event) => {
  const target = event.target;
  if (target.checked) {
    planToggleParent.classList.remove("checked");
  } else {
    planToggleParent.classList.add("checked");
  }
});
