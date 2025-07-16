import { HashLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-white">
      <HashLoader
        color="black"
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
