// import React from "react";
// import App from "./App";
// import "./styles.scss";
import "antd/dist/antd.css";

// import RouterConfig from "./router/RouterConfig";

// var mountNode = document.getElementById("app");
// ReactDOM.render(<RouterConfig />, mountNode);
import React from "react";
import ReactDOM from "react-dom";

import dva, { connect } from "dva";
import RouterConfig from "./router/RouterConfig";
import { createHashHistory } from "history";
import createLoading from "dva-loading";

//import "./style.css";

// 1. Initialize
const app = dva();
app.use(createLoading());

// 2. Model
app.model({
  namespace: "count",
  state: 0,
  reducers: {
    add(count) {
      return count + 1;
    },
    minus(count) {
      return count - 1;
    },
  },
});

// 3. View

// 4. Router
app.router(() => <RouterConfig />);

// 5. Start
app.start("#app");
console.log(app);
