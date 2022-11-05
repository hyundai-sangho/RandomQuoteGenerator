let quote = document.getElementById("quote");
let author = document.getElementById("author");
let btn = document.getElementById("btn");

const url = "https://api.quotable.io/random";

let getQuote = async () => {
  await fetch(url)
    .then((data) => data.json())
    .then((item) => {
      author.innerText = item.author;
      quote.innerText = item.content;
    });
};

window.addEventListener("load", getQuote);

btn.addEventListener("click", getQuote);
