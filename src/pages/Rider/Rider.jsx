import React from "react";
import { useForm, useWatch } from "react-hook-form";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useLoaderData } from "react-router";
import agent_pending from "../../assets/agent-pending.png";

const Rider = () => {
  const axiosSecure = useAxiosSecure();

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

  const riderRegion = useWatch({
    control,
    name: "riderRegion",
  });

  const districts = serviceCenters.filter(
    (item) => item.region === riderRegion,
  );

  console.log("first", districts);

  const detectDistricts = districts.map((item) => item.district);

  const handleRiderApplication = (data) => {
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title:
            "Your application has been submitted. We will reach to you in 7 days",
          showConfirmButton: false,
          timer: 3500,
        });
      }
    });
  };
  return (
    <div className="my-8 card card-body bg-green-50 border-2 border-amber-600 p-4 sm:p-6 lg:p-10 rounded-2xl">
      {/* Header */}
      <div>
        <h1 className="font-bold text-3xl sm:text-4xl text-secondary">
          Be a Rider
        </h1>

        <p className="text-[16px] mt-2">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
      </div>

      {/* Form + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start mt-8">
        {/* LEFT - FORM */}
        <div className="w-full order-2 lg:order-1 min-w-0">
          <form onSubmit={handleSubmit(handleRiderApplication)}>
            <fieldset className="p-4 sm:p-6 text-black border rounded-3xl">
              <legend className="text-xl sm:text-2xl px-2">
                Tell us about yourself
              </legend>

              {/* Rider name */}
              <label className="label">Your Name:</label>

              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Name"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.name && (
                <p className="text-red-500 mb-3">Sender Name is required</p>
              )}

              {/* Driving License */}
              <label className="label">Driving License Number:</label>

              <input
                {...register("drivingLicense", {
                  required: true,
                })}
                placeholder="Driving License Number"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.drivingLicense && (
                <p className="text-red-500 mb-3">
                  Driving License Number is required
                </p>
              )}

              {/* Email */}
              <label className="label">Email:</label>

              <input
                type="email"
                {...register("email", {
                  required: true,
                })}
                placeholder="Email"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.email && (
                <p className="text-red-500 mb-3">Email is required</p>
              )}

              {/* Region */}
              <label className="label">Region:</label>

              <select
                {...register("riderRegion", {
                  required: true,
                })}
                defaultValue=""
                className="w-full mb-2 mt-2 text-black border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
              >
                <option value="" disabled>
                  Select Region
                </option>

                {regions.map((r, i) => (
                  <option key={i} value={r}>
                    {r}
                  </option>
                ))}
              </select>

              {errors.riderRegion && (
                <p className="text-red-500 mb-3">Region is required</p>
              )}

              {/* District */}
              <label className="label">District:</label>

              <select
                {...register("district", {
                  required: true,
                })}
                className="w-full mb-2 mt-2 text-black border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
              >
                <option value="" disabled>
                  Select District
                </option>

                {detectDistricts.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {errors.district && (
                <p className="text-red-500 mb-3">District is required</p>
              )}

              {/* NID */}
              <label className="label">NID No:</label>

              <input
                type="number"
                {...register("nid", {
                  required: true,
                })}
                placeholder="NID No"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.nid && (
                <p className="text-red-500 mb-3">NID Number is required</p>
              )}

              {/* Phone */}
              <label className="label">Phone No:</label>

              <input
                type="tel"
                {...register("phone", {
                  required: true,
                })}
                placeholder="Phone No"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.phone && (
                <p className="text-red-500 mb-3">Phone Number is required</p>
              )}

              {/* Bike Model */}
              <label className="label">Bike Brand, Model and Year:</label>

              <input
                type="text"
                {...register("bikeModel", {
                  required: true,
                })}
                placeholder="Bike Brand, Model and Year"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.bikeModel && (
                <p className="text-red-500 mb-3">
                  Bike information is required
                </p>
              )}

              {/* Bike Registration */}
              <label className="label">Bike Registration Number:</label>

              <input
                type="number"
                {...register("bikeRegistration", {
                  required: true,
                })}
                placeholder="Bike Registration Number"
                className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.bikeRegistration && (
                <p className="text-red-500 mb-3">
                  Bike Registration Number is required
                </p>
              )}

              {/* About */}
              <label className="label">Tell Us About Yourself:</label>

              <textarea
                {...register("aboutYourself", {
                  required: true,
                })}
                placeholder="Tell us about yourself"
                rows="4"
                className="textarea w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
              />

              {errors.aboutYourself && (
                <p className="text-red-500 mb-3">
                  Please tell us about yourself
                </p>
              )}
            </fieldset>

            <button
              type="submit"
              className="btn w-full bg-primary mt-6  sm:w-full rounded-2xl Phone No"
            >
              Submit
            </button>
          </form>
        </div>

        {/* RIGHT - IMAGE */}
        <div className="w-full flex justify-center lg:order-2 order-1 lg:justify-start lg:sticky lg:top-10">
          <img
            src={agent_pending}
            alt="agent-pending"
            className="w-full max-w-md lg:max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Rider;
