const industries = [
  {
    title: "Small and Medium-Sized Businesses",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M3 12l2.25-2.25L6 12l2.25-2.25L9 12l2.25-2.25L12 12l2.25-2.25L15 12l2.25-2.25L18 12l2.25-2.25L21 12"></path></svg>`,
  },
  {
    title: "Financial Services including Insurance",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4C8.13 4 5 7.13 5 10v7c0 2.87 3.13 5 7 5s7-2.13 7-5V10c0-2.87-3.13-5-7-5zm-2 9V10c0-1.1.9-2 2-2s2 .9 2 2v3h3v2h-5z"></path></svg>`,
  },
  {
    title: "Information Communication Technology",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M20 4h-16c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.89 2 1.99 2h16c1.1 0 1.99-.9 1.99-2L21 6c0-1.1-.89-2-1.99-2zm-8 14H9v-4h3v4zm0-6H9V6h3v6z"></path></svg>`,
  },
  {
    title: "Not-for-Profit Organizations",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M7 2H5v20h2V2zm4 16H9v-4h2v4zm0-6H9V6h2v6zm6 2h-2v-4h2v4zm0-6h-2V6h2v6z"></path></svg>`,
  },
  {
    title: "Startups",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 0l8 24h-16l8-24zm0 16l-4-8h8l-4 8z"></path></svg>`,
  },
  {
    title: "Healthcare",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M19 3H5c-1.1 0-1.99.9-1.99 2L3 19c0 1.1.89 2 1.99 2h16c1.1 0 1.99-.9 1.99-2L21 5c0-1.1-.89-2-1.99-2zm-8 12h-2v-4h2v4zm0-6h-2V6h2v3z"></path></svg>`,
  },
  {
    title: "Real Estate",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4L3 12h3v8h12v-8h3z"></path></svg>`,
  },
  {
    title: "Professional Support Service Entities in the Energy Sector",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4c-1.1 0-1.99.9-1.99 2L10 18c0 1.1.89 2 1.99 2h2c1.1 0 1.99-.9 1.99-2L14 6c0-1.1-.89-2-1.99-2z"></path></svg>`,
  },
  {
    title: "Hospitality",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M19 4H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.89 2 1.99 2h16c1.1 0 1.99-.9 1.99-2L21 6c0-1.1-.89-2-1.99-2zm-8 16H9v-4h3v4zm0-6H9V6h3v6z"></path></svg>`,
  },
  {
    title: "Agriculture",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M19 4H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.89 2 1.99 2h16c1.1 0 1.99-.9 1.99-2L21 6c0-1.1-.89-2-1.99-2zm-8 16H9v-4h3v4zm0-6H9V6h3v6z"></path></svg>`,
  },
  {
    title: "Retail and E-commerce",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4C8.13 4 5 7.13 5 10v7c0 2.87 3.13 5 7 5s7-2.13 7-5V10c0-2.87-3.13-5-7-5zm-2 9V10c0-1.1.9-2 2-2s2 .9 2 2v3h3v2h-5z"></path></svg>`,
  },
  {
    title: "Manufacturing",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4c-1.1 0-1.99.9-1.99 2L10 18c0 1.1.89 2 1.99 2h2c1.1 0 1.99-.9 1.99-2L14 6c0-1.1-.89-2-1.99-2z"></path></svg>`,
  },
  {
    title: "Public Sector Entities",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M12 4C8.13 4 5 7.13 5 10v7c0 2.87 3.13 5 7 5s7-2.13 7-5V10c0-2.87-3.13-5-7-5zm-2 9V10c0-1.1.9-2 2-2s2 .9 2 2v3h3v2h-5z"></path></svg>`,
  },
  {
    title: "Projects",
    svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="white" d="M19 4H5c-1.1 0-1.99.9-1.99 2L3 18c0 1.1.89 2 1.99 2h16c1.1 0 1.99-.9 1.99-2L21 6c0-1.1-.89-2-1.99-2zm-8 16H9v-4h3v4zm0-6H9V6h3v6z"></path></svg>`,
  },
];

const indcontainer = document.getElementById("industry-container");

industries.forEach((industry) => {
  const industryCard = `
      <div
  class="text-center font-medium bg-white border lg:border-none lg:bg-transparent p-2"
>
  <div class="flex justify-center mb-2">
    <div class="rounded-full p-3 bg-accent">
    ${industry.svg}
    </div>
  </div>
  <div class="font-medium">
    ${industry.title}
  </div>
</div>

    `;
  indcontainer.innerHTML += industryCard;
});
