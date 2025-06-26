import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SimilarMov from "./pages/SimilarMov";
import SimilarSeries from "./pages/SimilarSeries";
import SearResults from "./pages/SearchResults";
// import Token from "./pages/Token";
import NotFoundPage from "./pages/NotFound";
// import Login from "./pages/Login";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
// import PrivateRoute from "./components/PrivateRoute";

// import { AuthProvider } from "./context/AuthContext";

import ReactGa from "react-ga";
import { useEffect } from "react";
// import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  ReactGa.initialize("G-JDFS7KRV40");

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);

    // ✅ First ad script
    const script1 = document.createElement("script");
    script1.src = "//pl27014688.profitableratecpm.com/510d32f6cf87c1fab8c5d23f5e3c41b7/invoke.js";
    script1.async = true;
    script1.setAttribute("data-cfasync", "false");
    document.body.appendChild(script1);

    // ✅ Second ad script
    const script2 = document.createElement("script");
    script2.src = "//pl27014703.profitableratecpm.com/84/94/33/8494334706451855cea15476ec502b59.js";
    script2.async = true;
    script2.type = "text/javascript";
    document.body.appendChild(script2);
  }, []);

  return (
    <BrowserRouter>
      <Nav />
      <div className="p-3 md:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="mov/:movieID" element={<MovieDetails />} />
          <Route path="ser/:seriesID" element={<TvDetails />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/Series" element={<Series />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/similarMov/:movieID" element={<SimilarMov />} />
          <Route path="/similarSeries/:seriesID" element={<SimilarSeries />} />
          <Route path="/search/:searchResult" element={<SearResults />} />
        </Routes>
      </div>

      {/* ✅ Ad Container (can repeat or reposition as needed) */}
      <div
        id="container-510d32f6cf87c1fab8c5d23f5e3c41b7"
        style={{ margin: "20px auto", minHeight: "120px", textAlign: "center" }}
      ></div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
