const apiUrl = 'https://api.teleport.org/api/'
const apiSearch = 'countries/'

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


// Control Form

const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}


list.forEach((item) => item.addEventListener('click', activeLink))


const formControlsElements = document.querySelectorAll('.form-control')

for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        if (event.target.checkValidity()) {

            control.classList.remove('error')

        } else {

            control.classList.add('error')

        }

    })

}
