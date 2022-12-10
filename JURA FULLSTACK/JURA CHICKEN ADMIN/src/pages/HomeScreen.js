import React from "react";
import { Header } from "../components/Header";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

const HomeScreen = () => {
	return (
		<>
			<main className="main-wrap">
				<Header />
				<div class="flex-container">
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Sales</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">110</Card.Text>
						</Card.Body>
					</Card>
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Sales</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">110</Card.Text>
						</Card.Body>
					</Card>
					<Card className="homeCards">
						<Card.Body>
							<Card.Title>
								<strong>Total Sales</strong>
							</Card.Title>
							<br></br>
							<Card.Text className="he">110</Card.Text>
						</Card.Body>
					</Card>
				</div>
			</main>
		</>
	);
};

export default HomeScreen;
