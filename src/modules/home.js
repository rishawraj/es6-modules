export default function hometext() {
  const main = document.querySelector(".main");
  main.innerHTML = "";
  // main.textContent = "this is home page !";
  const intro = document.createElement("div");
  intro.classList.add("intro");

  const para1 = document.createElement("div");
  para1.classList.add("para");
  para1.textContent = "Hello, Welcome to my restaraunt!!";

  const para2 = document.createElement("div");
  para2.classList.add("para");
  para2.textContent = "Meet our chef!!";

  const image = document.createElement("div");
  image.classList.add("image");

  const para3 = document.createElement("div");
  para3.classList.add("para");
  para3.textContent = "serving with passion since 1988";

  intro.appendChild(para1);
  intro.appendChild(para2);
  intro.appendChild(image);
  intro.appendChild(para3);

  main.appendChild(intro);
}
