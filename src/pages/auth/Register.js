import React from "react";
import { useForm } from "react-hook-form";
import "./auth.css";
import { Link, useLocation } from "wouter";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [, setLocation] = useLocation();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      const userDoc = doc(db, "users", res.user.uid);
      await setDoc(userDoc, {
        name: data.name,
        surname: data.surname,
        id: res.user.uid,
        email: data.email,
      });
      setLocation("/");
    } catch (err) {
      console.log(err);
    }
  };

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
