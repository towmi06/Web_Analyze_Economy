const Users = require("../models/users.model");
const md5 = require("md5");
const generate = require("../../helpers/generate");

//register
module.exports.register = async (req, res) => {
  const existEmail = await Users.findOne({
    email: req.body.email
  });
  if (existEmail) {
    res.json({
      message: "Địa chỉ email đã tồn tại "
    });
    return;
  }
  const infoUser = {
    fullName: req.body.fullName,
    email: req.body.email,
    password: md5(req.body.password),
    token: generate.generateRandomString(20),
    admin: false
  };

  const user = new Users(infoUser);
  await user.save();

  const token = user.token;

  res.json([
    {
      message: "Tạo tài khoản thành công",
      token: token
    }
  ]);
}

//change pass
module.exports.change = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const newPass = req.body.newPass;

  const user = await Users.findOne({
    email: email,
    password: md5(password)
  });

  if (!user) {
    res.json({
      message: "Tài khoản hoặc mật khẩu không dúng"
    });
    return;
  }
  if (md5(newPass) === password) {
    res.json({
      message: "Nhập mật khẩu khác mật khẩu cũ"
    });
    return;
  }

  await Users.updateOne({ password: md5(password) }, { $set: { password: md5(newPass) } });

  res.json([{
    message: "Đổi mật khẩu thành công"
  }]);
}

//login
module.exports.login = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  const user = await Users.findOne({
    email: email
  })

  if (!user) {
    res.json({
      message: "Email không tồn tại"
    })
    return;
  }

  if (md5(password) !== user.password) {
    res.json({
      message: "Sai mật khẩu"
    });
    return;
  }

  const id = user.id;
  const fullName = user.fullName;
  const token = user.token;
  const admin = user.admin;
  res.json([
    {
      message: "Đăng nhập thành công",
      id: id,
      fullName: fullName,
      email: email,
      token: token,
      admin: admin
    }
  ]);
}
