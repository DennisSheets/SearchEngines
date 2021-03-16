
function setSearchEngine(){
    const form = document.querySelector("form");
    let searchEngine = document.querySelector('input[name=engine]:checked')
    console.log("this says nothing yet")

    let actions = {
        "google": "https://www.google.com/search",
        "duckduckgo": "https://duckduckgo.com/",
        "bing": "https://www.bing.com/search",
        "ask": "https://www.ask.com/web"
    };

    let actionUrl = actions[searchEngine.value];
    form.setAttribute("action",actionUrl)
}

window.addEventListener("load", function(){
    const form = document.getElementById("searchForm");
    form.addEventListener("submit",setSearchEngine)
});
