export default function contacttext() {
  const main = document.querySelector(".main");
  main.innerHTML = "";

  const contactContainer = document.createElement("div");
  contactContainer.classList.add("contact-container");

  const contactTitle = document.createElement("div");
  contactTitle.classList.add("contact-title");
  contactTitle.textContent = "Contact Us";

  const email = document.createElement("div");
  email.classList.add("email");
  email.textContent = "Email: myrestaruant@email.com";

  const phoneNumber = document.createElement("div");
  phoneNumber.classList.add("phone-number");
  phoneNumber.textContent = "Phone Number: 933 355 2223";

  const address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "Address: 4340 Main St, California, United States";

  contactContainer.appendChild(contactTitle);
  contactContainer.appendChild(email);
  contactContainer.appendChild(phoneNumber);
  contactContainer.appendChild(address);

  main.appendChild(contactContainer);
}
