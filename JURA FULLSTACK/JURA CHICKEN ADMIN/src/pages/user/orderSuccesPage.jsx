import React from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";
import { Button } from "react-bootstrap";

export default function SuccesPage() {
	return (
		<>
			<section className="vh-100" style={{ backgroundColor: "#fffff" }}>
				<MDBContainer className="py-5 h-100">
					<div class="success-container">
						<div class="row">
							<div class="modalbox success col-sm-8 col-md-6 col-lg-5 center animate">
								<div class="icon">
									<span class="glyphicon glyphicon-ok">
										<i class="fa-solid fa-check"></i>
									</span>
								</div>
								<h1>Pesanan Anda Telah Dibuat!</h1>
								<p>
									Dear Pelanggan yang baik, segera proses pembayaran anda segera
									<br />
									Terimakasih.
								</p>
								<div class="row mt-3">
									<div class="col-12" className="ggj">
										<Button className="ggj" href={"/order/done/"}>
											<a>Bayar Sekarang</a>
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</MDBContainer>
			</section>
		</>
	);
}
