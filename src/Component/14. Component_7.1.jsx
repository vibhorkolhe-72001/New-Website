export default function Component_7_1({ value, data }) {
  return (
    <div className="relative h-full w-full flex gap-2 items-center max-sm:mt-5">
      <div className="h-full w-[40%] max-sm:w-[60%] p-1">
        <img
          src={data[value].urlToImage}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
      <div className="h-full w-[60%] flex flex-col gap-3 max-sm:gap-1 py-5">
        <div className=" w-full mt-2 max-md:mt-[-5px]">
          <h1 className="max-sm:text-[10px]">{data[value].title.slice(0, 50)}....</h1>
        </div>
        <div className="w-full flex items-center gap-5">
          <button className="border-1 max-sm:text-[8px] max-sm:px-5 px-3 py-1 font-medium bg-[#D32F2F] text-white text-[12px]">
            Sports
          </button>
          <p className="max-sm:text-[10px]">{data[value].source.name}</p>
        </div>
        <div className="w-full text-[13px]">
          <p className="max-sm:text-[10px]">{data[value].content.slice(0, 150)} .....</p>
        </div>
      </div>
    </div>
  );
}
