import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Hello from "./Hello";
import Car from "./Car";

const RouteWeb = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Hello" element={<Hello />} />
        <Route path="/Car" element={<Car />} />
        <Route path="*" element={<h1>Khong tim thay trang web nay</h1>} />
      </Routes>
    </Router>
  );
};

export default RouteWeb;
