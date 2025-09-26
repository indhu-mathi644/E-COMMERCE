import React from "react";
import Section from "../components/Section";

function Login() {
  return (
    <Section title=<h2>Login📲</h2>>
      <form className="form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </Section>
  );
}

export default Login;
