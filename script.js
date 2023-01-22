getQuote();
//fetching the quotes from type.fit/api/quotes and picking one at random
function getQuote() {
  fetch("https://type.fit/api/quotes")
    .then((response) => response.text())
    .then((data) => {
      const quotes = JSON.parse(data);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];
      if (quote !== null) {
        const quoteAuthor = quote.author ? quote.author : "Unknown Author";
        const quoteText = quote.text;
        displayQuote(quoteText, quoteAuthor);
      }
    });
}
//displaying the quote and the author
function displayQuote(quoteText, quoteAuthor) {
  if (quoteText !== null) {
    const textParagraph = document.querySelector(".quote");
    textParagraph.innerHTML = `"${quoteText}" &mdash; <strong>${quoteAuthor}</strong>`;
  }
}
