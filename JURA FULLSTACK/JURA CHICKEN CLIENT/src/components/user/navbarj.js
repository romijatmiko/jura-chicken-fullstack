import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import { useDispatch, useSelector } from "react-redux";
import { LogOut, reset } from "../../auth/authSlice";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";

export function NavbarJura() {
	const { totalItems } = useCart();
	const { user, isSuccess } = useSelector((state) => state.auth);
	const { navbarLogin } = { isSuccess, user };
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const logout = () => {
		dispatch(LogOut());
		dispatch(reset());
		navigate("/login");
	};
	const icons = <i class="fa-solid fa-user fa-lg"></i>;
	const icons2 = <i class="fa-solid fa-wallet fa-lg"></i>;
	return (
		<Navbar collapseOnSelect expand="lg" bg="light" variant="light">
			<Container>
				<Navbar.Brand href="/">
					<img
						src={logo}
						width="60"
						height="60"
						className="d-inline-block align-top"
						alt="React Bootstrap logo"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav mr-3">
					<Nav className="me-auto">
						<Nav.Link href="/">All Menu</Nav.Link>
						<Nav.Link href="/">Promo Menarik</Nav.Link>
						<Nav.Link href="/">FAQ</Nav.Link>
					</Nav>
					{isSuccess ? (
						<Nav>
							<div className="ggz">
								<Nav.Link href={"/keranjang/" + user.uuid}>
									<i class="fa-solid fa-cart-shopping fa-lg"></i>
									<span class="badge badge-warning" id="lblCartCount">
										{" "}
										{totalItems}{" "}
									</span>
								</Nav.Link>
							</div>
							<NavDropdown title={icons} id="collasible-nav-dropdown">
								<NavDropdown.Item href={"/profile/" + user.uuid}>
									My Profile
								</NavDropdown.Item>
								<NavDropdown.Item onClick={logout} class="btn btn-danger">
									Logout
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					) : (
						<div>
							<Nav>
								<Nav.Link href="/login">Login</Nav.Link>
								<Nav.Link href="/register">Daftar</Nav.Link>
							</Nav>
						</div>
					)}
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
