import search from "../assets/search.svg";

const Input = () => {
  return (
    <form className="mb-10 flex items-center px-8 gap-[26px] py-[14px] bg-white shadow-custom rounded-[5px] md:m-0 md:w-1/2 lg:w-1/3 md:py-[18px] md:gap-6">
      <img className="w-4 h-4" src={search} alt="search icon" />
      <input
        className="outline-0 w-full"
        type="search"
        placeholder="Search for a country…"
      />
    </form>
  );
};

export default Input;
