// Get the element by ID
const navbarElement = document.getElementById("navbar");

// Set the innerHTML of the element
navbarElement.innerHTML = `
  <div class="navbar md:w-[80%] mx-auto bg-background">
    <div class="flex-1">
      <a href="index.html" class=" text-xl w-[100%] sm:w-auto px-0">
        <img src="./Iogo/Foresight.png" alt="" class="h-[40px]  max-w-full" />
      </a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="services.html"> Services</a></li>
        <li><a href="contact.html"> Contact</a></li>
      </ul>
    </div>
  </div>
`;
// when src="./Iogo/Foresight.png"
// class="h-full max-w-full
