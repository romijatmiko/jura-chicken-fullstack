import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderJura from "../../components/admin/HeaderJura";
import Card from "react-bootstrap/Card";
import { API_URL } from "../../url";

const HomeScreen = () => {
	const [orders, setOrders] = useState([]);
	useEffect(() => {
		getOrders();
	}, []);
	const getOrders = async () => {
		const response = await axios.get(API_URL + "/order/count/all");
		setOrders(response.data);
	};

	const [sum, setSum] = useState([]);
	useEffect(() => {
		sumOrders();
	}, []);
	const sumOrders = async () => {
		const response = await axios.get(API_URL + "/order/sum/all");
		setSum(response.data);
	};

	const [z, setZ] = useState([]);
	useEffect(() => {
		countUsers();
	}, []);
	const countUsers = async () => {
		const response = await axios.get(API_URL + "/users/count");
		setZ(response.data);
	};
	return (
		<>
			<main className="main-wrap">
				<HeaderJura />
				<div class="flex-container">
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Sales</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">{orders}</Card.Text>
						</Card.Body>
					</Card>
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Pendapatan</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">Rp. {sum}</Card.Text>
						</Card.Body>
					</Card>
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Users</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">{z}</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</main>
		</>
	);
};

export default HomeScreen;
