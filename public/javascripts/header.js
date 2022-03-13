app();

function app() {
  setHeader();
}

function setHeader() {
  const menu = document.querySelector(".header-links");
  const menuBtn = document.querySelector(".menu-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  menuBtn.onclick = () => {
    menu.classList.add("left-zero");
    menuBtn.classList.add("display-none");
  };
  cancelBtn.onclick = () => {
    menu.classList.remove("left-zero");
    menuBtn.classList.remove("display-none");
  };
}
