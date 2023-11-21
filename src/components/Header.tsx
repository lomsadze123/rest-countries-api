import moon from "../assets/moon.svg";

const Header = ({
  mode,
  handleMode,
}: {
  mode: string;
  handleMode: () => void;
}) => {
  return (
    <header
      className={`flex justify-between py-[30px] px-4 ${
        mode === "light"
          ? "bg-white text-almostBlack"
          : "bg-darkMode text-white"
      } shadow-customHeader mb-6 text-almostBlack md:px-20 md:mb-12`}
    >
      <h2 className="text-sm md:text-2xl">Where in the world?</h2>
      <div
        onClick={handleMode}
        className="flex gap-2 items-center cursor-pointer"
      >
        <img className="w-4 h-4 md:w-5 md:h-5" src={moon} alt="moon icon" />
        <h4 className="text-xs md:text-base">Dark Mode</h4>
      </div>
    </header>
  );
};

export default Header;
