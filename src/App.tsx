import axios from "axios";
import { useEffect, useState } from "react";
import Types from "./components/Types";
import Main from "./components/Main";
import Header from "./components/Header";
import Input from "./components/input";
import Filter from "./components/Filter";

const App = () => {
  const [data, setData] = useState<Types[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data);
      } catch (error) {
        console.log("Error fetching data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <Input />
      <Filter />
      <Main data={data} />
    </>
  );
};

export default App;
