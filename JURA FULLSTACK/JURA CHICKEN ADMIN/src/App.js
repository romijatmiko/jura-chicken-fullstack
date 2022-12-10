import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "./pages/login";
import HomeScreen from "./pages/HomeScreen";
import AddMenus from "./pages/Menu/AddMenus";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/Menu/menus";
import User from "./pages/Users/user";
import Orders from "./pages/Orders/order";
import Login from "./pages/login";

export default class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<HomeScreen />} />
					<Route path="/users" element={<User />} />
					<Route path="/menus" element={<Menu />} />
					<Route path="/menus/add" element={<AddMenus />} />
					<Route path="/orders" element={<Orders />} />
				</Routes>
			</BrowserRouter>
		);
	}
}
