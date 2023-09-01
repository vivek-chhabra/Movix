import React, { useEffect } from "react";
import "./App.scss";
import { fetchData } from "./utils/API";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/Navbar";

function App() {
    // useEffect(() => {
    //     const fetch = async () => {
    //       const res = fetchData("/movie/popular");
    //       console.log("res", res);
    //     };
    //     fetch()
    // }, []);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<MovieDetails />} />
                <Route path="/search" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    );
}

export default App;
