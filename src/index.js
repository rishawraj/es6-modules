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
  //
  home.addEventListener("click", () => {
    hometext();
  });
  //

  const menu = document.createElement("div");
  menu.classList.add("menu");
  menu.textContent = "menu";
  menu.addEventListener("click", () => {
    menutext();
  });

  const contact = document.createElement("div");
  contact.classList.add("contact");
  contact.textContent = "contact";
  contact.addEventListener("click", () => {
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
  main.textContent = "this is home!";
  return main;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.textContent = "copyright @ 2022 rishawraj";
  return footer;
}

function loadPage() {
  const content = document.getElementById("content");
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

loadPage();
