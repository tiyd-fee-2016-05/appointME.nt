$(function strict(){
"use strict";
  $('.new-app-form-title').submit(function(e){
    e.preventDefault();
    var appTitle = $('#input-title').val();
    console.log(appTitle);

    //store the user input in localStorage
    localStorage.setItem('title',appTitle);
    var storedTitle = localStorage.getItem('title');
    console.log(storedTitle);
  });
});
