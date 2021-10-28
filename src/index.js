import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./app/store";
import App from "./App";
import { BrowserRouter as Router } from 'react-router-dom'
import 'antd/dist/antd.css'
// take the react component and show it on the screen
ReactDOM.render(<Router>
    <Provider store={store} >
        <App />
    </Provider>
</Router>, document.getElementById("root"));
