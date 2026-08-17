import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  const centersdublicate = serviceCenters.map((center) => center.region);
  const centers = new Set(centersdublicate);
  const regions = [...centers];

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const senderRegion = useWatch({
    control,
    name: "senderRegion",
  });

  const districts = serviceCenters.filter(
    (item) => item.region === senderRegion,
  );

  console.log("first", districts);

  const detectDistricts = districts.map((item) => item.district);

  const receiverRegion = useWatch({
    control,
    name: "receiverRegion",
  });

  const receiverDistrics = serviceCenters.filter(
    (item) => item.region === receiverRegion,
  );

  const receiverDetectDistrics = receiverDistrics.map((item) => item.district);

  const handleSendParcel = (data) => {
    console.log("after send parcel", data);

    // same district check
    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    // document check
    const isDocument = data.parcelType === "Document";

    // parcel weight
    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;

    // document pricing
    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      // non-document under 3kg
      if (parcelWeight <= 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        // above 3kg
        const minCharge = isSameDistrict ? 110 : 150;

        const extraWeight = parcelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;

        cost = minCharge + extraCharge;
      }
    }

    console.log("Delivery Cost =", cost);

    // cost alert
    Swal.fire({
      title: "Agree with the cost?",
      text: `You will be charged ${cost} tk!`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm & Continue payment!",
    }).then((result) => {
      if (result.isConfirmed) {
        data.cost = cost;
        // send to database
        axiosSecure
          .post("/parcels", data)
          .then((res) => {
            console.log("after saving parcel", res.data);

            if (res.data.insertedId) {
              navigate("/dashboard/my-parcels");
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Parcel has created. Please pay",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          })
          .catch((error) => {
            console.log("parcel error axios", error);
          });
      }
    });
  };
  return (
    <div className="font-semibold border-2 border-secondary bg-success rounded-3xl p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl text-secondary mt-2 sm:mt-4">
        Send A Parcel
      </h1>

      <h2 className="text-lg sm:text-xl lg:text-2xl text-secondary mt-2 sm:mt-4 mb-4">
        Enter your parcel details
      </h2>

      <form onSubmit={handleSubmit(handleSendParcel)}>
        <div className="border-2 text-white border-primary p-4 sm:p-6 rounded-3xl lg:rounded-4xl bg-black">
          {/* parcel type */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
            <label className="label mr-4">
              <input
                type="radio"
                value="Document"
                {...register("parcelType")}
                className="radio checked:bg-primary"
                defaultChecked
              />
              Document
            </label>

            <label className="label">
              <input
                type="radio"
                value="Non-Document"
                {...register("parcelType")}
                className="radio checked:bg-primary"
              />
              Non-Document
            </label>
          </div>

          {/* parcel info */}
          <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 my-6 md:my-8">
            {/* parcel name */}
            <fieldset className="fieldset">
              <label className="label">Parcel Name</label>

              <input
                type="text"
                {...register("parcelName", {
                  required: true,
                })}
                className="input w-full border text-black border-amber-300 rounded-2xl px-4 py-3"
                placeholder="Parcel Name"
              />

              {errors.parcelName && (
                <p className="text-red-500 mt-1">Parcel Name is required</p>
              )}
            </fieldset>

            {/* parcel weight */}
            <fieldset className="fieldset">
              <label className="label">Parcel Weight (KG)</label>

              <input
                type="number"
                step="any"
                {...register("parcelWeight", {
                  required: true,
                })}
                className="input w-full border text-black border-amber-300 rounded-2xl px-4 py-3"
                placeholder="Parcel Weight (KG)"
              />

              {errors.parcelWeight && (
                <p className="text-red-500 mt-1">Parcel Weight is required</p>
              )}
            </fieldset>
          </div>
        </div>

        {/* sender + receiver */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-10 mt-8 lg:mt-10">
          {/* sender */}
          <fieldset className="p-4 sm:p-6 text-black border rounded-3xl lg:rounded-4xl">
            <legend className="text-xl sm:text-2xl">Sender Details</legend>

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

          {/* receiver */}
          <fieldset className="p-4 sm:p-6 border rounded-3xl lg:rounded-4xl">
            <legend className="text-xl sm:text-2xl">Receiver Details</legend>

            {/* receiver name */}
            <label className="label">Receiver Name:</label>

            <input
              {...register("receiverName", {
                required: true,
              })}
              placeholder="Name"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.receiverName && (
              <p className="text-red-500 mb-3">Receiver Name is required</p>
            )}

            {/* receiver email */}
            <label className="label">Receiver Email:</label>

            <input
              {...register("receiverEmail", {
                required: true,
              })}
              placeholder="Email"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.receiverEmail && (
              <p className="text-red-500 mb-3">Receiver Email is required</p>
            )}

            {/* receiver address */}
            <label className="label">Receiver Address:</label>

            <input
              {...register("receiverAddress", {
                required: true,
              })}
              placeholder="Address"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.receiverAddress && (
              <p className="text-red-500 mb-3">Receiver Address is required</p>
            )}

            {/* receiver phone */}
            <label className="label">Receiver Phone No:</label>

            <input
              type="tel"
              {...register("receiverPhoneNumber", {
                required: true,
              })}
              placeholder="Phone"
              className="input w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl px-4 py-3"
            />

            {errors.receiverPhoneNumber && (
              <p className="text-red-500 mb-3">
                Receiver Phone Number is required
              </p>
            )}

            {/* receiver region */}
            <label className="label">Receiver Region:</label>

            <select
              {...register("receiverRegion", {
                required: true,
              })}
              defaultValue=""
              className="w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
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

            {errors.receiverRegion && (
              <p className="text-red-500 mb-3">Receiver Region is required</p>
            )}

            {/* receiver district */}
            <label className="label">Receiver District:</label>

            <select
              {...register("receiverDistrict", {
                required: true,
              })}
              defaultValue=""
              className="w-full mb-2 mt-2 border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-2xl p-3"
            >
              <option value="" disabled>
                Select District
              </option>

              {receiverDetectDistrics.map((d, i) => (
                <option key={i} value={d}>
                  {d}
                </option>
              ))}
            </select>

            {errors.receiverDistrict && (
              <p className="text-red-500 mb-3">Receiver District is required</p>
            )}

            {/* delivery instruction */}
            <label className="label mb-2">Delivery Instruction:</label>

            <textarea
              {...register("deliveryInstruction", {
                required: true,
              })}
              placeholder="Delivery Instruction"
              className="textarea w-full border-2 bg-white border-amber-300 rounded-2xl p-4"
              rows={8}
            />

            {errors.deliveryInstruction && (
              <p className="text-red-500 mt-1">
                Delivery Instruction is required
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

export default SendParcel;
