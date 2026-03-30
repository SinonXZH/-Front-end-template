// webpack.prod.js
/* eslint-disable */

import { merge } from "webpack-merge";
import common from "./webpack.common";

export default merge(common, {
  mode: "production",

  devtool: "source-map",
});
