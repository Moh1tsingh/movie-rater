import Axios from "axios";

export const mutationLogin = async () => {
    let data
  const axiosInstance = Axios.create({
    baseURL: "https://api.themoviedb.org/3/authentication/guest_session/new",
  });

  // Setting the default headers
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;
//   axiosInstance.defaults.headers.post["Content-Type"] = "application/json";

  axiosInstance
    .get("")
    .then((response) => {
        console.log(response.data)
        data=response.data} )
    .catch((error) => console.error("Error:", error));
  return data;
};
