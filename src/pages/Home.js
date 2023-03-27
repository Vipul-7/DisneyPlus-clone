import styled from "styled-components";
import ImgSlider from "../components/ImgSlider";
import Viewers from "../components/Viewers";
import { useDispatch, useSelector } from "react-redux";

import Recommanded from "../components/Movies-List-Card/Recommanded";
import DisneyPlusOriginals from "../components/Movies-List-Card/DisneyPlusOriginals";
import TwistInTheTale from "../components/Movies-List-Card/Twist_in_the_Tale";
import AnimatedAdventures from "../components/Movies-List-Card/Animated_Adventures";
import LatestOnDisneyPlus from "../components/Movies-List-Card/Latest_on_Disney_Plus";
import BehindTheScenes from "../components/Movies-List-Card/Behind_the_Scenes";
import AttackOfAnime from "../components/Movies-List-Card/Attack_of_Anime";
import { useEffect } from "react";
import fetchMovieData from "../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  const recommand = useSelector((state) => state.movie.recommand);
  // console.log(recommand);

  useEffect(() => {
    dispatch(fetchMovieData());
  }, [dispatch]);

  return (
    <Container>
      <ImgSlider />
      <Viewers />

      <Recommanded />
      <DisneyPlusOriginals />
      <TwistInTheTale />
      <AnimatedAdventures />
      <LatestOnDisneyPlus />
      <BehindTheScenes />
      <AttackOfAnime />
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
