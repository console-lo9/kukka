import Video from "./Video.js";
import Flower from "./Flower.js";
import Banner from "./Banner.js";

export default function Section($app) {
  this.state = {};
  /* Render Children*/

  const video = new Video({ $app, initialState: {} });
  const flower = new Flower({ $app, initialState: {} });
  const banner = new Banner({ $app, initialState: {} });
}
