import http from "./global.items";

const login = (userData) =>
  http.post("/user/login", userData).then((user) => user);

const logout = () =>
  http
    .post("/user/logout")
    .then((log) => log)
    .catch((err) => console.log("error"));

const update = (userData, id) =>
  http.put(`/user/update/${id}`, userData).then((user) => user);

let userServices = {
  login,
  logout,
  update,
};

export default userServices;
