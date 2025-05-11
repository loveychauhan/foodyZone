import styled from "styled-components";
import { Button } from "../Styled/Button";

const Header = ({ searchByInput, filterByButton }) => {
  const filterBtns = [
    {
      category: "All",
    },
    {
      category: "Breakfast",
    },
    {
      category: "Lunch",
    },
    {
      category: "Dinner",
    },
  ];

  return (
    <HeaderContainer>
      <div className="title">
        <h1>
          F<span>o</span>
          <span>o</span>die Z<span>o</span>ne
        </h1>
        <input type="text" placeholder="Search Food" onChange={searchByInput} />
      </div>
      <div className="filters_button">
        {filterBtns.map((value) => (
          <Button
            key={value.category}
            name={value.category}
            onClick={filterByButton}>
            {value.category}
          </Button>
        ))}
      </div>
    </HeaderContainer>
  );
};

export default Header;
const HeaderContainer = styled.div`
  background-color: #323334;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    @media (max-width: 768px) {
      flex-direction: column;
      gap: 12px;
    }
  }
  h1 {
    font-size: 32px;
  }
  span {
    color: #ff0909;
  }
  input {
    width: 100%;
    max-width: 280px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #ff0909;
    font-size: 16px;
    background-color: transparent;
    color: white;
  }
  .filters_button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-block: 36px 24px;
    flex-wrap: wrap;
  }
`;
