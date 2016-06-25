$(function strict(){
"use strict";
var voohoo = new Vue({
  el: '#app',
  data: {
    header: 'Appointments',
    title: '',
    street: '',
    city: '',
    date: '',
    time: ''
  }
});
//SETTING UP VUE COMPONENTS TO PROPERLY REFERENCE CORRECT TEMPLATE

var homepage = Vue.extend({
  template: '#APPhome'
});
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


// $(function(){
//   $('#plus').click();
// });
//
});
