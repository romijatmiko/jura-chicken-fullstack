import User from "../models/userModels.js";
import bcrypt from "bcryptjs";

export const getUsers = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: [
				"uuid",
				"nama_user",
				"email_user",
				"created_at",
				"updated_at",
				"role",
			],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const response = await User.findOne({
			attributes: [
				"uuid",
				"nama_user",
				"email_user",
				"created_at",
				"updated_at",
				"role",
			],
			where: {
				uuid: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createUser = async (req, res) => {
	const {
		nama_user,
		email_user,
		password_user,
		confPassword,
		created_at,
		updated_at,
		role,
	} = req.body;
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	const hashPassword = await bcrypt.hash(password_user);
	try {
		await User.create({
			nama_user: nama_user,
			email_user: email_user,
			password_user: hashPassword,
			created_at: created_at,
			updated_at: updated_at,
			role: role,
		});
		res.status(201).json({ msg: "Register Berhasil" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const updateUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	const {
		nama_user,
		email_user,
		password_user,
		confPassword,
		created_at,
		updated_at,
		role,
	} = req.body;
	let hashPassword;
	if (password_user === "" || password_user === null) {
		hashPassword = user.password_user;
	} else {
		hashPassword = await bcrypt.hash(password_user);
	}
	if (password_user !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password dan Confirm Password tidak cocok" });
	try {
		await User.update(
			{
				nama_user: nama_user,
				email_user: email_user,
				password_user: hashPassword,
				created_at: created_at,
				updated_at: updated_at,
				role: role,
			},
			{
				where: {
					id: user.id,
				},
			}
		);
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	try {
		await User.destroy({
			where: {
				id: user.id,
			},
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
