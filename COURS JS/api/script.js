const quote = document.getElementById('quote');
const getQuote = () => {
    fetch('https://api.quotable.io/random')
        .then((response) => response.json())
        .then((data) => {
            //   console.log(`${data.content}-${data.author}`)
            quote.innerHTML = data.content;
        });
    fetch('https://picsum.photos/1600/1000')
        .then((response) => {
            document.getElementById('picture').innerHTML = `<img src=${response.url} />`;
        });
}
quote.addEventListener('click', () => getQuote());


