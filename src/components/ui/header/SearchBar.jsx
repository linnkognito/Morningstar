import Icon from "../../common/Icon";

function Searchbar() {
  return (
    <div className="relative flex items-center justify-end px-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full rounded-md bg-pearl py-1 pl-2 pr-8 font-primary text-lg tracking-wide text-offblack placeholder-grey-400 focus:ring-1 focus:ring-pearl md:w-64"
      />

      <Icon
        name="search"
        al="search"
        className="absolute right-3 bg-pearl text-offblack"
      />
    </div>
  );
}

export default Searchbar;
