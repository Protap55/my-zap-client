import React from "react";

const FaqSection = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-secondary pb-4">
          Frequently Asked Question (FAQ)
        </h1>
        <p className="items-center">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 has-[:checked]:bg-[#e6f2f3] has-[:checked]:border-secondary text-secondary">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 has-[:checked]:bg-[#e6f2f3] has-[:checked]:border-secondary text-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content text-sm">
          This product is generally suitable for most adults and body types,
          thanks to its adjustable design. However, it may not be ideal for
          children or individuals with specific medical conditions. It’s always
          best to check the size guide and consult a healthcare professional if
          needed.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 has-[:checked]:bg-[#e6f2f3] has-[:checked]:border-secondary text-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm">
          Posture correctors can help reduce mild back discomfort and improve
          posture awareness, but they are not a permanent solution. For
          long-term results, regular exercise, stretching, and maintaining good
          daily habits are essential.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 has-[:checked]:bg-[#e6f2f3] has-[:checked]:border-secondary text-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content text-sm">
          Yes, the product includes smart features such as vibration alerts to
          notify you of important updates and events.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300 has-[:checked]:bg-[#e6f2f3] has-[:checked]:border-secondary text-secondary">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How will I be notified when the product is back in stock?
        </div>
        <div className="collapse-content text-sm">
          You will be notified via email once the product is back in stock. Make
          sure to subscribe to the product or enable notifications so you don’t
          miss the update.
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
