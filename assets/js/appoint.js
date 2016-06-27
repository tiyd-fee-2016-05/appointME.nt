// $(function strict(){
// "use strict";


//DATA MODEL FOR EACH NEW APPOINTMENT ENTRY//
var newInput = {
  title: localStorage.getItem('title'),
  street: localStorage.getItem('street'),
  city: localStorage.getItem('city'),
  date: localStorage.getItem('date'),
  time: localStorage.getItem('time')
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
  template: '#APPnew',
  newInput: function() {
    return {
      appointments: data
    };
  }
});
var appinfo = Vue.extend({
  template: '#APPinfo',
  data: function(){
    return{
      appointments: data
    };
  }
});
var editapp = Vue.extend({
  template: '#APPedit',
  data: function(){
    return{
      appointments: data
    };
  }
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
