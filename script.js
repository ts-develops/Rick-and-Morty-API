// name of the API
const base_url = 'https://rickandmortyapi.com/api/character'

//promising to return fetch API
fetch (base_url)
.then (data => {
// turning it into array of data
return data.json()
})
.then(completedata => {
    //accessing data to return specific array and information
    let information = " "
    //mapping to change whole data thats being grabbed
    completedata.results.map((values)=> {
        // using += lets data be displayed for all the API data(not one specific information)
        information += `<div class="card" style="width: 20rem"  >
        <img class="card-img-top" src="${values.image}" alt="anime" />
        <div class="card-body text-center">
          <h5 class="card-title">${values.name}</h5>
          <h6 class="card-title">${values.status}</h6>
          <h6 class="card-title">${values.species}</h6>
          <h6 class="card-title">${values.gender}</h6>
        </div>
      </div>`
document.getElementById('cards-data').innerHTML= information
    })
})
//if none of the above work catch promise is displayed
.catch (error => console.log(error.message))

