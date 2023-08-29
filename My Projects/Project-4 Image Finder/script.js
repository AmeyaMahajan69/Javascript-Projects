const AccessKey="EcrjmUDmFka8x8d4_8c9U4yjpdTs4PBjNBTQK7tgWP4";

const SubmitButtonEl=document.getElementById("Submit");
const SearchFormEl=document.getElementById("SearchForm");
const SearchBoxEl=document.getElementById("SearchBox");
const SearchResultsEl=document.getElementById("SearchResults");
const ShowMoreEl=document.getElementById("ShowMore");

let keyword="";
let page=1;

async function searchImages(page){
    keyword = SearchBoxEl.value;
    console.log(keyword)
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${AccessKey}&per_page=12`

    const response = await fetch(url);
    const data =  await response.json();

    const results = data.results;

    if(page==1)
    {
        SearchResultsEl.innerHTML="";
        ShowMoreEl.classList.add("hide")
    }

    results.map((results)=>{
        const image = document.createElement("img")
        image.src=results.urls.small;
        const imageLink = document.createElement("a")
        imageLink.href= results.links.html;
        imageLink.target="_blank";

        imageLink.appendChild(image);
        SearchResultsEl.appendChild(imageLink);
    })

    ShowMoreEl.classList.remove("hide");

}

SearchFormEl.addEventListener("submit" , (e)=>{
    e.preventDefault();
    page = 1;
    searchImages(page);
})

ShowMoreEl.addEventListener("click" ,()=>{
    page++;
    searchImages(page);
} )










