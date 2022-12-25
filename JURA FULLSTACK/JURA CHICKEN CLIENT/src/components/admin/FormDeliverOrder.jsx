import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Row, Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const FormDeliverOrder = () => {
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const [sudahDikirim, setSudahDikirim] = useState([]);
	const [dikirimTanggal, setDikirimTanggal] = useState([]);
	const navigate = useNavigate();
	useEffect(() => {
		getOrders();
	}, []);
	const getOrders = async () => {
		const response = await axios.get(
			"http://localhost:3100/order/admin/get/deliver"
		);
		setOrders(response.data);
	};

	return (
		<div>
			<div className="mt-3">
				<Container fluid>
					<Col className="mt-3"></Col>

					<br></br>
					<Card className="kocak" border="primary" style={{ width: "50rem" }}>
						<h4>
							<p>Orderan Tertunda</p>
							<hr />
						</h4>
						<Table striped>
							<thead>
								<tr>
									<th>No</th>
									<th>Id Order</th>
									<th>Total Harga</th>
									<th>Total Items</th>
									<th>Payment Type</th>
									<th>Sudah Bayar ?</th>
									<th>Sudah Dikirim ?</th>
									<th>Button Update</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((kocak, index) => (
									<tr>
										<td>{index + 1}</td>
										<td>{kocak.uuid}</td>
										<td>{kocak.total_price}</td>
										<td>{kocak.jumlah_items}</td>
										<td>{kocak.payment_type}</td>
										<td>{kocak.sudahBayar}</td>
										<td>{kocak.sudahDikirim}</td>
										<td>
											<Button
												className="h"
												href={"/admin/order/deliver/" + kocak.uuid}
												type="button"
												class="btn btn-success">
												Update Pesanan
											</Button>
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

export default FormDeliverOrder;
