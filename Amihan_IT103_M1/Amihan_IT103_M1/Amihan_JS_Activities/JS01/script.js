const countButton = document.getElementById("countButton");
const counter = document.getElementById("count");

let count = 0;

// Function to update the counter
const updateCounter = (operation) => {
    if (operation === 'increment') {
        count++;
    } else if (operation === 'decrement') {
        count--;
    }
    counter.innerHTML = count;
};

// Event listener for the button
countButton.addEventListener("click", () => {
    updateCounter('increment');
});