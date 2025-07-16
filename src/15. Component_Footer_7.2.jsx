import { useContext } from "react";
import logo from "./assets/10001.png";
import facebook from "./assets/facebook.svg";
import linkdin from "./assets/linkdin.svg";
import whatapps from "./assets/whatapps.svg";
import { StoreContext } from "./Component/0. Context_API";

export default function Component_Footer_7_2() {
  const context = useContext(StoreContext);
  const data = context.news.articles || [];

  return (
    <footer className="w-full bg-[#1B1B1B] text-[#8B8C90] px-6 py-12 flex justify-center">
      <div className="w-full max-w-screen-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1: Logo & Contact */}
        <div className="flex flex-col items-center text-center gap-4">
          <img src={logo} alt="Logo" className="h-16 object-contain" />
          <p className="text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non quibusdam veritatis maxime deserunt
          </p>
          <div className="flex flex-col items-center gap-2 text-sm">
            <p>795 South Park Avenue, CA 94107</p>
            <p>enquery@domain.com</p>
            <p>+1 908 875 7678</p>
          </div>
          <div className="flex gap-2 mt-2">
            {[facebook, linkdin, whatapps].map((icon, index) => (
              <img key={index} src={icon} alt="icon" className="size-6" />
            ))}
          </div>
        </div>

        {/* Column 2: Services */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-xl font-medium border-b border-red-500 inline-block">Services</h2>
          <ul className="space-y-2 text-sm">
            {[
              "Advertisement",
              "Work for us",
              "Post a deal",
              "Agreements",
              "Sms subscription",
              "Conference",
              "Donate us",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 36.5 60.5">
                  <path fill="#3E3E3E" d="M7.8 3.8 34.4 30.3c.3.3.3.8 0 1.2L7.8 58.1c-.3.2-.7.2-1.1 0l-3.4-3.5 23.2-23.1c.2-.3.2-.8 0-1.2L3.3 7.3l3.4-3.5c.3-.3.7-.3 1.1 0z" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Latest Posts (hidden on small screens) */}
        <div className="hidden md:flex flex-col gap-4">
          <h2 className="text-white text-xl font-medium border-b border-red-500 inline-block">Latest Posts</h2>
          <div className="space-y-4">
            {[1, 2, 3].map((i, index) => (
              data[i] ? (
                <div key={index} className="flex gap-3">
                  <img src={data[i].urlToImage} alt="thumbnail" className="w-20 h-16 object-cover" />
                  <div className="flex flex-col text-sm">
                    <p className="line-clamp-2">{data[i].title?.slice(0, 50)}</p>
                    <span className="text-xs text-gray-400">{data[i].source.name}</span>
                  </div>
                </div>
              ) : null
            ))}
          </div>
        </div>

        {/* Column 4: Newsletter */}
        <div className="flex flex-col gap-4">
          <h2 className="text-white text-xl font-medium border-b border-red-500 inline-block">Newsletter</h2>
          <input type="text" placeholder="Your Name" className="h-10 px-4 border border-gray-700 bg-[#2B2B2B] text-white placeholder-gray-400" />
          <input type="password" placeholder="Password" className="h-10 px-4 border border-gray-700 bg-[#2B2B2B] text-white placeholder-gray-400" />
          <button className="h-10 w-full bg-[#444444] text-white mt-2">Register</button>
        </div>

      </div>
    </footer>
  );
}
