import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const serviceCenters = useLoaderData();
  console.log("centers", serviceCenters);

  const centersdublicate = serviceCenters.map((center) => center.region);
  console.log("region", centersdublicate);
  const centers = new Set(centersdublicate);
  console.log("set region", centers);
  const regions = [...centers];
  console.log("final array", regions);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const senderRegion = useWatch({
    control,
    name: "senderRegion",
  });

  const districts = serviceCenters.filter(
    (item) => item.region === senderRegion,
  );

  const detectDistricts = districts.map((item) => item.district);

  const handleSendParcel = (data) => {
    console.log("after send parcel", data);
  };

  return (
    <div className="font-semibold border-2 border-secondary bg-white rounded-4xl p-8">
      {/* page title  */}
      <div>
        <h1 className="text-4xl text-secondary mt-4">Send A Parcel</h1>
        <h2 className="text-2xl text-secondary mt-4 mb-4">
          Enter your parcel details
        </h2>
      </div>
      <form onSubmit={handleSubmit(handleSendParcel)}>
        <div className=" border-2 text-white border-primary p-6 rounded-4xl bg-black">
          {/* parcel type */}
          <div>
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
          {/* parcel info: name, weight */}
          <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-12 my-8">
            <fieldset className="fieldset">
              <label className="label ">Parcel Name</label>
              <input
                type="text"
                {...register("parcelName")}
                className="input w-full border text-black  border-amber-300 rounded-2xl"
                placeholder="Parcel Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Parcel Weight (KG)</label>
              <input
                type="number"
                {...register("parcelWeight")}
                className="input w-full border text-black border-amber-300 rounded-2xl"
                placeholder="Parcel Weight (KG)"
              />
            </fieldset>
          </div>
        </div>

        {/* two column */}
        <div className="grid grid-cols-2 text-black  gap-12">
          {/* Sender Details */}
          <div className="border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-4xl p-6 mt-12">
            <fieldset className="fieldset flex flex-col gap-4">
              <h1 className="text-2xl">Sender Details</h1>
              {/* Sender Name */}
              <label className="label">Sender Name:</label>
              <input
                type="text"
                {...register("senderName", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Sender Name"
              />
              {/* Sender Email */}
              <label className="label">Sender email:</label>
              <input
                type="email"
                {...register("senderEmail", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Sender Email"
              />

              {/* Sender Address */}
              <label className="label">Sender Address:</label>
              <input
                type="text"
                {...register("senderAddress", { required: true })}
                className="input w-full border border-amber-300 rounded-2xl"
                placeholder="Address"
              />
              {/* Sender Phone No */}
              <label className="label">Sender Phone No:</label>
              <input
                type="text"
                {...register("senderPhoneNumber", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Sender Phone No"
              />

              {/* Sender district region */}
              <fieldset className="fieldset">
                <legend className="fieldset-legend">Sender Region:</legend>
                <select
                  {...register("senderRegion")}
                  className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
                >
                  <option disabled selected>
                    Select your Region
                  </option>

                  {regions.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Your District */}
              <label className="label">Your District:</label>
              <select
                className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
                {...register("senderDistrict", { required: true })}
              >
                <option disabled selected>
                  Select your District
                </option>
                {detectDistricts.map((d, i) => (
                  <option key={i} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              {/* Pickup Instruction */}
              <label className="label">Pickup Instruction:</label>
              <textarea
                placeholder="Pickup Instruction"
                className="border-2 bg-white  border-amber-300 rounded-2xl p-4"
                {...register("pickupInstruction", { required: true })}
                name=""
                rows="10"
                id=""
              ></textarea>
            </fieldset>
          </div>
          {/* Receiver Details */}
          <div className="border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-4xl p-6 mt-12">
            <fieldset className="fieldset flex flex-col gap-4">
              <h1 className="text-2xl">Receiver Details</h1>
              {/* Receiver Name */}
              <label className="label">Receiver Name:</label>
              <input
                type="text"
                {...register("receiverName", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Receiver Name"
              />
              {/* Receiver Email */}
              <label className="label">Receiver Email:</label>
              <input
                type="email"
                {...register("receiverEmail", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Receiver Email"
              />

              {/* Receiver Address */}
              <label className="label">Receiver Address:</label>
              <input
                type="text"
                {...register("receiverAddress", { required: true })}
                className="input w-full border border-amber-300 rounded-2xl"
                placeholder="Receiver Address"
              />
              {/* Receiver Contact No */}
              <label className="label">Receiver Contact No:</label>
              <input
                type="text"
                {...register("receiverPhoneNumber", { required: true })}
                className="input w-full border  border-amber-300 rounded-2xl"
                placeholder="Receiver Contact No"
              />
              {/* Receiver District */}
              <label className="label">Receiver District:</label>
              <select
                className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
                {...register("receiverDistrict", { required: true })}
              >
                <option disabled selected>
                  Select your District
                </option>
                <option value="Dhaka">Dhaka</option>
                <option value="Khulna">Khulna</option>
                <option value="Barisal">Barisal</option>
                <option value="Magura">Magura</option>
              </select>
              {/*Delivery Instruction */}
              <label className="label">Delivery Instruction:</label>
              <textarea
                placeholder="Delivery Instruction"
                className="border-2 bg-white  border-amber-300 rounded-2xl p-4"
                {...register("deliveryInstruction", { required: true })}
                name=""
                rows="10"
                id=""
              ></textarea>
            </fieldset>
          </div>
        </div>
        {/* button */}
        <div className="pt-8">
          <button type="submit" value="Send parcel" className="btn bg-primary">
            Proceed to Confirm Booking
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
