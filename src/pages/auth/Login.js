import React from "react";
import { Link } from "wouter";
import { useForm } from "react-hook-form";
import "./auth.css";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-title">
          <span>Log in</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input type="text" placeholder="email" {...register("email")} />
          </div>
          <div className="input-container">
            <input
              type="password"
              placeholder="password"
              {...register("password")}
            />
          </div>
          <button>Log in</button>
          <Link href="/signup">Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
