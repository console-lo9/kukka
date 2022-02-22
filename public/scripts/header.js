var navItems = document.querySelectorAll(".item");
var videoSection = document.querySelector(".section__video");
var flowerClassSection = document.querySelector(".section__flower");
var header = document.querySelector(".header");
var headerRect = header.getBoundingClientRect();
var sectionContainer = document.querySelector(".section__container");

var handleUpScroll = (y, endPoint) => {
  var scroll = setInterval(() => {
    if (y <= endPoint) {
      clearInterval(scroll);
      return;
    }
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
  console.log(endPointVideo);
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

function handleWindowScroll() {
  var bodyRect = document.body.getBoundingClientRect();
  var bodyMaxWidth = bodyRect.width;
  var headerHeight = header.offsetHeight;
  if (bodyMaxWidth < 1024) {
    if (window.scrollY >= headerHeight) {
      header.classList.add("border");
    } else {
      header.classList.remove("border");
    }
  } else {
    if (window.scrollY > 0) {
      header.classList.add("border");
    } else {
      header.classList.remove("border");
    }
  }
}

navItems.forEach((item) => item.addEventListener("click", handleClick));
window.addEventListener("scroll", handleWindowScroll);
