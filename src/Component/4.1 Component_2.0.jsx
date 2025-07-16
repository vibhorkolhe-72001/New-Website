export default function Component_2_0({ data, value }) {
  return (
    <div className="relative h-full w-full max-md:h-[100%] max-md:w-[100%] max-sm:h-[200px] max-sm:w-[100%] md:h-full md:w-full">
      <img
        src={data[value].urlToImage}
        className="h-full w-full object-cover brightness-50"
        alt=""
      />
      <div className="absolute min-h-10 w-full bottom-0 p-2 flex flex-col gap-2 text-white">
        <div>
          <p className="text-[13px]">{data[value].title}</p>
        </div>
        <div className="flex gap-10 items-center">
          <button className="border-1 px-3 py-1 font-medium bg-[#D32F2F] text-white text-[10px]">
            Sports
          </button>
          <p className="text-[12px]">{data[value].source.name}</p>
        </div>
      </div>
    </div>
  );
}
