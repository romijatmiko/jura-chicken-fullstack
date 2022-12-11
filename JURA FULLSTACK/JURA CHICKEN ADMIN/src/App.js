import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./pages/admin/HomeScreen";
import AddJura from "./pages/admin/AddMenus";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./pages/admin/menus";
import User from "./pages/admin/user";
import Orders from "./pages/admin/order";
import Login from "./pages/admin/login";
import PrivateRouter from "./auth/privateRoutes";
import FormEditMenu from "./components/admin/FormEditMenu";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/admin/login"
					element={
						<PrivateRouter>
							<Login />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/homepage"
					element={
						<PrivateRouter>
							<HomeScreen />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/users"
					element={
						<PrivateRouter>
							<User />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/menus"
					element={
						<PrivateRouter>
							<Menu />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/menus/add"
					element={
						<PrivateRouter>
							<AddJura />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/menu/update/:id"
					element={
						<PrivateRouter>
							<FormEditMenu />
						</PrivateRouter>
					}
				/>
				<Route
					path="/admin/orders"
					element={
						<PrivateRouter>
							<Orders />
						</PrivateRouter>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
