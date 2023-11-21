import { Link, useParams } from "react-router-dom";
import { MainProps } from "./Main";
import BordersList from "./BordersList";

const RouteCountry = ({ data, mode }: MainProps) => {
  const { id } = useParams();
  const countryIndex = data?.findIndex((country) => country.alpha3Code === id);
  if (countryIndex !== undefined)
    return (
      <div className="px-7 pt-4 pb-6 flex flex-col gap-[43px] text-almostBlack lg:flex-row lg:items-center lg:pt-[38px] lg:justify-between lg:px-[140px]">
        <div className="flex flex-col items-start gap-16">
          <button>
            <Link
              to="/"
              className={`flex gap-2 ${
                mode === "light"
                  ? "bg-white text-almostBlack"
                  : "bg-darkMode text-white"
              } py-[7px] px-6 rounded-[2px] shadow-custom`}
            >
              <svg
                className="mt-[2px]"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M6.46447 4.10744L7.64298 5.28596L3.75389 9.17504L18.6031 9.17504L18.6031 10.825L3.75389 10.825L7.64298 14.714L6.46447 15.8926L0.57191 10L6.46447 4.10744Z"
                  fill={mode === "light" ? "black" : "white"}
                />
              </svg>{" "}
              Back
            </Link>
          </button>
          <img
            className="w-[319.837px] text-center mx-auto h-auto rounded-lg lg:w-[559.715px]"
            src={data?.[countryIndex].flags.svg}
            alt={data?.[countryIndex].name}
          />
        </div>
        <div
          className={`flex flex-col gap-[34px] lg:gap-[70px] lg:pt-9 ${
            mode === "light" ? "text-almostBlack" : "text-white"
          } max-w-[780px]`}
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-[141px]">
            <div className="flex flex-col gap-3 text-sm lg:text-base">
              <h1 className="text-[22px] lg:text-[32px] mb-3">
                {data?.[countryIndex].name}
              </h1>
              <p>
                <span>Native Name: </span>
                {data?.[countryIndex].nativeName}
              </p>
              <p>
                <span>Population: </span>
                {data?.[countryIndex].population.toLocaleString()}
              </p>
              <p>
                <span>Region: </span>
                {data?.[countryIndex].region}
              </p>
              <p>
                <span>Sub Region: </span>
                {data?.[countryIndex].subregion}
              </p>
              <p>
                <span>Capital: </span>
                {data?.[countryIndex].capital}
              </p>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <p>
                <span>Top Level Domain: </span>
                {data?.[countryIndex].topLevelDomain}
              </p>
              <p>
                <span>Currencies: </span>
                {data?.[countryIndex].currencies
                  ? data?.[countryIndex].currencies[0].name
                  : "unknown"}
              </p>
              <p>
                <span>Languages: </span>
                {data?.[countryIndex].languages.map(
                  (language) => language.name + ", "
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:gap-6">
            <h4 className="text-base">Border Countries:</h4>
            <div className="flex flex-wrap gap-[10px] text-xs lg:text-sm">
              {data?.[countryIndex].borders
                ? data[countryIndex].borders.map(
                    (border) =>
                      BordersList[border] && (
                        <Link
                          to={`/country/${border}`}
                          className={`${
                            mode === "light"
                              ? "bg-white text-almostBlack"
                              : "bg-darkMode text-white"
                          } px-[25px] py-[5px] shadow-customHeader rounded-[2px]`}
                          key={border}
                        >
                          {BordersList[border]}
                        </Link>
                      )
                  )
                : `${data?.[countryIndex].name} has no border countries`}
            </div>
          </div>
        </div>
      </div>
    );
};

export default RouteCountry;
