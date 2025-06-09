// Project data
const projects = [
  {
    title: 'Web Address Tracker',
    description: 'Find where your favorite sites are hosted!',
    tags: ['TypeScript', 'Leaflet', 'Tailwind'],
    git: 'https://github.com/dmfiel/ps-ip-address-tracker',
    link: 'https://fiel.us/ip-tracker',
    screenshot: 'src/screenshot-ip-tracker.png',
    alt: 'Details for the 1.1.1.1 IP address in Brisbane, Australia'
  },
  {
    title: 'Game of Life',
    description: 'The classic, enhanced in multiple ways',
    tags: ['JavaScript', 'HTML', 'CSS'],
    git: 'https://github.com/dmfiel/game-of-life',
    link: 'https://fiel.us/life/index.htm',
    screenshot: 'src/Screenshot-Life.png',
    alt: 'A 15x15 grid of cells with a glider and two flippers that will run continously'
  },
  {
    title: 'BMC Alliance Recruiting and Tracking',
    description:
      'Full lifecycle partner management from application to integrated solution marketing',
    tags: ['BMC Helix Platform', 'REST API', 'Java API', 'SQL Server', 'JSP'],
    git: 'https://github.com/dmfiel/bmc-art',
    link: 'https://developer.bmc.com/ar/apply-isv.jsp',
    screenshot: 'src/Screenshot-ISV.png',
    alt: ''
  },
  {
    title: 'BMC Partner Chatbot',
    description:
      'Using AI to help partners 24x7.<br/>(Note: this app is located in the BMC partner portal without public access.)',
    tags: ['BMC Helix Virtual Agent', 'IBM Watson'],
    git: 'https://github.com/dmfiel/bmc-partner-chatbot',
    link: 'https://www.bmc.com/it-solutions/bmc-helix-virtual-agent.html',
    screenshot: 'src/Screenshot-Chatbot.png',
    alt: ''
  }
];

// Render projects
function renderProjects() {
  const projectsGrid = document.getElementById('projects-grid');

  projects.forEach(project => {
    const projectCard = document.createElement('article');
    projectCard.className = 'project-card';

    projectCard.innerHTML = `
      <div class="project-header">
        <a href="${project.git}" target=_blank class="social-icon"
          aria-label="GitHub repository for ${project.title}">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
          <path
            d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
          />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg></a>
        <a href="${project.link}" target=_blank class="social-icon"
        aria-label="Live link for ${project.title}">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div class="project-screenshot">
        <a href="${project.link}" target=_blank class="screeshot-link"
        aria-label="Live link for ${project.title}">
          <img src="${project.screenshot}" alt="${project.alt}" 
           width=200px height=200px />
        </a>
      </div>
      <h3 class="project-title">${project.title}</h3>
      <p class="project-description">${project.description}</p>
      <div class="project-tags">
        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
      </div>
    `;

    projectsGrid.appendChild(projectCard);
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  renderProjects();
});
