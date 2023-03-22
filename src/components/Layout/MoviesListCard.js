import styled from "styled-components";
import { Link } from "react-router-dom";

const MoviesListCard = (props) => {
  return (
    <Container>
      <h4>{props.sectionTitle}</h4>
      <Content>
        <Wrap>
          <Link>
            <img src={props.img1} alt={props.imgAlt1} />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src={props.img2} alt={props.imgAlt2} />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src={props.img3} alt={props.imgAlt3} />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src={props.img4} alt={props.imgAlt4} />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src={props.img5} alt={props.imgAlt5} />
          </Link>
        </Wrap>
        <Wrap>
          <Link>
            <img src={props.img6} alt={props.imgAlt6} />
          </Link>
        </Wrap>
      </Content>
    </Container>
  );
};

export default MoviesListCard;

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
