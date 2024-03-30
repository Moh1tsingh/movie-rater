import Axios from "axios";

export const fetchSeriesDetails = async (seriesId: string) => {
  const axiosInstance = Axios.create({
    baseURL: `https://api.themoviedb.org/3/tv/${seriesId}?language=en-US`,
  });
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

  try {
    const response = await axiosInstance.get("");
    console.log(response);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
  }
};
