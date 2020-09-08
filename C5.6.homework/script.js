const heightNode = document.querySelector("#height");
const widthNode = document.querySelector("#width");
const form = document.querySelector("form");
const loader = document.querySelector(".loader");
const resultDiv = document.querySelector("#j-result");
const widthWarning = document.querySelector("#j-width-warning");
const heightWarning = document.querySelector("#j-height-warning");

function makeRequest() {
    let height = heightNode.value;
    let width = widthNode.value;

    if (height >= 100 && height <= 300 && width >= 100 && width <= 300) {
        return fetch(`https://picsum.photos/${width}/${height}`)
            .then((response) => {
                console.log("response", response)
                return response;
            })
            .then((json) => {
                return json.url;
            })
            .catch(() => {
                return "error"
            });
    }
}


form.addEventListener("submit", async (e) => {
    resultDiv.style.display = "none";
    loader.style.display = "inline-block";
    e.preventDefault();
    const requestResult = await makeRequest()
    if(requestResult !== "error"){
        resultDiv.innerHTML = `<img src="${requestResult}">`;
    }
    resultDiv.style.display = "block";
    loader.style.display = "none";

});