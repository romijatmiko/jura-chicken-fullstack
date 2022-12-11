import React, { useEffect } from "react";
import HeaderJura from "../../components/admin/HeaderJura";
import Card from "react-bootstrap/Card";

const HomeScreen = () => {
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
