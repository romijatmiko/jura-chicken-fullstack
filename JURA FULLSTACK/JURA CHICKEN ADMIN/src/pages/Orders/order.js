import React from "react";
import { Header } from "../../components/Header";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Row, Col, Container } from "react-bootstrap";

const Orders = () => {
	return (
		<div>
			<Header />
			<div className="mt-3">
				<Container fluid>
					<Col className="mt-3">
						<hr />
					</Col>
					<button
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
					<Card className="kocak" border="primary" style={{ width: "50rem" }}>
						<h4>
							<p>List Menus</p>
							<hr />
						</h4>
						<Table striped>
							<thead>
								<tr>
									<th>No</th>
									<th>Nama Menu</th>
									<th>Image Menu</th>
									<th>Stok Menu</th>
									<th>Harga Menu</th>
									<th>Edit Button</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td>
										<button className="h" type="button" class="btn btn-danger">
											Edit Menu
										</button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td>
										<button className="h" type="button" class="btn btn-primary">
											Tambah Menu
										</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
									<td>
										<button className="h" type="button" class="btn btn-primary">
											Tambah Menu
										</button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
								<tr>
									<td>3</td>
									<td colSpan={2}>Larry the Bird</td>
									<td>@twitter</td>
								</tr>
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

export default Orders;
