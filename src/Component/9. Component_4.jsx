import { useContext } from "react";
import { StoreContext } from "./0. Context_API";
import Component_3_1 from "./7. Component_3.1";

function Component_4() {
  let context = useContext(StoreContext);
  let data = context.news.articles;

  return (
    <div className="min-h-[550px] w-full flex justify-center">
      <div className="h-full w-[60%] flex gap-2 max-md:w-full max-md:p-5 max-md:flex-col md:w-full md:flex-col max-lg:p-10 lg:w-[80%] xl:w-[60%] 2xl:flex-row 2xl:mt-10 2xl:gap-5 2xl:mb-10">
        <div className="h-full w-[66%] flex flex-col max-md:w-full gap-10 md:w-full">
          <div className="h-10 w-full border-b border-gray-300">
            <div className="h-full inline-block border-b border-red-500 px-2">
              <h1 className="uppercase h-full flex items-center">
                popular news
              </h1>
            </div>
          </div>
          <div className="h-full w-full flex flex-wrap items-center justify-around  max-sm:gap-10  max-sm:justify-start">
            {data.slice(0, 6).map((value, index) => {
              return (
                <div key={index} className="size-[240px] flex flex-col  max-sm:w-full  max-sm:h-full">
                  <div className="relative h-[50%] w-full">
                    <img
                      src={data[index].urlToImage}
                      className="h-full w-full object-cover"
                      alt=""
                    />
                  </div>
                  <div className="relative h-[25%] w-full flex items-center  max-sm:mt-5">
                    <h1>{data[index].title.slice(0, 50)}.....</h1>
                  </div>
                  <div className="relative h-[25%] w-full flex items-center justify-around  max-sm:justify-start  max-sm:gap-5">
                    <button className="border text-white text-[12px] px-4 bg-[#D32F2F]">
                      Sports
                    </button>{" "}
                    <p>{data[index].source.name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[34%] flex flex-col items-center justify-center max-md:w-full  max-sm:mt-5 md:w-full">
          <div className="h-10 w-full flex">
            <div className="h-full w-full flex items-center justify-center border-1 border-gray-200 bg-[#F5F5F5]">
              <h1>Recent</h1>
            </div>
            <div className="h-full w-full flex items-center justify-center border-1 border-gray-200 bg-[#F5F5F5]">
              <h1>Popular</h1>
            </div>
            <div className="h-full w-full flex items-center justify-center border-1 border-gray-200 bg-[#F5F5F5]">
              <h1>Comments</h1>
            </div>
          </div>
          <div className="h-full w-full flex flex-col justify-around max-sm:mt-5">
            {[25, 40, 50, 56].map((value, index) => (
              <Component_3_1
                // key={index}
                data={data}
                // index={index}
                value={value}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Component_4;
