// Select elements
const fetchUserBtn = document.getElementById('fetchUserBtn');
const userDataDiv = document.getElementById('userData');

// Function to fetch user data
function fetchUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json()) // Parse JSON response
        .then(data => {
            const user = data.results[0];

            // Display user data
            userDataDiv.innerHTML = `
                <img src="${user.picture.large}" alt="User Image">
                <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
                <p><strong>Phone:</strong> ${user.phone}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            userDataDiv.innerHTML = '<p style="color:red;">Failed to load user data. Please try again.</p>';
        });
}

// Event listener for button click
fetchUserBtn.addEventListener('click', fetchUser);

// Fetch a user on page load
fetchUser();
