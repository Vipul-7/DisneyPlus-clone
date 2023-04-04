import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import { useDispatch } from "react-redux";

import Recommanded from "../components/Movies-List-Card/Recommanded";
import DisneyPlusOriginals from "../components/Movies-List-Card/DisneyPlusOriginals";
import BestOfSuperHeros from "../components/Movies-List-Card/Best_of_Super_Heros";
import TalesFromJapan from "../components/Movies-List-Card/Tales_from_Japan";
import { useEffect } from "react";
import fetchMovieData from "../store/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />

      <Recommanded />
      <DisneyPlusOriginals />
      <BestOfSuperHeros />
      <TalesFromJapan />
    </Container>
  );
};

export default Home;

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;
