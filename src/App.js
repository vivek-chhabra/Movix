import { getApiConfiguration } from "./redux/slice/homeSlice";
import { fetchApiConfig } from "./redux/slice/ApiConfigSlice";
import MovieDetails from "./pages/movieDetails/MovieDetails";
import SearchResult from "./pages/searchResult/SearchResult";
import { useDispatch, useSelector } from "react-redux";
import PageNotFound from "./components/PageNotFound";
import { Route, Routes } from "react-router-dom";
import Explore from "./pages/explore/Explore";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import React, { useEffect } from "react";
import Home from "./pages/home/Home";
import "./App.scss";

function App() {
    const dispatch = useDispatch();
    const { isPending, error, success, ApiConfig } = useSelector((data) => data.apiConfig);

    useEffect(() => {
        dispatch(fetchApiConfig({ url: "/configuration" }));
    }, []);

    useEffect(() => {
        if (success) {
            const url = {
                backdrop: ApiConfig?.images.secure_base_url + "original",
                poster: ApiConfig?.images.secure_base_url + "original",
                profile: ApiConfig?.images.secure_base_url + "original",
            };
            dispatch(getApiConfiguration(url));
        }
    }, [ApiConfig]);

    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<MovieDetails />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
