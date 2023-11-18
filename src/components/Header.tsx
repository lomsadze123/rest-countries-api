import moon from "../assets/moon.svg";

const Header = () => {
  return (
    <header className="flex justify-between py-[30px] px-4 bg-white shadow-customHeader mb-6 text-almostBlack">
      <h2 className="text-sm">Where in the world?</h2>
      <div className="flex gap-2 items-center">
        <img className="w-4 h-4" src={moon} alt="moon icon" />
        <h4 className="text-xs">Dark Mode</h4>
      </div>
    </header>
  );
};

export default Header;
