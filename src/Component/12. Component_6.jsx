import { useContext } from "react";
import Component_2_0 from "./4.1 Component_2.0";
import { StoreContext } from "./0. Context_API";
import Component_3_1 from "./7. Component_3.1";

export default function Component_6() {
  let context = useContext(StoreContext);
  let data = context.news.articles;

  return (
    <div className="relative min-h-[640px] w-full  flex justify-center items-center p-3">
      <div className="h-full w-[60%] flex gap-2 max-md:w-full max-md:flex-col md:w-full md:flex-col max-lg:p-10 lg:w-[80%] xl:w-[60%]">
        <div className="h-full w-[66%] flex gap-2 max-md:flex-col max-md:w-full md:w-full">
          <div className="h-full w-full flex flex-col justify-around gap-5">
            <div className="h-10 w-full border-b border-gray-300 max-md:h-10">
              <div className="h-full inline-block border-b border-red-400">
                <h1 className="h-full uppercase flex items-center">
                  International
                </h1>
              </div>
            </div>
            <div className="h-[40%] w-[100%] max-md:h-full relative">
              {[49].map((value, index) => {
                return <Component_2_0 data={data} value={value} height="100%" width="100%" />;
              })}
            </div>
            <div className="h-full w-full flex flex-col justify-around">
              {[25, 40, 50].map((value, index) => (
                <Component_3_1
                  key={index}
                  data={data}
                  index={index}
                  value={value}
                />
              ))}
            </div>
          </div>
          <div className="h-full w-full flex flex-col items-center gap-5">
            <div className="h-10 w-full border-b border-gray-300 max-md:h-10">
              <div className="h-full inline-block border-b border-red-500">
                <h1 className="uppercase flex items-center h-full">Lifestyle</h1>
              </div>
            </div>
            <div className="h-[40%] w-[100%] max-md:h-full relative">
              {[42].map((value, index) => {
                return <Component_2_0 data={data} value={value} height="100%" width="100%" />;
              })}
            </div>
            <div className="h-full w-full flex flex-col items-center justify-around">
              {[28, 39, 53].map((value, index) => (
                <Component_3_1
                  key={index}
                  data={data}
                  index={index}
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-[34%] flex flex-col gap-5 max-md:w-full md:w-full lg:flex-row">
          <div className="h-[34%] w-full flex justify-center max-md:hidden">
            {[45].map((value, index) => {
              return <Component_2_0 data={data} value={value} height={"100%"} width={"100%"} />;
            })}
          </div>
          <div className="h-[66%] w-full flex flex-col gap-4 md:w-full">
            <div className="h-10 w-full border-b border-gray-300 max-md:h-10">
              <div className="h-full border-b border-red-500 inline-block">
                <h1 className="h-full flex items-center uppercase">most viewed</h1>
              </div>
            </div>
            <div className="h-full w-full flex flex-col justify-between">
              {[11, 31, 41].map((value, index) => (
                <Component_3_1
                  key={index}
                  data={data}
                  index={index}
                  value={value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
