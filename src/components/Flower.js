export default function Flower({ $app, initialState }) {
  this.$target = document.createElement("section");
  this.$target.classList.add("section__flower");
  $app.appendChild(this.$target);

  this.$js = document.createElement("script");
  this.$js.src = "./public/scripts/flower.js";
  this.$js.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(this.$js);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  return (this.$target.innerHTML = `
    <div class="flower-container">
            <div class="flower-contents-head">
              <h3>꽃과 함께 하는 일상, <b>플라워클래스</b></h3>
            </div>
            <div class="flower__change">
              <button class="btn prev"></button>
              <div class="flower-products">
                <div class="event-class">
                  <a>
                    <img
                      id="image-1"
                      src="./src/assets/flower_event_1.jpeg"
                    />
                    <div class="flower__text">
                      <span>새로운 일상을 경험하는</span>
                      <span id="text-1">1월 플라워 클래스</span>
                      <span id="price-1"></span>
                    </div>
                  </a>
                </div>
                <div class="special-class">
                  <div class="flower__item">
                    <img
                      class="thumnail"
                      id="image-2"
                      src="./src/assets/flower_event_2.jpg"
                    />
                    <div class="summary">
                      <span class="name" id="text-2"
                        >오아시스 리스(2/21~2/27)</span
                      >
                      <span class="price" id="price-2">79,000원</span>
                      <div class="tag" id="showRoomList-2">
                        <a>광화문점</a>
                        <a>잠실점</a>
                        <a>월계점</a>
                        <a>구로점</a>
                        <a>송파점</a>
                        <a>부산동례점</a>
                      </div>
                    </div>
                  </div>
                  <div class="flower__item">
                    <img
                      class="thumnail"
                      id="image-3"
                      src="./src/assets/flower_event_3.jpg"
                    />
                    <div class="summary">
                      <span class="name" id="text-3"
                        >클래식 핸드타이드(2/28~3/6)</span
                      >
                      <span class="price" id="price-3">79,000원</span>
                      <div class="tag" id="showRoomList-3">
                        <a>잠실점</a>
                        <a>월계점</a>
                        <a>구로점</a>
                        <a>송파점</a>
                        <a>부산동례점</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn next"></button>
            </div>
          </div>
          <br />
             `);
  //   render();
}
