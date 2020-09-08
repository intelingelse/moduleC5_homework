const resultDiv = document.querySelector('.result');
const formInput = document.querySelector('#number');
const loader = document.querySelector(".load");
const form = document.querySelector("form");


form.addEventListener('submit',
    function (event) {
        event.preventDefault();
        loader.style.display = "inline-block";
        resultDiv.style.display = "none";
        let num = formInput.value;
        let xhr = new XMLHttpRequest();
        let cards = '';
        xhr.open('GET', `https://picsum.photos/v2/list?limit=${num}`);
        xhr.onload = function () {
            if (xhr.status != 200)
                console.log('Статус ответа: ' + xhr.status);
            else {
                const result = JSON.parse(xhr.response);
                result.forEach(item => {
                    cards += `
                    <div class="card" style="width: 18rem;">
                          <img src="${item.download_url}" class="card-img-top" alt="...">
                          <div class="card-body">
                            <p class="card-text font-weight-bold">Author:</p>
                            <p class="card-text font-italic">${item.author}</p>
                          </div>
                    </div>`;
                });
                resultDiv.innerHTML = cards;
                loader.style.display = "none";
                resultDiv.style.display = "flex";
            }
        }
        xhr.onprogress = (event) => {
            console.log("amount of data currently transferred: ", event.loaded);
            console.log("total amount of data transferred: ", event.total);
        };

        xhr.onerror = function () {
            console.log('Error status: ', xhr.status);
        };

        xhr.send();
    });


