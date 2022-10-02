import Link from "next/link";
import { useState } from "react";
import validator from "validator";

import Layout from "../components/Layout";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { name, email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });

    if (name.length <= 0) {
      return setError("The full name field is required");
    }

    if (!validator.isEmail(email)) {
      return setError("The email you input is invalid");
    }
    if (password.length < 6) {
      return setError(
        "The password you entered should contain 6 or more characters"
      );
    }

    setError("");
    return setUser({ name: "", email: "", password: "" });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="username">
          <svg className="icon-input">
            <use href="/static/icons/sprite.svg#icon-add-user" />
          </svg>
        </span>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="Full Name"
          aria-label="Username"
          aria-describedby="username"
          value={name}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="email">
          <svg className="icon-input">
            <use href="/static/icons/sprite.svg#icon-mail" />
          </svg>
        </span>

        <input
          name="email"
          type="email"
          className="form-control"
          placeholder="email"
          aria-label="email"
          aria-describedby="email"
          value={email.toLowerCase().trim()}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="email">
          <svg className="icon-input">
            <use href="/static/icons/sprite.svg#icon-lock" />
          </svg>
        </span>

        <input
          name="password"
          type="password"
          className="form-control"
          placeholder="password"
          aria-label="password"
          aria-describedby="password"
          value={password}
          onChange={handleChange}
        />
      </div>

      <div className="input-group mb-4">
        <button type="submit" className="btn btn-outline-success btn-submit">
          Signup
        </button>
      </div>
    </form>
  );

  return (
    <Layout>
      <div className="col-md-6 offset-md-3 text-center">
        <h1>Job Hub Top</h1>
        <h3>Signup to discover best places to look for Jobs and much more!</h3>
        {registerForm()}
        {error && <p className="text-danger">{error}</p>}
        <hr />
        <span>Already have an account?</span> <Link href="/login">Login</Link>
      </div>
    </Layout>
  );
};

export default Register;
