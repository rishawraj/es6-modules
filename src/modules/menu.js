export default function menutext() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const menuContainer = document.createElement("div");
  menuContainer.classList.add("menu-container");

  const menuTitle = document.createElement("div");
  menuTitle.classList.add("menu-title");
  menuTitle.textContent = "Our Menu";

  const menuItems = document.createElement("div");
  menuItems.classList.add("menu-items");

  const menuItem1 = document.createElement("div");
  menuItem1.classList.add("menu-item");
  menuItem1.textContent = "pizza";

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  menuItem2.textContent = "burger";

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  menuItem3.textContent = "coke";

  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");
  menuItem4.textContent = "smoothie";

  menuItems.appendChild(menuItem1);
  menuItems.appendChild(menuItem2);
  menuItems.appendChild(menuItem3);
  menuItems.appendChild(menuItem4);

  menuContainer.appendChild(menuTitle);
  menuContainer.appendChild(menuItems);

  // return menuContainer;
  main.appendChild(menuContainer);
}
