import axios from "axios";
import { useEffect, useState } from "react";
import Types from "./components/Types";
import Main from "./components/Main";
import Header from "./components/Header";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Skeleton from "./components/skeleton/Skeleton";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Types[] | null>(null);

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
  }, []);

  return (
    <>
      <Header />
      <div className="md:flex md:justify-between text-xs md:text-sm px-4 md:mb-12 xl:px-[128px]">
        <Input />
        <Filter />
      </div>
      {isLoading ? <Skeleton /> : <Main data={data} />}
    </>
  );
};

export default App;
