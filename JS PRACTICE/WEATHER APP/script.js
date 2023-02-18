const searchInput = document.querySelector(".search_input");
const searchForm = document.querySelector(".search");
const temp = document.querySelector(".temp");
const city = document.querySelector(".weather_location");
const description = document.querySelector(".weather_description");
const weathertIcon = document.querySelector(".weather_icon img");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const apiCall = async () => {
	try{
		// const base_url = 'http://api.weatherapi.com/v1/current.json?key=&q=`${serchInput.value}`&aqi=no'

		// const base_url = "http://api.weatherapi.com/v1/current.json?key=&q= `${searchInput.value}`&aqi=no";

		const base_url= "http://api.weatherapi.com/v1/current.json?key=&q=`${serchInput.value}`&aqi=no";
		const response =await fetch(base_url);

		const data = await response.json();
		console.log(data);

	}catch(error) {
		console.error(error);
	}
}

const submitHandler = (e) => {
	e.preventDefault();
	apiCall();
}

searchForm.addEventListener("submit",submitHandler)