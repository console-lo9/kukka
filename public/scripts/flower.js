var slideData = [
  {
    img: "./src/assets/flower_event_1.jpg",
    title: "롱엔로우 센터피스 (2/3~3/1)",
    price: "89,000원",
    description: "1월 플라워 클래스",
    tag: ["광화문점", "잠실점", "월계점", "구로점"],
  },
  {
    img: "./src/assets/flower_event_2.jpg",
    title: "오아시스 리스 (2/21~2/27)",
    price: "79,000원",
    description: "1월 플라워 클래스",
    tag: ["광화문점", "잠실점", "월계점", "구로점", "송파점", "부산동례점"],
  },
  {
    img: "./src/assets/flower_event_3.jpg",
    title: "클래식 핸드타이드 (2/28~3/6)",
    price: "79,000원",
    description: "1월 플라워 클래스",
    tag: ["잠실점", "월계점", "구로점", "송파점", "부산동례점"],
  },
];

var index = 0;

var btnNext = document.querySelector(".next");
var btnPrev = document.querySelector(".prev");

btnPrev.addEventListener("click", (event) => {
  index++;
  render();
});

btnNext.addEventListener("click", (event) => {
  index--;
  if (index < 0) {
    index = 2;
  }
  render();
});

function render() {
  var data = [];
  for (var i = 0; i < slideData.length; i++) {
    data.push(slideData[(i + index) % 3]);
  }
  renderItem(data);

  var showRoom = [];
  for (var i = 0; i < data.length; i++) {
    showRoom.push(data[i].tag);
  }
  renderShowRoom(showRoom);
}

var image1 = document.getElementById("image-1");
var image2 = document.getElementById("image-2");
var image3 = document.getElementById("image-3");

var text1 = document.getElementById("text-1");
var text2 = document.getElementById("text-2");
var text3 = document.getElementById("text-3");

var price1 = document.getElementById("price-1");
var price2 = document.getElementById("price-2");
var price3 = document.getElementById("price-3");

function renderItem(data) {
  image1.src = data[0].img;
  image2.src = data[1].img;
  image3.src = data[2].img;

  text1.innerText = data[0].description;
  text2.innerText = data[1].title;
  text3.innerText = data[2].title;

  price2.innerText = data[1].price;
  price3.innerText = data[2].price;
}

var showRoomList2 = document.getElementById("showRoomList-2");
var showRoomList3 = document.getElementById("showRoomList-3");

function renderShowRoom(showRoom) {
  showRoomList2.innerHTML = "";
  showRoomList3.innerHTML = "";
  for (var i = 0; i < showRoom[1].length; i++) {
    var showRoomItem = document.createElement("a");
    switch (showRoom[1][i]) {
      case "광화문점":
        showRoomItem.setAttribute("class", "gwang");
        break;
      case "잠실점":
        showRoomItem.setAttribute("class", "jam");
        break;
      case "월계점":
        showRoomItem.setAttribute("class", "wolgye");
        break;
      case "구로점":
        showRoomItem.setAttribute("class", "guro");
        break;
      case "송파점":
        showRoomItem.setAttribute("class", "songpa");
        break;
      case "부산동례점":
        showRoomItem.setAttribute("class", "dongrae");
        break;
    }

    showRoomItem.innerHTML = showRoom[1][i];
    showRoomList2.appendChild(showRoomItem);
  }
  for (var i = 0; i < showRoom[2].length; i++) {
    var showRoomItem = document.createElement("a");
    switch (showRoom[2][i]) {
      case "광화문점":
        showRoomItem.setAttribute("class", "gwang");
        break;
      case "잠실점":
        showRoomItem.setAttribute("class", "jam");
        break;
      case "월계점":
        showRoomItem.setAttribute("class", "wolgye");
        break;
      case "구로점":
        showRoomItem.setAttribute("class", "guro");
        break;
      case "송파점":
        showRoomItem.setAttribute("class", "songpa");
        break;
      case "부산동례점":
        showRoomItem.setAttribute("class", "dongrae");
        break;
    }
    showRoomItem.innerHTML = showRoom[2][i];
    showRoomList3.appendChild(showRoomItem);
  }
}
