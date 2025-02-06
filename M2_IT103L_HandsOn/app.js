// API key and base URL for AviationStack API
const API_KEY = 'af22e8637fbcd6b53d18a4f02ad07981';
const API_URL = 'http://api.aviationstack.com/v1/flights';

// Elements from the HTML
const flightInput = document.getElementById('flight-input');
const trackButton = document.getElementById('track-button');
const flightDetailsContainer = document.getElementById('flight-details-container');
const loadingIndicator = document.getElementById('loading');
const flightInfoContainer = document.getElementById('flight-info');

// Function to fetch flight data from AviationStack API
async function fetchFlightData(flightNumber) {
    const url = `${API_URL}?access_key=${API_KEY}&flight_iata=${flightNumber}`;

    try {
        loadingIndicator.style.display = 'block';  // Show loading indicator
        flightDetailsContainer.style.display = 'none';  // Hide details section until data is fetched

        const response = await fetch(url);
        const data = await response.json();

        if (data.data && data.data.length > 0) {
            const flightData = data.data[0];
            displayFlightData(flightData);
        } else {
            flightInfoContainer.innerHTML = '<p>No data found for this flight number.</p>';
        }
    } catch (error) {
        console.error('Error fetching flight data:', error);
        flightInfoContainer.innerHTML = '<p>Error fetching flight data. Please try again later.</p>';
    } finally {
        loadingIndicator.style.display = 'none';  // Hide loading indicator
        flightDetailsContainer.style.display = 'block';  // Show details section
    }
}

// Function to display flight data on the page
function displayFlightData(flightData) {
    const { flight, departure, arrival, airline } = flightData;

    flightInfoContainer.innerHTML = `
        <div class="flight-info-item">
            <span>Flight Number:</span> ${flight.iata}
        </div>
        <div class="flight-info-item">
            <span>Airline:</span> ${airline.name}
        </div>
        <div class="flight-info-item">
            <span>Departure:</span> ${departure.airport} (${departure.estimated}) 
        </div>
        <div class="flight-info-item">
            <span>Arrival:</span> ${arrival.airport} (${arrival.estimated}) 
        </div>
        <div class="flight-info-item">
            <span>Flight Status:</span> ${flight.status}
        </div>
    `;
}

// Event listener for button click
trackButton.addEventListener('click', () => {
    const flightNumber = flightInput.value.trim();
    if (flightNumber) {
        fetchFlightData(flightNumber);
    } else {
        alert('Please enter a valid flight number.');
    }
});