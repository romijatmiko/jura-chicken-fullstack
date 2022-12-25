import React, { useState, useEffect } from "react";
import {
	MDBCard,
	MDBCardBody,
	MDBCol,
	MDBContainer,
	MDBIcon,
	MDBRow,
	MDBTypography,
	MDBCardText,
	MDBRipple,
	MDBProgressBar,
} from "mdb-react-ui-kit";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import Loading from "../../components/loading";
import OrderFour from "../../components/user/Done";
import OrderOne from "../../components/user/SudahBayar";
import OrderTwo from "../../components/user/SudahDikirim";
import OrderThree from "../../components/user/Sampai";
import BelumBayar from "../../components/user/BelumBayar";
import SudahBayar from "../../components/user/SudahBayar";
import SudahDikirim from "../../components/user/SudahDikirim";
import Sampai from "../../components/user/Sampai";

export default function OrderStatus() {
	const [datas, setDatas] = useState([]);
	const { id } = useParams();
	const [orders, setOrders] = useState([]);
	const { newData, setNewData } = useState([]);
	const { isLoading } = useSelector((state) => state.auth);
	useEffect(() => {
		getAllOrdersId();
	}, []);
	const getAllOrdersId = async () => {
		const q = await axios.get("http://localhost:3100/order/get/" + id);
		setOrders(q.data);
	};
	const hehehe = [
		{
			uuid: orders.uuid,
			total_price: orders.total_price,
			jumlah_items: orders.jumlah_items,
			detaills: orders.details,
			total_unique_items: orders.total_unique_items,
			payment_type: orders.payment_type,
			sudahBayar: orders.sudahBayar,
			dibayarTanggal: orders.dibayarTanggal,
			sudahDikirim: orders.sudahDikirim,
			dikirimTanggal: orders.dikirimTanggal,
			sampai: orders.sampai,
			sampaiTanggal: orders.sampaiTanggal,
			response_midtrans: orders.response_midtrans,
		},
	];
	const yes = "true";
	console.log(orders.sudahBayar);

	return (
		<>
			{orders.sampai == yes ? (
				<Sampai />
			) : orders.sudahDikirim == yes ? (
				<SudahDikirim />
			) : orders.sudahBayar == yes ? (
				<SudahBayar />
			) : (
				<BelumBayar />
			)}
		</>
	);
}
