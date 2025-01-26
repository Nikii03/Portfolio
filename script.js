// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects to project cards
document.querySelectorAll('.project').forEach(project => {
    project.addEventListener('mouseover', () => {
        project.style.transform = 'translateY(-5px)';
    });

    project.addEventListener('mouseleave', () => {
        project.style.transform = 'translateY(0)';
    });
});

