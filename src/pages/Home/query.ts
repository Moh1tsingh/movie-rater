import Axios from "axios";

export const fetchMovies = async () => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  });
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

  try {
    const response = await axiosInstance.get("");
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const fetchSeries = async () => {
  const axiosInstance = Axios.create({
    baseURL: "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
  });
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

  try {
    const response = await axiosInstance.get("");
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
  }
};

export const rateMovie = async (movieId: string, rate: number) => {
  const axiosInstance = Axios.create({
    baseURL: `https://api.themoviedb.org/3/movie/${movieId}/rating?guest_session_id=${localStorage.getItem(
      "guest_session_id"
    )}&api_key=${import.meta.env.VITE_API_KEY}`,
  });
  axiosInstance.defaults.headers.common["accept"] = "application/json";
  axiosInstance.defaults.headers.common["Content-Type"] =
    "application/json;charset=utf-8";
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

  try {
    const response = await axiosInstance.post("", { value: rate });
    return response;
  } catch (error) {
    console.error("Error:", error);
  }
};

//Something is wrong with api call

// export const rateSeries = async (seriesId: string, rate: number) => {
//   const axiosInstance = Axios.create({
//     baseURL: `https://api.themoviedb.org/3/tv/${seriesId}/rating?guest_session_id=${localStorage.getItem(
//       "guest_session_id"
//     )}&api_key=${import.meta.env.VITE_API_KEY}`,
//   });
//   axiosInstance.defaults.headers.common["accept"] = "application/json";
//   axiosInstance.defaults.headers.common["Content-Type"] =
//     "application/json;charset=utf-8";
//   axiosInstance.defaults.headers.common[
//     "Authorization"
//   ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

//   try {
//     const response = await axiosInstance.post("", { value: rate });
//     return response;
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };
