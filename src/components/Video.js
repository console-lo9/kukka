export default function Video({ $app, initialState }) {
  this.$target = document.createElement("section");
  this.$target.classList.add("section__video");

  $app.appendChild(this.$target);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
      <div class="navbar--mobile">
        <ul class="list--mobile">
          <li class="item--mobile menu--video">동영상</li>
          <li class="item--mobile menu--flower">플라워클래스</li>
        </ul>
      </div>
      <iframe
        class="video__youtube"
        src="https://www.youtube.com/embed/4-eFPCvI1yk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
  
             `;
  };
  render();
}
