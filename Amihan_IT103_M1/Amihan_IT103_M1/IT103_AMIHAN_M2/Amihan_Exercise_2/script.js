// JSON object representing a person
const person = {
    name: "Dianna",
    age: 20,
    hobbies: ["Reading", "Hiking", "Coding"]
};

// Convert JavaScript object to JSON string
const jsonString = JSON.stringify(person, null, 2);

// Select elements
const output = document.getElementById("output");
const showJsonBtn = document.getElementById("showJsonBtn");
const showFormattedBtn = document.getElementById("showFormattedBtn");

// Show JSON string when button is clicked
showJsonBtn.addEventListener("click", () => {
    output.textContent = jsonString;
});

// Show formatted data when button is clicked
showFormattedBtn.addEventListener("click", () => {
    output.textContent = `Name: ${person.name}\nAge: ${person.age}\nHobbies: ${person.hobbies.join(", ")}`;
});

// Log the JSON string to the console
console.log(jsonString);
