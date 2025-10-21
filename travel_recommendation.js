const btnSearch = document.getElementById('btnSearch');


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
        const condition = data.countries.find(item => item.cities.name.toLowerCase() === input);

        if (condition) {
            resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
            resultDiv.innerHTML += `<p>${condition.description}</p>`;
            resultDiv.innerHTML += `<img src="${condition.imageUrl}" alt="image">`;
        } else {
            resultDiv.innerHTML = 'Condition not found.';
        }
        })
        .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}
btnSearch.addEventListener('click', searchCondition);


