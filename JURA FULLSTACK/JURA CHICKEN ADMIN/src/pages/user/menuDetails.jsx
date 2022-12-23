import { NavbarJura } from "../../components/user/navbarj";
import { FooterJura } from "../../components/user/FooterJura";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Loading from "../../components/loading";
import { useDispatch, useSelector } from "react-redux";
import { useThemeHook } from "../../Cart/context";
import { useCart } from "react-use-cart";
import { Button } from "react-bootstrap";

export const Details = () => {
	const [nama_menu, setNama_menu] = useState("");
	const [harga_menu, setHarga_menu] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [stok, setStok] = useState("");
	const [img, setImg] = useState("");
	const [uuid, setUuid] = useState("");
	const [msg, setMsg] = useState("");
	const [data, setData] = useState("");
	const { id } = useParams();
	const { isError, isLoading } = useSelector((state) => state.auth);
	useEffect(() => {
		const getProductById = async () => {
			try {
				const response = await axios.get(
					`http://localhost:3100/menu/get/${id}`
				);
				setNama_menu(response.data.nama_menu);
				setHarga_menu(response.data.harga_menu);
				setStok(response.data.stok);
				setDeskripsi(response.data.deskripsi);
				setImg(response.data.img);
				setUuid(response.data.uuid);
				setData(response.data);
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg);
				}
			}
		};
		getProductById();
	}, [id]);
	const hehehe = [
		{
			id: uuid,
			nama_menu: nama_menu,
			img: img,
			deskripsi: deskripsi,
			stok: stok,
			price: harga_menu,
			quantity: 1,
		},
	];
	const { items, addId, addItem, emptyCart } = useCart();

	return (
		<div>
			<NavbarJura />

			<section class="mt-5 mb-5 mr-5 ml-5">
				{isLoading ? (
					<div className="mb-5">
						<Loading />
					</div>
				) : (
					<div class="container">
						<article class="card">
							<div class="card-body">
								<div class="row">
									<aside class="col-md-6">
										<article class="gallery-wrap">
											<a class="imga" href="#">
												<img src={"/img/" + img} />
											</a>
										</article>
									</aside>
									<main class="col-md-6">
										<article>
											<h3 class="title">{nama_menu}</h3>
											<hr />

											<div class="mb-3">
												<h6>{deskripsi}</h6>
												<a></a>
											</div>

											<div class="form-group">
												<label class="text-muted">Stok : {stok}</label>
											</div>
											<br></br>
											<div class="mb-3">
												<strong class="hz">Rp. {harga_menu}</strong> <br />
											</div>

											<div class="mb-4">
												<div>
													{hehehe.map((p) => (
														<div key={p.id}>
															<Button
																class="btn btn-primary"
																onClick={() => addItem(p)}>
																Add to cart
															</Button>
														</div>
													))}
												</div>
											</div>
										</article>
									</main>
								</div>
							</div>
						</article>
					</div>
				)}
			</section>
			<FooterJura />
		</div>
	);
};

export default Details;
