$(function strict(){
"use strict";

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

//SETTING UP VUE ROUTER TO MAP EACH ENDPOINT DEFINED IN README.md
var router = new VueRouter();

router.map({
    '/home' : {
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


});
