import facebook from "../assets/facebook.svg";
import linkdin from "../assets/linkdin.svg";
import whatapps from "../assets/whatapps.svg";

import insta from "../assets/insta.svg";
import twitter from "../assets/twitter.svg";
import youtube from "../assets/youtube.svg";

function Component_3_2({ bg_color, social_log, followers_count }) {
  const logoMap = {
    facebook: facebook,
    linkdin: linkdin,
    whatapps: whatapps,
    insta: insta,
    twitter: twitter,
    youtube: youtube
  };
  return (
    <div
      className={`size-[120px] ${bg_color} max-sm:size-[150px] max-md:size-[200px] flex items-center justify-center`}
    >
      <div className="flex flex-col items-center justify-center">
        <img
          src={logoMap[social_log]}
          alt="Facebook"
          className="w-6 h-6 mb-1 text-white"
        />
        <p className="text-sm font-medium text-white">{followers_count}</p>
      </div>
    </div>
  );
}

export default Component_3_2;
