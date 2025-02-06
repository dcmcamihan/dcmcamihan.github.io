const fetchButton = document.getElementById("fetch-button");
const randomImage = document.getElementById("random-image");
const loading = document.getElementById("loading");

// Function to fetch the random image from PepeBigotes API
const fetchRandomImage = async () => {
    loading.style.display = "block";  // Show loading indicator
    try {
        const response = await fetch("https://random-image-pepebigotes.vercel.app/api/random-image");
        const data = await response.json();

        if (data && data.url) {
            randomImage.src = data.url;  // Set the image source to the API's URL
            randomImage.alt = "Random Image";
        } else {
            randomImage.src = "";  // Clear the image if no URL is found
            randomImage.alt = "Error";
        }
    } catch (error) {
        console.error("Error fetching image:", error);
        randomImage.src = "";
        randomImage.alt = "Error";
    } finally {
        loading.style.display = "none";  // Hide loading indicator after fetching
    }
};

// Event listener to trigger the image fetch on button click
fetchButton.addEventListener("click", fetchRandomImage);

// Fetch an image when the page loads
window.onload = fetchRandomImage;