import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./pages/login/login";
import Keranjang from "./pages/keranjang/keranjang";
import Profile from "./pages/profile/profile";
import Daftar from "./pages/register/register";
import Home from "./pages/home/home";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/" component={Home} exact />
					<Route path="/login" component={Login} />
					<Route path="/register" component={Daftar} />
					<Route path="/keranjang" component={Keranjang} />
					<Route path="/profile" component={Profile} />
				</Switch>
			</Router>
		);
	}
}
