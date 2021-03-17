
function setSearchEngine(){
    let form = document.querySelector("form");
    let searchEngineSelected = document.querySelector('input[name=engine]:checked');
    console.log(searchEngineSelected);

    let searchEngines = {
        "google": "https://www.google.com/search",
        "duckduckgo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web",
        "yahoo": "https://search.yahoo.com/search",
        "baidu": "https://www.baidu.com/s"

    };

    let searchEngineUrl = searchEngines[searchEngineSelected.value];
    form.setAttribute("action",searchEngineUrl);
    console.log(searchEngineUrl);
}

window.addEventListener("load", function(){

    let form = document.getElementById("searchForm");
    
    form.addEventListener("submit",setSearchEngine);









});
