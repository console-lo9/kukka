var navItems = document.querySelectorAll(".item");
var videoSection = document.querySelector(".section__video");
var flowerClassSection = document.querySelector(".section__flower");
var header = document.querySelector(".header");
var headerRect = header.getBoundingClientRect();
console.log(header);

var handleUpScroll = (y, endPoint) => {
  var scroll = setInterval(() => {
    if (y <= endPoint) {
      clearInterval(scroll);
      return;
    }
    console.log(y);
    window.scrollTo(0, y);
    y -= (y + 1) * 0.03;
  }, 10);
};

var handleDownScroll = (y, endPoint) => {
  var scroll = setInterval(() => {
    if (y >= endPoint) {
      clearInterval(scroll);
      return;
    }
    window.scrollTo(0, y);
    y += (y + 1) * 0.07;
  }, 10);
};

var handleClick = (e) => {
  console.log(e.target);
  var target = e.target;
  var currentY = window.scrollY;
  var endPointVideo = videoSection.offsetTop - headerRect.height;
  var endPointFC = flowerClassSection.offsetTop - headerRect.height;
  if (target.classList.contains("menu--video")) {
    if (currentY <= endPointVideo) {
      handleDownScroll(currentY, endPointVideo);
    } else {
      handleUpScroll(currentY, endPointVideo);
    }
  } else if (target.classList.contains("menu--flower")) {
    if (currentY <= endPointFC) {
      handleDownScroll(currentY, endPointFC);
    } else {
      handleUpScroll(currentY, endPointFC);
    }
  }
};

navItems.forEach((item) => item.addEventListener("click", handleClick));
