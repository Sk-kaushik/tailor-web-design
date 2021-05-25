let tab = document.querySelectorAll(".tabs");
// Get the header
var header = document.querySelector(".nav");

let stylesTab = document.querySelectorAll(".stylesTab");
let stylesTypeContainer = document.querySelectorAll(".stylesTypeContainer");
let typeContainer = document.querySelectorAll(".typeContainer");
let indicator = document.querySelector(".activeBg");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let tabIndex = 0;
let slideIndex = 1;

$(".burger").on("click", function () {
  $(this).toggleClass("rotate");
  $("#myNav").toggleClass("open");
});

$(".nav-item a").on("click", function () {
  $(".burger").removeClass("rotate")
  $("#myNav").removeClass("open")
})

$(".tabs").on("click", function () {
  $(this).addClass("activeTab").siblings().removeClass("activeTab");
  var id = $(this).attr("id");
  switch (id) {
    case "tuxedo":
      $(".activeBg").css("left", `calc(calc(100%/6)*0)`);
      $(".tuxedo")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 0;
      showDivs(slideIndex, tabIndex);
      break;
    case "suit":
      $(".activeBg").css("left", `calc(calc(100%/6)*1)`);
      console.log("suit");
      $(".suit")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 1;
      showDivs(slideIndex, tabIndex);

      break;
    case "jacket":
      $(".activeBg").css("left", `calc(calc(100%/6)*2)`);
      console.log("jacket");
      $(".jacket")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 2;
      showDivs(slideIndex, tabIndex);

      break;
    case "shirt":
      $(".activeBg").css("left", `calc(calc(100%/6)*3)`);
      console.log("shirt");
      $(".shirt")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 3;
      showDivs(slideIndex, tabIndex);
      break;
    case "trouser":
      $(".activeBg").css("left", `calc(calc(100%/6)*4)`);
      console.log("trouser");
      $(".trouser")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 4;
      showDivs(slideIndex, tabIndex);

      break;
    case "shoe":
      $(".activeBg").css("left", `calc(calc(100%/6)*5)`);
      console.log("shoe");
      $(".shoe")
        .addClass("activeTabContent")
        .siblings()
        .removeClass("activeTabContent");
      tabIndex = 5;
      showDivs(slideIndex, tabIndex);
      break;
  }
});

showDivs(slideIndex, tabIndex);

function plusDivs(n, tab) {
  showDivs((slideIndex += n), tab);
  console.log(tab);
}

function showDivs(n, tab) {
  var i;
  if (tab === 0) {
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  } else if (tab === 1) {
    var x = document.getElementsByClassName("mySlides1");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  } else if (tab === 2) {
    var x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  } else if (tab === 3) {
    var x = document.getElementsByClassName("mySlides3");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  } else if (tab === 4) {
    var x = document.getElementsByClassName("mySlides4");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  }
  else if (tab === 5) {
    var x = document.getElementsByClassName("mySlides5");
    if (n > x.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
    console.log(tab);
  }
}


// When the user scrolls the page, execute myFunction
// window.onscroll = function () { myFunction() };
// var sticky = header.offsetTop;
// function myFunction() {
//   header.classList.add("sticky")
//   if (window.pageYOffset > sticky) {
//     // header.classList.add("sticky");
//     console.log("no");
//     console.log(window.pageYOffset);

//   } else {
//     // header.classList.remove("sticky");
//     console.log(window.pageYOffset);
//     header.classList.remove("sticky")
//     console.log("yes");


//   }
// } 