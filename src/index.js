import hometext from "./modules/home";
import menutext from "./modules/menu";
import contacttext from "./modules/contact";

function createHeader() {
  const header = document.createElement("div");
  header.classList.add("header");

  const logo = document.createElement("div");
  logo.classList.add("logo");
  logo.textContent = "My Restaraunt";

  const navbar = document.createElement("div");
  navbar.classList.add("navbar");

  const home = document.createElement("div");
  home.classList.add("home");
  home.textContent = "home";

  home.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(e.target);
    hometext();
  });

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "menu";
  menu.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(e.target);
    menutext();
  });

  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "contact";
  contact.addEventListener("click", (e) => {
    if (e.target.classList.contains("active")) return;
    setActive(e.target);
    contacttext();
  });

  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  header.appendChild(logo);
  header.appendChild(navbar);

  return header;
}

function createMain() {
  const main = document.createElement("div");
  main.classList.add("main");
  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "copyright @ 2022 rishawraj";
  return footer;
}

function setActive(item) {
  // menu home conatact remove active all
  let x = item.parentElement.childNodes;
  console.log(x);
  x.forEach((element) => {
    element.classList.remove("active");
  });

  item.classList.add("active");
}

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

loadPage();
hometext();
// setActive();
