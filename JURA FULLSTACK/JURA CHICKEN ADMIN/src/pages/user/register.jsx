import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../auth/authSlice";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Register = () => {
	const [email_user, setEmail_user] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate("/");
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ email_user, password }));
	};

	return (
		<body className="body">
			<div className="parent">
				<div className="parent">
					<Card className="hehe" border="primary" style={{ width: "35rem" }}>
						<strong class="card-header">Register Form Jura Chicken</strong>
						<div class="card-body">
							<Form onSubmit={Auth}>
								{isError && <p className="has-text-centered">{message}</p>}
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Nama</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={email_user}
										onChange={(e) => setEmail_user(e.target.value)}
										placeholder="Tuliskan Nama Kamu"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={email_user}
										onChange={(e) => setEmail_user(e.target.value)}
										placeholder="Email"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>No HP</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={email_user}
										onChange={(e) => setEmail_user(e.target.value)}
										placeholder="No HP"
									/>
								</Form.Group>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Alamat</Form.Label>
											<Form.Control
												type="text"
												className="input"
												value={email_user}
												onChange={(e) => setEmail_user(e.target.value)}
												placeholder="Tuliskan Alamat Kamu"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Kabupaten/Kota</Form.Label>
											<Form.Control
												type="text"
												className="input"
												value={email_user}
												onChange={(e) => setEmail_user(e.target.value)}
												placeholder="Tuliskan Kota Kamu"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Form.Group className="mb-3" controlId="formBasicEmail">
									<Form.Label>Kode Pos</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={email_user}
										onChange={(e) => setEmail_user(e.target.value)}
										placeholder="Tuliskan Nama Kamu"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										className="input"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="******"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										className="input"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										placeholder="******"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicCheckbox">
									<Form.Check type="checkbox" label="Check me out" />
								</Form.Group>
								<Button
									variant="primary"
									type="submit"
									className="button is-success is-fullwidth">
									{isLoading ? "Loading..." : "Daftar"}
								</Button>
							</Form>
						</div>
					</Card>
				</div>
			</div>
		</body>
	);
};

export default Register;
