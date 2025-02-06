// Select elements
const button = document.getElementById('changeTextBtn');
const text = document.getElementById('text');
const body = document.body;

// Track current theme
let isDarkMode = false;

// Event listener for button click
button.addEventListener('click', function() {
    // Change text
    text.textContent = 'You clicked the button!';

    // Toggle between light and dark mode
    if (isDarkMode) {
        body.style.backgroundColor = '#f4f4f4';
        body.style.color = '#333';
        button.style.backgroundColor = '#007bff';
    } else {
        body.style.backgroundColor = '#333';
        body.style.color = '#fff';
        button.style.backgroundColor = '#ff9800';
    }

    isDarkMode = !isDarkMode;
});