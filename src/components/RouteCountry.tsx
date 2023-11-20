import { Link, useParams } from "react-router-dom";
import arrowBack from "../assets/call-made.svg";
import { MainProps } from "./Main";
import BordersList from "./BordersList";

const RouteCountry = ({ data }: MainProps) => {
  const { id } = useParams();
  const countryIndex = data?.findIndex((country) => country.alpha3Code === id);
  if (countryIndex !== undefined)
    return (
      <div className="px-7 pt-4 flex flex-col gap-[43px] text-almostBlack pb-11">
        <div>
          <button className="mb-16">
            <Link
              to="/"
              className="flex gap-2 bg-white py-[7px] px-6 rounded-[2px] shadow-custom"
            >
              <img src={arrowBack} alt="arrow left get beck" /> Back
            </Link>
          </button>
          <img
            className="w-[319.837px] text-center mx-auto h-auto rounded-md"
            src={data?.[countryIndex].flags.svg}
            alt={data?.[countryIndex].name}
          />
        </div>
        <div className="flex flex-col gap-[34px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3 text-sm">
              <h1 className="text-[22px] mb-3">{data?.[countryIndex].name}</h1>
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
                {data?.[countryIndex].currencies[0].name}
              </p>
              <p>
                <span>Languages: </span>
                {data?.[countryIndex].languages.map(
                  (language) => language.name + ", "
                )}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4>Border Countries:</h4>
            <div className="flex flex-wrap gap-[10px] text-xs">
              {data?.[countryIndex].borders
                ? data[countryIndex].borders.map(
                    (border) =>
                      BordersList[border] && (
                        <Link
                          to={`/country/${border}`}
                          className="bg-white px-[25px] py-[5px] shadow-customHeader"
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
