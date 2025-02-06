const refreshBtn = document.getElementById("refresh-btn");
const imageContainer = document.getElementById("image-container");
const randomImage = document.getElementById("random-image");
const loadingIndicator = document.getElementById("loading");

const API_URL = "https://api.api-ninjas.com/v1/randomimage";
const API_KEY = "W/hHnEgqtiI4IQKpCW4Pzw==u182v0RKBTc9l1Ea"; 

const fetchRandomImage = async () => {
    loadingIndicator.style.display = "block"; // Show loading state
    try {
        const response = await fetch(API_URL, {
            headers: { "X-Api-Key": API_KEY },
        });
        const data = await response.json();
        randomImage.src = data.image_url; // Set the image source to the URL received from the API
        loadingIndicator.style.display = "none"; // Hide loading state
    } catch (error) {
        console.error("Error fetching image:", error);
        loadingIndicator.style.display = "none";
        alert("Failed to load a new image. Please try again.");
    }
};

// Fetch a random image when the page loads
window.onload = fetchRandomImage;

// Refresh the image when the button is clicked
refreshBtn.onclick = fetchRandomImage;