import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginUser, reset } from "../../auth/authSlice";
import { Card } from "react-bootstrap";
import Loading from "../../components/loading";
import Message from "../../components/error";

const LoginJura = () => {
	const [email_user, setEmail_user] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate("/");
			window.location.reload();
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate, location]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ email_user, password }));
	};

	return (
		<>
			{isLoading ? (
				<div className="mb-5">
					<Loading />
				</div>
			) : (
				<body className="body">
					<div className="parent">
						<div className="parent2">
							<Card
								className="hehe"
								border="primary"
								style={{ width: "25rem" }}>
								<strong class="card-header">Jura Chicken</strong>
								<div class="card-body">
									<Form onSubmit={Auth}>
										{isError && <p className="has-text-centered">{message}</p>}
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Email address</Form.Label>
											<Form.Control
												type="text"
												className="input"
												value={email_user}
												onChange={(e) => setEmail_user(e.target.value)}
												placeholder="Email"
											/>
											<Form.Text className="text-muted">
												We'll never share your email with anyone else.
											</Form.Text>
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
										<Form.Group className="mb-3" controlId="formBasicCheckbox">
											<p className="mt-4 mb-4">
												Belum Mempunyai Akun? Daftar Sekarang Secara Gratis{" "}
												<Button
													href="/register"
													className="ml-4"
													variant="primary">
													Disini
												</Button>
											</p>
										</Form.Group>
										<Button
											variant="primary"
											type="submit"
											className="button is-success is-fullwidth">
											Login
										</Button>
									</Form>
								</div>
							</Card>
						</div>
					</div>
				</body>
			)}
		</>
	);
};

export default LoginJura;
