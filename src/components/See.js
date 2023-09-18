document.addEventListener('DOMContentLoaded', function () {
    const seeMoreButton = document.getElementById('see-more-button');
    const projectsContainer = document.querySelector('.projects-container');
  
    // Array de projetos adicionais
    const additionalProjects = [
      '<div class="project">Project 4</div>',
      '<div class="project">Project 5</div>',
      // Adicione mais projetos conforme necessário
    ];
  
    // Função para adicionar projetos adicionais
    function addAdditionalProjects() {
      additionalProjects.forEach((projectHTML) => {
        const projectElement = document.createElement('div');
        projectElement.classList.add('project');
        projectElement.innerHTML = projectHTML;
        projectsContainer.appendChild(projectElement);
      });
    }
  
    // Adicionar ou remover projetos quando o botão é clicado
    seeMoreButton.addEventListener('click', function () {
      if (!seeMoreButton.classList.contains('expanded')) {
        addAdditionalProjects();
        seeMoreButton.classList.add('expanded');
        seeMoreButton.textContent = 'See Less Projects';
      } else {
        const additionalProjectElements = projectsContainer.querySelectorAll('.project');
        additionalProjectElements.forEach((projectElement) => {
          projectsContainer.removeChild(projectElement);
        });
        seeMoreButton.classList.remove('expanded');
        seeMoreButton.textContent = 'See More Projects';
      }
    });
  });
  