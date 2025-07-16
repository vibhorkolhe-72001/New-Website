import { useContext } from "react";
import { StoreContext } from "./0. Context_API";
import Component_3_2 from "./8. Component_3.2";
import Component_3_1 from "./7. Component_3.1";

function Component_3() {
  const context = useContext(StoreContext);
  const data = context?.news?.articles || [];

  if (!data.length) {
    return (
      <div className="w-full flex justify-center items-center py-10">
        <p className="text-gray-500 text-sm">Loading news data...</p>
      </div>
    );
  }

  return (
    <section className="relative min-h-[550px] w-full flex justify-center items-center py-1">
      <div className="h-full w-[60%] flex gap-2 max-md:w-full max-md:p-10 max-md:flex-col max-sm:p-2 md:w-full md:flex-col max-lg:p-10 lg:w-[80%] xl:w-[60%] 2xl:flex-row">

        {/* Left Section */}
        <div className="w-[66%] flex flex-col gap-3 max-md:w-full md:w-full">
          {/* Header */}
          <div className="min-h-10 flex items-center justify-between px-2">
            <div className="w-[15%] max-sm:w-[30%] max-md:w-[50%] border-b border-red-600 uppercase text-sm font-semibold">
              latest news
            </div>
            <div className="w-[85%] max-sm:w-[70%] max-md:w-[50%] border-b border-gray-400 flex gap-3 justify-end text-sm capitalize">
              <span>technology</span>
              <span>business</span>
              <span>sports</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col md:flex-col max-md:flex-col max-sm:flex-col gap-4 lg:flex-row">
            {/* Left: Featured Article */}
            <div className="w-full flex flex-col gap-2">
              <img
                src={data[1]?.urlToImage}
                alt={data[1]?.title || "News Thumbnail"}
                className="w-full h-auto object-cover rounded"
              />
              <h1 className="text-lg font-semibold">{data[1]?.title}</h1>
              <div className="flex items-center gap-4 text-xs">
                <button className="px-3 py-1 bg-[#D32F2F] text-white text-[10px] font-medium">
                  Sports
                </button>
                <span className="text-gray-600">{data[1]?.source?.name}</span>
              </div>
              <p className="text-sm text-gray-700">{data[1]?.content}</p>
            </div>

            {/* Right: Other Articles */}
            <div className="w-full flex flex-col gap-2">
              {[10, 20, 30, 40].map((value, index) => (
                <Component_3_1 key={index} data={data} index={index} value={value} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section - Social Follows */}
        <div className="w-[34%] flex flex-col gap-5 max-md:w-full md:w-full 2xl:w-[34%]">
          {/* Follow Us Header */}
          <div className="h-10 w-full border-b border-gray-300">
            <div className="h-full inline-block border-b border-red-500 px-2">
              <h1 className="uppercase h-full flex items-center">Follow Us</h1>
            </div>
          </div>

          <div className=" flex flex-col gap-2 xl:flex-row xl:gap-2 xl:justify-center 2xl:flex-col">
            {/* Social Buttons Row 1 */}
            <div className="flex justify-between max-md:justify-center max-md:gap-2 md:justify-center md:gap-2">
              <Component_3_2
                bg_color="bg-[#4C66A3]"
                social_log="facebook"
                followers_count="5010"
              />
              <Component_3_2
                bg_color="bg-[#2FC2EE]"
                social_log="linkdin"
                followers_count="5050"
              />
              <Component_3_2
                bg_color="bg-[#FF680D]"
                social_log="whatapps"
                followers_count="5100"
              />
            </div>

            {/* Social Buttons Row 2 */}
            <div className="flex justify-between max-md:justify-center max-md:gap-2 md:justify-center md:gap-2">
              <Component_3_2
                bg_color="bg-[#0E76A8]"
                social_log="insta"
                followers_count="5010"
              />
              <Component_3_2
                bg_color="bg-[#CF3E28]"
                social_log="twitter"
                followers_count="5050"
              />
              <Component_3_2
                bg_color="bg-[#E42C27]"
                social_log="youtube"
                followers_count="5100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Component_3;
