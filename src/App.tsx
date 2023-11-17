import axios from "axios";
import { useEffect, useState } from "react";
import Types from "./components/Types";

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
    <div className="min-h-screen flex flex-col justify-center items-center">
      {data?.map((item) => (
        <h1
          key={item.numericCode}
          className={`${item.name === "Georgia" && "text-red-500"}`}
        >
          {item.name}
        </h1>
      ))}
    </div>
  );
};

export default App;
