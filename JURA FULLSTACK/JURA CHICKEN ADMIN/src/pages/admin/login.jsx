import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../../auth/authSlice";

const Login = () => {
	const [email_user, setEmail_user] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { user, isError, isSuccess, isLoading, message } = useSelector(
		(state) => state.auth
	);

	useEffect(() => {
		if (user || isSuccess) {
			navigate("/admin/homepage");
		}
		dispatch(reset());
	}, [user, isSuccess, dispatch, navigate]);

	const Auth = (e) => {
		e.preventDefault();
		dispatch(LoginUser({ email_user, password }));
	};

	return (
		<div class="card">
			<h5 class="card-header">Featured</h5>
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
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
					<Button
						variant="primary"
						type="submit"
						className="button is-success is-fullwidth">
						{isLoading ? "Loading..." : "Login"}
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default Login;
