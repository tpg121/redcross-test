 // Album 0

 var img0 = [
    "images/Apprenticeships.jpeg",
    "images/Evening Classes.jpeg",
    "images/Online Classes.jpg",
    "images/bd1.jpg"
  ];
  var cap0 = ['0.1', '0.2', '0.3', '0.4'];

  // Album 1

  var img1 = [
    "images/Apprenticeships.jpeg",
    "images/Evening Classes.jpeg",
    "images/Online Classes.jpg",
    "images/bd1.jpg"
  ];
  var cap1 = ['1.1', '1.2', '1.3', '1.4',
    '1.5'
  ];

  // Album 2

  var img2 = [
    "images/Apprenticeships.jpeg",
    "images/Evening Classes.jpeg",
    "images/Online Classes.jpg",
    "images/bd1.jpg"
  ];
  var cap2 = ['2.1', '2.2',
    '2.3', '2.4'
  ];

 // Album 3

 var img3 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap3 = ['3.1', '3.2', '3.3', '3.4'];

// Album 4

var img4 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap4 = ['4.1', '4.2', '4.3', '4.4',
  '4.5'
];

// Album 5

var img5 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap5 = ['5.1', '5.2',
  '5.3', '5.4'
];

 // Album 6

 var img6 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap6 = ['6.1', '6.2', '6.3', '6.4'];

// Album 7

var img7 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap7 = ['7.1', '7.2', '7.3', '7.4',
  '7.5'
];

// Album 8

var img8 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap8 = ['8.1', '8.2',
  '8.3', '8.4'
];

// Album 9

var img9 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap9 = ['9.1', '9.2', '9.3', '9.4'];

// Album 10

var img10 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap10 = ['10.1', '10.2', '10.3', '10.4',
'4.5'
];

// Album 11

var img11 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap11 = ['11.1', '11.2',
'11.3', '11.4'
];

 // Album 12

 var img12 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap12 = ['12.1', '12.2', '12.3', '12.4'];

// Album 13

var img13 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap13 = ['13.1', '13.2', '13.3', '13.4',
  '13.5'
];

// Album 14

var img14 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap14 = ['14.1', '14.2',
  '14.3', '14.4'
];

// Album 15

var img15 = [
"images/Apprenticeships.jpeg",
"images/Evening Classes.jpeg",
"images/Online Classes.jpg",
"images/bd1.jpg"
];
var cap15 = ['15.1', '15.2', '15.3', '15'];

// Album 16

var img16 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap16 = ['16.1', '16.2', '16.3', '16.4',
'16.5'
];

// Album 17

var img17 = [
  "images/Apprenticeships.jpeg",
  "images/Evening Classes.jpeg",
  "images/Online Classes.jpg",
  "images/bd1.jpg"
];
var cap17 = ['17.1', '17.2',
'17.3', '17.4'
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