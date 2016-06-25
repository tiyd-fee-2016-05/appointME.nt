$(function strict(){
"use strict";

//SETTING UP VUE COMPONENTS TO PROPERLY REFERENCE CORRECT TEMPLATE
var data = [{
  title: "first appointment",
  street: "first appointment",
  city: "first appointment",
  date: "first appointment",
  time: "first appointment"
}];


var homepage = Vue.extend({
  template: '#APPhome',
  data: function() {
    return {
      appointments: data
    };
  }
});
var newapp = Vue.extend({
  template: '#APPnew',
  data: function(){
    return {
      appointments: data
    };
  }
});
var appinfo = Vue.extend({
  template: '#APPinfo',
  data: function(){
    return{
      appointents: data
    }
  }
});
var editapp = Vue.extend({
  template: '#APPedit',
  data: function(){
    return{
      appointments: data
    }
  }
});


var App = Vue.extend({});

// SETTING UP VUE ROUTER TO MAP EACH ENDPOINT DEFINED IN README.md
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

router.start(App,'#app1');


});
