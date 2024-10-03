// import logo from "./logo.svg";
import "./App.css";
import Hello, { HelloPersion } from "./Hello";
import { Header } from "./Header";
import Hihi from "./Hihi";
import Car from "./Car";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <Hello />
        <HelloPersion name={"QT0911"} />
        <Header />
        <Hihi />
        <Car />
        <Login />
      </header>
    </div>
  );
}

export default App;
// export default Hello;
