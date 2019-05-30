const bannerText = document.querySelector('#bannerText');
const onePage_section = document.querySelectorAll('.onePage-section');
const animationDuration = 1000;
const idlePeriod = 100;
let pageArray = [];
let counter1=0, counter2;
let marker = true;
let lastAnimation = 0;
let index = 0;

const main = document.querySelector('main');
let pageY1, pageY2;

document.addEventListener('DOMContentLoaded', function() {
  onePage_section.forEach((v,i)=>{
    pageArray[i] = {
      index : i
    }
  });
  /* Mouse Wheel Event Handler */
  main.addEventListener('wheel', wheel);
<<<<<<< HEAD

=======
 
>>>>>>> 8d678c4d14a6b5be4dbfb81a25880af47ac8e67f
  /* Touch on Screen Event Handler */
  main.addEventListener('touchstart', function(e) {
    pageY1 = e.targetTouches[0].pageY;
  });
  main.addEventListener('touchmove', function(e) {
    pageY2 = e.targetTouches[0].pageY;
  })
  main.addEventListener('touchend', function(e) {
    var timeNow = new Date().getTime();

    if(timeNow - lastAnimation < idlePeriod + animationDuration) {
      console.log('animation delayed...');
      return;
    } else {
      touchScrollMove(e);
    }
    lastAnimation = timeNow;
  });
});

/* Wheel Event Custom */
function wheel(e) {
  counter1 += 1;
  e = e||window.event;
  var delta = e.deltaY||e.detail||e.wheelDelta;

  if(marker) wheelStart(delta);
  return false;
}
function wheelStart(delta) {
  marker = false;
  directScroll(delta);
  wheelAct();
  console.log('start the wheel');
}
function wheelAct() {
  counter2 = counter1;
  setTimeout(function() {
    if(counter2 == counter1) {
      wheelEnd();
    } else {
      wheelAct();
    }
  }, 100);
}
function wheelEnd() {
  marker = true;
  counter1 = 0;
  counter2 = 0;
}

/* Mouse Wheel Event on Scrolling */
function directScroll(delta) {
  var timeNow = new Date().getTime();
  if(timeNow-lastAnimation < idlePeriod + animationDuration) {
    console.log('animation delayed');
    return;
  }
  if(delta < 0) { upScroll(); } else { downScroll(); }
  lastAnimation = timeNow;
}
function downScroll() {
  if(document.querySelector('.modal-overlay') !== null) return;
  if(index === onePage_section.length - 1) return;
<<<<<<< HEAD

=======
  
>>>>>>> 8d678c4d14a6b5be4dbfb81a25880af47ac8e67f
  onePage_section.forEach((section, i) => {
    if (i === index) {
      section.style.transform = 'translateY(-100%)';
    }
  });
  if(index < 5 && index >= 0) index++;
}
function upScroll() {
  if(document.querySelector('.modal-overlay') !== null) return;

  onePage_section.forEach((section, i) => {
    if (i === index) {
      if(section.previousElementSibling === null) return;
      section.previousElementSibling.style.transform = 'translateY(0px)';
    }
  });
  if(index <= 5 && index > 0) index--;
}

/* Touch Event on Scrolling */
function touchScrollMove(event) {
  var point = event.target.closest('.onePage-section');
  if(document.querySelector('.modal-overlay') !== null) return;
  if(pageY1 === 0 || pageY2 === 0) {
    pageY1 = 0;
    pageY2 = 0;
    return;
  }

  if(pageY1 > pageY2 && index !== onePage_section.length - 1) {
    point.style.transform = 'translateY(-100%)';                          //
    if(index < 5 && index >= 0) index++;                                  //  onePage-section 클래스 간에
  } else if(pageY2 > pageY1 && point.previousElementSibling !== null) {   //  divider 등과 같은 다른 클래스 및
    point.previousElementSibling.style.transform = 'translateY(0px)';     //  태그요소가 존재하지 않을 경우 작동
    if(index <= 5 && index > 0) index--;                                  //
  } else return;

  pageY1 = 0;
  pageY2 = 0;
}

/*
function checkOnePage_scrollDown(section) {
  if(section.nextElementSibling.className === 'onePage-section') {
    section = section.nextElementSibling;
    return section;
  } else {
    checkOnePage_scrollDown(section.nextElementSibling);
  }
}
function checkOnePage_scrollUp(section) {
  if(section.previousElementSibling.className === 'onePage-section') {
    section = section.previousElementSibling;
    return section;
  } else {
    checkOnePage_scrollUp(section.previousElementSibling);
  }
}

window.onscroll = function() {
  var currentScrollY = window.pageYOffset;
  if(currentScrollY >= 10) {
    bannerText.classList.remove('hidden');
  } else {
    bannerText.classList.add('hidden');
  }
}
*/
