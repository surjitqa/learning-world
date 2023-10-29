import React, { useState } from "react";

function Profile() {
  const [loggedIn, setLoggedIn] = useState(1);

  return (
    <div>
      {loggedIn === 1 ? (
        <h1>Hi Surjit</h1>
      ) : loggedIn === 2 ? (
        <h1>Welcome Guest2</h1>
      ) : loggedIn ? (
        <h1>Welcome Guest3</h1>
      ) : null}
    </div>
  );
}

export default Profile;
