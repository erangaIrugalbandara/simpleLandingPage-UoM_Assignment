const navbar = document.querySelector(".nav-bar");

let lastScrollPosition = 0;

const scrollThreshold = 100;

function toggleNavbarVisibility() {
  const currentScrollPosition = window.scrollY;

  if (
    currentScrollPosition > lastScrollPosition &&
    currentScrollPosition > scrollThreshold
  ) {
    navbar.style.top = "-100px";
  } else {
    navbar.style.top = "0";
  }

  lastScrollPosition = currentScrollPosition;
}

window.addEventListener("scroll", toggleNavbarVisibility);

function joinClick() {
  let input = document.getElementById("sub-input").value;

  if (input === "") {
    alert("Please enter your email address.");
  } else {
    alert("You have successfully subscribed to our newsletter. Thank you!");
  }
}
