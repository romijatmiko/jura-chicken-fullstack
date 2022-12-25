import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Col, Container } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../../url";

const User = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers();
	}, []);

	const getUsers = async () => {
		const response = await axios.get(API_URL + "/users/get");
		setUsers(response.data);
	};

	return (
		<div>
			<div className="mt-3">
				<Container fluid>
					<br></br>
					<Card className="kocak" border="primary" style={{ width: "50rem" }}>
						<h4>
							<p>List Users</p>
							<hr />
						</h4>
						<Table striped>
							<thead>
								<tr>
									<th>No</th>
									<th>Nama User</th>
									<th>Email User</th>
									<th>Role User</th>
									<th>Tanggal User Daftar</th>
									<th>Banned Button</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user_jura, index) => (
									<tr key={user_jura.uuid}>
										<td>{index + 1}</td>
										<td>{user_jura.nama_user}</td>
										<td>{user_jura.email_user}</td>
										<td>{user_jura.role}</td>
										<td>{user_jura.createdAt}</td>
										<td>
											<Link
												to={`/user/edit/${user_jura.uuid}`}
												class="btn btn-primary">
												BANNED USER
											</Link>
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

export default User;
