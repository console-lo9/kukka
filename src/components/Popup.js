export default function Header({ $app, initialState }) {
  this.$target = document.createElement("div");
  this.$target.classList.add("popup");
  this.$js = document.createElement("script");

  $app.appendChild(this.$target);
  this.state = initialState;

  this.$js.src = "./public/scripts/popup.js";
  this.$js.type = "text/javascript";
  document.getElementsByTagName("popup")[0].appendChild(this.$js);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `<div class="popup">
    <div class="popup-inner">
      <div>
        <img
          src="https://kukka-2-media-123.s3.amazonaws.com/media/class-name/ClassContentsProductImage/663/0_1.jpg"
          alt="popup-img1"
        />
      </div>
      <div class="popup-close">
        <input class="close__check-box" type="checkbox" /><span
          class="close__desc"
          >오늘은 더 이상 보지 않기</span
        >
        <div id="close-popup-btn" class="close__btn">X</div>
      </div>
    </div>
  </div>`;
  };
  render();
}
