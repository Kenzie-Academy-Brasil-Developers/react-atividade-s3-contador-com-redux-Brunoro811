import { Container, Button } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, subNumber } from "../../Store/Modules/Counter/actions";
function CardNumber({ count = 0 }) {
  const { number } = useSelector((state) => state.number);
  const dispatch = useDispatch();
  const handleClick = (count) => {
    dispatch(addNumber(count));
  };
  const handleClickSub = (count) => {
    dispatch(subNumber(count));
  };

  return (
    <Container>
      <div>
        <Button onClick={() => handleClick(1)}>+</Button>
        {number}
        <Button onClick={() => handleClickSub(1)}>-</Button>
      </div>
    </Container>
  );
}
export default CardNumber;
