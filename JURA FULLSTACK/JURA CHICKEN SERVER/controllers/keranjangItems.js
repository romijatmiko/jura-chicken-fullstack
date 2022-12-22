import cart_jura from "../models/keranjangModels.js";
import { Op } from "sequelize";
import user_jura from "../models/userModels.js";
import menu_jura from "../models/menuModels.js";
import list_menu from "../models/keranjangMenu.js";

export const getItems = async (req, res) => {
	// const check = await cart_jura.findOne({
	// 		where: {
	// 			uuid: req.params.id,
	// 		},
	// 	});
	// 	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	try {
		let response;
		const menuatt = ["uuid", "nama_menu", "harga_menu", "img"];
		const attributes = ["uuid", "qty", "harga"];
		response = await list_menu.findAll({
			// where: { uuid: req.params.id },
			attributes: attributes,
			include: [{ model: menu_jura, attributes: menuatt }],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};
export const getItemsbyId = async (req, res) => {
	try {
		let response;
		const useratt = ["uuid", "nama_user"];
		const menuatt = ["uuid", "nama_menu", "harga_menu", "img"];
		const attributes = ["uuid", "qty", "total_price"];
		response = await cart_jura.findAll({
			// where: { uuid: req.params.id },
			where: {
				userJuraUuid: req.params.id,
			},
			attributes: attributes,
			include: [
				{ model: user_jura, attributes: useratt },
				{ model: menu_jura, attributes: menuatt },
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createItems = async (req, res) => {
	const { uuid, qty, harga, menuJuraUuid } = req.body;
	let responseCheck;
	const attributes = ["uuid", "qty", "harga"];
	responseCheck = await list_menu.findAll({
		attributes: attributes,
		// where: {
		// 	uuid: req.params.id,
		// },
	});
	console.log(responseCheck.menuJuraUuid);
	if (responseCheck.menuJuraUuid == menuJuraUuid) {
		try {
			await list_menu.update(
				{
					uuid: uuid,
					qty: qty,
					harga: harga,
					menuJuraUuid: menuJuraUuid,
				},
				{
					where: {
						uuid: menuJuraUuid,
					},
				}
			);
			res.status(200).json({ msg: "Menu Updated" });
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	} else {
		try {
			await list_menu.create({
				uuid: uuid,
				qty: qty,
				harga: harga,
				menuJuraUuid: menuJuraUuid,
			});
			res.status(201).json({ msg: "menu_jura Created Successfuly" });
		} catch (error) {
			res.status(500).json({ msg: error.message });
		}
	}
};

export const updateItems = async (req, res) => {
	const { uuid, qty, harga, menu_id, cartJuraUuid } = req.body;
	const check = await list_menu.findOne({
		where: {
			cartJuraUuid: req.params.id,
		},
	});
	if (!check) return res.status(404).json({ msg: "Menu tidak ditemukan" });
	try {
		await list_menu.update(
			{
				uuid: uuid,
				qty: qty,
				harga: harga,
				menu_id: menu_id,
				cartJuraUuid: cartJuraUuid,
			},
			{
				where: {
					cartJuraUuid: req.params.id,
				},
			}
		);
		res.status(200).json({ msg: "Menu Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
