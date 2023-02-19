const searchInput = document.querySelector(".search_input");
const searchForm = document.querySelector(".search");
const temp = document.querySelector(".temp");
const city = document.querySelector(".location");
const description = document.querySelector(".weather_description");
const weatherIcon = document.querySelector(".weather_icon > img");
const weather = document.querySelector(".weather");
const error = document.querySelector(".error");

const api = "4b18607079bf4362ad953441231802";

const apiCall = async () => {
	try{
		// const base_url = 'http://api.weatherapi.com/v1/current.json?key=&q=`${serchInput.value}`&aqi=no'

		// const base_url = "http://api.weatherapi.com/v1/current.json?key=&q= `${searchInput.value}`&aqi=no";

		const base_url= `http://api.weatherapi.com/v1/current.json?key=${api}&q=${searchInput.value}&aqi=no`;
		const response =await fetch(base_url);

		const data = await response.json();
		// console.log(data);

		if (!response.ok){
			console.error(data.message);
			weather.style.display ="none";
			error.style.display ="block";
			return;
		}

		temp.innerHTML = "  The Current Temperature is : "  + data.current.temp_c + "  &#8451";
		city.innerText = "Current Location is :  " +  data.location.name;

		description.innerText ="Current Weather Condition is :  " +  data.current.condition.text;

		weatherIcon.src = (data.current.condition.icon);
	

		weather.style.display="block";
		error.style.display ="none";

	}catch(error) {
		console.error(error);
	}
}

const submitHandler = (e) => {
	e.preventDefault();
	apiCall();
}

searchForm.addEventListener("submit",submitHandler)

