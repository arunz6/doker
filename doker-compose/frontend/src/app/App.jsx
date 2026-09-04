import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("/api/user").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
     <div className="flex justify-center h-screen w-screen bg-black items-center h-screen">
      <h1 className="text-3xl font-bold underline text-white">
       hello
      </h1>
    </div>
    </>
  );
}
export default App;
