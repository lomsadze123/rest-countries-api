import search from "../assets/search.svg";

const Input = ({ setSearch }: { setSearch: (search: string) => void }) => {
  //search debouncing

  const debounce = (
    func: (search: React.ChangeEvent<HTMLInputElement>) => void
  ) => {
    let timer: number | null;
    return (...args: [React.ChangeEvent<HTMLInputElement>]) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, 500);
    };
  };

  const optimize = debounce((e: React.ChangeEvent<HTMLInputElement>) =>
    setSearch(e.target.value)
  );

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mb-10 flex items-center px-8 gap-[26px] py-[14px] bg-white shadow-custom rounded-[5px] md:m-0 md:w-1/2 lg:w-1/3 md:py-[18px] md:gap-6"
    >
      <img className="w-4 h-4" src={search} alt="search icon" />
      <input
        onChange={optimize}
        className="outline-0 w-full"
        type="search"
        placeholder="Search for a country…"
      />
    </form>
  );
};

export default Input;
