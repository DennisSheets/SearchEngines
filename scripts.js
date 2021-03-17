
function setSearchEngine(){
    let form = document.querySelector("form");
    let searchEngineSelected = document.querySelector('input[name=engine]:checked');
    
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

        form.addEventListener("submit",function(event){

            let searchEngineSelected = document.querySelector('input[name=engine]:checked');
            let q = document.querySelector('input[name=q]');

            if(searchEngineSelected === null){
                alert("Please select a search engine");
                console.log(`searchEngineSelected: ${searchEngineSelected}`);
                event.preventDefault();
            }
 
            if (q.value === "") {
                alert("Enter something in the search field");
                console.log(`q: ${q.value}`);
                event.preventDefault();
            }
            
            form.addEventListener("submit",setSearchEngine);
        });
});
