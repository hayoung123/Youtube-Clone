//global router

import routes from "../routes";

//join
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};
export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password !== password2) {
    //bad request
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    // TO DO : Register user
    // TO DO : Log user
    res.redirect(routes.home);
  }
};

//login
export const getLogin = (req, res) =>
  res.render("login", { pageTitle: "Login" });
export const postLogin = (req, res) => {
  //TO DO : DB와 check
  res.redirect(routes.home);
};

//logout
export const logout = (req, res) => {
  res.redirect(routes.home);
};

//user router
export const userDetail = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
