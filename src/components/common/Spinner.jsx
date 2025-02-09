import { BarsScaleFade } from "react-svg-spinners";
function Spinner() {
  return (
    <div className="col-span-2 mx-auto flex w-full flex-col place-items-center pt-8 sm:col-span-3 md:col-span-4 lg:col-span-5">
      <BarsScaleFade color="#D19BF3" height="100px" width="100px" />
      <p className="pt-4 text-grey-700">Getting products...</p>
    </div>
  );
}

export default Spinner;
