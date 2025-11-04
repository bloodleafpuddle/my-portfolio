document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("click", e => {
    if (e.target.classList.contains("toggle-btn")) {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });
});