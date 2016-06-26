//SETS UP AN EMTRY ARRAY THAT WILL ACCEPT EACH APPOINTMENT INFORMATION AS AN OBJECT
var savedAppointments = [];
var log = [];

//CAPTURE THE USER INPUT
$('.save-app').click(function(e){
  e.preventDefault();

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


  localStorage.setItem('log', JSON.stringify(newInput));
  console.log(JSON.parse(localStorage.getItem('log')));


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


// //FUNC WITH VARIABLES WILL PUSH THE OBJECT OF INFORMATION ABOUT THE APPOINTMENT INTO THE ARRAY ABOVE
// function saveApp(title, street, city, date, time) {
//   savedAppointments.push({
//     title: title,
//     street: street,
//     city: city,
//     date: date,
//     time: time
//   });
// }
//
// //SAMPLE SET OF FIRST APPOINTMENT - console.log() is an [object]
// var data = {
//   title: "First appointment",
//   street: "1 Street",
//   city: "Durham",
//   date: "today",
//   time: "now"
// };
//
// //SAMPLE SET OF SECOND APPOINTMENT - console.log() is now [object, object]
// var atad = {
//   title: "Second appointment",
//   street: "2 Street",
//   city: "Bull",
//   date: "tmrw",
//   time: "evening"
// };
//
// //RUNS THE SAVEAPP FUNCTION WITH THE SPECIFIC INFORMATION OF DATA AND ATAD
// saveApp(data.title, data.street, data.city, data.date, data.time);
// saveApp(atad.title, atad.street, atad.city, atad.date, atad.time);
//
// console.log(savedAppointments);
// console.log(savedAppointments[0].title);
//
// $('.save-app').click(function(){
//   $('h2').html(savedAppointments[0].title);
// });
