import React from "react";

function Home({user}) {
  const h1style={
    color: user.color
  }
  return (
    <div id="home">
      <h1 style={h1style}>
        {user.name} is a Web Developer from {user.city}
      </h1>
    </div>
  );
}

export default Home;
