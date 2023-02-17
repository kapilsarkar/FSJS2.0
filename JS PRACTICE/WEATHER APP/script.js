const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '199da717e7msh416936e94a512adp1685abjsnac37eb0abacd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));