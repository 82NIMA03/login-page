const wrapper = document.querySelector(".wrapper");
const loginLink = document.querySelector(".login-link");
const btnPopup = document.querySelector(".btnlogin-popup");
const closeBtn = document.querySelector(".icon-close");
const registerLink = document.querySelector(".register-link");
registerLink.addEventListener("click", () => {
  wrapper.classList.add("active");
});
loginLink.addEventListener("click", () => {
  wrapper.classList.remove("active");
});

btnPopup.addEventListener("click", () => {
  wrapper.classList.add("active-popup");
});
closeBtn.addEventListener("click", () => {
  wrapper.classList.remove("active-popup");
});
