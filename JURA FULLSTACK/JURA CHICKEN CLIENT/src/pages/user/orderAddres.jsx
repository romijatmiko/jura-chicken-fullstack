import React, { useState, useEffect } from "react";
import Loading from "../../components/loading";
import Message from "../../components/error";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import Form from "react-bootstrap/Form";
import {
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";
import { API_URL } from "../../url";

function Alamat() {
	const { isSucces, isLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	const { id } = useParams();

	//order

	const {
		isEmpty,
		items,
		cartTotal,
		updateItemQuantity,
		totalItems,
		totalUniqueItems,
	} = useCart();

	const [total_price, setTotal_price] = useState("");
	const [jumlah_items, setJumlah_items] = useState("");
	const [total_unique_items, setTotal_unique_items] = useState("");
	const [details, setDetails] = useState("");
	const [payment_type, setPayment_type] = useState("");
	const [userJuraUuid, setUserJuraUuid] = useState("");
	const navigate = useNavigate();
	const [msg, setMsg] = useState("");

	useEffect(() => {
		setDetails(items);
		setTotal_price(cartTotal);
		setJumlah_items(totalItems);
		setTotal_unique_items(totalUniqueItems);
		setUserJuraUuid(id);
	}, []);

	const createOrder = async (e) => {
		e.preventDefault();
		try {
			await axios.post(API_URL + "/order/add", {
				total_price: total_price,
				jumlah_items: jumlah_items,
				total_unique_items: total_unique_items,
				details: details,
				payment_type: payment_type,
				userJuraUuid: userJuraUuid,
			});
			navigate("/order/loading/" + id);
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	// const loadings = () => {
	// 	// 👇️ navigate to /contacts
	// };
	// const wow = () => {
	// 	// perform some task here
	// 	navigate("/order/loading/" + id);
	// 	createOrder();
	// };

	return (
		<>
			{isLoading ? (
				<div className="mb-5">
					<Loading />
				</div>
			) : isSucces ? (
				<div className="mb-5">
					<Loading />
				</div>
			) : (
				<>
					<section className="vh-100" style={{ backgroundColor: "#fffff" }}>
						<MDBContainer className="py-5 h-100">
							<div class="success-container-v">
								<div class="row">
									<Form id=" gg" onSubmit={createOrder} method="post">
										<section class="order-form my-4 mx-4">
											<div class="container pt-4">
												<div class="row">
													<div class="col-12">
														<div class="row mx-4">
															<div class="col-12 mb-4">
																<label class="order-form-label">
																	<strong>Pilih Payment Method</strong>
																</label>
															</div>
															<div class="col-12 col-sm-6">
																<div class="form-check mb-2">
																	<input
																		class="form-check-input"
																		type="radio"
																		value="bank_transfer"
																		onChange={(e) =>
																			setPayment_type(e.target.value)
																		}
																		name="flexRadioDefault"
																		id="flexRadioDefault2"
																	/>
																	<label
																		class="form-check-label"
																		for="flexRadioDefault2">
																		{" "}
																		via Bank{" "}
																	</label>
																</div>
																<div class="form-check mb-2">
																	<input
																		value="dana"
																		onChange={(e) =>
																			setPayment_type(e.target.value)
																		}
																		class="form-check-input"
																		type="radio"
																		name="flexRadioDefault"
																		id="flexRadioDefault2"
																	/>
																	<label
																		class="form-check-label"
																		for="flexRadioDefault2">
																		{" "}
																		via Dana{" "}
																	</label>
																</div>

																<div class="form-check mb-2">
																	<input
																		value="ovo"
																		onChange={(e) =>
																			setPayment_type(e.target.value)
																		}
																		class="form-check-input"
																		type="radio"
																		name="flexRadioDefault"
																		id="flexRadioDefault2"
																	/>
																	<label
																		class="form-check-label"
																		for="flexRadioDefault2">
																		{" "}
																		via OVO{" "}
																	</label>
																</div>
															</div>
														</div>

														{/* <div class="row mt-3 mx-4">
															<div class="col-12">
																<label class="order-form-label">
																	Alamat Pengiriman
																</label>
															</div>
															<div class="col-12">
																<input
																	class="order-form-input"
																	placeholder="Street Address"
																/>
															</div>
															<div class="col-12 mt-2">
																<input
																	class="order-form-input"
																	placeholder="Street Address Line 2"
																/>
															</div>
															<div class="col-12 col-sm-6 mt-2 pr-sm-2">
																<input
																	class="order-form-input"
																	placeholder="City"
																/>
															</div>
															<div class="col-12 col-sm-6 mt-2 pl-sm-0">
																<input
																	class="order-form-input"
																	placeholder="Region"
																/>
															</div>
															<div class="col-12 col-sm-6 mt-2 pr-sm-2">
																<input
																	class="order-form-input"
																	placeholder="Postal / Zip Code"
																/>
															</div>
															<div class="col-12 col-sm-6 mt-2 pl-sm-0">
																<input
																	class="order-form-input"
																	placeholder="Country"
																/>
															</div>
														</div>

														<div class="row mt-3 mx-4">
															<div class="col-12">
																<div class="form-check">
																	<input
																		type="checkbox"
																		class="form-check-input"
																		name="validation"
																		id="validation"
																		value="1"
																	/>
																	<label
																		for="validation"
																		class="form-check-label">
																		I know what I need to know
																	</label>
																</div>
															</div>
														</div> */}

														<div class="row mt-3">
															<div class="col-12" className="ggj">
																<Button
																	onSubmit={createOrder}
																	type="submit"
																	className="ggj
																	">
																	Order Sekarang
																</Button>
															</div>
														</div>
													</div>
												</div>
											</div>
										</section>
									</Form>
								</div>
							</div>
						</MDBContainer>
					</section>
				</>
			)}
		</>
	);
}
export default Alamat;
