// Get the element by ID
const navbarElement = document.getElementById("navbar");

// Set the innerHTML of the element
navbarElement.innerHTML = `
  <div class="navbar w-[80%] mx-auto bg-background">
    <div class="flex-1">
      <a href="index.html" class=" text-xl w-[100%] sm:w-auto px-0 bg-red-400">
        <img src="./Iogo/logo.jpg" alt="" class="h-full max-w-full" />
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="services.html">Our Services</a></li>
      </ul>
    </div>
  </div>
`;
