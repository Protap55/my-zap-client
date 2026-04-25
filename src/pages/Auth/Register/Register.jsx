import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log("after", data);

    const profileImg = data.photo[0];

    registerUser(data.email, data.password).then((registerRes) => {
      console.log(registerRes.user);

      // store the image and get the photo url
      const formData = new FormData();
      formData.append("image", profileImg);

      const image_Api_Url = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_image_host_key}`;

      // axios post

      axios
        .post(image_Api_Url, formData)
        .then((res) => {
          console.log("after img upload", res.data.data.display_url);

          // update user profile
          const userProfile = {
            displayName: data.name,
            photoURL: res.data.data.display_url,
          };

          updateUserProfile(userProfile)
            .then((result) => {
              console.log(result);
            })
            .catch((error) => {
              console.log(error);
            });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  return (
    <div>
      <div className="flex-1   flex justify-center items-center">
        <div className="card bg-base-100 shadow-amber-300 border border-amber-300 rounded-2xl w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-xl ">Register with ZapShift</p>
            <form onSubmit={handleSubmit(handleRegistration)}>
              <fieldset className="fieldset">
                {/* photo */}
                <label className="label">Photo</label>
                <input
                  type="file"
                  {...register("photo", { required: true })}
                  className="file-input file-input-warning input-bordered w-full"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Image is required
                  </p>
                )}
                {/* name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Name"
                />

                {errors.name?.type === "required" && (
                  <p className="text-red-500 font-semibold">Name is required</p>
                )}

                {/* email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  className="input input-bordered w-full"
                  placeholder="Email"
                />

                {errors.email?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Email is required
                  </p>
                )}

                {/* password */}
                <label className="label mt-2">Password</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    maxLength: 20,

                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                  })}
                  className="input input-bordered w-full"
                  placeholder="Password"
                />

                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-semibold">
                    Password is required
                  </p>
                )}

                <button className="btn mb-2 hover:transition-all duration-200 hover:scale-105 hover:bg-amber-300 bg-primary rounded-2xl mt-4 w-full">
                  Register
                </button>
                <p className="text-[16px]">
                  Already have an account?{" "}
                  <span className="text-secondary cursor-pointer  hover:transition-all duration-200 hover:scale-105 font-bold  hover:text-[20px]">
                    <NavLink to="/login"> Login</NavLink>
                  </span>
                </p>
                <p className="text-[16px] py-3 text-center">Or</p>
              </fieldset>
            </form>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
