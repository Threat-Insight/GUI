document.addEventListener("DOMContentLoaded", function () {
  var dropdownBtn = document.querySelector(".dropdown-btn");
  var dropdown = document.querySelector(".dropdown");

  dropdownBtn.addEventListener("click", function () {
    dropdown.classList.toggle("active");
  });
});
