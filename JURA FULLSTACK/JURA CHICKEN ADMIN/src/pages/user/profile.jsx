import {
	MDBCol,
	MDBContainer,
	MDBRow,
	MDBCard,
	MDBCardText,
	MDBCardBody,
	MDBCardImage,
	MDBBtn,
	MDBProgress,
	MDBProgressBar,
	MDBIcon,
	MDBListGroup,
	MDBListGroupItem,
} from "mdb-react-ui-kit";
import { NavbarJura } from "../../components/user/navbarj";
import { FooterJura } from "../../components/user/FooterJura";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Profile() {
	const [nama_user, setNama] = useState("");
	const [email_user, setEmail_user] = useState("");
	const [tanggal, setTanggal] = useState("");
	const [msg, setMsg] = useState("");
	const { id } = useParams();

	useEffect(() => {
		const user = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3100/users/get/${id}`
				);
				setNama(response.data.nama_user);
				setEmail_user(response.data.email_user);
				setTanggal(response.data.createdAt);
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg);
				}
			}
		};
		user();
	}, [id]);
	return (
		<section style={{ backgroundColor: "#FFFFFF" }}>
			<NavbarJura />
			<MDBContainer className="py-5">
				<MDBRow>
					<MDBCol lg="4">
						<MDBCard className="mb-4">
							<MDBCardBody className="text-center">
								<MDBCardImage
									src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
									alt="avatar"
									className="rounded-circle"
									style={{ width: "150px" }}
									fluid
								/>
								<p className="text-muted mb-4">Happy Shoping</p>
								<div className="d-flex justify-content-center mb-2">
									<MDBBtn>Follow</MDBBtn>
									<MDBBtn outline className="ms-1">
										Message
									</MDBBtn>
								</div>
							</MDBCardBody>
						</MDBCard>

						<MDBCard className="mb-4 mb-lg-0">
							<MDBCardBody className="p-0">
								<MDBListGroup flush className="rounded-3">
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon fas icon="globe fa-lg text-warning" />
										<MDBCardText>https://mdbootstrap.com</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="github fa-lg"
											style={{ color: "#333333" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="twitter fa-lg"
											style={{ color: "#55acee" }}
										/>
										<MDBCardText>@mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="instagram fa-lg"
											style={{ color: "#ac2bac" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
									<MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
										<MDBIcon
											fab
											icon="facebook fa-lg"
											style={{ color: "#3b5998" }}
										/>
										<MDBCardText>mdbootstrap</MDBCardText>
									</MDBListGroupItem>
								</MDBListGroup>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
					<MDBCol lg="8">
						<MDBCard className="mb-4">
							<MDBCardBody>
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Nama</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{nama_user}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Email</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											{email_user}
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Tanggal Regristrasi</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">{tanggal}</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Mobile</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											(098) 765-4321
										</MDBCardText>
									</MDBCol>
								</MDBRow>
								<hr />
								<MDBRow>
									<MDBCol sm="3">
										<MDBCardText>Address</MDBCardText>
									</MDBCol>
									<MDBCol sm="9">
										<MDBCardText className="text-muted">
											Bay Area, San Francisco, CA
										</MDBCardText>
									</MDBCol>
								</MDBRow>
							</MDBCardBody>
						</MDBCard>

						<MDBRow>
							<MDBCol md="6">
								<MDBCard className="mb-4 mb-md-0">
									<MDBCardBody>
										<MDBCardText className="mb-4">
											<span className="text-primary font-italic me-1">
												assigment
											</span>{" "}
											Project Status
										</MDBCardText>
										<MDBCardText
											className="mb-1"
											style={{ fontSize: ".77rem" }}>
											Web Design
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={80} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Website Markup
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={72} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											One Page
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={89} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Mobile Template
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={55} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Backend API
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={66} valuemin={0} valuemax={100} />
										</MDBProgress>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>

							<MDBCol md="6">
								<MDBCard className="mb-4 mb-md-0">
									<MDBCardBody>
										<MDBCardText className="mb-4">
											<span className="text-primary font-italic me-1">
												assigment
											</span>{" "}
											Project Status
										</MDBCardText>
										<MDBCardText
											className="mb-1"
											style={{ fontSize: ".77rem" }}>
											Web Design
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={80} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Website Markup
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={72} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											One Page
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={89} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Mobile Template
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={55} valuemin={0} valuemax={100} />
										</MDBProgress>

										<MDBCardText
											className="mt-4 mb-1"
											style={{ fontSize: ".77rem" }}>
											Backend API
										</MDBCardText>
										<MDBProgress className="rounded">
											<MDBProgressBar width={66} valuemin={0} valuemax={100} />
										</MDBProgress>
									</MDBCardBody>
								</MDBCard>
							</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
			<FooterJura />
		</section>
	);
}
