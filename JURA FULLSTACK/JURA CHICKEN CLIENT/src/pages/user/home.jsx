import { Row, Col, Container } from "react-bootstrap";
import { FooterJura } from "../../components/user/FooterJura";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Loading from "../../components/loading";
import Message from "../../components/error";
import { useSelector } from "react-redux";
import { API_URL } from "../../url";

const HomeJura = () => {
	const [search, setSearch] = useState("");
	const [menus, setMenus] = useState([]);
	useEffect(() => {
		getMenus();
	}, []);
	const getMenus = async () => {
		const response = await axios.get(API_URL + "/menu/get");
		setMenus(response.data);
	};
	const { isError, isLoading } = useSelector((state) => state.auth);

	return (
		<div>
			<div className="mt-5 mb-5 mr-5 ml-5">
				<Container>
					{isLoading ? (
						<div className="mb-5">
							<Loading />
						</div>
					) : isError ? (
						<Message variant="alert-danger">{isError}</Message>
					) : (
						<Col className="mt-5 mb-5">
							<h4 className="mt-5">
								<strong>Daftar Produk</strong>
							</h4>
							<Row className="overflow-auto menu mt-5 mb-5 mr-5 ml-5">
								<div class="contd">
									<div class="d-inline-flex p-1 bd-highlight">
										<div class="input-group rounded">
											<input
												// onChange={inputHandler}
												type="search"
												class="form-control rounded"
												placeholder="Search"
												aria-label="Search"
												aria-describedby="search-addon"
												onChange={(e) => setSearch(e.target.value)}
											/>
											<span class="input-group-text border-0" id="search-addon">
												<i class="fas fa-search"></i>
											</span>
										</div>
									</div>
									<div class="lk"></div>
								</div>
								{menus
									.filter((menu_jura) => {
										return search.toLowerCase() === ""
											? menu_jura
											: menu_jura.nama_menu.toLowerCase().includes(search);
									})
									.map((menu_jura, index) => (
										<Col sm={3} xs={5} className="mb-5 mt-1 mr-2 ml-2">
											<Card className="shadow mt-3 mb-3 mr-3 ml-3">
												<Card.Img
													variant="top"
													src={"./img/" + menu_jura.img}
												/>
												<Card.Body>
													<Card.Title>{menu_jura.nama_menu}</Card.Title>
													<Card.Text>Rp. {menu_jura.harga_menu}</Card.Text>
													<a
														href={"/menu/" + menu_jura.uuid}
														class="btn btn-primary">
														See Details
													</a>
												</Card.Body>
											</Card>
										</Col>
									))}
							</Row>
						</Col>
					)}
				</Container>
			</div>
			<FooterJura />
		</div>
	);
};

export default HomeJura;
