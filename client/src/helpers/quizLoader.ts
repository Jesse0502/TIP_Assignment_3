import {
  art_quiz,
  bio_quiz,
  math_quiz,
  music_quiz,
  science_quiz,
} from "./constants";

const quizLoader = (query: string) => {
  if (query.toLocaleLowerCase().includes("science")) {
    return science_quiz;
  } else if (query.toLocaleLowerCase().includes("math")) {
    return math_quiz;
  } else if (query.toLocaleLowerCase().includes("art")) {
    return art_quiz;
  } else if (query.toLocaleLowerCase().includes("music")) {
    return music_quiz;
  } else if (query.toLocaleLowerCase().includes("biology")) {
    return bio_quiz;
  }
};

export default quizLoader;
