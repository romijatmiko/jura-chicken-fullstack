import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardHeader,
	MDBCardImage,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBInput,
	MDBListGroup,
	MDBListGroupItem,
	MDBRipple,
	MDBRow,
	MDBTooltip,
	MDBTypography,
} from "mdb-react-ui-kit";
import React from "react";
import { NavbarJura } from "../../components/user/navbarj";
import { FooterJura } from "../../components/user/FooterJura";
import Loading from "../../components/loading";
import Message from "../../components/error";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";

export default function Keranjang() {
	const {
		isEmpty,
		items,
		cartTotal,
		updateItemQuantity,
		removeItem,
		emptyCart,
	} = useCart();
	const [item, setMenus] = useState([]);
	const { isError, isLoading } = useSelector((state) => state.auth);
	const dispatch = useDispatch();
	return (
		<section className="h-100 gradient-custom">
			<NavbarJura />
			<MDBContainer className="py-5 h-100">
				{isLoading ? (
					<div className="mb-5">
						<Loading />
					</div>
				) : isError ? (
					<Message variant="alert-danger">{isError}</Message>
				) : (
					<MDBRow className="justify-content-center my-4">
						<MDBCol md="8">
							<MDBCard className="mb-4">
								<MDBCardHeader className="py-3">
									<MDBTypography tag="h5" className="mb-0">
										<h1></h1>
									</MDBTypography>
								</MDBCardHeader>
								<MDBCardBody>
									{items.map((item, index) => {
										<MDBRow>
											<MDBCol lg="3" md="12" className="mb-4 mb-lg-0">
												<MDBRipple
													rippleTag="div"
													rippleColor="light"
													className="bg-image rounded hover-zoom hover-overlay">
													<img src={item.img} className="w-100" />
													<a href="#!">
														<div
															className="mask"
															style={{
																backgroundColor: "rgba(251, 251, 251, 0.2)",
															}}></div>
													</a>
												</MDBRipple>
											</MDBCol>

											<MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
												<p>
													<strong>{item.nama_menu}</strong>
												</p>
												<p>Color: blue</p>
												<p>Size: M</p>

												<MDBTooltip
													wrapperProps={{ size: "sm" }}
													wrapperClass="me-1 mb-2"
													title="Remove item">
													<MDBIcon fas icon="trash" />
												</MDBTooltip>

												<MDBTooltip
													wrapperProps={{ size: "sm", color: "danger" }}
													wrapperClass="me-1 mb-2"
													title="Move to the wish list">
													<MDBIcon fas icon="heart" />
												</MDBTooltip>
											</MDBCol>
											<MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
												<div
													className="d-flex mb-4"
													style={{ maxWidth: "300px" }}>
													<MDBBtn className="px-3 me-2">
														<MDBIcon fas icon="minus" />
													</MDBBtn>

													<MDBInput
														defaultValue={item.quantity}
														min={0}
														type="number"
														label="Quantity"
													/>

													<MDBBtn className="px-3 ms-2">
														<MDBIcon fas icon="plus" />
													</MDBBtn>
												</div>

												<p className="text-start text-md-center">
													<strong>{item.price}</strong>
												</p>
											</MDBCol>
										</MDBRow>;
									})}

									<hr className="my-4" />
								</MDBCardBody>
							</MDBCard>

							<MDBCard className="mb-4">
								<MDBCardBody>
									<p>
										<strong>Expected shipping delivery</strong>
									</p>
									<p className="mb-0">12.10.2020 - 14.10.2020</p>
								</MDBCardBody>
							</MDBCard>

							<MDBCard className="mb-4 mb-lg-0">
								<MDBCardBody>
									<p>
										<strong>We accept</strong>
									</p>
									<MDBCardImage
										className="me-2"
										width="45px"
										src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
										alt="Visa"
									/>
									<MDBCardImage
										className="me-2"
										width="45px"
										src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
										alt="American Express"
									/>
									<MDBCardImage
										className="me-2"
										width="45px"
										src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
										alt="Mastercard"
									/>
									<MDBCardImage
										className="me-2"
										width="45px"
										src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
										alt="PayPal acceptance mark"
									/>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
						<MDBCol md="4">
							<MDBCard className="mb-4">
								<MDBCardHeader>
									<MDBTypography tag="h5" className="mb-0">
										Summary
									</MDBTypography>
								</MDBCardHeader>
								<MDBCardBody>
									<MDBListGroup flush>
										<MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
											Products
											<span>$53.98</span>
										</MDBListGroupItem>
										<MDBListGroupItem className="d-flex justify-content-between align-items-center px-0">
											Shipping
											<span>Gratis</span>
										</MDBListGroupItem>
										<MDBListGroupItem className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
											<div>
												<strong>Total amount</strong>
												<strong>
													<p className="mb-0">(including VAT)</p>
												</strong>
											</div>
											<span>
												<strong>$53.98</strong>
											</span>
										</MDBListGroupItem>
									</MDBListGroup>

									<MDBBtn block size="lg">
										Go to checkout
									</MDBBtn>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBRow>
				)}
			</MDBContainer>
			<FooterJura />
		</section>
	);
}
