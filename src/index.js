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
import ncovi_19 from "./models/ncovi/ncovi_19";
//import "./style.css";

// 1. Initialize
const app = dva();
app.use(createLoading());

// 2. Model
app.model(ncovi_19);

// 3. View

// 4. Router
app.router(() => <RouterConfig />);

// 5. Start
app.start("#app");
console.log(app);
