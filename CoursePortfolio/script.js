// Select all navigation links
const navLinks = document.querySelectorAll('nav a');

// Add an event listener to each link
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        // Remove 'active' class from all links
        navLinks.forEach(link => link.classList.remove('active'));

        // Add 'active' class to the clicked link
        e.target.classList.add('active');
    });
});