document.addEventListener("mousemove", (e) => {
  updateGradient(e.clientX, e.clientY);
});

const iframe = document.getElementById("blob");

iframe.addEventListener("mousemove", (e) => {
  const rect = iframe.getBoundingClientRect();
  const mouseX = e.clientX - rect.left;
  const mouseY = e.clientY - rect.top;

  updateGradient(mouseX + rect.left, mouseY + rect.top);
});

function updateGradient(mouseX, mouseY) {
  const gradientCenterX = (mouseX / window.innerWidth) * 100;
  const gradientCenterY = (mouseY / window.innerHeight) * 100;

  const revealedArea = document.querySelector(".spotlight");
  revealedArea.style.background = `radial-gradient(
      circle 300px at ${gradientCenterX}% ${gradientCenterY}%,
      transparent 10%,
      rgba(0, 0, 0, 0.98)
    )`;
}
