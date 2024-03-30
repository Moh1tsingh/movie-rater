import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "./query";
import { Badge } from "@/components/ui/badge";

interface Genres {
  id: number;
  name: string;
}

const Movie = () => {
  const { id } = useParams();
  if (!id) {
    return <h1>Invalid Movie Id!</h1>;
  }
  const { data, isLoading } = useQuery({
    queryKey: ["movie"],
    queryFn: () => fetchMovieDetails(id),
  });

  if (isLoading) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className=" w-full flex justify-center items-center ">
      <div className=" mt-5 rounded-lg outline outline-2 sm:outline-1 outline-slate-200 w-4/5 flex sm:p-5 p-2 shadow-lg sm:flex-row  flex-col  items-center">
        <div className="  sm:w-2/3 rounded-lg overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
            className=""
          />
        </div>
        <div className=" w-full pl-0 sm:pl-10 flex flex-col gap-2">
          <h1 className=" text-3xl font-bold mt-4">{data.title}</h1>
          <p className=" font-medium opacity-80">
            {`Release Date: ${data.release_date}`} |{" "}
            <br className=" block sm:hidden" />
            {`Rating: ${data.vote_average.toFixed(2)}`}
          </p>
          <p className=" font-medium">
            <span className=" opacity-75">Duration: </span>
            {`${data.runtime} mins`}
          </p>
          <div className=" flex gap-1 overflow-x-scroll pb-2 sm:pb-0 sm:overflow-hidden ">
            <h1 className=" opacity-75 font-medium ">Genres: </h1>
            {data.genres.map((genre: Genres) => (
              <Badge className="  bg-neutral-600 font-medium" key={genre.id}>
                {genre.name}
              </Badge>
            ))}
          </div>
          {data.adult && (
            <h1 className=" font-bold text-red-500">
              This movie is rated for Adults!
            </h1>
          )}
          <p className=" font-medium">
            <span className=" opacity-80">Overview: </span>
            {data.overview}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Movie;
