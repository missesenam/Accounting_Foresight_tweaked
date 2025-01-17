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
];

const container = document.getElementById("services-containerslice");

services.forEach((service) => {
  const serviceCard = `
      <div class="rounded overflow-hidden shadow-lg mb-4">
        <div class="bg-accent p-2">
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
