// Get the container element
let navContainer = document.getElementById("navmenu");

// Get all buttons with class="btn" inside the container
let navs = navContainer.getElementsByClassName("a");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}