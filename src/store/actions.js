import { moviesAction } from "./movie/movieSlice";

const fetchMovieData = () => {
  return async (dispatch) => {
    let recommand = [];
    let disneyPlusOriginals = [];
    let bestOfTheSuperheros = [];
    let talesFromJapan = [];

    const fetchRequest = async () => {
      const response = await fetch(
        "https://disneyplus-clone-7c368-default-rtdb.europe-west1.firebasedatabase.app/movies.json"
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
          case "bestOfTheSuperheros":
            bestOfTheSuperheros = [
              ...bestOfTheSuperheros,
              { id: key, ...data[key] },
            ];
            break;
          case "talesFromJapan":
            talesFromJapan = [...talesFromJapan, { id: key, ...data[key] }];
            break;
          default:
            break;
        }
      }
    };

    await fetchRequest();
    // console.log(recommand);

    dispatch(
      moviesAction.setMovies({
        recommand,
        disneyPlusOriginals,
        bestOfTheSuperheros,
        talesFromJapan,
      })
    ); // dispatch is a function that is provided by redux-thunk
  };
};

export default fetchMovieData;
