// Create and append the Back to Top button
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.createElement("button");
  backToTopButton.id = "backToTop";
  backToTopButton.textContent = "Back to Top";
  backToTopButton.style.position = "fixed";
  backToTopButton.style.bottom = "20px";
  backToTopButton.style.right = "20px";
  backToTopButton.style.padding = "10px 15px";
  backToTopButton.style.backgroundColor = "#1e1e2f";
  backToTopButton.style.color = "#fff";
  backToTopButton.style.border = "none";
  backToTopButton.style.borderRadius = "5px";
  backToTopButton.style.cursor = "pointer";
  backToTopButton.style.display = "none";
  backToTopButton.style.zIndex = "1000";
  document.body.appendChild(backToTopButton);

  // Show/hide the button on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
