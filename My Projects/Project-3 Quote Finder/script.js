const url = "https://api.quotable.io/random";

const NewQuoteButtonEl=document.querySelector(".nq");
const TwitterButtonEl=document.querySelector(".twitter");

const QuoteAreaEl=document.querySelector(".quote");
const AuthorNameEl=document.querySelector(".authorName");


async function NewQuote(url){
    const response = await fetch(url);
    let results = await response.json();

    console.log(results);

     QuoteAreaEl.innerHTML=results.content;
     AuthorNameEl.innerHTML=results.author;

}

function Tweet(){
    window.open(" http://twitter.com/intent/tweet?text=" + QuoteAreaEl.innerHTML , "Tweet Window" , "width:600" , "height:600");
    console.log("Hello");
}

NewQuote(url);

NewQuoteButtonEl.addEventListener("click",()=>{NewQuote(url)});
TwitterButtonEl.addEventListener("click",()=>{
    Tweet()
});





