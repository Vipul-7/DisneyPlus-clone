import { moviesAction } from "./movie/movieSlice";

const fetchMovieData = () => {
  return async (dispatch) => {
    let recommand = [];
    let disneyPlusOriginals = [];
    let twistInTheTale = [];
    let animatedAdventures = [];
    let latestOnDisneyPlus = [];
    let behindTheScenes = [];
    let attackOfAnime = [];

    const fetchRequest = async () => {
      const response = await fetch(
        "https://disneyplus-clone-7c368-default-rtdb.europe-west1.firebasedatabase.app//movies.json"
      );
      const data = await response.json();

      for (let key in data) {
        switch (data[key].type) {
          case "recommand":
            recommand = [...recommand, { id: key, ...data[key] }];
            break;
          case "disneyPlusOriginals":
            disneyPlusOriginals = [
              ...disneyPlusOriginals,
              { id: key, ...data[key] },
            ];
            break;
          case "twistInTheTale":
            twistInTheTale = [...twistInTheTale, { id: key, ...data[key] }];
            break;
          case "animatedAdventures":
            animatedAdventures = [
              ...animatedAdventures,
              { id: key, ...data[key] },
            ];
            break;
          case "latestOnDisneyPlus":
            latestOnDisneyPlus = [
              ...latestOnDisneyPlus,
              { id: key, ...data[key] },
            ];
            break;
          case "behindTheScenes":
            behindTheScenes = [...behindTheScenes, { id: key, ...data[key] }];
            break;
          case "attackOfAnime":
            attackOfAnime = [...attackOfAnime, { id: key, ...data[key] }];
            break;
          default:
            break;
        }
      }
    };

    await fetchRequest();
    console.log(recommand);

    dispatch(
      moviesAction.setMovies({
        recommand,
        disneyPlusOriginals,
        twistInTheTale,
        animatedAdventures,
        latestOnDisneyPlus,
        behindTheScenes,
        attackOfAnime,
      })
    ); // dispatch is a function that is provided by redux-thunk
  };
};

export default fetchMovieData;
