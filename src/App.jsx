import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let saveData =(event)=> {
    event.preventDefault()

    let email=event.target.email.value;
    let uname=event.target.username.name.value;
    let password=event.target.password.value;
    let obj ={email,uname,password}
    axios.post(`http://localhost:8101/post`)
    .then((res)=>{
      console.log(res.data);
    })

  }

  return (
    <div className="d-flex mx-auto justify-content-center align-items-center shadow-lg " style={{height:"100vh"}}>
      <div className="shadow-sm  p-5 m-5 rounded-4">
        <div className="">
          <h3>Login</h3>
        </div>
        <form onSubmit={saveData}>
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
 
        <button type="submit" className="btn btn-light mt-5 mx-5">
          Submit
        </button>
        </form>
      </div>
    </div>
  );
}

export default App;
