import ArrowButton from "../ui/buttons/ArrowButton";

function New() {
  return (
    <section className="mx-auto grid h-screen w-screen grid-cols-[1fr_1fr] px-1">
      <div className="grid grid-cols-2 gap-3 bg-pearl/60">
        <img src="" alt="" className="cols-span-2" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>

      <div className="flex h-full items-end justify-end bg-pearl">
        <div className="flex w-full cursor-pointer items-center justify-end gap-6 px-4 py-2 hover:bg-zest/80">
          <span className="font-bebas text-8xl">More</span>

          <div className="place-items-center">
            <ArrowButton />
          </div>
        </div>
      </div>
    </section>
  );
}

export default New;
<div className="mx-auto mt-4 grid max-w-[1024px] grid-cols-1 gap-4 rounded-md p-6 shadow-sm shadow-offblack backdrop-blur-md md:grid-cols-[2fr_1fr]"></div>;
