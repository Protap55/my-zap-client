import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const ForgatePassword = () => {
  const { register, handleSubmit } = useForm();
  const { passwordReset } = useAuth();

  const handlePasswordReset = (data) => {
    console.log("forgate", data);
    passwordReset(data.email)
      .then(() => {
        console.log("Password reset successfully");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(handlePasswordReset)}
        className="p-6 shadow-lg rounded-xl w-96"
      >
        <h2 className="text-xl font-bold mb-4">Forgot Password</h2>

        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true })}
          className="input input-bordered w-full"
        />

        <button className="btn btn-primary w-full mt-4">
          Send Reset Email
        </button>
      </form>
    </div>
  );
};

export default ForgatePassword;
