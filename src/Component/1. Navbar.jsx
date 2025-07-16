function Navbar() {
  const DateDisplay = () => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="relative h-12 w-full border-b border-[#EEEEEE] flex justify-center max-md:hidden">
      <div className="h-full w-[60%] flex max-lg:hidden lg:w-[80%] xl:w-[60%]">
        {/* Left section - Logo/Icon */}
        <div className="h-full w-1/2 flex items-center justify-start gap-5 lg:w-full">
          <div className="flex items-center gap-2 text-[12.5px] capitalize">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              viewBox="0 0 24 24"
            >
              <defs>
                <style>
                  {`.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}`}
                </style>
              </defs>
              <title>Calendar Icon</title>
              <g className="cls-1">
                <rect x="1" y="3" width="22" height="20" rx="3" ry="3" />
                <line x1="1" y1="9" x2="23" y2="9" />
                <line x1="12" y1="5" x2="12" y2="1" />
                <line x1="6" y1="5" x2="6" y2="1" />
                <line x1="18" y1="5" x2="18" y2="1" />
                <line x1="5" y1="14" x2="7" y2="14" />
                <line x1="11" y1="14" x2="13" y2="14" />
                <line x1="17" y1="14" x2="19" y2="14" />
                <line x1="5" y1="18" x2="7" y2="18" />
                <line x1="11" y1="18" x2="13" y2="18" />
                <line x1="17" y1="18" x2="19" y2="18" />
              </g>
            </svg>
            <div>{DateDisplay()}</div>
          </div>
          <div className="flex items-center gap-1 text-[12.5px] capitalize">
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              xmlns:sketch="http://www.bohemiancoding.com/sketch/ns"
            >
              {/* <!-- Generator: Sketch 3.0.3 (7891) - http://www.bohemiancoding.com/sketch --> */}
              <title>icon 1 cloud</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
                sketch:type="MSPage"
              >
                <g
                  id="icon-1-cloud"
                  sketch:type="MSArtboardGroup"
                  fill="#000000"
                >
                  <path
                    d="M26.9993494,14.4145295 C28.7676457,15.1852931 30,16.9483386 30,19 C30,21.7558048 27.7616745,24 25.0005601,24 L7.99943992,24 C5.23249418,24 3,21.7614237 3,19 C3,16.9491311 4.23965876,15.1816085 6.01189661,14.4115388 L6.01189661,14.4115388 C6.00400207,14.275367 6,14.1381509 6,14 C6,10.1340066 9.13400656,7 13,7 C15.2979469,7 17.3372745,8.10728055 18.6135384,9.81739735 C19.4525719,9.29909701 20.441357,9 21.5,9 C24.5090248,9 26.9536744,11.4163763 26.9993494,14.4145295 L26.9993494,14.4145295 Z"
                    id="cloud"
                    sketch:type="MSShapeGroup"
                  ></path>
                </g>
              </g>
            </svg>
            <div className="border-r-1 pr-5">
              <p>New York, 19'C</p>
            </div>
          </div>
          <div className="max-2xl:hidden">
            <ul className="flex items-center gap-3 text-[12.5px] capitalize">
              <li>advertise</li>
              <li>write us</li>
              <li>about</li>
              <li>contact</li>
            </ul>
          </div>
        </div>

        {/* Right section - Placeholder for future items */}
        <div className="h-full w-1/2 flex items-center justify-end">
          <div className="flex justify-center items-center gap-3 px-1">
            <svg
              className="size-4"
              width="25px"
              height="25px"
              viewBox="0 0 10 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              {/* <!-- Generator: Sketch 3.8.1 (29687) - http://www.bohemiancoding.com/sketch --> */}
              <title>facebook [#176]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-385.000000, -7399.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M335.821282,7259 L335.821282,7250 L338.553693,7250 L339,7246 L335.821282,7246 L335.821282,7244.052 C335.821282,7243.022 335.847593,7242 337.286884,7242 L338.744689,7242 L338.744689,7239.14 C338.744689,7239.097 337.492497,7239 336.225687,7239 C333.580004,7239 331.923407,7240.657 331.923407,7243.7 L331.923407,7246 L329,7246 L329,7250 L331.923407,7250 L331.923407,7259 L335.821282,7259 Z"
                      id="facebook-[#176]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className="size-4"
              width="25px"
              height="25px"
              viewBox="0 0 20 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              {/* <!-- Generator: Sketch 3.8.1 (29687) - http://www.bohemiancoding.com/sketch --> */}
              <title>twitter [#154]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-60.000000, -7521.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705"
                      id="twitter-[#154]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <svg
              className="size-4 relative bottom-[1px]"
              width="25px"
              height="25px"
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              {/* <!-- Generator: Sketch 3.8.1 (29687) - http://www.bohemiancoding.com/sketch --> */}
              <title>linkedin [#161]</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="Page-1"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g
                  id="Dribbble-Light-Preview"
                  transform="translate(-180.000000, -7479.000000)"
                  fill="#000000"
                >
                  <g id="icons" transform="translate(56.000000, 160.000000)">
                    <path
                      d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z"
                      id="linkedin-[#161]"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12">
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M18 4.707v-1.88h-2v1.88h-2v1.88h2v1.88h2v-1.88h2v-1.88h-2Zm-5.6 0c.054 0 .1.82.1 1.214C12.5 9.347 10.058 12 6.377 12 2.852 12 0 9.316 0 6.001 0 2.686 2.852 0 6.377 0c1.722 0 3.162.581 4.273 1.558L8.919 3.106a3.707 3.707 0 0 0-2.542-.963C4.2 2.143 2.423 3.76 2.423 5.85S4.2 9.483 6.377 9.483c2.524 0 3.472-1.956 3.617-2.896H6v-1.88h6.4Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="none"
              viewBox="0 0 512 512"
            >
              <path
                fill="#000"
                fill-rule="evenodd"
                d="M128.775 96c-48.333 0-89.717 35.904-93.569 84.083-4.275 53.479-4.275 98.355 0 151.835C39.058 380.097 80.441 416 128.774 416h254.452c48.333 0 89.717-35.904 93.568-84.084 4.275-53.478 4.275-98.354 0-151.832C472.943 131.904 431.559 96 383.226 96H128.775ZM332 256l-124 72V184l124 72Z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
