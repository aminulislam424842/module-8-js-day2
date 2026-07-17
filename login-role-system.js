const username = "aminul74";
const password = "aminul150";

const role = "admin";

let checkUsername = "aminul74";
let checkPassword = "aminul150";


if (username === checkUsername && password === checkPassword) {
  console.log("Login Successful")
  let Dashboard = (role === "admin") ? "Admin Dashboard" : "User Dashboard";
  console.log(Dashboard)
}
else {
  console.log("login failure message");
}