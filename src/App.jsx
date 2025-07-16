import { useContext, useState } from "react";
import StoreContextProvider, { StoreContext } from "./Component/0. Context_API";
import Navbar from "./Component/1. Navbar";
import Navbar_Logo from "./Component/2. Navbar_Logo";
import Component_1 from "./Component/3. Component_1";
import Component_2 from "./Component/4. Component_2";
import Component_3 from "./Component/6. Component_3";
import Component_4 from "./Component/9. Component_4";
import Component_5 from "./Component/10. Component_5";
import Component_6 from "./Component/12. Component_6";
import Component_7 from "./Component/13. Component_7";
import Component_Footer_7_2 from "./15. Component_Footer_7.2";
import Component_7_3_Footer_1 from "./16. Component_7_3_footer_1";
import Loader from "./0.1. Loader";
import logo from "./assets/10001.png";
import logo_1 from "./assets/free_icon_1.svg";

function MainAppContent() {
  const { loading } = useContext(StoreContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  if (loading) {
    return (
      <Loader />
    );
  }


  return (
    <>
      <div className="min-h-10 w-full relative bg-[#1B1B1B] flex flex-col items-center p-5 mb-5 md:hidden">
        <div className="h-full w-full flex">
          <div className="h-full w-full">
            <img src={logo} className="w-[50%] h-full" alt="Main Logo" />
          </div>
          <div className="h-full w-full flex justify-end">
            <img
              src={logo_1}
              className="size-12 cursor-pointer"
              alt="Toggle Menu"
              onClick={toggleMenu}
            />
          </div>
        </div>


        <div className={`transition-all duration-500 ease-in-out w-full overflow-hidden flex flex-col ${menuOpen ? "h-[200px]" : "h-0"
          }`}
        >
          {["home", "pages", "politics", "business", "sports"].map((value, index) => (
            <div
              key={index}
              className="w-full capitalize border-b border-amber-50 flex items-center text-white px-4 py-2"
            >
              <h1>{value}</h1>
            </div>
          ))}
        </div>
      </div>

      <Navbar />
      <Navbar_Logo />
      <Component_1 />
      <Component_2 />
      <Component_3 />
      <Component_4 />
      <Component_5 />
      <Component_6 />
      <Component_7 />
      <Component_Footer_7_2 />
      <Component_7_3_Footer_1 />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-white roboto-fonting flex justify-center overflow-x-hidden">
      <div className="h-full w-full 2xl:w-[2000px]">
        <StoreContextProvider>
          <MainAppContent />
        </StoreContextProvider>
      </div>
    </div>
  );
}

export default App;
