import fallback_img from "../assets/svg/image.png";

function Component_2_1({ data }) {
  return (
    <div className="relative h-[450px] w-full">
      <div className="h-full w-full">
        {data.urlToImage ? (
          <img
            src={data.urlToImage || fallback_img}
            className="h-full w-full object-cover brightness-50"
            alt={data.title || "Article image"}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallback_img;
            }}
          />
        ) : (
          <div className="h-full w-full bg-gray-800 flex items-center justify-center text-white text-sm">
            No Image Available
          </div>
        )}

      </div>
      <div className="absolute min-h-40 w-full bottom-0 flex flex-col justify-around px-5 py-1  max-sm:py-1 ">
        <div className="">
          <p className="text-white text-xl max-sm:text-[10px]">{data.title}</p>
        </div>
        <div className="flex gap-10  max-sm:mt-2">
          <button className="border-1 px-3 py-1 font-medium bg-[#D32F2F] text-white text-[10px]  max-sm:text-[8px]">
            Sports
          </button>
          <h1 className="text-white">{data.source.name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Component_2_1;
