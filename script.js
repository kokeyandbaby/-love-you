const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * (window.innerWidth - 100));
  const y = Math.floor(Math.random() * (window.innerHeight - 100));
  noBtn.style.position = "absolute";
  noBtn.style.left = ${x}px;
  noBtn.style.top = ${y}px;
});

function showForgiveness() {
  document.getElementById("result").style.display = "block";
}
