import { useQuery } from "@tanstack/react-query";
import { DisplayType } from "../Home/page";
import { useState } from "react";
import { fetchRatedMovies, fetchRatedSeries } from "./query";
import ColumnDisplay from "@/components/columnDisplay";

const Rated = () => {
  const [displayType, setDisplayType] = useState<DisplayType>(
    DisplayType.Movies
  );
  const { data: ratedMovieData, isLoading: isLoadingMovies } = useQuery({
    queryKey: ["ratedMovies"],
    queryFn: fetchRatedMovies,
  });
  console.log(ratedMovieData);
  const { data: ratedSeriesData, isLoading: isLoadingSeries } = useQuery({
    queryKey: ["ratedSeries"],
    queryFn: fetchRatedSeries,
  });
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
          className={` cursor-not-allowed px-4 py-1 rounded-lg  font-semibold ${
            displayType === "series"
              ? "bg-blue-500 text-white"
              : "bg-neutral-200"
          }`}
        >
          Series
        </button>
      </div>
      <div>
        {/* {isLoadingMovies || isLoadingSeries ? (
          <h1>Loading ...</h1>
        ) : displayType === DisplayType.Movies ? (
          <ColumnDisplay
            data={ratedMovieData.results}
            displayType={DisplayType.Movies}
          />
        ) : (
          <ColumnDisplay
            data={ratedSeriesData.results}
            displayType={DisplayType.Series}
          />
        )} */}
        {isLoadingMovies || isLoadingSeries ? (
          <h1>Loading ...</h1>
        ) : (
          <ColumnDisplay
            data={ratedMovieData.results}
            displayType={DisplayType.Movies}
          />
        )}
      </div>
    </div>
  );
};

export default Rated;
