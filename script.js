getQuote();
//fetching the quotes from type.fit/api/quotes and picking one at random 
function getQuote() {
  fetch('https://type.fit/api/quotes')
  .then(response => response.text())
  .then(data => {
    const quotes = JSON.parse(data);
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    displayQuote(quote.text, quote.author);
  });
}
//displaying the quote and the author
function displayQuote(quote, author) {
  if (quote !== null) {
    const textParagraph = document.querySelector(".quote");
    textParagraph.innerHTML = `"${quote}" &mdash; <strong>${author}</strong>`;
  }
}
