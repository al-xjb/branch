import React, { useState, useEffect } from "react";
import {
  fetchDataFromService1,
  fetchDataFromService2,
  fetchDataFromService3,
} from "./api"; // Import API functions

function App() {
  const [dataFromService1, setDataFromService1] = useState(null);
  const [dataFromService2, setDataFromService2] = useState(null);
  const [dataFromService3, setDataFromService3] = useState(null);

  useEffect(() => {
    // Fetch data from service1
    fetchDataFromService1()
      .then((data) => setDataFromService1(data))
      .catch((error) =>
        console.error("Error fetching data from Service 1:", error)
      );

    // Fetch data from service2
    fetchDataFromService2()
      .then((data) => setDataFromService2(data))
      .catch((error) =>
        console.error("Error fetching data from Service 2:", error)
      );

    // Fetch data from service3
    fetchDataFromService3()
      .then((data) => setDataFromService3(data))
      .catch((error) =>
        console.error("Error fetching data from Service 3:", error)
      );
  }, []);

  return (
    <div>
      <h1>React App: Front1</h1>

      <h2>Data from Service1:</h2>
      <pre>
        {dataFromService1
          ? JSON.stringify(dataFromService1, null, 2)
          : "Loading..."}
      </pre>

      <h2>Data from Service2:</h2>
      <pre>
        {dataFromService2
          ? JSON.stringify(dataFromService2, null, 2)
          : "Loading..."}
      </pre>

      <h2>Data from Service3:</h2>
      <pre>
        {dataFromService3
          ? JSON.stringify(dataFromService3, null, 2)
          : "Loading..."}
      </pre>
    </div>
  );
}

export default App;
