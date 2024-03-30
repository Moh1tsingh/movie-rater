import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/page";
import Auth from "./pages/Auth/page";
import Rated from "./pages/Rated/page";
import Movie from "./pages/movie/page";
import Series from "./pages/series/page";

function App() {
  return (
    <div className="w-screen h-auto relative ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/rated" element={<Rated />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/series/:id" element={<Series />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
