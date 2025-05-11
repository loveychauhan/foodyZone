import { useEffect, useState } from "react";
import "./App.css";
import FoodPage from "./components/FoodPage";
import Header from "./components/Header";
import styled from "styled-components";

export const BASE_URL = "http://localhost:9000";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    const fetchFood = async () => {
      setLoading(true);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch data.");
      }
    };
    fetchFood();
  }, []);

  if (error) return <div>Unable to fetch Data</div>;
  if (loading) return <div>loading...</div>;

  const searchByInput = (e) => {
    if (!e || !e.target) return;
    const result = data?.filter((food) =>
      food.name.toLowerCase().includes(e?.target.value.toLowerCase())
    );
    if (result) setFilterData(result);
  };

  const filterByButton = (e) => {
    if (e.target.name === "All") {
      setFilterData();
      return;
    }
    const res = data?.filter(
      (food) => food.type === e.target.name.toLowerCase()
    );

    setFilterData(res);
  };
  return (
    <MainContainer>
      <Header searchByInput={searchByInput} filterByButton={filterByButton} />
      <FoodPage filterData={filterData ? filterData : data} />
    </MainContainer>
  );
}

export default App;

const MainContainer = styled.main`
  min-height: 100vh;
  background-image: url("./bg.png");
  background-position: center;
  background-size: cover;
`;
