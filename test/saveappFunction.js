//SETS UP AN EMTRY ARRAY THAT WILL ACCEPT EACH APPOINTMENT INFORMATION AS AN OBJECT
var savedAppointments = [];

//FUNC WITH VARIABLES WILL PUSH THE OBJECT OF INFORMATION ABOUT THE APPOINTMENT INTO THE ARRAY ABOVE
function saveApp(title, street, city, date, time) {
  savedAppointments.push({
    title: title,
    street: street,
    city: city,
    date: date,
    time: time
  });
}

//SAMPLE SET OF FIRST APPOINTMENT - console.log() is an [object]
var data = {
  title: "First appointment",
  street: "1 Street",
  city: "Durham",
  date: "today",
  time: "now"
};

//SAMPLE SET OF SECOND APPOINTMENT - console.log() is now [object, object]
var atad = {
  title: "Second appointment",
  street: "2 Street",
  city: "Bull",
  date: "tmrw",
  time: "evening"
};

//RUNS THE SAVEAPP FUNCTION WITH THE SPECIFIC INFORMATION OF DATA AND ATAD
saveApp(data.title, data.street, data.city, data.date, data.time);
saveApp(atad.title, atad.street, atad.city, atad.date, atad.time);

console.log(savedAppointments);
