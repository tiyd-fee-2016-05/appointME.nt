// weather.js

var LScity = localStorage.getItem("city");

console.log(LScity);

$.ajax({
  url: "https://api.wunderground.com/api/35c9d364b4732721/forecast/q/NC/" + LScity + "/.json",
  method: "GET",
  dataType: "JSON",
  success: function(rhonda){
    var temp = rhonda.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    console.log(temp);
    var icon = rhonda.forecast.simpleforecast.forecastday[0].icon;
    console.log(icon);
    var img = rhonda.forecast.simpleforecast.forecastday[0].icon_url;
    console.log(img);
    // $(".weather").html(icon + " " + temp + "&#8457;").append('<img src="' + img + '"/>');
    $(".weather").append('<img src="' + img + '"/>' + '<span>' + icon + ", " + temp + "&#8457;" + '</span>');
    $(".left-side").append('<img src="' + img + '"/>');
  }
});
