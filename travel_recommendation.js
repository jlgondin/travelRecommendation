const btnSearch = document.getElementById('btnSearch');
const btnReinit = document.getElementById('btnReinit');


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            //const condition = data.countries.find(item => item.cities.name.toLowerCase() === input);

            //if (condition) {
            //    resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
            //    resultDiv.innerHTML += `<p>${condition.description}</p>`;
            //    resultDiv.innerHTML += `<img src="${condition.imageUrl}" alt="image">`;
            //} else {
            //    resultDiv.innerHTML = 'Condition not found.';
            //}

            let found = false;

            data.countries.forEach(country => {
                country.cities.forEach(city => {
                    if (city.name.toLowerCase().includes(input)) {
                        resultDiv.innerHTML += `<h2>${city.name}</h2>`;
                        resultDiv.innerHTML += `<p>${city.description}</p>`;
                        resultDiv.innerHTML += `<img src="${city.imageUrl}" alt="${city.name}">`;
                        found = true;
                    }
                });
            });

            if (!found && (input === "beach" || input === "beaches")) {
                data.beaches.forEach(plage => {
                    resultDiv.innerHTML += `<h2>${plage.name}</h2>`;
                    resultDiv.innerHTML += `<p>${plage.description}</p>`;
                    resultDiv.innerHTML += `<img src="${plage.imageUrl}" alt="${plage.name}">`;
                    found = true;
                });
            }
            

            if (!found && (input === "temple" || input === "temples")) {
                data.temples.forEach(temple => {
                    resultDiv.innerHTML += `<h2>${temple.name}</h2>`;
                    resultDiv.innerHTML += `<p>${temple.description}</p>`;
                    resultDiv.innerHTML += `<img src="${temple.imageUrl}" alt="${temple.name}">`;
                    found = true;
                });
            }
            

            if (!found) {
                resultDiv.innerHTML = 'Pas de résultat.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}


function reinitialiser () {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}

btnSearch.addEventListener('click', searchCondition);
btnReinit.addEventListener('click', reinitialiser);

