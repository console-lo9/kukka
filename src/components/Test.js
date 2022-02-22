export default function Test({ $app, initialState }) {
  this.$target = document.createElement("div");
  $app.appendChild(this.$target);
  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  const render = () => {
    this.$target.innerHTML = `
              <h1>Board List</h1>
              <li>${this.state.ttaerrim}</li>
           `;
  };
  render();
}
