import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const navigate = useNavigate();
  const onLogin = async(e) => {
e.preventDefault();
    const response = await fetch("http://localhost:5000/api/api/auth/doc/signin", {method: "POST", body: JSON.stringify({email, password}), headers: {'Content-Type': 'application/json'}});
    console.log(email, password);
    const data = await response.json();
    console.log(data);
    localStorage.setItem("id", data.id);
    if(response.status === 200) {
     navigate("/home");
    }
  };
  const onSignUp =async (e) => {
    e.preventDefault();
    const response = await fetch(
      "http://localhost:5000/api/api/auth/doc/signup",
      {
        method: "POST",
        body: JSON.stringify({ email, password,name:fullName }),
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(email, password);
    const data = await response.json();
    console.log(data);
    localStorage.setItem("id", data.id);
    if (response.status === 200) {
      navigate("/home");
    }
  
  };

  const signUpMode = () => {
    const container = document.querySelector(".container");
    container.classList.add("sign-up-mode");
  };

  const signInMode = () => {
    const container = document.querySelector(".container");
    container.classList.remove("sign-up-mode");
  };

  return (
    <div class="container">
      <div class="container__forms">
        <div class="form">
          <form onSubmit={onLogin} class="form__sign-in">
            <h2 class="form__title">Sign In</h2>
            <div class="form__input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div class="form__input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>
            <input class="form__submit" type="submit" value="Login" />
            <p class="form__social-text">Or Sign in with social platforms</p>
            <div class="form__social-media">
              <a href="#" class="form__social-icons">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>

          <form onSubmit={onSignUp} class="form__sign-up">
            <h2 class="form__title">Sign Up</h2>
            <div class="form__input-field">
              <i class="fas fa-user"></i>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
                required
              />
            </div>
            <div class="form__input-field">
              <i class="fas fa-envelope"></i>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                required
              />
            </div>
            <div class="form__input-field">
              <i class="fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                required
              />
            </div>

            <input class="form__submit" type="submit" value="Sign Up" />

            <p class="form__social-text">Or Sign up with social platforms</p>
            <div class="form__social-media">
              <a href="#" class="form__social-icons">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-google"></i>
              </a>
              <a href="#" class="form__social-icons">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </form>
        </div>
      </div>
      <div class="container__panels">
        <div class="panel panel__left">
          <div class="panel__content">
            <h3 class="panel__title">New here ?</h3>
            <p class="panel__paragraph">
              Please login or sign up to get started.
            </p>
            <button
              onClick={signUpMode}
              class="btn btn-transparent"
              id="sign-up-btn"
            >
              Sign Up
            </button>
          </div>
          <img
            class="panel__image"
            src="https://stories.freepiklabs.com/storage/11588/market-launch-amico-2628.png"
            alt=""
          />
        </div>
        <div class="panel panel__right">
          <div class="panel__content">
            <h3 class="panel__title">One of us ?</h3>
            <p class="panel__paragraph">
              Already a member? Please login to continue.
            </p>
            <button
              class="btn btn-transparent"
              onClick={signInMode}
              id="sign-in-btn"
            >
              Sign In
            </button>
          </div>
          <img
            class="panel__image"
            src="https://www.pngkey.com/png/full/444-4444270_ia-press-play-website.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
