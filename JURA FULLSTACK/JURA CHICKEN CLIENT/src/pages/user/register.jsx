import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../../url";

const Register = () => {
	const [nama_user, setNama_user] = useState("");
	const [email_user, setEmail_user] = useState("");
	const [no_hp, setNo_hp] = useState("");
	const [alamat, setAlamat] = useState("");
	const [kabupaten, SetKabupaten] = useState("");
	const [kode_pos, setKode_pos] = useState("");
	const [password_user, setPassword_user] = useState("");
	const [confPassword, setConfPassword] = useState("");
	const [role, setRole] = useState("");
	const [msg, setMsg] = useState("");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { isError, isLoading } = useSelector((state) => state.auth);

	const hehehe = async (e) => {
		e.preventDefault();
		try {
			await axios.post(API_URL + "/users/add", {
				nama_user: nama_user,
				email_user: email_user,
				no_hp: no_hp,
				alamat: alamat,
				kabupaten: kabupaten,
				kode_pos: kode_pos,
				password_user: password_user,
				confPassword: confPassword,
				role: "user",
			});
			navigate("/login");
		} catch (error) {
			if (error.response) {
				setMsg(error.response.data.msg);
			}
		}
	};

	return (
		<body className="body">
			<div className="parent">
				<div className="parent">
					<Card className="hehe" border="primary" style={{ width: "35rem" }}>
						<strong class="card-header">Register Form Jura Chicken</strong>
						<div class="card-body">
							<Form onSubmit={hehehe}>
								{isError && <p className="has-text-centered">{msg}</p>}
								<Form.Group className="mb-3" controlId="nama">
									<Form.Label>Nama</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={nama_user}
										onChange={(e) => setNama_user(e.target.value)}
										placeholder="Tuliskan Nama Kamu"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="email">
									<Form.Label>Email address</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={email_user}
										onChange={(e) => setEmail_user(e.target.value)}
										placeholder="Email"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="nohp">
									<Form.Label>No HP</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={no_hp}
										onChange={(e) => setNo_hp(e.target.value)}
										placeholder="No HP"
									/>
								</Form.Group>
								<Row>
									<Col>
										<Form.Group className="mb-3" controlId="alamat">
											<Form.Label>Alamat</Form.Label>
											<Form.Control
												type="text"
												className="input"
												value={alamat}
												onChange={(e) => setAlamat(e.target.value)}
												placeholder="Tuliskan Alamat Kamu"
											/>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group className="mb-3" controlId="kabupaten">
											<Form.Label>Kabupaten/Kota</Form.Label>
											<Form.Control
												type="text"
												className="input"
												value={kabupaten}
												onChange={(e) => SetKabupaten(e.target.value)}
												placeholder="Tuliskan Kota Kamu"
											/>
										</Form.Group>
									</Col>
								</Row>
								<Form.Group className="mb-3" controlId="kodepos">
									<Form.Label>Kode Pos</Form.Label>
									<Form.Control
										type="text"
										className="input"
										value={kode_pos}
										onChange={(e) => setKode_pos(e.target.value)}
										placeholder="Tuliskan Nama Kamu"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="password">
									<Form.Label>Password</Form.Label>
									<Form.Control
										type="password"
										className="input"
										value={password_user}
										onChange={(e) => setPassword_user(e.target.value)}
										placeholder="******"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="confirm-password">
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type="password"
										className="input"
										value={confPassword}
										onChange={(e) => setConfPassword(e.target.value)}
										placeholder="******"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="role">
									<Form.Label></Form.Label>
									<Form.Control
										type="hidden"
										className="input"
										value={"user"}
										onChange={(e) => setRole(e.target.value)}
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
