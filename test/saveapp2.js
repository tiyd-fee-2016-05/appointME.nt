console.log('12');

//SETS UP AN EMTRY ARRAY THAT WILL ACCEPT EACH APPOINTMENT INFORMATION AS AN OBJECT
// var savedAppointments = [];
var log = [];

//CAPTURE THE USER INPUT
$('.save-app').submit(function(e){
  e.preventDefault();
  console.log('2');
  //LOG THE INFORMATION
  function logging(title, street, city, date, time){
    log.push({
      title: title,
      street: street,
      city: city,
      date: date,
      time: time
    });
  }

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

  logging(newInput.title, newInput.street, newInput.city, newInput.date, newInput.time);
  console.log(log);

  $('.input-form').val("");
});
