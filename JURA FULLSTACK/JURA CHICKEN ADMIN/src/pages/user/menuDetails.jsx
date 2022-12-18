import { NavbarJura } from "../../components/user/navbarj";
import { FooterJura } from "../../components/user/FooterJura";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Details = () => {
	const [nama_menu, setNama_menu] = useState("");
	const [harga_menu, setHarga_menu] = useState("");
	const [deskripsi, setDeskripsi] = useState("");
	const [stok, setStok] = useState("");
	const [img, setImg] = useState("");
	const [msg, setMsg] = useState("");
	const { id } = useParams();

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
			} catch (error) {
				if (error.response) {
					setMsg(error.response.data.msg);
				}
			}
		};
		getProductById();
	}, [id]);
	return (
		<div>
			<NavbarJura />
			<section class="mt-5 mb-5 mr-5 ml-5">
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
											<a class="price h4">Rp. {harga_menu}</a> <br />
										</div>

										<div class="mb-4">
											<a href="#" class="btn btn-dark">
												Add to card
											</a>
										</div>
									</article>
								</main>
							</div>
						</div>
					</article>
				</div>
			</section>
			<FooterJura />
		</div>
	);
};

export default Details;
