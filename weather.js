const findCapitalWeather = (country) => {
    const axios = require('axios')

    axios.get('https://restcountries.eu/rest/v2/name/'+country).then(res => {

        const country = res.data[0]
        const capital = country.capital
        const population = country.population
        const latitude = country.latlng[0]
        const longitude = country.latlng[1]

        console.log(`Population : ${population} Location : ${latitude} , ${longitude} and Capital city is : ${capital}`)

        axios.get('http://api.openweathermap.org/data/2.5/weather?q='+ capital +'&appid=6129068b370b115c9e66f032910ad8e4&units=metric')
        .then(res => {
        console.log(`Capital city ${res.data.name} today is ${res.data.weather[0].description}, temperature ${res.data.main.temp}`)
            })
    })

}


module.exports = findCapitalWeather
