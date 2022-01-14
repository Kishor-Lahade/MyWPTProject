import axios from "axios";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <Components />
    </div>
  );
}
function Components() {
  const [validationError, setvalidation] = useState(false);

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [mob, setmob] = useState();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [list, setList] = useState([]);

  const addfirstName = (e) => {
    setfirstName(e.target.value);
  };

  const addlastName = (e) => {
    setlastName(e.target.value);
  };

  const addmob = (e) => {
    setmob(e.target.value);
  };
  const addemail = (e) => {
    setemail(e.target.value);
  };
  const addPassword = (e) => {
    setPassword(e.target.value);
  };

  const submit = async () => {
    const url = "http://localhost:5000/hello";

    if (
      firstName == "" ||
      lastName == "" ||
      mob == "" ||
      email == "" ||
      password == ""
    ) {
      setvalidation(true);

      return;
    }

    const data = {
      firstName: firstName,
      lastName: lastName,
      mob: mob,
      email: email,
      password: password,
    };
    await axios.post(url, data);
    const newList = [data, ...list];
    setList(newList);

    setfirstName("");
    setlastName("");
    setmob("");
    setemail("");
    setPassword("");
  };
  const getUser = async () => {
    const url = "http://localhost:5000/index";
    const result = await axios.get(url);

    const list = result.data;
    const newList = [...list];
    setList(newList);
  };

  return (
    <div className="container-fluid bg-success">
      <div className="row">
        <h1></h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6  bg-warning sticky-top mt-5  ">
          <h3 className="text-center">Registration form</h3>
        </div>
      </div>
      <div className="row ">
        <div className="col-3"></div>
        <div className="col-6 d-flex flex-column bg-warning justify-content-center align-items-center ">
          <div>
            <input
              type="text"
              value={firstName}
              onChange={addfirstName}
              placeholder="First Name"
              className={
                password == "" && validationError ? "border border-danger " : ""
              }
            />
          </div>
          <div>
            <input
              type="text"
              value={lastName}
              onChange={addlastName}
              placeholder="Last Name"
              className={
                password == "" && validationError ? "border border-danger " : ""
              }
            />
          </div>
          <div>
            <input
              type="text"
              value={mob}
              onChange={addmob}
              placeholder="Enter mobile no."
              className={
                mob == "" && validationError ? "border border-danger " : ""
              }
            />
          </div>
          <div>
            <input
              type="text"
              value={email}
              onChange={addemail}
              placeholder="Enter Email"
              className={
                email == "" && validationError ? "border border-danger " : ""
              }
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={addPassword}
              placeholder="password"
              className={
                password == "" && validationError ? "border border-danger " : ""
              }
            />
          </div>
          <div>
            <button className="bg-primary" onClick={submit}>
              {" "}
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="row">
        <h1></h1>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
}
