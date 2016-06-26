// $(function strict(){
// "use strict";

var savedAppointments = [];

//SAVE BUTTON - ADDS USER INPUT TO ARRAY OF OBJECTS
$('.save-app').click(function(e){
  console.log('hey');
  e.preventDefault();
  //LOG THE INFORMATION
  function saveApp(title, street, city, date, time) {
    savedAppointments.push({
      title: title,
      street: street,
      city: city,
      date: date,
      time: time
    });
  }
});



//DATA MODEL FOR EACH NEW APPOINTMENT ENTRY//
var data = {
  title: "First appointment",
  street: "1 Street",
  city: "Durham",
  date: "today",
  time: "now"
};

//SETTING UP VUE COMPONENTS TO PROPERLY REFERENCE CORRECT TEMPLATE
var homepage = Vue.extend({
  template: '#APPhome',
  data: function() {        //the information was not returning so now a function can be called to return the data table above
    return {
      appointments: data
    };
  }
});

//SET UP VUE COMPONENTS FOR NEW INFORMATION
var newapp = Vue.extend({
  template: '#APPnew'
});
var appinfo = Vue.extend({
  template: '#APPinfo'
});
var editapp = Vue.extend({
  template: '#APPedit'
});


var App = Vue.extend({});

//SETTING UP VUE ROUTER TO MAP EACH ENDPOINT DEFINED IN README.md
var router = new VueRouter();

router.map({
    '/' : {
      component: homepage
    },
    '/new' : {
      component: newapp
    },
    '/edit' : {
      component: editapp
    },
    '/view' : {
      component: appinfo
    }
  });

router.start(App,'#app');

// });
