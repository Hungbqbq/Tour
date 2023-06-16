


//menu
$(document).ready(function () {
    $(".menu").click(function () {
        $(".nav-container").slideToggle();
    });
});

//slideshow


 var hinh= [
    'picture/TO (121).jpg',
    'picture/TO (122).jpg',
    'picture/TO (123).jpg',
    'picture/TO (124).jpg',
 ];
 var index = 0;
// prev
function prev(){
    index--;
    if(index < 0) index = hinh.length - 1;
    document.getElementById('banner').src = hinh[index];
    document.getElementById('0').style.color = 'white';
    document.getElementById('1').style.color = 'white';
    document.getElementById('2').style.color = 'white';
    document.getElementById('3').style.color = 'white';
    document.getElementById(index).style.color =' #1598d4';
}
// next
function next(){
    index++;
    if(index==hinh.length) index = 0;
    document.getElementById('banner').src = hinh[index];
    document.getElementById('0').style.color = 'white';
    document.getElementById('1').style.color = 'white';
    document.getElementById('2').style.color = 'white';
    document.getElementById('3').style.color = 'white';
    document.getElementById(index).style.color ='#1598d4';
}
// setinterval
setInterval(function(){
    next();
},2000);


// color js
var c1 = document.getElementById('c1');
var c2 = document.getElementById('c2');
var c3 = document.getElementById('c3');
const root = document.querySelector(':root');


// function click
c1.addEventListener('click', function(){
    root.style.setProperty('--color2', '#010202');
    localStorage.setItem('pickColor', '#010202');
});

// c2 color2 #1598d4
c2.addEventListener('click', function(){
    root.style.setProperty('--color2', '#1598d4');
    localStorage.setItem('pickColor', '#1598d4');
});

// c3 color4 #acb2ad
c3.addEventListener('click', function(){
    root.style.setProperty('--color2', '#acb2ad');
    localStorage.setItem('pickColor', '#acb2ad');
});

//  loadTheme
function loadTheme(){
    if (localStorage.getItem('pickColor') != '') {
        root.style.setProperty('--color2', localStorage.getItem('pickColor'));
    }
}
