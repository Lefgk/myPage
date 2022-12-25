import React from "react";

function CTA() {
  return (
    <div className="pt-3 relative w-full">
      <div className="pt-14 pb-40" style={{ paddingBottom: "10px" }}>
        <h2 className="text-4xl md:text-5xl font-bold mb-10">Lets chat!</h2>
        <a
          href="mailto:lefgiak@gmail.com"
          className="cursor-pointer font-bold whitespace-nowrap 
        mt-6 px-8 py-3 text-white border-2 rounded-full border-white bg-bg hover:bg-fun-pink hover:border-fun-pink transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}

export default CTA;
