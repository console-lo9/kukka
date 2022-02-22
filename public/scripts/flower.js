const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");
const flowerProduct = document.querySelector(".flower-products");

const image1 = document.getElementById("image-1");
const image2 = document.getElementById("image-2");
const image3 = document.getElementById("image-3");

const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
const text3 = document.getElementById("text-3");

const price1 = document.getElementById("price-1");
const price2 = document.getElementById("price-2");
const price3 = document.getElementById("price-3");

const slideData = [
  {
    img: "../../src/assets/flower_event_1.jpeg",
    title: "롱엔로우 센터피스 (2/3~3/1)",
    price: "89,000원",
    description: "1월 플라워 클래스",
    tag: ["광화문점", "잠실점", "월계점", "구로점"],
  },
  {
    img: "../../src/assets/flower_event_2.jpg",
    title: "오아시스 리스(2/21~2/27)",
    price: "79,000원",
    description: "1월 플라워 클래스",
    tag: ["광화문점", "잠실점", "월계점", "구로점", "송파점", "부산동례점"],
  },
  {
    img: "../../src/assets/flower_event_3.jpg",
    title: "클래식 핸드타이드(2/28~3/6)",
    price: "79,000원",
    description: "1월 플라워 클래스",
    tag: ["잠실점", "월계점", "구로점", "송파점", "부산동례점"],
  },
];

var index = 0;

btnNext.addEventListener("click", (event) => {
  index++;
  var data = slideData.map((_, i, data) => data[(i + index) % 3]);
  renderItem(data);
});

btnPrev.addEventListener("click", (event) => {
  index--;
  if (index < 0) {
    index = 2;
  }
  var data = slideData.map((_, i, data) => data[(i + index) % 3]);
  renderItem(data);
});

function renderItem(data) {
  image1.src = data[0].img;
  image2.src = data[1].img;
  image3.src = data[2].img;

  text1.innerText = data[0].description;
  text2.innerText = data[1].title;
  text3.innerText = data[2].title;

  //   price1.innerText = data[0].description;
  price2.innerText = data[1].price;
  price3.innerText = data[2].price;
}
