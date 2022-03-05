import React from "react";
import { Link, useLocation } from "wouter";
import { useForm } from "react-hook-form";
import "./auth.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { getUser } from "../../store/actions/userActions";

const Login = () => {
  const [, setLocation] = useLocation();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      dispatch(getUser(res.user.uid));
      setLocation("/");
    } catch (err) {
      console.log(err);
    }
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
