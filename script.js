let realData = ""
let quotesData = ""
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const newQ = document.getElementById('newQ');
const tweetMe = document.getElementById('tweetMe');

const getNewQuotes = () => {
    let ran = Math.floor(Math.random()*1643)
    quotesData = realData[ran]
    quotes.innerHTML = quotesData.text;
    quotesData.author == null
        ? (author.innerHTML = "Anonymous") 
        : (author.innerHTML = quotesData.author);
}
const getQuotes = async () => {
    try{
        const data = await fetch("https://type.fit/api/quotes")
        realData = await data.json();
        getNewQuotes();
    }
    catch(error){
        console.log(error)
    }

}
const tweetNow = () => {
    let tweetPost = `https://twitter.com/intent/tweet?text=${quotesData.text}`
    window.open(tweetPost)
}
getQuotes()
newQ.addEventListener('click', getNewQuotes)
tweetMe.addEventListener('click', tweetNow)
