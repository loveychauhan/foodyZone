import styled from "styled-components";

export const Button = styled.button`
  padding: 6px 12px;
  border-radius: 5px;
  border: 1px solid transparent;
  outline: none;
  background-color: #ff4343;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition:0.2s background ease-in-out;
  &:hover{
    background-color:rgb(241, 40, 40)
  }
  &:focus-within{
    background-color:rgb(241, 40, 40)
  }
  
`;