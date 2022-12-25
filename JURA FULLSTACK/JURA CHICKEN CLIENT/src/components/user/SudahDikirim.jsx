import React, { useState, useEffect } from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
	MDBCardText,
	MDBRipple,
	MDBProgressBar,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_URL } from "../../url";

export default function SudahDikirim() {
	const [datas, setDatas] = useState([]);
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const { newData, setNewData } = useState([]);
	useEffect(() => {
		getAllOrdersId();
	}, []);
	const getAllOrdersId = async () => {
		const q = await axios.get(API_URL + "/order/get/" + id);
		setOrders(q.data);
	};
	const hehehe = [
		{
			uuid: orders.uuid,
			total_price: orders.total_price,
			jumlah_items: orders.jumlah_items,
			detaills: orders.details,
			total_unique_items: orders.total_unique_items,
			payment_type: orders.payment_type,
			sudahBayar: orders.sudahBayar,
			dibayarTanggal: orders.dibayarTanggal,
			sudahDikirim: orders.sudahDikirim,
			dikirimTanggal: orders.dikirimTanggal,
			sampai: orders.sampai,
			sampaiTanggal: orders.sampaiTanggal,
			response_midtrans: orders.response_midtrans,
		},
	];
	const yes = "true";
	return (
		<>
			{hehehe.map((kocak, index) => (
				<section className="vh-200" style={{ backgroundColor: "#fffff" }}>
					<MDBContainer className="py-5 h-200">
						<MDBRow className="justify-content-center align-items-center h-100">
							<>
								<MDBCol size="11">
									<MDBCard
										className="card-stepper text-black mb-5 mt-5"
										style={{ borderRadius: "16px" }}>
										<MDBCardBody className="p-5">
											<div className="d-flex justify-content-between align-items-center mb-5">
												<div>
													<MDBTypography tag="h5" className="mb-0">
														INVOICE{" "}
														<span className="text-primary font-weight-bold">
															#{kocak.uuid}
														</span>
													</MDBTypography>
												</div>
												<div className="text-end">
													<p className="mb-0">
														<strong>Estimasi Pengiriman :</strong>
														<span></span>
													</p>
													<p className="mb-0">
														1-3 Hari <span className="font-weight-bold"></span>
													</p>
												</div>
											</div>
											<ul
												id="progressbar-2"
												className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
												<li
													className="step0 active  text-center"
													id="step1"></li>
												<li
													className="step0 active text-center"
													id="step2"></li>
												<li
													className="step0 active text-center"
													id="step3"></li>
												<li className="step0 active text-end" id="step4"></li>
											</ul>

											<div className="d-flex justify-content-between mb-5">
												<div className="d-lg-flex align-items-center">
													<MDBIcon
														fas
														icon="clipboard-list me-lg-4 mb-3 mb-lg-0"
														size="2x"
													/>
													<div>
														<p className="fw-bold mb-1">Pesanan</p>
														<p className="fw-bold mb-0">Dibuat</p>
													</div>
												</div>
												<div className="d-lg-flex align-items-center">
													<MDBIcon
														fas
														icon="fas fa-wallet me-lg-4 mb-3 mb-lg-0"
														size="2x"
													/>
													<div>
														<p className="fw-bold mb-1">Pesanan</p>
														<p className="fw-bold mb-0">Dibayar</p>
													</div>
												</div>
												<div className="d-lg-flex align-items-center">
													<MDBIcon
														fas
														icon="shipping-fast me-lg-4 mb-3 mb-lg-0"
														size="2x"
													/>
													<div>
														<p className="fw-bold mb-1">Pesanan Sedang</p>
														<p className="fw-bold mb-0"> Dalam Perjalanan</p>
													</div>
												</div>
												<div className="d-lg-flex align-items-center">
													<MDBIcon
														fas
														icon="home me-lg-4 mb-3 mb-lg-0"
														size="2x"
													/>
													<div>
														<p className="fw-bold mb-1">Pesanan</p>
														<p className="fw-bold mb-0">Terkirim</p>
													</div>
												</div>
											</div>

											<MDBCol>
												<MDBCard className="popl mb-4 mb-md-0">
													<div class="scrollbar scrollbar-primary">
														<div class="force-overflow"></div>

														<MDBCardBody>
															<MDBCardText className="mb-4">
																<span className="text-primary font-italic me-1">
																	YOUR ORDERS
																</span>{" "}
																STATUS
															</MDBCardText>

															<>
																<MDBCardText
																	className="mt-4 mb-2 mr-4"
																	style={{ fontSize: ".77rem" }}>
																	<span
																		class="badge badge-primary mb-1"
																		id="ggwp">
																		{"Terimakasih Sudah Memesan"}
																		{}
																	</span>
																	<div class="ggzm">
																		<MDBCol>
																			<MDBCardText>
																				Order ID : {kocak.uuid}
																			</MDBCardText>
																		</MDBCol>

																		<MDBCol>
																			<MDBCardText>
																				Total_harga : {kocak.total_price}
																			</MDBCardText>
																		</MDBCol>
																		<MDBCol>
																			<MDBCardText>
																				Jumlah Makanan : {kocak.jumlah_items}
																			</MDBCardText>
																		</MDBCol>
																		<MDBCol>
																			<MDBCardText>
																				Status : Sedang Dikirim
																			</MDBCardText>
																		</MDBCol>
																	</div>
																</MDBCardText>
																<MDBCol>
																	<MDBCardText>
																		Pesanan Sedang Diantar
																	</MDBCardText>
																	<span
																		class="badge badge-primary mb-1"
																		id="ggwp">
																		{"Estimasi Sampai 1-3 hari"}
																		{}
																	</span>
																</MDBCol>
															</>
														</MDBCardBody>
													</div>
												</MDBCard>
											</MDBCol>
										</MDBCardBody>
									</MDBCard>
								</MDBCol>
							</>
						</MDBRow>
					</MDBContainer>
				</section>
			))}
		</>
	);
}
