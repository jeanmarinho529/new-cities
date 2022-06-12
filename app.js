const apiUrl = 'https://api.teleport.org/api/'
const apiSearch = 'countries/'

function urlBuilder(){
    const finaLink = apiUrl+apiSearch;
    return finaLink
}

async function apiGet() {
    let response =  await fetch(urlBuilder());
    let data = await response.json()
    let countryData = data._links;
    let countriesList = countryData['country:items']
    //console.log(countriesList[2])
    for (country in countriesList){
        console.log(countriesList[country]);
   }
}

apiGet();