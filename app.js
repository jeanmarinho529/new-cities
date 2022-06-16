const apiUrl = 'https://api.teleport.org/api/'
const apiSearch = 'countries/'
const imageDefault = 'https://www.madeireiraestrela.com.br/images/joomlart/demo/default.jpg'

function urlBuilder() {
    const finaLink = apiUrl + apiSearch;
    return finaLink
}

async function apiGet() {
    let response = await fetch(urlBuilder());
    let data = await response.json()
    let countryData = data._links;
    let countriesList = countryData['country:items']
    //console.log(countriesList[2])
    for (country in countriesList) {
        console.log(countriesList[country]);
    }
}

apiGet();

var containerElemento = document.querySelector('.cards')
var newCity = document.querySelector('#newCity')

var cities = JSON.parse(localStorage.getItem('cities')) || []

for (let city of cities) {
    newCityInHtml(city)
}

newCity.addEventListener('click', (evento) => {

    evento.preventDefault()

    nameCity = document.getElementById('nameCity').value
    description = document.getElementById('description').value
    if (!nameCity || !description){
        return
    }

    let city = {
        id: getNewId(),
        photo_path: document.getElementById('photoCity').value || imageDefault,
        name: nameCity,
        description: description,
        trivia: document.getElementById('trivia').value
    }

    cities.push(city)
    localStorage.setItem('cities', JSON.stringify(cities))

    document.getElementById("myForm").reset();
    newCityInHtml(city)
})

function getNewId() {
    let lastId = 0
    let lastCity = cities[cities.length - 1]

    if (lastCity) {
        lastId = lastCity['id']
    }

    return lastId + 1
}

function clickDeleteCity(id) {
    if (confirm('Really want to delete?')) {
        removeCityLocalStorage(id)
        document.getElementById(`card-${id}`).outerHTML = ""
    }
}

function removeCityLocalStorage(id) {    
    index = cities.findIndex((element) => element.id == id)
    cities.splice(index, 1)

    localStorage.setItem('cities', JSON.stringify(cities))
}

function newCityInHtml(city) {
    containerElemento.innerHTML += `
        <div class="card" id="card-${city.id}">
            <img src="${city.photo_path}">
            <h1>${city.name}</h1>
            <p>${city.description}</p>
            <p>${city.trivia}</p>
            <button class="deleteCity" onClick="clickDeleteCity(this.value);" value="${city.id}">
                <span><ion-icon name="checkmark-circle-outline"></ion-icon></span>
            </button>
        </div>
    `
}