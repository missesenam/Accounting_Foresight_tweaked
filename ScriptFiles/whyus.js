const whyus = [
  {
    title: "Expertise You Can Trust",
    description:
      "Our team of qualified certified accountants and IT professionals bring a wealth of knowledge and experience to every client engagement.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="50" height="50">
  <g fill="none" stroke="#1a1565" stroke-width="4">
    <path d="M50 10 L70 30 L70 60 L50 90 L30 60 L30 30 Z"/>
    <path d="M35 45 L45 55 L65 35"/>
  </g>
</svg>
    `,
  },
  {
    title: "Personalized Approach",
    description:
      "We understand that every client’s financial situation is unique, and we tailor our solutions to meet your specific goals with excellent customer service.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
  <circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="none"/>
  <path d="M32 16c4 0 7 3 7 7s-3 7-7 7-7-3-7-7 3-7 7-7m0 14c8 0 12 4 12 4s-4 4-12 4-12-4-12-4 4-4 12-4z" fill="black"/>
</svg>

    `,
  },
  {
    title: "Technology-Driven Solutions",
    description:
      "We use the latest accounting tools and software to streamline processes and ensure accuracy.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
  <rect x="10" y="10" width="44" height="44" rx="5" ry="5" stroke="black" stroke-width="2" fill="none"/>
  <path d="M22 22h20v20H22z" fill="black"/>
  <circle cx="32" cy="32" r="6" fill="white"/>
</svg>

    `,
  },
  {
    title: "Timely & Accurate Services",
    description:
      "Trust us to deliver efficient, error-free results to you as a client.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
  <circle cx="32" cy="32" r="30" stroke="black" stroke-width="2" fill="none"/>
  <line x1="32" y1="32" x2="32" y2="16" stroke="black" stroke-width="2"/>
  <line x1="32" y1="32" x2="46" y2="32" stroke="black" stroke-width="2"/>
</svg>

    `,
  },
  {
    title: "Cost-Effective",
    description:
      "Our services are designed to focus on clients, hence very cost-effective with excellent value for money.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
  <path d="M32 2c16.5 0 30 13.5 30 30s-13.5 30-30 30S2 48.5 2 32 15.5 2 32 2z" stroke="black" stroke-width="2" fill="none"/>
  <path d="M42 18c-8-8-22-8-30 0 6 6 6 14 0 20 8 8 22 8 30 0-6-6-6-14 0-20z" fill="black"/>
</svg>

    `,
  },
  {
    title: "Cost-Effective",
    description:
      "Our services are designed to focus on clients, hence very cost-effective with excellent value for money.",
    icon: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="50" height="50">
  <path d="M32 2c16.5 0 30 13.5 30 30s-13.5 30-30 30S2 48.5 2 32 15.5 2 32 2z" stroke="black" stroke-width="2" fill="none"/>
  <path d="M42 18c-8-8-22-8-30 0 6 6 6 14 0 20 8 8 22 8 30 0-6-6-6-14 0-20z" fill="black"/>
</svg>

    `,
  },
];

const whyChooseUsDiv = document.getElementById("whychooseus");

whyus.forEach((whychoose) => {
  const whychooseDiv = `
    <div
            class="bg-white rounded-lg shadow-lg border-2 border-primary10 p-6 relative"
          >
            <!-- Icon -->
            <div class="flex justify-center mb-4">
              ${whychoose.icon}
            </div>
            <!-- Title -->
            <h3 class="text-xl font-semibold text-gray-800 text-center mb-2">
              ${whychoose.title}
            </h3>
            <!-- Text -->
            <p class="text-gray-600 text-center mb-6">
              ${whychoose.description}
            </p>
           
          </div>
  `;

  whyChooseUsDiv.innerHTML += whychooseDiv;
});
