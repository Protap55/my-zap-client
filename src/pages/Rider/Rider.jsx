import React from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useLoaderData } from "react-router";

const Rider = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const serviceCenters = useLoaderData();
  const centersdublicate = serviceCenters.map((center) => center.region);
  const centers = new Set(centersdublicate);
  const regions = [...centers];

  const senderRegion = useWatch({
    control,
    name: "senderRegion",
  });

  const districts = serviceCenters.filter(
    (item) => item.region === senderRegion,
  );

  console.log("first", districts);

  const detectDistricts = districts.map((item) => item.district);

  const handleRiderApplication = (data) => {};
  return (
    <div>
      <h1>I am rider</h1>
      <form onSubmit={handleSubmit(handleRiderApplication)}>
        {/* sender + receiver */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 mt-8 lg:mt-10">
          {/* sender */}
          <fieldset className="p-4 sm:p-6 text-black border rounded-3xl lg:rounded-4xl">
            <legend className="text-xl sm:text-2xl">Rider Details</legend>

            {/* sender name */}
            <label className="label">Sender Name:</label>

            <input
              {...register("senderName", {
                required: true,
              })}
              defaultValue={user?.displayName}
              placeholder="Name"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.senderName && (
              <p className="text-red-500 mb-3">Sender Name is required</p>
            )}

            {/* sender email */}
            <label className="label">Sender Email:</label>

            <input
              {...register("senderEmail", {
                required: true,
              })}
              defaultValue={user?.email}
              placeholder="Email"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.senderEmail && (
              <p className="text-red-500 mb-3">Sender Email is required</p>
            )}

            {/* sender address */}
            <label className="label">Sender Address:</label>

            <input
              {...register("senderAddress", {
                required: true,
              })}
              placeholder="Address"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.senderAddress && (
              <p className="text-red-500 mb-3">Sender Address is required</p>
            )}

            {/* sender phone */}
            <label className="label">Sender Phone No:</label>

            <input
              type="tel"
              {...register("senderPhoneNumber", {
                required: true,
              })}
              placeholder="Phone"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.senderPhoneNumber && (
              <p className="text-red-500 mb-3">
                Sender Phone Number is required
              </p>
            )}

            {/* sender region */}
            <label className="label">Sender Region:</label>

            <select
              {...register("senderRegion", {
                required: true,
              })}
              defaultValue=""
              className="w-full mb-2 mt-2 text-black border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
            >
              <option value="" disabled>
                Sender Region
              </option>

              {regions.map((r, i) => (
                <option key={i} value={r}>
                  {r}
                </option>
              ))}
            </select>

            {errors.senderRegion && (
              <p className="text-red-500 mb-3">Sender Region is required</p>
            )}

            {/* sender district */}
            <label className="label">Sender District:</label>

            <select
              {...register("senderDistrict", {
                required: true,
              })}
              defaultValue=""
              className="w-full mb-2 mt-2 text-black border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
            >
              <option value="" disabled>
                Sender District
              </option>

              {detectDistricts.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {errors.senderDistrict && (
              <p className="text-red-500 mb-3">Sender District is required</p>
            )}

            {/* pickup instruction */}
            <label className="label mb-2">Pickup Instruction:</label>

            <textarea
              {...register("pickupInstruction", {
                required: true,
              })}
              placeholder="Pickup Instruction"
              className="textarea w-full border-2 bg-white border-amber-300 rounded-2xl p-4"
              rows={8}
            />

            {errors.pickupInstruction && (
              <p className="text-red-500 mt-1">
                Pickup Instruction is required
              </p>
            )}
          </fieldset>
        </div>

        <button type="submit" className="btn bg-primary mt-6 w-full sm:w-auto">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default Rider;
