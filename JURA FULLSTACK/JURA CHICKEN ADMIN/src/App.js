import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Login from "./pages/login";
import HomeScreen from "./pages/HomeScreen";
import addMenu from "./pages/Menu/addMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/Menu/menus";
import User from "./pages/Users/user";
import Orders from "./pages/Orders/order";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={HomeScreen} exact />
					<Route path="/menus" component={Menu} exact />
					<Route path="/users" component={User} exact />
					<Route path="/orders" component={Orders} exact />
					{/* <Route path="/login" component={Login} /> */}
				</Switch>
			</Router>
		);
	}
}
