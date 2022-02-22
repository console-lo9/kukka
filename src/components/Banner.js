export default function Banner({ $app, initialState }) {
  this.$target = document.createElement("section");
  this.$target.classList.add("banner__container");

  $app.appendChild(this.$target);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
    <div class="d-flex flex-row">
    <div
      id="carouselExampleIndicators"
      class="carousel slide"
      data-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          class="active"
        ></li>
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="1"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            class="d-block w-100"
            src="src/assets/carousel_left.png"
            alt="First slide"
          />
          <strong class="banner__name">꾸까 브랜드 이야기</strong>
          <div class="banner__desc">
            <p>꽃으로 라이프스타일을 만들어가는</p>
            <p>kukka의 문화를 소개해요.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img
            class="d-block w-100"
            src="src/assets/carousel_right.png"
            alt="Second slide"
          />
          <strong class="banner__name">꾸까 오프라인 쇼룸</strong>
          <div class="banner__desc">
            <p>꽃을 가까이서 만져보고 향기도 맡아보고,</p>
            <p>
              꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸
            </p>
          </div>
        </div>
      </div>
      <div class="banner__button">
        <button role="button" class="owl-dot">
          <span> </span>
        </button>
        <button role="button" class="owl-dot">
          <span> </span>
        </button>
      </div>
    </div>
    <div class="p-2 banner__image">
      <span class="banner__left_img mobile real_img"></span>
      <span class="banner__left_img real_img pc"></span>
      <strong class="banner__name">꾸까 브랜드 이야기</strong>
      <div class="banner__desc">
        <p>꽃으로 라이프스타일을 만들어가는</p>
        <p>kukka의 문화를 소개해요.</p>
        <span class="banner_button">Brand story</span>
      </div>
    </div>
    <div class="p-2 banner__image">
      <span class="banner__right_img mobile real_img"></span>
      <span class="banner__right_img real_img pc"></span>
      <strong class="banner__name">꾸까 오프라인 쇼룸</strong>
      <div class="banner__desc">
        <p>꽃을 가까이서 만져보고 향기도 맡아보고,</p>
        <p>꽃 속에서 작은 휴식을 누릴 수 있는 kukka의 오프라인 쇼룸</p>
        <span class="banner_button">꾸까 쇼룸 안내</span>
      </div>
    </div>
  </div>
      `;
  };
  render();
}
