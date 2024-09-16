import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="d-flex mx-auto justify-content-center align-items-center" style={{height:"100vh"}}>
      <div className="">
        <div className="shadow-sm">
          <h3>Login</h3>
        </div>

        <div className="shadow-sm">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              aria-label="Username"
              name="username"
            />
          </div>
          <label className="shadow-sm">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            name="email"
          />
          <label className=" ">Password</label>
          <input
            type="password"
            id="inputPassword5"
            className="form-control"
            aria-describedby="passwordHelpBlock"
            name="password"
          />
        </div>
        <div className="">
        <button type="button" className="btn btn-light">
          Light
        </button>
        </div>
      </div>
    </div>
  );
}

export default App;
