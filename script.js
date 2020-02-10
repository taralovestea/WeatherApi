var APIKey = "0cd5d0e1fa1a89ffdba4e7569fe2ff57";
var userCity= "";


$("#searchbar_form").submit(function(event){
  event.preventDefault();
  userCity= $("#zipcode_id").val()
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +userCity + "&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    console.log(queryURL);
    // let results = [response.name, response.wind.speed, response.wind.deg, response.main.humidity, response.main.temp,]
    // console.log(results);
    $(".city").html("<h2>In " + (response.name) + ", " + (response.sys.country)+ "<img src=http://openweathermap.org/img/wn/"+(response.weather[0].icon)+".png></h2>");
    $(".temp").html("the current temperature is " + Math.floor((response.main.temp - 273.15) * 1.80 + 32) + " &deg;F");
    $(".humidity").html("the humidity level is " + (response.main.humidity) + " %");
    $(".windspeed").html("the wind speed is " + response.wind.speed + " MPH");
  
  var lat= response.coord.lat
  var lon= response.coord.lon
  var uVurl= "https://api.openweathermap.org/data/2.5/uvi?appid="+APIKey+"&lat="+lat+"&lon="+lon;
  var fiveDayUrl = "https://api.openweathermap.org/data/2.5/forecast?id="+response.id+ "&appid=" +APIKey;
  $.ajax({
    url: uVurl,
    method: "GET"
  }).then(function(response) {
  console.log(response)
  // $(".uv-index").append("the UV index is "+ response.value);
  $(".uv-index").html("the UV index is " + response.value);
  });
  $.ajax({
    url: fiveDayUrl,
    method: "GET"
  }).then(function(response) {
  console.log(response)
  var addedDays = 1;
  for (var i=0; i<40; i += 9) {
    console.log(response.list[i])
    var dayNow = moment().add(addedDays, 'days').format('MM/DD/YYYY')
    addedDays++
    var fiveDayBlock = $(`<div class= "forecast">
                          <h5> ${dayNow} </h5>
                          <img src=http://openweathermap.org/img/wn/${response.list[i].weather[0].icon}.png>
                          <p> ${Math.floor(((response.list[i].main.temp - 273.15) * 1.8) + 32)} Degrees </p>
                          <p> ${response.list[i].main.humidity} % Humidity </p>`)
    $("#forecast").append(fiveDayBlock);
  }
  });
  });
})



