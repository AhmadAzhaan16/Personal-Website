// Sample data (replace with your own)
const skills = ['JavaScript', 'React', 'Node.js', 'Python', 'HTML', 'CSS', 'Git', 'AWS'];
const projects = [
    { name: 'Project 1', description: 'Brief description of project 1', image: 'https://via.placeholder.com/300x200' },
    { name: 'Project 2', description: 'Brief description of project 2', image: 'https://via.placeholder.com/300x200' },
    { name: 'Project 3', description: 'Brief description of project 3', image: 'https://via.placeholder.com/300x200' },
];

// Populate skills
const skillsList = document.getElementById('skills-list');
skills.forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    li.classList.add('skill');
    skillsList.appendChild(li);
});

// Populate projects
const projectsContainer = document.getElementById('projects-container');
projects.forEach(project => {
    const div = document.createElement('div');
    div.classList.add('project');
    div.innerHTML = `
        <img src="${project.image}" alt="${project.name}">
        <div class="project-content">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
        </div>
    `;
    projectsContainer.appendChild(div);
});

// Handle form submission
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});
