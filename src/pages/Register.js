import React from "react";
import Section from "../components/Section";

function Register() {
  return (
    <Section title=<h2>Register🤳</h2>>
      <form className="form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </Section>
  );
}

export default Register;

