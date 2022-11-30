import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";

export const Login = async (req, res) => {
	const user = await User.findOne({
		where: {
			email: req.body.email,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	const match = await bcrypt.compare(user.password, req.body.password);
	if (!match) return res.status(400).json({ msg: "Wrong Password" });
	req.session.userId = user.uuid;
	const uuid = user.uuid;
	const nama_user = user.nama_user;
	const email_user = user.email_user;
	const created_at = user.created_at;
	const updated_at = user.updated_at;
	const role = user.role;

	res
		.status(200)
		.json({ uuid, nama_user, email_user, created_at, updated_at, role });
};

export const Me = async (req, res) => {
	if (!req.session.userId) {
		return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
	}
	const user = await User.findOne({
		attributes: [
			"uuid",
			"nama_user",
			"email_user",
			"created_at",
			"updated_at",
			"role",
		],
		where: {
			uuid: req.session.userId,
		},
	});
	if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
	res.status(200).json(user);
};

export const logOut = (req, res) => {
	req.session.destroy((err) => {
		if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
		res.status(200).json({ msg: "Anda telah logout" });
	});
};
