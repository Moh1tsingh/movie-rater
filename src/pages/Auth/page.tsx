import { Button } from "@/components/ui/button";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  // const { data, mutate } = useMutation({
  //   mutationKey: ["login"],
  //   mutationFn: mutationLogin,
  // });
  const navigate = useNavigate();
  const axiosInstance = Axios.create({
    baseURL: "https://api.themoviedb.org/3/authentication/guest_session",
  });
  axiosInstance.defaults.headers.common[
    "Authorization"
  ] = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZjhiYTU5MmU4ZDNmMWFiNzNmZGMwNjRiYWJiZjNmYyIsInN1YiI6IjY2MDA0ODEwNDU5YWQ2MDE4N2Y5N2Q2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BaWTSrFP5Wi49yVoYxdBxFvgQfD9p0BKppFsK_TB-2E`;

  const handleLogin = async () => {
    try {
      const response = await axiosInstance.get("/new");
      const responseData = response.data;

      localStorage.setItem("guest_session_id", responseData.guest_session_id);

      if (responseData.guest_session_id) {
        navigate("/");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="w-full h-[80vh] flex justify-center items-center ">
      <div className=" h-60 px-14 outline-1 outline outline-neutral-300 rounded-lg flex flex-col justify-center items-center space-y-4">
        <h1 className=" text-3xl font-bold text-neutral-800">
          Log in as a Guest
        </h1>
        <Button onClick={handleLogin} size={"lg"} className=" text-lg ">
          {!localStorage.getItem("guest_session_id")
            ? "Log in"
            : "You're already logged in"}
        </Button>
      </div>
    </div>
  );
};

export default Auth;
