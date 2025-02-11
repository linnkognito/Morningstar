import Icon from "../../common/Icon";

function Searchbar() {
  return (
    <div className="relative flex items-center justify-end px-2">
      <input
        type="text"
        placeholder="Search..."
        className="will-change w-full rounded-md py-1 pl-2 pr-8 font-primary text-lg tracking-wide text-offblack placeholder-grey-400 shadow-[0_0_2px_#0F0F0F] shadow-offblack transition-all ease-out hover:scale-105 hover:shadow-[0_0_4px_#0F0F0F] focus:ring-0 focus:ring-pearl md:w-64"
      />

      <Icon
        name="search"
        al="search"
        className="absolute right-3 cursor-pointer bg-transparent text-offblack"
      />
    </div>
  );
}

export default Searchbar;
