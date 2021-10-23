import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
// take the react component and show it on the screen
ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
