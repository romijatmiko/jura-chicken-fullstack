import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../auth/authSlice";

const HeaderJura = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user } = useSelector((state) => state.auth);

	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate("/admin/login");
	};
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
				<Container>
					<Navbar.Brand href="/admin/homepage">
						<img
							src={logo}
							width="60"
							height="60"
							className="d-inline-block align-top"
							alt="React Bootstrap logo"
						/>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/admin/homepage">Homepage</Nav.Link>
							<Nav.Link href="/admin/menus">Menus</Nav.Link>
							<Nav.Link href="/admin/users">Users</Nav.Link>
							<Nav.Link href="/admin/orders">Orderan Tertunda</Nav.Link>
							<Nav.Link href="/admin/orders">Orders Details</Nav.Link>
							<Nav.Link href="/admin/orders/delivery">Orders Sampai</Nav.Link>
						</Nav>
						<Nav>
							<button onClick={logout} class="btn btn-danger">
								Log out
							</button>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};
export default HeaderJura;
