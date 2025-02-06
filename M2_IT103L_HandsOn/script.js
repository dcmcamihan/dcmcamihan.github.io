document.getElementById('loadImage').addEventListener('click', loadImage);

const API_URL = 'https://epic.gsfc.nasa.gov/api/natural'; 

async function loadImage() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        console.log(data); // Log the response to debug
        displayImage(data);
    } catch (error) {
        console.error('Error fetching image data:', error);
        alert('Failed to load image. Please try again later.');
    }
}

function displayImage(data) {
    if (data && data.length > 0) {
        const container = document.getElementById('image-container');
        container.innerHTML = ''; // Clear the container before displaying new images

        // Loop through all the image data and display each image
        data.forEach((imageData) => {
            const imageName = imageData.image;
            const imageDate = imageData.date;
            const imageCaption = imageData.caption;
            const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${imageDate.slice(0, 4)}/${imageDate.slice(5, 7)}/${imageDate.slice(8, 10)}/thumbs/${imageName}.jpg`;


            
            // Create a new div for each image
            const imageDiv = document.createElement('div');
            imageDiv.classList.add('image-item');

            imageDiv.innerHTML = `
                <h3>${imageCaption}</h3>
                <p>Date: ${imageDate}</p>
                <img src="${imageUrl}" alt="${imageCaption}" class="earth-image">
            `;
            container.appendChild(imageDiv);
        });
    } else {
        alert('No image data available at the moment.');
    }
}

