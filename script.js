const toggle = document.querySelector(".switch-btn");
const dark = document.querySelector(".light");
const btn = document.querySelector(".switch-btn");

const changeTheme = () => {
    dark.classList.toggle("dark");
    btn.classList.toggle("switch-btn-dark")
}