import { useState } from "react";

const MonoBlog = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      onClick={() => setOpen(!open)}
      className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300 cursor-pointer"
    >
      <a href={data?.link}>
        <img
          src={data?.image}
          alt="Blog"
          className="w-full h-56.5 object-cover "
        />
        {/* Date */}
        <div className="m-6">
          <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 ">
            {data?.date}
          </p>
          {/* Title */}
          <p className="text-[14px] xs:text-lg font-medium text-[#333333] mt-2">
            {data?.title}
          </p>
          {/* Short Paragraph */}
          {open && (
            <p className="text-sm text-gray-500 mt-3 leading-relaxed">
              {data?.excerpt}
            </p>
          )}
        </div>
      </a>
    </div>
  );
};

export default MonoBlog;
