import React, { useState } from "react";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState(""); // Change 'Password' to 'password'

  function loginHandle(e) {
    e.preventDefault();
    // Here you can add your logic to check if the user and password are valid
  }

  function userHandler(e) {
    let inputLength = e.target.value.length; // Change 'item' to 'inputLength'
    if (inputLength < 3) {
      console.log("Invalid");
    }
    console.log(inputLength); // Change 'e.target.value.length' to 'inputLength'
  }

  return (
    <div>
      <form onSubmit={loginHandle}>
        <h1>Form Validation</h1>
        <input type="text" placeholder="Enter Id" onChange={userHandler} />{" "}
        {/* Change 'type' to 'text' */}
        <br /> <br />
        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />{" "}
        {/* Added 'onChange' for password */}
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
