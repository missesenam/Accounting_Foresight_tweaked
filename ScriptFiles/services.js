const services = [
  {
    title: "Finance and Accounting Advisory Services",
    description:
      "Our qualified team of accountants and finance professionals provide expert guidance on financial planning, forecasting, and budgeting to our clients.",
    icon: "fa-calculator",
  },
  {
    title: "Account Management",
    description:
      "We manage different portfolios of accounts for clients to ensure financial reporting accuracy, timely decision making, and compliance.",
    icon: "fa-solid fa-briefcase",
  },
  {
    title: "IT Solutions",
    description:
      "Our IT professionals provide innovative solutions to reduce cost, improve efficiency and streamline financial processes.",
    icon: "fa-solid fa-laptop-code",
  },
  {
    title: "Business Consultancy",
    description:
      "We offer business advice underpinned by strategic growth to clients thereby helping them to mitigate risks, and identify opportunities to achieve their goals.",
    icon: "fa-solid fa-chalkboard-teacher",
  },
  {
    title: "Auditing & Assurance",
    description:
      "Ensure accuracy and transparency in financial reports with our thorough auditing services.",
    icon: "fa-solid fa-search",
  },
  {
    title: "Tax Preparation & Planning",
    description:
      "Maximize tax savings and staying compliant with our meticulous tax preparation and strategic planning expertise.",
    icon: "fa-solid fa-file-invoice-dollar",
  },
  {
    title: "Payroll Services",
    description:
      "Simplify your payroll process with accurate and timely payroll management.",
    icon: "fa-solid fa-users-cog",
  },
];

const container = document.getElementById("services-container");

services.forEach((service) => {
  const serviceCard = `
      <div class="rounded overflow-hidden shadow-lg mb-4">
        <div class="bg-secondary p-2">
          <div class="p-2 rounded">
            <i class="fas ${service.icon} text-white"></i> 
          </div>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">${service.title}</div>
          <p class="text-gray-700 text-base">${service.description}</p>
        </div>
      </div>
    `;
  container.innerHTML += serviceCard;
});

// <div class="service-card col-span-1 md:col-span-3 lg:col-span-1">
//   <div class="bg-orange-500 p-4">
//     <i class="fas ${centerService.icon} w-6 h-6 text-white"></i>
//   </div>
//   <div class="px-6 py-4">
//     <div class="font-bold text-xl mb-2">${centerService.title}</div>
//     <p class="text-gray-700 text-base">${centerService.description}</p>
//   </div>
// </div>
