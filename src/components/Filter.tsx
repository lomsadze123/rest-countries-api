import { useState } from "react";
import arrow from "../assets/arrow.svg";

const Filter = () => {
  const regionArray = ["Africa", "America", "Asia", "Europe", "Oceania"];
  const [filterRegion, setFilterRegion] = useState("Filter by Region");
  const [click, setClick] = useState(false);

  return (
    <aside
      onClick={() => setClick(!click)}
      className="mb-8 max-w-[200px] text-almostBlack relative md:m-0 md:w-1/2 cursor-pointer"
    >
      <div className="flex justify-between bg-white py-[14px] pl-6 rounded-[5px] shadow-custom md:py-[18px]">
        <h3>{filterRegion}</h3>
        <img
          className="pr-[19px] w-auto h-auto md:pr-[22px]"
          src={arrow}
          alt="arrow down icon"
        />
      </div>
      {click && (
        <ul className="flex flex-col gap-2 mt-1 pl-6 pr-[131px] py-4 bg-white rounded-[5px] shadow-custom absolute md:pr-[124px]">
          {regionArray.map((oneRegion) => (
            <li key={oneRegion} onClick={() => setFilterRegion(oneRegion)}>
              {oneRegion}
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
};

export default Filter;
