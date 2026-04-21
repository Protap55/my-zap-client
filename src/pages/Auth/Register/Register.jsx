import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router";

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
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
                <input type="file" className="input input-bordered w-full" />
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
                <button className="btn hover:transition-all duration-200 hover:scale-105 hover:bg-amber-300 rounded-2xl bg-white text-black border-[#e5e5e5]">
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Register with google
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
