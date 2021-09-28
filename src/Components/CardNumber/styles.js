import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    margin: 0 auto;
    width: 90%;
    height: 200px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #000000;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;
export const Button = styled.button`
  padding: 10px;
  height: 30px;
  line-height: 10px;
  background-color: dimgray;
  color: white;
  border: none;
  border-radius: 100px;
  :hover {
    background-color: #000000;
    color: #ffffff;
  }
  :active {
    transform: translateY(10px);
    transition: 0.3s;
  }
`;
