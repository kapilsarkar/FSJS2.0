
// const countriesContainer = document.querySelector('.countries-container');
// const filterByRegion = document.querySelector('.filter-by-region');
// const searchInput = document.querySelector('.search-container input')

// let allCountriesData

// fetch('https://restcountries.com/v3.1/all')
// .then((res) => res.json())
// .then((data) => {

//     allCountriesData = data;
//     countriesContainer.innerHTML= '';
//     data.forEach((country) => {
//     console.log(country); 
//     const countryCard = document.createElement('a');
//     countryCard.classList.add('country-card');
//     countryCard.href =`/country.html?name=${country.name.common}`;
//      countryCard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
//      <div class="card-text">
//          <h3 class="card-title">${country.name.common}</h3>
//            <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//            <p><b>Region: </b>${country.region}</p>
//            <p><b>Capital: </b>${country.capital}</p>
//      </div>` 
//      countriesContainer.append(countryCard);  
//     })
// })





// filterByRegion.addEventListener('change',(e) =>{
//     console.log(filterByRegion.value);
//     fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
// .then((res) => res.json())
// .then((data) => {

//     countriesContainer.innerHTML= '';
//     data.forEach((country) => {
//     console.log(country); 
//     const countryCard = document.createElement('a');
//     countryCard.classList.add('country-card');
//     countryCard.href =`/country.html?name=${country.name.common}`;
//      countryCard.innerHTML = `<img src="${country.flags.svg}" alt="flag">
//      <div class="card-text">
//          <h3 class="card-title">${country.name.common}</h3>
//            <p><b>Population: </b>${country.population.toLocaleString('en-IN')}</p>
//            <p><b>Region: </b>${country.region}</p>
//            <p><b>Capital: </b>${country.capital}</p>
//      </div>` 
//      countriesContainer.append(countryCard);  
//     })
// })
// })

// searchInput.addEventListener('input',  (e) => {
//     const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
//     allCountriesData(filteredCountries)
//   })








// const cardImg = document.createElement('img');
// cardImg.src = 'https://flagcdn.com/is.svg';
// countryCard.append(cardImg);



// const countryCard = document.createElement('a');

// countryCard.classList.add('country-card');

// const cardHTML = `
// <img src="https://flagcdn.com/is.svg" alt="flag">
//                 <div class="card-text">
//                     <h3 class="card-title">Iceland</h3>
//                       <p><b>Population: </b>81,770,900</p>
//                       <p><b>Region: </b>Europe</p>
//                       <p><b>Capital: </b>Berlin</p>
//                 </div>`

//      countryCard.innerHTML = cardHTML; 
//      countriesContainer.append(countryCard);          


//console.log(countryCard);





const countriesContainer = document.querySelector('.countries-container')
const filterByRegion = document.querySelector('.filter-by-region')
const searchInput = document.querySelector('.search-container input')
const themeChanger = document.querySelector('.theme-changer')

let allCountriesData

fetch('https://restcountries.com/v3.1/all')
  .then((res) => res.json())
  .then((data) => {
    renderCountries(data)
    allCountriesData = data
  })

filterByRegion.addEventListener('change', (e) => {
  fetch(`https://restcountries.com/v3.1/region/${filterByRegion.value}`)
    .then((res) => res.json())
    .then(renderCountries)
})

function renderCountries(data) {
  countriesContainer.innerHTML = ''
  data.forEach((country) => {
    const countryCard = document.createElement('a')
    countryCard.classList.add('country-card')
    countryCard.href = `/country.html?name=${country.name.common}`
    countryCard.innerHTML = `
          <img src="${country.flags.svg}" alt="${country.name.common} flag" />
          <div class="card-text">
              <h3 class="card-title">${country.name.common}</h3>
              <p><b>Population: </b>${country.population.toLocaleString(
                'en-IN'
              )}</p>
              <p><b>Region: </b>${country.region}</p>
              <p><b>Capital: </b>${country.capital?.[0]}</p>
          </div>
  `
    countriesContainer.append(countryCard)
  })
}


searchInput.addEventListener('input',  (e) => {
  const filteredCountries = allCountriesData.filter((country) => country.name.common.toLowerCase().includes(e.target.value.toLowerCase()))
  renderCountries(filteredCountries)
})

themeChanger.addEventListener('click', () => {
    document.body.classList.toggle('dark')
  })