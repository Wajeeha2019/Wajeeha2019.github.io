const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");

window.addEventListener("load", function () {
  setTimeout(function () {
    loginPopup.classList.add("show");
  }, 250);
});

close.addEventListener("click", function () {
  loginPopup.classList.remove("show");
});
document
  .getElementById("loginmodallink")
  .addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "block";
  });
document
  .getElementById("loginmodallinkclose")
  .addEventListener("click", function () {
    document.getElementById("loginModal").style.display = "none";
  });
