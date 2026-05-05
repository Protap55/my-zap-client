// import React from "react";
// import { useForm, useWatch } from "react-hook-form";
// import { useLoaderData } from "react-router";

// const SendParcel = () => {
//   const serviceCenters = useLoaderData();
//   // console.log("centers", serviceCenters);

//   const centersdublicate = serviceCenters.map((center) => center.region);
//   // console.log("region", centersdublicate);
//   const centers = new Set(centersdublicate);
//   // console.log("set region", centers);
//   const regions = [...centers];
//   // console.log("final array", regions);

//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm();

//   // dynamic distric select left
//   const senderRegion = useWatch({
//     control,
//     name: "senderRegion",
//   });

//   const districts = serviceCenters.filter(
//     (item) => item.region === senderRegion,
//   );

//   const detectDistricts = districts.map((item) => item.district);

//   // dynamic distric select right
//   const receiverRegion = useWatch({
//     control,
//     name: "receiverRegion",
//   });

//   const receiverDistrics = serviceCenters.filter(
//     (receiverItem) => receiverItem.region === receiverRegion,
//   );

//   const receiverDetectDistrics = receiverDistrics.map((item) => item.district);

//   const handleSendParcel = (data) => {
//     console.log("after send parcel", data);
//   };
//   return (
//     <div className="font-semibold border-2 border-secondary bg-white rounded-4xl p-8">
//       {/* page title  */}
//       <div>
//         <h1 className="text-4xl text-secondary mt-4">Send A Parcel</h1>
//         <h2 className="text-2xl text-secondary mt-4 mb-4">
//           Enter your parcel details
//         </h2>
//       </div>
//       <form onSubmit={handleSubmit(handleSendParcel)}>
//         <div className=" border-2 text-white border-primary p-6 rounded-4xl bg-black">
//           {/* parcel type */}
//           <div>
//             <label className="label mr-4">
//               <input
//                 type="radio"
//                 value="Document"
//                 {...register("parcelType")}
//                 className="radio checked:bg-primary"
//                 defaultChecked
//               />
//               Document
//             </label>
//             <label className="label">
//               <input
//                 type="radio"
//                 value="Non-Document"
//                 {...register("parcelType")}
//                 className="radio checked:bg-primary"
//               />
//               Non-Document
//             </label>
//           </div>
//           {/* parcel info: name, weight */}
//           <div className="grid text-white grid-cols-1 md:grid-cols-2 gap-12 my-8">
//             <fieldset className="fieldset">
//               <label className="label ">Parcel Name</label>
//               <input
//                 type="text"
//                 {...register("parcelName")}
//                 className="input w-full border text-black  border-amber-300 rounded-2xl"
//                 placeholder="Parcel Name"
//               />
//             </fieldset>
//             <fieldset className="fieldset">
//               <label className="label">Parcel Weight (KG)</label>
//               <input
//                 type="number"
//                 {...register("parcelWeight")}
//                 className="input w-full border text-black border-amber-300 rounded-2xl"
//                 placeholder="Parcel Weight (KG)"
//               />
//             </fieldset>
//           </div>
//         </div>

//         {/* two column */}
//         <div className="grid grid-cols-2 text-black  gap-12">
//           {/* Sender Details */}
//           <div className="border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-4xl p-6 mt-12">
//             <fieldset className="fieldset flex flex-col gap-4">
//               <h1 className="text-2xl">Sender Details</h1>
//               {/* Sender Name */}
//               <label className="label">Sender Name:</label>
//               <input
//                 type="text"
//                 {...register("senderName", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Sender Name"
//               />
//               {/* Sender Email */}
//               <label className="label">Sender email:</label>
//               <input
//                 type="email"
//                 {...register("senderEmail", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Sender Email"
//               />

//               {/* Sender Address */}
//               <label className="label">Sender Address:</label>
//               <input
//                 type="text"
//                 {...register("senderAddress", { required: true })}
//                 className="input w-full border border-amber-300 rounded-2xl"
//                 placeholder="Address"
//               />
//               {/* Sender Phone No */}
//               <label className="label">Sender Phone No:</label>
//               <input
//                 type="text"
//                 {...register("senderPhoneNumber", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Sender Phone No"
//               />

//               {/* Sender district region */}
//               <fieldset className="fieldset">
//                 <legend className="fieldset-legend">Sender Region:</legend>
//                 <select
//                   {...register("senderRegion", { required: true })}
//                   defaultValue="Select your Region"
//                   className="select   border-2 bg-white focus:border-black border-amber-300 rounded-2xl "
//                 >
//                   <option disabled={true}>Select your Region</option>

//                   {regions.map((r, i) => (
//                     <option value={r} key={i}>
//                       {r}
//                     </option>
//                   ))}
//                 </select>
//               </fieldset>

//               {/* Your District */}
//               <label className="label">Your District:</label>
//               <select
//                 defaultValue="Pick a distric"
//                 className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
//                 {...register("senderDistrict", { required: true })}
//               >
//                 <option disabled={true}>Select your District</option>
//                 {detectDistricts.map((d, i) => (
//                   <option key={i} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>

//               {/* Pickup Instruction */}
//               <label className="label">Pickup Instruction:</label>
//               <textarea
//                 placeholder="Pickup Instruction"
//                 className="border-2 bg-white  border-amber-300 rounded-2xl p-4"
//                 {...register("pickupInstruction", { required: true })}
//                 name=""
//                 rows="10"
//                 id=""
//               ></textarea>
//             </fieldset>
//           </div>
//           {/* Receiver Details */}
//           <div className="border-2 bg-[var(--color-form-neutral-input)] border-primary rounded-4xl p-6 mt-12">
//             <fieldset className="fieldset flex flex-col gap-4">
//               <h1 className="text-2xl">Receiver Details</h1>
//               {/* Receiver Name */}
//               <label className="label">Receiver Name:</label>
//               <input
//                 type="text"
//                 {...register("receiverName", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Receiver Name"
//               />
//               {/* Receiver Email */}
//               <label className="label">Receiver Email:</label>
//               <input
//                 type="email"
//                 {...register("receiverEmail", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Receiver Email"
//               />

