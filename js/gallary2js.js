 // Album 18

 var img18 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap18 = ['18.1', '18.2', '18.3', '18.4'];

// Album 19

var img19 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap19 = ['19.1', '19.2', '19.3', '19.4',
  '1.5'
];

// Album 20

var img20 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap20 = ['20.1', '20.2',
  '20.3', '20.4'
];

// Album 21

var img21 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap21 = ['21.1', '21.2', '21.3', '21.4'];

// Album 22

var img22 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap22 = ['22.1', '22.2', '22.3', '22.4',
'22.5'
];

// Album 23

var img23 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap23 = ['23.1', '23.2',
'23.3', '23.4'
];

// Album 24

var img24 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap24 = ['24.1', '24.2', '24.3', '24.4'];

// Album 25

var img25 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap25 = ['25.1', '25.2', '25.3', '25.4',
'25.5'
];

// Album 26

var img26 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap26 = ['26.1', '26.2',
'26.3', '26.4'
];

// Album 27

var img27 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap27 = ['27.1', '27.2', '27.3', '27.4'];

// Album 28

var img28 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap28 = ['28.1', '28.2', '28.3', '28.4',
'28.5'
];

// Album 29

var img29 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap29 = ['29.1', '29.2',
'29.3', '29.4'
];

// Album 30

var img30 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap30 = ['30.1', '30.2', '30.3', '30.4'];

// Album 31

var img31 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap31 = ['31.1', '31.2', '31.3', '31.4',
'31.5'
];

// Album 32

var img32 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap32 = ['32.1', '32.2',
'32.3', '32.4'
];

// Album 33

var img33 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap33 = ['33.1', '33.2', '33.3', '33.4'];

// Album 34

var img34 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap34 = ['34.1', '34.2', '34.3', '34.4',
'34.5'
];

// Album 35

var img35 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap35 = ['35.1', '35.2',
'35.3', '35.4'
];

// Declare a empty array
var data = [];
// Declare some counters outside of loop (or inside of loop using let)
var i, b, x;
// Reference the node that will contain the slides
var con = document.getElementById('content');

function album(img, cap) {
  data.length = 0;
  for (i = 0; i < img.length; i++) {
    var ele = new Object;
    ele.src = img[i];
    ele.cap = cap[i];
    ele.pos = i + 1;
    data.push(ele);
  }
  var qty = data.length;
  genSlides(qty)
}
console.log(data);

function genSlides(qty) {
  for (b = 0; b < qty; b++) {
    var frag = document.createDocumentFragment();
    var slide = document.createElement('figure');
    slide.id = 's' + b;
    slide.className = 'slide';
    var cap = document.createElement('figcaption');
    cap.className = 'cap';
    cap.textContent = data[b].cap;
    var img = document.createElement('img');
    img.classsName = 'img';
    img.src = data[b].src;
    var nth = document.createElement('b');
    nth.className = 'nth';
    nth.textContent = data[b].pos + '/' + data.length;
    slide.appendChild(cap);
    cap.appendChild(nth);
    slide.appendChild(img);
    frag.appendChild(slide);
    con.appendChild(frag);
  }
  return false;
}

function openModal() {
  document.getElementById('xModal').style.display = "block";
  showSlides(slideIndex);
  currentSlide(0);
}

function closeModal() {
  document.getElementById('xModal').style.display = "none";
  var slides = document.querySelectorAll(".slide");
  for (x = 0; x < slides.length; x++) {
    con.removeChild(slides[x]);
  }
}
var slideIndex = 0;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.querySelectorAll(".slide");
  if (n > slides.length - 1) {
    slideIndex = 0
  }
  if (n < 0) {
    slideIndex = slides.length - 1
  }
 
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove('act');
  }
  slides[slideIndex].classList.add('act');
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
var x = document.getElementById("navDemo");
if (x.className.indexOf("w3-show") == -1) {
x.className += " w3-show";
} else { 
x.className = x.className.replace(" w3-show", "");
}
}

// Script to open and close sidebar
function w3_open() {
document.getElementById("mySidebar").style.display = "block";
document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
document.getElementById("mySidebar").style.display = "none";
document.getElementById("myOverlay").style.display = "none";
}