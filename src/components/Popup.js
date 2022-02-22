export default function Popup({ $app, initialState }) {
  this.$target = document.createElement("div");
  this.$target.classList.add("newpopup");
  this.$js = document.createElement("script");

  $app.appendChild(this.$target);
  this.state = initialState;

  this.$js.src = "../../public/scripts/popup.js";
  this.$js.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(this.$js);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
    <div class="popup">
    <div class="popup-inner">
      <div>
        <img
          src="src/assets/popup.png"
          alt="popup-img1"
        />
      </div>
      <div class="popup-close">
        <input class="close__check-box" type="checkbox" />
        <span class="close__desc">오늘은 더 이상 보지 않기</span>
        <div id="close-popup-btn" class="close__btn">
        </div>
      </div>
    </div>
  </div>
    `;
  };
  render();
}
