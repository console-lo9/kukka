export default function Header({ $app, initialState }) {
  this.$target = document.createElement("div");
  this.$target.classList.add("header");
  this.$js = document.createElement("script");

  $app.appendChild(this.$target);
  this.state = initialState;

  this.$js.src = "./script/header.js";
  this.$js.type = "text/javascript";
  document.getElementsByTagName("head")[0].appendChild(this.$js);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
      <div class="header__container">
          <h1 class="header__logobox">
            <a href="/">
              <!-- 모바일에선 mobile__logo로 변경 -->
              <img
                class="logo--desktop"
                src="./src/assets/desktop__logo.png"
                alt="desktop__logo"
              />
              <img
                class="logo--mobile"
                src="./src/assets/mobile__logo.png"
                alt="mobile__logo"
              />
            </a>
          </h1>
          <div class="header__navbar">
            <ul class="header__navbar--list">
              <li class="item menu--video">동영상</li>
              <li class="item menu--flower">플라워클래스</li>
            </ul>
          </div>
          <div class="header__navicon">
            <a class="navicon--link">
              <img
                class="navicon"
                src="./src/assets/profile.png"
                alt="profile"
              />
            </a>
            <a class="navicon--link">
              <img class="navicon" src="./src/assets/cart.png" alt="cart" />
            </a>
          </div>
        </div>
             `;
  };
  render();
}
