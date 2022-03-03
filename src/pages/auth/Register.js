import React from "react";
import { useForm } from "react-hook-form";
import "./auth.css";
import { Link } from "wouter";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {};

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-title">
          <span>Sign Up</span>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container">
            <input type="text" placeholder="name" {...register("name")} />
          </div>
          <div className="input-container">
            <input type="text" placeholder="surname" {...register("surname")} />
          </div>
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
          <button>Sign Up</button>
          <Link href="/login">Log in</Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
