var APIKey = "0cd5d0e1fa1a89ffdba4e7569fe2ff57";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
  console.log(queryURL);

  let results = [response.name, response.wind.speed, response.wind.deg, response.main.humidity, response.main.temp,]
  console.log(results);

  $(".city-country").append("In " + (response.name) + ", " + (response.sys.country) + "... ");
  $(".current-temp").append("...the current temperature is " + Math.floor((response.main.temp - 273.15) * 1.80 + 32) + " &deg;F");
  $(".humidity").append("...the humidity level is " + (response.main.humidity) + " %");
  $(".windspeed").append("...the wind speed is " + response.wind.speed + " MPH");
//   $(".uv-index").append(response.uvindex);
// i dont see that listed in the example from th exercise...
//   $(".five-day").append("...the wind speed is " + response.wind.speed + " MPH");

});