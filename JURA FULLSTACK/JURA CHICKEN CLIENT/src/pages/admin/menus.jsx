import HeaderJura from "../../components/admin/HeaderJura";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../url";

const Menu = () => {
	const [menus, setMenus] = useState([]);

	useEffect(() => {
		getMenus();
	}, []);

	const getMenus = async () => {
		const response = await axios.get(API_URL + "/menu/get");
		setMenus(response.data);
	};

	const deleteMenu = async (menuId) => {
		await axios.delete(API_URL + `/menu/delete/${menuId}`);
		getMenus();
	};
	return (
		<div>
			<HeaderJura />
			<div className="mt-3">
				<Container fluid>
					<Col className="mt-3">
						<hr />
					</Col>
					<button
						onClick={(e) => {
							e.preventDefault();
							window.location.href = "/admin/menus/add";
						}}
						className="h"
						type="button"
						class="btn btn-primary"
						style={{
							marginRight: 10,
							marginLeft: 10,
							marginTop: 10,
							marginBottom: 10,
							padding: 15,
						}}>
						Tambah Menu
					</button>
					<hr />
					<br></br>
					<Card className="kocak" border="primary" style={{ width: "auto" }}>
						<h4>
							<p>List Menus</p>
							<hr />
						</h4>
						<Table striped>
							<thead>
								<tr>
									<th>No</th>
									<th>Nama Menu</th>
									<th>Stok Menu</th>
									<th>Harga Menu</th>
									<th>Dibuat Tanggal</th>
									<th>Diedit Tanggal</th>
									<th>Edit Button</th>
									<th>Delete Button</th>
								</tr>
							</thead>
							<tbody>
								{menus.map((menu_jura, index) => (
									<tr key={menu_jura.uuid}>
										<td>{index + 1}</td>
										<td>{menu_jura.nama_menu}</td>
										<td>{menu_jura.stok}</td>
										<td>{menu_jura.harga_menu}</td>
										<td>{menu_jura.createdAt}</td>
										<td>{menu_jura.updatedAt}</td>
										<td>
											<Link
												to={`/admin/menu/update/${menu_jura.uuid}`}
												class="btn btn-primary">
												Edit
											</Link>
										</td>
										<td>
											<button
												onClick={() => deleteMenu(menu_jura.uuid)}
												class="btn btn-danger">
												Delete
											</button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</Card>
					<br></br>
					<br></br>
				</Container>
			</div>
		</div>
	);
};

export default Menu;
