
function setSearchEngine() {
            // let form = document.getElementById('searchForm'); //Jayde's
    let form = document.querySelector("form");
            // let selectedEngine = document.querySelector('[name=engine]:checked'); //Jayde's
    let searchEngineSelected = document.querySelector('input[name=engine]:checked');
            // let searchTerm = document.querySelector("[name=q]").value; //Jayde's
    let searchString = document.querySelector('input[name=q]');

    let searchEngines = {
        "google": "https://www.google.com/search",
        "duckduckgo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web",
        "yahoo": "https://search.yahoo.com/search",
        "baidu": "https://www.baidu.com/s"
    };

            // if (searchTerm.trim() === "") {  //Jayde's
    if(searchEngineSelected === null){
        alert("Please select a search engine");
        console.log(`searchEngineSelected: ${searchEngineSelected}`);
        event.preventDefault();       // Why event. deprecated?  Alternative?
             // return;   //Jayde's  I want EU to get both messages in once cycle if both are missing.
    }
    if (searchString.value === "") {
        alert("Enter something in the search field");
        console.log(`searchString: ${searchString.value}`);
        event.preventDefault();       // Why event. deprecated?   Alternative?
             // return   //Jayde's
    }

    let searchEngineUrl = searchEngines[searchEngineSelected.value];
    form.setAttribute("action",searchEngineUrl);
}

window.addEventListener("load", function(){
    let form = document.getElementById("searchForm");
    form.addEventListener("submit",setSearchEngine);
});

