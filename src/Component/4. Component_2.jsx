import { useContext, useState } from "react";
import Component_2_1 from "./5. Component_2.1";
import { StoreContext } from "./0. Context_API";
import Component_2_0 from "./4.1 Component_2.0";
import right_arr from "../assets/svg/arr_right.svg";
import left_arr from "../assets/svg/left_arrow.svg";

function Component_2() {
  const context = useContext(StoreContext);
  const data = context.news.articles || [];

  const [steps, set_steps] = useState(0); // ✅ Start at 0 for array indexing

  const next_step = () => {
    if (steps < data.length - 1) set_steps(steps + 1);
  };

  const previous_step = () => {
    if (steps > 0) set_steps(steps - 1);
  };

  return (
    <div className="min-h-[500px] w-full flex justify-center items-center px-4 py-10 lg:max-h-[500px]">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-6 xl:w-[80%]">

        {/* Left Section: Main Step Component */}
        <div className="relative w-full lg:w-2/3 ">
          {data[steps] && <Component_2_1 data={data[steps]} />}

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <button
              className="px-3 py-2 rounded text-white pointer-events-auto disabled:opacity-50"
              onClick={previous_step}
              disabled={steps === 0}
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

        {/* Right Section: Static Sidebar */}
        <div className="w-full lg:w-1/3 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            {[50, 51].map((value) => (
              <Component_2_0 key={value} data={data} value={value} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Component_2;
