import React, { Component } from "react";
import firebaseApp from "./firebase/Firebase";
import Modal from "react-bootstrap/Modal";
import React, { useState, useEffect } from "react";

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered>
			<Modal.Header closeButton></Modal.Header>
			<Modal.Body>
				<div className="mt-4 text-center">
					<i class="fa-solid fa-check-to-slot fa-4x"></i>
					<h3>Berhasil Menambahkan Menu</h3>
					<p>Terimakasih Silahkan Tambahkan menu lainya!</p>
				</div>
			</Modal.Body>
			<Modal.Footer>
				<Button onClick={props.onHide}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

class Category extends Component {
	constructor(props) {
		super(props);
		this.deleteCategory = this.deleteCategory.bind(this);
	}

	deleteCategory() {
		var proceedDelete = confirm("Are really wanted to delete this data?");
		if (proceedDelete) {
			firebaseApp
				.database()
				.ref("categories/" + this.props.item.key)
				.remove();
			alert("Data deleted successfully!");
		}
	}

	render() {
		const [modalShow, setModalShow] = React.useState(false);
		return (
			<li
				key={this.props.item.key}
				className="list-group-item d-flex justify-content-between">
				{this.props.item.name}
				<div className="wrapper w-25 d-flex justify-content-around">
					<MyVerticallyCenteredModal
						show={modalShow}
						onHide={() => setModalShow(false)}
					/>
					<button
						onClick={() => {
							setModalShow(true);
						}}
						className="btn btn-info btn-xs">
						Show
					</button>
					<button className="btn btn-warning btn-xs">Edit</button>
					<button
						className="btn btn-danger btn-xs"
						onClick={this.deleteCategory}>
						Delete
					</button>
				</div>
			</li>
		);
	}
}

export default Category;
