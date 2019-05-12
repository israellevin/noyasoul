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
                let grid = document.getElementById('events-grid');
                let sampleRow = grid.innerHTML;
                let gridHtml = '';
                for(let show of shows){
                    let currentRow = document.createElement('div');
                    currentRow.innerHTML = sampleRow;
                    currentRow.getElementsByClassName('event-name')[0].innerHTML = show.name;
                    currentRow.getElementsByClassName('event-place')[0].innerHTML = show.place;
                    currentRow.getElementsByClassName('event-date')[0].innerHTML = show.date;
                    gridHtml += currentRow.innerHTML;
                }
                console.log(gridHtml);
                grid.innerHTML = gridHtml;
            }
        });
    });
}());