//               {/* Receiver Address */}
//               <label className="label">Receiver Address:</label>
//               <input
//                 type="text"
//                 {...register("receiverAddress", { required: true })}
//                 className="input w-full border border-amber-300 rounded-2xl"
//                 placeholder="Receiver Address"
//               />
//               {/* Receiver Contact No */}
//               <label className="label">Receiver Contact No:</label>
//               <input
//                 type="text"
//                 {...register("receiverPhoneNumber", { required: true })}
//                 className="input w-full border  border-amber-300 rounded-2xl"
//                 placeholder="Receiver Contact No"
//               />
//               {/* Receiver Region */}
//               <label className="label">Receiver Region:</label>
//               <select
//                 className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
//                 {...register("receiverRegion", { required: true })}
//               >
//                 <option disabled selected>
//                   Select receiver Region
//                 </option>
//                 {regions.map((r, i) => (
//                   <option key={i} value={r}>
//                     {r}
//                   </option>
//                 ))}
//               </select>
//               {/* Receiver Detect District */}
//               <label className="label">Receiver District:</label>
//               <select
//                 className="border-2 bg-white focus:border-black border-amber-300 rounded-2xl p-4"
//                 {...register("receiverDistrict", { required: true })}
//               >
//                 <option disabled selected>
//                   Select your District
//                 </option>
//                 {receiverDetectDistrics.map((d, i) => (
//                   <option key={i} value={d}>
//                     {d}
//                   </option>
//                 ))}
//               </select>
//               {/*Delivery Instruction */}
//               <label className="label">Delivery Instruction:</label>
//               <textarea
//                 placeholder="Delivery Instruction"
//                 className="border-2 bg-white  border-amber-300 rounded-2xl p-4"
//                 {...register("deliveryInstruction", { required: true })}
//                 name=""
//                 rows="10"
//                 id=""
//               ></textarea>
//             </fieldset>
//           </div>
//         </div>
//         {/* button */}
//         <div className="pt-8">
//           <button type="submit" value="Send parcel" className="btn bg-primary">
//             Proceed to Confirm Booking
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SendParcel;

import React from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";

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

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const districts = serviceCenters.filter(
    (item) => item.region === senderRegion,
  );
  const detectDistricts = districts.map((item) => item.district);

  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const receiverDistrics = serviceCenters.filter(
    (item) => item.region === receiverRegion,
  );
  const receiverDetectDistrics = receiverDistrics.map((item) => item.district);

  const handleSendParcel = (data) => {
    console.log("after send parcel", data);
  };

  return (
    <div className="font-semibold border-2 border-secondary bg-white rounded-4xl p-8">
      <h1 className="text-4xl text-secondary mt-4">Send A Parcel</h1>
      <h2 className="text-2xl text-secondary mt-4 mb-4">
        Enter your parcel details
      </h2>

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

        {/* Sender + Receiver */}
        <div className="grid grid-cols-2 gap-10 mt-10">
          {/* Sender */}
          <fieldset className="p-6 border rounded-4xl">
            <legend>Sender Details</legend>
            {/*sender name */}
            <label className="label">Sender Name:</label>
            <input
              {...register("senderName", { required: true })}
              placeholder="Name"
              className="input w-full mb-3"
            />
            <label className="label">Sender Email:</label>
            <input
              {...register("senderEmail", { required: true })}
              placeholder="Email"
              className="input w-full mb-3"
            />
            <label className="label">Sender Address:</label>
            <input
              {...register("senderAddress", { required: true })}
              placeholder="Address"
              className="input w-full mb-3"
            />
            <label className="label">Sender Phone No:</label>
            <input
              {...register("senderPhoneNumber", { required: true })}
              placeholder="Phone"
              className="input w-full mb-3"
            />

            {/* Region */}
            <label className="label">Sender Region:</label>
            <select
              {...register("senderRegion", { required: true })}
              defaultValue="Sender Region"
              className="select w-full mb-3"
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

            {/* District */}
            <label className="label">Sender District:</label>
            <select
              {...register("senderDistrict", { required: true })}
              defaultValue="Sender District"
              className="select w-full mb-3"
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

            <textarea
              {...register("pickupInstruction", { required: true })}
              placeholder="Pickup Instruction"
              className="textarea w-full"
            />
          </fieldset>

          {/* Receiver */}
          <fieldset className="p-6 border rounded-4xl">
            <legend>Receiver Details</legend>

            <input
              {...register("receiverName", { required: true })}
              placeholder="Name"
              className="input w-full mb-3"
            />
            <input
              {...register("receiverEmail", { required: true })}
              placeholder="Email"
              className="input w-full mb-3"
            />
            <input
              {...register("receiverAddress", { required: true })}
              placeholder="Address"
              className="input w-full mb-3"
            />
            <input
              {...register("receiverPhoneNumber", { required: true })}
              placeholder="Phone"
              className="input w-full mb-3"
            />

            <select
              {...register("receiverRegion", { required: true })}
              defaultValue=""
              className="select w-full mb-3"
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

            <select
              {...register("receiverDistrict", { required: true })}
              defaultValue=""
              className="select w-full mb-3"
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

            <textarea
              {...register("deliveryInstruction", { required: true })}
              placeholder="Delivery Instruction"
              className="textarea w-full"
            />
          </fieldset>
        </div>

        <button type="submit" className="btn bg-primary mt-6">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
