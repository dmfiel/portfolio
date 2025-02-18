// Project data
const projects = [
  {
    title: 'BMC Alliance Recruiting and Tracking',
    description:
      'Full lifecycle partner management from application to integrated solution marketing',
    tags: ['BMC Helix', 'REST / Java API', 'SQL Server'],
    link: 'https://developer.bmc.com/ar/apply-isv.jsp',
    screenshot: 'src/Screenshot-ISV.png'
  },
  {
    title: 'Game of Life',
    description: 'The classic, enhanced in multiple ways',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'http://fiel.us/life/index.htm',
    screenshot: 'src/Screenshot-Life.png'
  },
  {
    title: 'BMC Partner Chatbot',
    description:
      'Using AI to help partners 24x7. Located in the BMC partner portal with restricted access',
    tags: ['BMC Helix Virtual Agent', 'IBM Watson'],
    link: 'https://www.bmc.com/it-solutions/bmc-helix-virtual-agent.html',
    screenshot: 'src/Screenshot-Chatbot.png'
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
      <a href="${project.link}" target=_blank class="social-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg></a>
        <a href="${project.link}" target=_blank class="social-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
      <div class="project-screenshot">
        <a href="${project.link}" target=_blank class="social-icon">
          <img src="${project.screenshot}" width=200px height=200px /></a></div>
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
