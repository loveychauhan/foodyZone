import styled from "styled-components";
import { Button } from "../Styled/Button";
import { BASE_URL } from "../App";

const FoodPage = ({ filterData: foods }) => {
  return (
    <>
      <FoodCards>
        {foods?.map((food) => (
          <FoodCard key={food.name}>
            <div className="food_image">
              <img src={BASE_URL + food.image} alt="" />
            </div>
            <div className="food-details">
              <p>{food.name}</p>
              <p className="food_text">{food.text}</p>
              <Button>${food.price.toFixed(2)}</Button>
            </div>
          </FoodCard>
        ))}
      </FoodCards>
    </>
  );
};

export default FoodPage;

const FoodCards = styled.div`
  width: 100%;
  padding-block: 66px;
  max-width: 1060px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 32px 20px;
  margin: 0 auto;
`;

const FoodCard = styled.section`
  width: 100%;
  max-width: 340px;
  padding: 8px;
  color: white;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  background: radial-gradient(
    90.16% 143.01% at 15.32% 21.04%,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.0447917) 77.08%,
    rgba(70, 144, 213, 0.25) 100%
  );

  border-radius: 12px;

  .food_image {
    width: 100%;
    max-width: 133px;
    height: 133px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  }
  .food-details {
    max-width: 168px;
    button {
      font-size: 14px;
      font-weight: 400;
      margin-left: auto;
      margin-top: 16px;
      display: block;
    }
  }

  .food_text {
    font-size: 12px;
    margin-top: 8px;
  }
`;
