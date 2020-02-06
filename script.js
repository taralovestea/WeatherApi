var APIKey = "0cd5d0e1fa1a89ffdba4e7569fe2ff57";
// var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;
   var queryURL = "https://api.openweathermap.org/data/2.5/weather?zip=zip_value_replace,us&appid=" + APIKey;

console.log(APIKey)

function call_weather_ap(a_zipcode){
  console.log("a_zipcode:")
  console.log(a_zipcode)
  new_q = queryURL.replace("zip_value_replace", a_zipcode)
  console.log(new_q)
  $.ajax({
    url: new_q,
    type: 'GET',
    dataType: 'json', // added data type
    success: function(res) {
      // console.log(res);
      calculations(res);
      // console.log(res);
      // console.log(res.main);
      // console.log(res.main.temp);

      alert(res);}
  });
}

// we get the parameter from the URL
const queryString = window.location.search;
console.log(queryString);
const urlParams = new URLSearchParams(queryString);
const zipcode_value = urlParams.get('zipcode')
console.log(zipcode_value);
searchbar_form.onsubmit = searchZipcode(zipcode_value);

function searchZipcode(a_zipcode){
   call_weather_ap(zipcode_value)
}

function calculations(a_res){
  console.log(a_res)
  temp = a_res.main.temp
  console.log(temp)
  temp_f = Math.floor((temp - 273.15) * 1.80 + 32)
  console.log(temp_f)

}

/*
.then(function(response) {
  let results = [response.name, response.wind.speed, response.wind.deg, response.main.humidity, response.main.temp,]
  console.log(results);

  $(".city").append("In " + (response.name) + ", " + (response.sys.country) + "... ");
  $(".temp").append("...the current temperature is " + Math.floor((response.main.temp - 273.15) * 1.80 + 32) + " &deg;F");
  $(".humidity").append("...the humidity level is " + (response.main.humidity) + " %");
  $(".windspeed").append("...the wind speed is " + response.wind.speed + " MPH");
//   $(".uv-index").append(response.uvindex);
});
*/
