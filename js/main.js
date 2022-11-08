// Get Navbar toggle button
const toggleButton = document.getElementsByClassName("toggle")[0];

// Get Navbar Item
const navbarItems = document.getElementsByClassName("navbar-item");

// event when toggle button is clicked
toggleButton.addEventListener("click", () => {
  // transition navbar items
  for (let i = 0; i < navbarItems.length; i++) {
    navbarItems[i].classList.toggle("active");
  }
});
