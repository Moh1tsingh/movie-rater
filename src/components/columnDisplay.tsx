import { DisplayType } from "@/pages/Home/page";
import { Link } from "react-router-dom";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { Button } from "./ui/button";
import { rateMovie } from "@/pages/Home/query";
import { useToast } from "@/components/ui/use-toast";

interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
  vote_average: number;
  release_date: string;
}
interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}

const ColumnDisplay = (props: Props) => {
  const { data, displayType } = props;
  const { toast } = useToast();

  return (
    <div>
      <div className=" mt-5 grid grid-cols-3 gap-5 ">
        {data.map((displayType: DisplayData) => {
          const [rate, setRate] = useState<number[]>();
          const [isRating, setIsRating] = useState<boolean>(true);
          const title =
            props.displayType === "movies"
              ? displayType.title
              : displayType.name;
          return (
            <div key={displayType.id}>
              <Link
                to={`/${
                  displayType.title
                    ? `movie/${displayType.id}`
                    : `series/${displayType.id}`
                }`}
              >
                <div
                  key={displayType.id}
                  className=" bg-white w-[23vw] h-auto outline-1 outline-slate-400 outline rounded-sm flex flex-col overflow-hidden shadow-lg"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/original/${displayType.poster_path}`}
                    className=""
                  />
                  <div className=" py-2 px-3">
                    <h1 className=" text-2xl font-semibold">{title}</h1>
                    <p className=" text-slate-500 font-semibold">
                      {`Release Date: ${
                        displayType.release_date
                      } | Rating: ${displayType.vote_average.toFixed(2)}`}
                    </p>
                    <p className=" mt-2 font-medium text-slate-700">
                      {displayType.overview.slice(0, 350) + "..."}
                    </p>
                  </div>
                </div>
              </Link>
              <div className="flex mt-2 gap-1 ">
                {isRating && (
                  <Button
                    onClick={() => setIsRating(false)}
                    className=" bg-yellow-400 text-black hover:bg-yellow-500"
                  >
                    Rate it?
                  </Button>
                )}
                {!isRating && (
                  <div className=" w-full">
                    <div className=" flex gap-1 ">
                      <Slider
                        defaultValue={[displayType.vote_average]}
                        max={10}
                        step={0.5}
                        value={rate}
                        onValueChange={(e) => setRate(e)}
                        className=" opacity-90"
                      />
                      <Button
                        onClick={async () => {
                          setIsRating(true);
                          console.log(rate);
                          let ratedSuccessfully;
                          if (title) {
                            ratedSuccessfully = rateMovie(
                              String(displayType.id),
                              rate?.[0] ?? 0
                            );
                          } 
                        //   else {
                        //     ratedSuccessfully = rateSeries(
                        //       String(displayType.id),
                        //       rate?.[0] ?? 0
                        //     );
                        //   }

                          if (await ratedSuccessfully) {
                            toast({
                              title: "Rating was added successfully!",
                              className: "bg-yellow-300 text-xl font-medium",
                            });
                          }else{
                            toast({
                              title: "Something went wrong!",
                              className: "bg-red-300 text-xl font-medium",
                            });
                          }
                        }}
                        className=" bg-yellow-400 text-black hover:bg-yellow-500"
                      >
                        Rate {rate}★
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ColumnDisplay;
