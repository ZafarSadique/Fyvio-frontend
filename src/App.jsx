import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import TvDetails from "./pages/TvDetails";
import Movies from "./pages/Movies";
import Series from "./pages/Series";
import SimilarMov from "./pages/SimilarMov";
import SimilarSeries from "./pages/SimilarSeries";
import SearResults from "./pages/SearchResults";
import NotFoundPage from "./pages/NotFound";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import ReactGa from "react-ga";
import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  ReactGa.initialize("G-JDFS7KRV40");

  useEffect(() => {
    ReactGa.pageview(window.location.pathname + window.location.search);

    // ✅ Adsterra Social Bar Script
    const socialBarScript = document.createElement("script");
    socialBarScript.src = "//pl27014703.profitableratecpm.com/84/94/33/8494334706451855cea15476ec502b59.js";
    socialBarScript.type = "text/javascript";
    socialBarScript.async = true;
    document.body.appendChild(socialBarScript);

    // ✅ Adsterra Native Banner Script
    const bannerScript = document.createElement("script");
    bannerScript.src = "//pl27014688.profitableratecpm.com/510d32f6cf87c1fab8c5d23f5e3c41b7/invoke.js";
    bannerScript.async = true;
    bannerScript.setAttribute("data-cfasync", "false");
    document.body.appendChild(bannerScript);
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

      {/* ✅ Native Banner Ad Container */}
      <div
        id="container-510d32f6cf87c1fab8c5d23f5e3c41b7"
        style={{ margin: "20px auto", minHeight: "120px", textAlign: "center" }}
      ></div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
