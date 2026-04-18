import React from "react";
import reviewQuote from "../../../assets/reviewQuote.png";
const ReviewCard = ({ review }) => {
  const { userName, review: comment, user_photoURL } = review;
  console.log(review);
  return (
    <div>
      <div className=" bg-base-100 shadow-sm">
        <figure className="px-6 pt-2">
          <img src={reviewQuote} alt="Shoes" />
        </figure>
        <div className="card-body">
          <p>{comment}</p>
          <div className=" border-b-2 border-dotted"></div>
          <div className="flex  gap-6">
            <div className="h-12 w-12 rounded-full bg-secondary">
              <img className="rounded-full" src={user_photoURL} alt="" />
            </div>
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">{userName}</h2>
              <p>Profession</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
