import { useState } from "react";
function Login() {
  const [inpuserName, setUsername] = useState("");
  const [inpPassword, setPassword] = useState("");
  const [inputisAdmin, setisAdmin] = useState(false);
  const handleLogin = () => {
    console.log("Ten dang nhap la", inpuserName);
    console.log("Mat khau la", inpPassword);
  };
  return (
    <>
      <label>Enter your username:</label>
      <input
        type="text"
        value={inpuserName}
        onInput={(e) => setUsername(e.target.value)}
      />
      <label>Enter your password:</label>
      <input
        type="password"
        value={inpPassword}
        onInput={(e) => setPassword(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          name="#"
          value={inputisAdmin}
          onInput={(e) => setisAdmin(!inputisAdmin)}
        />
        is Admin
      </label>
      <button
        type="submit"
        value="Update Login"
        onClick={handleLogin}
        // {(e) =>
        //   setLogin({
        //     ...login,
        //     username: inpuserName,
        //     password: inpPassword,
        //   })
        // }
      >
        Đăng nhập
      </button>
    </>
  );
}
export default Login;
