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
import LoginJura from "./pages/user/login";
import HomeJura from "./pages/user/home";
import UserRoute from "./auth/UserRoute";
import Profile from "./pages/user/profile";
import Keranjang from "./pages/user/keranjang";
import Register from "./pages/user/register";
import Details from "./pages/user/menuDetails";
import { NavbarJura } from "./components/user/navbarj";
import { useDispatch, useSelector } from "react-redux";
import { CartProvider } from "react-use-cart";
import Alamat from "./pages/user/orderAddres";
import { FooterJura } from "./components/user/FooterJura";
import OrderStatus from "./pages/user/orderStatus";
import SuccesPage from "./pages/user/orderSuccesPage";
import Wow from "./components/user/createOrderLoading";

function App() {
	const { isSuccess } = useSelector((state) => state.auth);
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

				<Route
					path="/admin/login"
					element={
						<PrivateRouter>
							<Login />
						</PrivateRouter>
					}
				/>
				<Route
					path="/login"
					element={
						<UserRoute>
							<LoginJura />
						</UserRoute>
					}
				/>
				<Route path="/register" element={<Register />} />
				<Route
					path="/"
					element={
						<UserRoute>
							<CartProvider>
								<NavbarJura />
								<HomeJura />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/profile/:id"
					element={
						<UserRoute>
							<CartProvider>
								<Profile />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/menu/:id"
					element={
						<UserRoute>
							<CartProvider>
								<Details />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/keranjang/:id"
					element={
						<UserRoute>
							<CartProvider>
								<Keranjang />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/order/details/:id"
					element={
						<UserRoute>
							<CartProvider>
								<Alamat />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/order/status/:id"
					element={
						<UserRoute>
							<CartProvider>
								<NavbarJura />
								<OrderStatus />
							</CartProvider>
							<FooterJura />
						</UserRoute>
					}
				/>
				<Route
					path="/order/done/:id"
					element={
						<UserRoute>
							<CartProvider>
								<SuccesPage />
							</CartProvider>
						</UserRoute>
					}
				/>
				<Route
					path="/order/loading/:id"
					element={
						<UserRoute>
							<CartProvider>
								<Wow />
							</CartProvider>
						</UserRoute>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}
export default App;
