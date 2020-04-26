import { newsData } from "../common/mockdata";

export const getNewsData = () => {
  setTimeout(() => {
    return newsData;
  }, 500);
};
