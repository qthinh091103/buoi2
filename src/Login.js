import { useState } from "react";
function Login() {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  return (
    <>
      <h5>Nhap tai khoan</h5>
      <input type="text" />
      <h5>Nhap mat khau</h5>
      <input type="password" />
      <input type="checkbox" name="is Admin" />
      <button type="button">Dang nhap</button>
    </>
  );
}
export default Login;
