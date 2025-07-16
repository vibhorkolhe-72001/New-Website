import { useContext, useState } from "react";
import Component_2_1 from "./5. Component_2.1";
import { StoreContext } from "./0. Context_API";
import Component_5_1 from "./11. Component_5_1";
import Component_3_1 from "./7. Component_3.1";

import right_arr from "../assets/svg/arr_right.svg";
import left_arr from "../assets/svg/left_arrow.svg";

export default function Component_10() {
  const [steps, set_steps] = useState(1);
  const next_step = () => {
    if (steps < data.length) set_steps(steps + 1);
  };
  const previous_step = () => {
    if (steps > 1) set_steps(steps - 1);
  };

  let context = useContext(StoreContext);
  let data = context.news.articles;

  return (
    <div className="min-h-[600px] w-full flex justify-center items-center bg-[#222222] text-white py-5">
      <div className="h-full w-[60%] flex gap-2 max-md:w-full max-md:p-5 max-md:flex-col md:w-full md:flex-col max-lg:p-10 lg:w-[80%] xl:w-[60%] 2xl:flex-row">
        <div className="h-full w-[66%] flex flex-col max-md:w-full md:w-full">
          <div className="h-10 w-full flex items-center">
            <span className="uppercase text-xl">Pictures</span>
          </div>
          <div className="relative h-[70%] w-full py-2">
            {data[steps] && <Component_2_1 data={data[steps]} />}
            <div className="absolute top-[50%] flex w-full justify-between px-2">
              <button
                className="px-3 py-2 rounded text-white pointer-events-auto disabled:opacity-50"
                onClick={previous_step}
                disabled={steps === 1}
              >
                <img src={left_arr} className="size-15" alt="" />
              </button>
              <button
                className="px-3 py-2 rounded text-white pointer-events-auto disabled:opacity-50"
                onClick={next_step}
                disabled={steps === data.length - 1}
              >
                <img src={right_arr} className="size-15" alt="" />
              </button>
            </div>
          </div>
          <div className="h-[30%] w-full p-2 flex gap-3">
            {[25, 40, 50, 56].map((value, index) => {
              return (
                <Component_5_1
                  key={index}
                  data={data}
                  index={index}
                  value={value}
                />
              );
            })}
          </div>
        </div>
        <div className="h-full w-[34%] flex flex-col max-md:w-full md:w-full">
          <div className="h-10 w-full flex items-center uppercase pl-10">
            <h1>Videos</h1>
          </div>
          <div className="h-full w-full flex flex-col justify-around max-md:flex-col">
            {[25, 40, 50, 56].map((value, index) => (
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
  );
}
