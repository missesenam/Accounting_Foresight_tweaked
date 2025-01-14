const whyus = [
  {
    title: "Expertise You Can Trust",
    description:
      "Our team of qualified certified accountants and IT professionals bring a wealth of knowledge and experience to every client engagement.",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zM10 12h4m-2-2v4"
        />
      </svg>
    `,
  },
  {
    title: "Personalized Approach",
    description:
      "We understand that every client’s financial situation is unique, and we tailor our solutions to meet your specific goals with excellent customer service.",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zM10 12h4m-2-2v4"
        />
      </svg>
    `,
  },
  {
    title: "Technology-Driven Solutions",
    description:
      "We use the latest accounting tools and software to streamline processes and ensure accuracy.",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zM10 12h4m-2-2v4"
        />
      </svg>
    `,
  },
  {
    title: "Timely & Accurate Services",
    description:
      "Trust us to deliver efficient, error-free results to you as a client.",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zM10 12h4m-2-2v4"
        />
      </svg>
    `,
  },
  {
    title: "Cost-Effective",
    description:
      "Our services are designed to focus on clients, hence very cost-effective with excellent value for money.",
    icon: `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-10 w-10 text-red-400"
        viewBox="0 0 24 24"
        fill="#000000"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 2a8 8 0 110 16 8 8 0 010-16zM10 12h4m-2-2v4"
        />
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
            <div class="flex justify-center mb-4 text-blue-500">
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
            <!-- Button -->
            <div
              class="text-center absolute -bottom-5 left-1/2 transform -translate-x-1/2"
            >
              <a
                href=""
                class="inline-block px-3 py-2 bg-red-700 rounded-md hover:bg-red-300"
              >
                Learn More
              </a>
            </div>
          </div>
  `;

  whyChooseUsDiv.innerHTML += whychooseDiv;
});
