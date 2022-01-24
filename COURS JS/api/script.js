const quote = document.getElementById('quote');

fetch('https://api.quotable.io/random')
    .then((response) => response.json())
    .then((data) => {
        //   console.log(`${data.content}-${data.author}`)
        quote.innerHTML = data.content;
    });