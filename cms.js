// Use a google sheet as our CMS.
// jshint esversion: 8
(function(){
    'use strict';
    const URI = 'https://docs.google.com/spreadsheets/d/1HE7JWA-iuGcO-l_guOSovWgA9o1Ewr3hWDeaEdNeedY/edit?usp=sharing';
    window.addEventListener('DOMContentLoaded', function(){
        Tabletop.init({
            key: URI,
            simpleSheet: true,
            callback: function(shows){
                let content = '';
                for(let show of shows){
                    content += show.name + ' at ' + show.location + ' on ' + show.date + ' for ' + show.price + '<br>';
                }
                document.getElementsByTagName('body')[0].innerHTML = content;
            }
        });
    });
}());
