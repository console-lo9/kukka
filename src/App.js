import Header from "./components/Header.js";
import Section from "./components/Section.js";
import Footer from "./components/Footer.js";
import Popup from "./components/Popup.js";

export default function App($app) {
  this.state = {};
  /* Render Children*/

  const header = new Header({ $app, initialState: {} });
  new Section(document.querySelector(".section__container"));
  const footer = new Footer({ $app, initialState: {} });
  const popup = new Popup({ $app, initialState: {} });
}
