const testimonials = [
  {
    text: "Working with [Foresight Consult Ltd] has been a game-changer for our business. Their professionalism and expertise are unmatched.",
    name: "Eleanor Batel",
  },
  {
    text: "The team at [Foresight Consult Ltd] has simplified our finances and saved us significant time and money. Highly recommended!",
    name: "Liam Fraser",
  },
  {
    text: "Working with [Foresight Consult Ltd] has been a game-changer for our business. Their professionalism and expertise are unmatched.",
    name: "Ava Morales",
  },
  {
    text: "The team at [Foresight Consult Ltd] has simplified our finances and saved us significant time and money. Highly recommended!",
    name: "Sophie Reynolds",
  },
];

// Render Testimonials
const renderTestimonials = () => {
  return testimonials
    .map(
      (testimonial) =>
        `<div class="p-5 bg-white rounded-xl">
     <h1 class="capitalize font-bold text-lg text-white text-center bg-accent rounded-xl mb-4">Testimonial</h1>
      
      <p class="p-3 py-5 bg-background rounded">${testimonial.text}</p>
      
     <div class="flex items-center mt-4">
          <div class="flex-grow border-t border-gray-300"></div>
          <span class="px-4 uppercase bg-darkpurple rounded-xl text-wht">
            ${testimonial.name}</span
          >
          <div class="flex-grow border-t border-gray-300"></div>
        </div>

    </div>`
    )
    .join("");
};

// Assuming you're rendering this to an element with id "testimonialsContainer"
document.getElementById("testimonialsContainer").innerHTML =
  renderTestimonials();
