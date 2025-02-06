const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyQuoteBtn = document.getElementById('copyQuoteBtn');
const twitterShareBtn = document.getElementById('twitterShareBtn');

// Function to fetch a random quote
function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;

            updateTwitterShare(randomQuote.quote, randomQuote.author);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

// Function to copy quote to clipboard
function copyQuote() {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Error copying quote:', err);
    });
}

// Function to update Twitter share link
function updateTwitterShare(quote, author) {
    const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
    twitterShareBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

// Event listeners
newQuoteBtn.addEventListener('click', fetchQuote);
copyQuoteBtn.addEventListener('click', copyQuote);

// Fetch a quote when the page loads
fetchQuote();

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const copyQuoteBtn = document.getElementById('copyQuoteBtn');
const twitterShareBtn = document.getElementById('twitterShareBtn');

// Function to fetch a random quote
function fetchQuote() {
    quoteElement.textContent = 'Loading quote...';
    authorElement.textContent = '';

    fetch('https://dummyjson.com/quotes')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const randomIndex = Math.floor(Math.random() * data.quotes.length);
            const randomQuote = data.quotes[randomIndex];

            quoteElement.textContent = `"${randomQuote.quote}"`;
            authorElement.textContent = `- ${randomQuote.author}`;

            updateTwitterShare(randomQuote.quote, randomQuote.author);
        })
        .catch(error => {
            console.error('Error fetching quote:', error);
            quoteElement.textContent = 'Failed to load quote. Please try again.';
            authorElement.textContent = '';
        });
}

// Function to copy quote to clipboard
function copyQuote() {
    const quoteText = `${quoteElement.textContent} ${authorElement.textContent}`;
    navigator.clipboard.writeText(quoteText).then(() => {
        alert('Quote copied to clipboard!');
    }).catch(err => {
        console.error('Error copying quote:', err);
    });
}

// Function to update Twitter share link
function updateTwitterShare(quote, author) {
    const tweetText = encodeURIComponent(`"${quote}" - ${author}`);
    twitterShareBtn.href = `https://twitter.com/intent/tweet?text=${tweetText}`;
}

// Event listeners
newQuoteBtn.addEventListener('click', fetchQuote);
copyQuoteBtn.addEventListener('click', copyQuote);

// Fetch a quote when the page loads
fetchQuote();
