import React, { useState, useEffect } from "react";
import Loading from "../../components/loading";
import Message from "../../components/error";
import { useDispatch, useSelector } from "react-redux";
import { useCart } from "react-use-cart";

function Alamat() {
	return (
		<>
			<section class="order-form my-4 mx-4">
				<div class="container pt-4">
					<div class="row">
						<div class="col-12">
							<h1>Jura Order Form</h1>
						</div>
						<div class="col-12">
							<div class="row mx-4">
								<div class="col-12 mb-4">
									<label class="order-form-label">
										<strong>Pilih Payment Method</strong>
									</label>
								</div>
								<div class="col-12 col-sm-6">
									<div class="form-check mb-2">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault2">
											{" "}
											via Bank{" "}
										</label>
									</div>
									<div class="form-check mb-2">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault2">
											{" "}
											via Bank{" "}
										</label>
									</div>
									<div class="form-check mb-2">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault2">
											{" "}
											via Bank{" "}
										</label>
									</div>
									<div class="form-check mb-2">
										<input
											class="form-check-input"
											type="radio"
											name="flexRadioDefault"
											id="flexRadioDefault2"
											checked
										/>
										<label class="form-check-label" for="flexRadioDefault2">
											{" "}
											via Bank{" "}
										</label>
									</div>
								</div>
							</div>

							<div class="row mt-3 mx-4">
								<div class="col-12">
									<label class="order-form-label">Alamat Pengiriman</label>
								</div>
								<div class="col-12">
									<input
										class="order-form-input"
										placeholder="Street Address"
									/>
								</div>
								<div class="col-12 mt-2">
									<input
										class="order-form-input"
										placeholder="Street Address Line 2"
									/>
								</div>
								<div class="col-12 col-sm-6 mt-2 pr-sm-2">
									<input class="order-form-input" placeholder="City" />
								</div>
								<div class="col-12 col-sm-6 mt-2 pl-sm-0">
									<input class="order-form-input" placeholder="Region" />
								</div>
								<div class="col-12 col-sm-6 mt-2 pr-sm-2">
									<input
										class="order-form-input"
										placeholder="Postal / Zip Code"
									/>
								</div>
								<div class="col-12 col-sm-6 mt-2 pl-sm-0">
									<input class="order-form-input" placeholder="Country" />
								</div>
							</div>

							<div class="row mt-3 mx-4">
								<div class="col-12">
									<div class="form-check">
										<input
											type="checkbox"
											class="form-check-input"
											name="validation"
											id="validation"
											value="1"
										/>
										<label for="validation" class="form-check-label">
											I know what I need to know
										</label>
									</div>
								</div>
							</div>

							<div class="row mt-3">
								<div class="col-12">
									<button
										type="button"
										id="btnSubmit"
										class="btn btn-primray d-block mx-auto btn-submit">
										Order Sekarang
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default Alamat;
