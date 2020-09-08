const page_input = document.querySelector("#page");
const limit_input = document.querySelector("#limit");
const form = document.querySelector("form");
const reset_btn = document.querySelector("#j-reset");
const resultDiv = document.querySelector(".result");
const loader = document.querySelector(".loader");


if (localStorage.length !== 0) {
    resultDiv.style.display = "none";
    loader.style.display = "inline-block";
    resultDiv.innerHTML = localStorage.getItem("previous request")
    resultDiv.style.display = "flex";
    loader.style.display = "none";
}

function makeRequest(page, limit) {
    return fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
        .then((response) => {
            return response.json()
        })
        .then((json) => {
            console.log(json);
            return json;
        })
        .catch((error) => {
            console.log(error)
        });
}

reset_btn.addEventListener("click", (event) => {
    event.preventDefault();
    localStorage.clear();
    location.reload();
})

form.addEventListener('submit', async (event) => {
    resultDiv.style.display = "none";
    loader.style.display = "inline-block";
    event.preventDefault();
    let result = [];
    let page_value = page_input.value;
    let limit_value = limit_input.value;
    const response = await makeRequest(page_value, limit_value);
    console.log("response length", response.length);
    response.forEach(function (item, index) {
        result += `<div class="card" style="width: 18rem;">
                      <img class="card-img-top" src="${item.download_url}" alt="request image">
                          <div class="card-body">
                            <h5 class="card-title text-uppercase font-weight-bold">Author:</h5>
                            <h5 class="card-title font-italic">${item.author}</h5>
                            <h6 class="card-text smaller">download <a href="${item.download_url}">here.</a></h6>
                         </div>
                    </div>`
    });

    localStorage.setItem("previous request", result);
    resultDiv.innerHTML = result;
    resultDiv.style.display = "flex";
    loader.style.display = "none";


})

