import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Menus } from "../../components/menu/menu";
import { API_URL } from "../../components/url/url";
import axios from "axios";
import { NavbarJura } from "../../components/navbarj";
import { Footer } from "../../components/footer";

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menus: [],
		};
	}

	componentDidMount() {
		axios
			.get(API_URL + "menu")
			.then((res) => {
				const menus = res.data;
				this.setState({ menus });
			})
			.catch((error) => {
				console.log("Error ", error);
			});
	}

	render() {
		const { menus } = this.state;
		return (
			<div>
				<NavbarJura />
				<div className="mt-3">
					<Container fluid>
						<Col className="mt-3">
							<h4>
								<strong>Daftar Produk</strong>
							</h4>
							<hr />
							<Row className="overflow-auto menu">
								{menus && menus.map((menu) => <Menus menu={menu} />)}
							</Row>
						</Col>
					</Container>
				</div>
				<Footer />
			</div>
		);
	}
}
