$(document).ready(function(){
var sForm = document.getElementById('mySearch');
var weatherInfo = $('weather');
sForm.lastElementChild.addEventListener('click', function(e){
    e.preventDefault();
    var city = (sForm.city.value);
    var weatherDescription;
    var balls;
    $.ajax({
      method: 'GET',
      url: 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=8202edb6eac06c7137501d0d4499c5e6'
    })
    .done(function(data) {
      //console.log(data.name);
      //console.log((data.main.temp-273.15)*1.8+32);
      weatherDescription = data.weather[0].description;
      //console.log("weather: " + weather);
      //console.log(data.wind.speed);
      //console.log(h1);
      checkForRain(weatherDescription);
    });
    //function to define true or false
    function checkForRain(description) {
      if (description.includes("rain")) {
        document.getElementById('weather').innerHTML='';
        $('#weather').append('<h1>' + 'Yes' + '</h1>' );

      }
      else {
        document.getElementById('weather').innerHTML='';
        $('#weather').append('<h1>' + 'No' + '</h1>' );
      }
      document.getElementById('mySearch').reset();

    }

});

});
// if string.substring = rain
