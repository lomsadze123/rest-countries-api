import axios from "axios";
import { useEffect, useState } from "react";
import Types from "./components/Types";
import Main from "./components/Main";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Skeleton from "./components/skeleton/Skeleton";
import { Route, Routes } from "react-router-dom";
import RouteCountry from "./components/RouteCountry";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Types[] | null>(null);
  const [filterRegion, setFilterRegion] = useState("Filter by Region");
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("light");
  const storage = localStorage.getItem("mode");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        setIsLoading(false);
        console.log("Error fetching data: ", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
    storage && setMode(storage);
  }, []);

  const handleMode = () => {
    const updateMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", updateMode);
    setMode(updateMode);
  };

  return (
    <div
      className={`min-h-screen transition-background-color duration-300 ${
        mode === "light" ? "bg-[#fafafa]" : "bg-[#202C36]"
      }`}
    >
      <Header mode={mode} handleMode={handleMode} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="md:flex md:justify-between text-xs md:text-sm px-4 md:mb-12 xl:px-[124px]">
                <Input setSearch={setSearch} mode={mode} />
                <Filter
                  filterRegion={filterRegion}
                  setFilterRegion={setFilterRegion}
                  mode={mode}
                />
              </div>
              {isLoading ? (
                <Skeleton />
              ) : (
                <Main
                  data={data}
                  filterRegion={filterRegion}
                  search={search}
                  mode={mode}
                />
              )}
            </>
          }
        />
        <Route
          path="/country/:id"
          element={<RouteCountry data={data} mode={mode} />}
        />
      </Routes>
    </div>
  );
};

export default App;
