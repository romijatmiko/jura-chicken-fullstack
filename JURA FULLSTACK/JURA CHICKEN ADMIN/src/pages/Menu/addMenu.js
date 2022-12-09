import React from "react";
import { Header } from "../../components/Header";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const addMenu = () => {
	return (
		<>
			<main className="main-wrap">
				<Header />
				<br></br>
				<br></br>
				<Card border="primary" style={{ width: "50rem" }}>
					<Card.Header className="text-center">
						<p class="font-weight-bold">Jura Chicken Menu</p>
					</Card.Header>
					<Card.Body>
						<Form>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Nama Menu</Form.Label>
								<Form.Control type="text" placeholder="Enter email" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Image Menu</Form.Label>
								<Form.Control type="text" placeholder="tambahkan Link" />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Deskripsi Menu</Form.Label>
								<Form.Control as="textarea" rows={3} />
							</Form.Group>
							<Form.Group className="mb-3" controlId="formBasicEmail">
								<Form.Label>Stok Menu</Form.Label>
								<Form.Control type="text" placeholder="tambahkan Link" />
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Harga Menu</Form.Label>
									<Form.Control type="text" placeholder="tambahkan Link" />
								</Form.Group>
							</Form.Group>
							<Button variant="primary" type="submit">
								Submit
							</Button>
						</Form>
					</Card.Body>
				</Card>
				<br></br>
				<br></br>
			</main>
		</>
	);
};

export default addMenu;
