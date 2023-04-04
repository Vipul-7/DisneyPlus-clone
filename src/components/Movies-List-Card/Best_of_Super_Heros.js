import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BestOfSuperHeros = () => {
  const data = useSelector((state) => state.movie.bestOfTheSuperheros);

  return (
    <Container>
      <h4>Best of Superheros</h4>
      <Content>
        {data &&
          data.map((item) => (
            <Wrap key={item.id}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.cardImg} alt={item.name} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};

export default BestOfSuperHeros;

const Container = styled.div`
  padding: 0px 0px 26px;

  & h4 {
    font-size: 20px;
  }
`;

const Content = styled.div`
  display: grid;
  /* grid-gap: 25px;
  gap: 25px; */
  grid-template-columns: repeat(6, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Wrap = styled.div`
  min-height: 14rem;
  padding-top: 56.25%;
  width: 170px;
  border-radius: 10px;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  /* border: 3px solid rgba(249, 249, 249, 0.1); */
  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    transition: opacity 500ms ease-in-out 0s;
    width: 100%;
    z-index: 1;
    top: 0;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
