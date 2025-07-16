export default function Component_7_3_Footer_1() {
  return (
    <div className="min-h-10 w-full flex flex-col items-center justify-center gap-5 bg-[#1B1B1B] pt-10">
      <div className="h-full w-[60%] flex gap-10 border-t border-[#8D8E92]  text-[#8D8E92] max-md:w-full max-md:p-5 max-md:flex-wrap md:w-full">
        {[
          "About Us",
          "Archives",
          "Terms & Condition",
          "Privacy Policy",
          // "RSS",
          "Apps",
          // "Contact",
        ].map((value, index) => {
          return (
            <div className="h-full w-full flex items-center justify-center uppercase text-[10px] font-medium">
              <p>{value}</p>
            </div>
          );
        })}
      </div>
      <div className="h-full w-full flex justify-center items-center bg-[#111111] max-md:py-5">
        <div className="h-full w-full flex justify-center text-[#8D8E92] md:w-full text-[12px] p-5">
          <p>Copyright © 2019 Vibhor Kolhe</p>
        </div>
      </div>
    </div>
  );
}
