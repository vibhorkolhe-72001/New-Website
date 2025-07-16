import Component_7_1 from "./14. Component_7.1";
import { useContext } from "react";
import { StoreContext } from "./0. Context_API";
import news_logo from "../assets/555.jpg";
import news_logo1 from "../assets/2.png";
import news_logo2 from "../assets/3.png";

export default function Component_7() {
  let context = useContext(StoreContext);
  let data = context.news.articles;
  return (
    <div className="relative min-h-[900px] w-full flex justify-center items-center p-10 max-sm:p-2">
      <div className="h-full w-[60%] flex gap-10 max-md:w-full max-md:flex-col md:w-full xl:w-[80%]">
        <div className="h-full w-[66%] flex flex-col gap-1 max-md:w-full">
          <div className="h-15 w-full border-b border-gray-300">
            <div className="h-full inline-block border-b border-red-500">
              <h1 className="h-full flex items-center uppercase">More News</h1>
            </div>
          </div>
          <div className="relative h-full w-full flex flex-col">
            {[10, 12, 13, 14].map((value, index) => {
              return <Component_7_1 value={value} data={data} />;
            })}
          </div>
        </div>
        <div className="h-full w-[34%] flex flex-col gap-5 justify-evenly items-center max-md:w-full">
          <div className="h-full w-full flex flex-col gap-5 py-15">
            <div className="h-15 w-full border-b border-gray-300">
              <div className="h-full border-b border-red-500 inline-block">
                <h1 className="uppercase flex items-center h-full">
                  Log In....
                </h1>
              </div>
            </div>
            <div className="h-full w-full flex flex-col gap-8">
              <div className="w-full flex flex-col items-center gap-5">
                <input
                  type="email"
                  placeholder="Email"
                  className="h-10 w-[100%] border border-gray-300 px-5"
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="h-10 w-[100%] border border-gray-300 px-5"
                />
              </div>
              <div className="w-full">
                <button className="p-3 px-8 border bg-[#444444] rounded-[5px] text-white">
                  Enter
                </button>
              </div>
            </div>
          </div>
          <div className="relative h-full w-full max-md:flex max-md:justify-center max-sm:w-[50%]">
            <img src={news_logo} className="" alt="" />
            <div className="absolute bottom-15 px-5 flex flex-col gap-10 max-sm:w-[70%] max-sm:gap-2">
              <img src={news_logo1} alt="" />
              <img src={news_logo2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
