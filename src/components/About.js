import React from "react";

function About({ bio }, { links }) {
  console.log(links)
  return (
    <div id="about">
      <h2>About Me</h2>
      {bio ? <p>{bio}</p> : null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      

    </div>
  );
}

export default About;
