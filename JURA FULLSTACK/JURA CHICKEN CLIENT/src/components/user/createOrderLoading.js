import HashLoader from "react-spinners/HashLoader";
import {
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
} from "mdb-react-ui-kit";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

function Wow() {
	const { id } = useParams();
	useEffect(() => {
		const timeout = setTimeout(() => {
			// 👇️ redirects to an external URL
			window.location.replace('/order/done/"' + id);
		}, 9000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<section className="parent vh-100" style={{ backgroundColor: "#fffff" }}>
			<MDBContainer className="parent2 h-100">
				<div className="hehe">
					<HashLoader color="#298bff" loading size={100} speedMultiplier={1} />
				</div>
			</MDBContainer>
		</section>
	);
}
export default Wow;
