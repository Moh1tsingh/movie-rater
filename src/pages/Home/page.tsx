import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColumnDisplay from "../../components/columnDisplay";
import { fetchMovies, fetchSeries } from "./query";
import { useQuery } from "@tanstack/react-query";

export enum DisplayType {
  Movies = "movies",
  Series = "series",
}

const Home = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );

  const { data: movieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });
  const { data: seriesData, isLoading: isLoadingSeries } = useQuery({
    queryKey: ["series"],
    queryFn: fetchSeries,
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("guest_session_id")) {
      return navigate("/auth");
    }
  }, []);

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center  ">
      <div className=" flex gap-4 mt-4 ">
        <button
          onClick={() => setDisplayType(DisplayType.Movies)}
          className={` px-4 py-1 rounded-lg  font-semibold  ${
            displayType === "movies"
              ? "bg-blue-500 text-white"
              : "bg-neutral-200"
          }`}
        >
          Movies
        </button>
        <button
          onClick={() => setDisplayType(DisplayType.Series)}
          className={` px-4 py-1 rounded-lg  font-semibold ${
            displayType === "series"
              ? "bg-blue-500 text-white"
              : "bg-neutral-200"
          }`}
        >
          Series
        </button>
      </div>
      <div>
        {isLoadingMovies || isLoadingSeries ? (
          <h1>Loading ...</h1>
        ) : displayType === DisplayType.Movies ? (
          <ColumnDisplay data={movieData} displayType={DisplayType.Movies} />
        ) : (
          <ColumnDisplay data={seriesData} displayType={DisplayType.Series} />
        )}
      </div>
    </div>
  );
};

export default Home;
