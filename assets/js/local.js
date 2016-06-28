// local.js

var log = [];

//CAPTURE THE USER INPUT
$('.save-app').click(function(e){
  e.preventDefault();
  console.log('clicked');
  var newInput = {
    title: $('#input-title').val(),
    street: $('#input-street').val(),
    city: $('#input-city').val(),
    date: $('#input-date').val(),
    time: $('#input-time').val()
  };

  localStorage.setItem('title', newInput.title);
  localStorage.setItem('street', newInput.street);
  localStorage.setItem('city', newInput.city);
  localStorage.setItem('date', newInput.date);
  localStorage.setItem('time', newInput.time);


  // localStorage.setItem('log', JSON.stringify(newInput));
  // console.log(JSON.parse(localStorage.getItem('log')));


  function logging(title, street, city, date, time){
    log.push({
      title: title,
      street: street,
      city: city,
      date: date,
      time: time
    });
  }
  logging(newInput.title, newInput.street, newInput.city, newInput.date, newInput.time);
  console.log(log);

  $('.input-form').val("");
});
