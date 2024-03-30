import Axios from "axios";

export const fetchRatedMovies = async () => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/movies?language=en-US&page=1&sort_by=created_at.asc`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E",
    },
  };

  try {
    const response = await Axios.request(options);
    console.log(response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error
  }
};

export const fetchRatedSeries = async () => {
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/guest_session/${localStorage.getItem(
      "guest_session_id"
    )}/rated/tv?language=en-US&page=1&sort_by=created_at.asc`,
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E",
    },
  };

  try {
    const response = await Axios.request(options);
    console.log(response.data);
    return response.data; // Return the data
  } catch (error) {
    console.error(error);
    throw error; // Re-throw the error
  }
};
