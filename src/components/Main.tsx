import { Link } from "react-router-dom";
import Types from "./Types";

export interface MainProps {
  data: Types[] | null;
  filterRegion?: string;
  search?: string;
  mode?: string;
}

const Main = ({ data, filterRegion, search, mode }: MainProps) => {
  if (search !== undefined)
    return (
      <main className="min-h-screen flex flex-wrap gap-11 lg:gap-20 justify-center md:px-[78px] pb-10">
        {data?.map(
          (item) =>
            (filterRegion === item.region ||
              filterRegion === "Filter by Region" ||
              filterRegion === "All") &&
            item.name.toLowerCase().includes(search.toLowerCase()) && (
              <div
                className={`shadow-custom rounded-[5px] max-w-[267px] h-[356px] ${
                  mode === "light"
                    ? "bg-white text-almostBlack"
                    : "bg-darkMode text-white"
                } cursor-pointer hover:scale-110 ease-in-out duration-300`}
                key={item.numericCode}
              >
                <Link to={`/country/${item.alpha3Code}`}>
                  <div className="w-[267px] h-[170px]">
                    <img
                      className="w-full h-full rounded-t-[5px]"
                      src={item.flags.png}
                      alt={item.name}
                    />
                  </div>
                  <div className="pt-6 px-6 text-sm">
                    <h1 className="mb-4 text-lg leading-5">{item.name}</h1>
                    <div className="flex flex-col gap-2">
                      <p>
                        <span>Population:</span>{" "}
                        {data && item.population.toLocaleString()}
                      </p>
                      <p>
                        <span>Region:</span> {data && item.region}
                      </p>
                      <p>
                        <span>Capital: </span>
                        {data && item.capital}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            )
        )}
      </main>
    );
};

export default Main;
