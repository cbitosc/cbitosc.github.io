'use strict';

var banner = document.querySelector('.hero');

var group1 = banner.querySelector('.hero__level_1');
var group2 = banner.querySelector('.hero__level_2');
var group3 = banner.querySelector('.hero__level_3');

var orientation = {
  beta: 0,
  gamma: 0
};

function onMouseMove(e) {
  var clientX = e.clientX;
  var clientY = e.clientY;

  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;

  var xPivot = windowWidth / 2;
  var yPivot = windowHeight / 2;

  // Don't judge my math
  orientation.beta = (xPivot - clientX) / 100;
  orientation.gamma = (yPivot - clientY) / 100;
};

function animationLoop() {
  applyTransforms(orientation.beta, orientation.gamma);

  requestAnimationFrame(animationLoop);
};

var portrait = window.innerWidth < window.innerHeight;

function handleOrientation(evt) {
  console.log(evt);

  var beta = evt.beta % 360;
  var gamma = evt.gamma % 360;
  orientation.beta = beta;
  orientation.gamma = gamma;

  if (portrait) {
    if (beta >= 0 && beta <= 90) {
      orientation.beta = (beta - 45) / 90 * 100;
    } else {
      beta = Math.abs(beta) % 90;
      orientation.beta = beta / 90 * 100;
    }
  } else {
    if (gamma >= 0 && gamma <= 90) {
      orientation.gamma = (gamma - 45) / 90 * 100;
    } else {
      gamma = Math.abs(gamma) % 90;
      orientation.gamma = gamma / 90 * 100;
    }
  }

  if (portrait) {
    applyTransforms(orientation.beta, orientation.gamma);
  } else {
    applyTransforms(orientation.gamma, orientation.beta);
  }
};

function applyTransforms(xPercent, yPercent) {
  console.log(xPercent, yPercent);

  // Moves a lot, contains specs
  group1.style.transform = 'translate(' + xPercent + '%, ' + yPercent + '%)';

  // Moves a little less, contains machinery
  group2.style.transform = 'translate(' + xPercent / 1.25 + '%, ' + yPercent / 1.25 + '%)';

  // Moves a lot less, contains text and art
  group3.style.transform = 'translate(' + xPercent / 1.5 + '%, ' + yPercent / 1.5 + '%)';
};

// TODO: Make this more performant
banner.addEventListener('mousemove', onMouseMove);

if (window.DeviceOrientationEvent) {
  window.addEventListener('deviceorientation', handleOrientation);
}

// Call infinite loop
animationLoop();
