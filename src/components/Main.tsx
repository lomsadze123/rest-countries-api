import Types from "./Types";

interface MainProps {
  data: Types[] | null;
}

const Main = ({ data }: MainProps) => {
  return (
    <main className="min-h-screen flex flex-col gap-11 justify-center items-center md:flex-row flex-wrap md:items-center">
      {data?.map((item) => (
        <div
          className="shadow-custom rounded-[5px] max-w-[264px] h-[356px] bg-white cursor-pointer"
          key={item.numericCode}
        >
          <div className="w-[267px] h-[170px]">
            <img
              className="w-full h-full rounded-t-[5px]"
              src={item.flags.png}
              alt=""
            />
          </div>
          <div className="pt-6 px-6 text-almostBlack text-sm">
            <h1 className="mb-4 text-lg">{item.name}</h1>
            <div className="flex flex-col gap-2">
              <p>
                <span className="font-semibold">Population:</span>{" "}
                {data && item.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region:</span>{" "}
                {data && item.region}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {data && item.capital}
              </p>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Main;
