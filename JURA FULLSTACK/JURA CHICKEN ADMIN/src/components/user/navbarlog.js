import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./logo.png";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export function NavbarJura() {
	const [inputText, setInputText] = useState("");
	let inputHandler = (e) => {
		//convert input text to lower case
		var lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};
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
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link href="/">All Menu</Nav.Link>
						<Nav.Link href="/keranjang">Keranjang</Nav.Link>
						<NavDropdown title="E-Jura" id="collasible-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">
								Top Up E-Jura
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.2">
								Cek Riwayat Top Up
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								Laporkan Masalah
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>
					<Nav>
						<div class="me-5">
							<div class="input-group rounded">
								<input
									onChange={inputHandler}
									type="search"
									class="form-control rounded"
									placeholder="Search"
									aria-label="Search"
									aria-describedby="search-addon"
								/>
								<span class="input-group-text border-0" id="search-addon">
									<i class="fas fa-search"></i>
								</span>
							</div>
						</div>
					</Nav>
					<Nav>
						<Nav.Link href="/">
							<i class="fa" style="font-size:24px">
								&#xf07a;
							</i>
							<span class="badge badge-warning" id="lblCartCount">
								{" "}
								5{" "}
							</span>
						</Nav.Link>
						<Nav.Link href="/">
							<i class="fa-solid fa-user"></i>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
