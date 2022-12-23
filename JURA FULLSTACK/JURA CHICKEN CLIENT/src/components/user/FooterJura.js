import React from "react";
import logo from "./logo.png";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from "cdbreact";

export const FooterJura = () => {
	return (
		<CDBFooter className="shadow">
			<CDBBox
				display="flex"
				flex="column"
				className="mx-auto py-5"
				style={{ width: "90%" }}>
				<CDBBox display="flex" justifyContent="between" className="flex-wrap">
					<CDBBox>
						<a href="/" className="d-flex align-items-center p-0 text-dark">
							<img alt="Logo" src={logo} width="70px" />
							<span className="ml-3 h5 font-weight-bold"></span>
						</a>
						<p className="my-3" style={{ width: "250px" }}>
							Nikmati Kelezatan Ayam Jura Chicken, Banyak Menu Dengan Varian
							Yang Menarik Dan Unik, Ayo Segera Pesan Sekarang !!!!
						</p>
						<CDBBox display="flex" className="mt-4">
							<CDBBtn flat color="dark">
								<a> Temukan Kami Di Goolge Maps </a>
							</CDBBtn>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: "600" }}>
							Jura Chicken
						</p>
						<CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
							<CDBFooterLink href="/">Menu</CDBFooterLink>
							<CDBFooterLink href="/">Ayam Goreng</CDBFooterLink>
							<CDBFooterLink href="/">Promo Menarik</CDBFooterLink>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: "600" }}>
							Perlu Bantuan?
						</p>
						<CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
							<CDBFooterLink href="/">Tanya Kami Gratis</CDBFooterLink>
						</CDBBox>
					</CDBBox>
					<CDBBox>
						<p className="h5 mb-4" style={{ fontWeight: "600" }}>
							Varian Menu
						</p>
						<CDBBox flex="column" style={{ cursor: "pointer", padding: "0" }}>
							<CDBFooterLink href="/">Ayam Goreng</CDBFooterLink>
							<CDBFooterLink href="/">Ayam Geprek</CDBFooterLink>
							<CDBFooterLink href="/">Thai Tea</CDBFooterLink>
						</CDBBox>
					</CDBBox>
				</CDBBox>
				<small className="text-center mt-5">
					&copy; JuraChicken, 2022. All rights reserved.
				</small>
			</CDBBox>
		</CDBFooter>
	);
};
