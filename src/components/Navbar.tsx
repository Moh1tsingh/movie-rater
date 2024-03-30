import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <div className=" w-screen border-b">
      <div className="w-full flex justify-between text-2xl p-3 font-bold tracking-tighter">
        <div>
          <Link to={"/"} className=" opacity-85">
            MoviesRate
          </Link>
        </div>
        <div className="flex gap-2">
          <Button variant={"outline"} className="tracking-tighter ">
            <Link to={"/"}>Home</Link>
          </Button>
          <Button
            variant={"outline"}
            className="tracking-tighter sm:block hidden"
          >
            <Link to={"/rated"}>Rated</Link>
          </Button>
          <Button
            variant={"outline"}
            className="tracking-tighter sm:block hidden"
          >
            <Link to={"/auth"}>Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
