import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import Select from "react-select";
import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import Spinner from "../../components/Spinner";
import MovieCard from "../../components/MovieCard";
import "./Explore.scss";
import { BASE_URL, headers } from "../../utils/API";
import { useSelector } from "react-redux";
import axios from "axios";
import { ErrorMsg, SuccessMsg } from "../../helpers";

const sortbyData = [
    { value: "popularity.desc", label: "Popularity Descending" },
    { value: "popularity.asc", label: "Popularity Ascending" },
    { value: "vote_average.desc", label: "Rating Descending" },
    { value: "vote_average.asc", label: "Rating Ascending" },
    {
        value: "primary_release_date.desc",
        label: "Release Date Descending",
    },
    { value: "primary_release_date.asc", label: "Release Date Ascending" },
    { value: "original_title.asc", label: "Title (A-Z)" },
];

const Explore = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const [genre, setGenre] = useState(null);
    const [sortby, setSortby] = useState(null);
    const { mediaType } = useParams();
    const [filters, setFilters] = useState({})

    const { error: genErr, isPending, movies: genresData, fetchMovies } = useFetchMovies();
    const { url } = useSelector((data) => data.home);

    const fetchData = async () => {
        setError(null);
        setLoading(false);
        try {
            setLoading(true);
            let res = await axios(BASE_URL + `/discover/${mediaType}`, {
                headers,
                filters,
            });
            setLoading(false);
            setData(res.data);
            setPageNum(pageNum + 1);
        } catch (err) {
            setLoading(false);
            console.log(err.message);
            setError(err.message);
        }
    };

    const fetchMore = async () => {
        setError(null);
        setLoading(false);
        try {
            setLoading(true);
            let res = await axios(BASE_URL + `/discover/${mediaType}?page=${pageNum}`, {
                headers,
                filters,
            });
            setLoading(false);
            if (res?.data?.results) {
                setData({ ...data, results: [...data.results, ...res?.data?.results] });
            } else {
                setData(res);
            }
            setPageNum(pageNum + 1);
        } catch (err) {
            setLoading(false);
            console.log(err.message);
            setError(err.message);
        }
    };

    useEffect(() => {
        fetchMovies(`/genre/${mediaType}/list`);
        fetchData();
    }, [mediaType]);

    useEffect(() => {
        setFilters({});
        setData(null);
        setPageNum(1);
        setSortby(null);
        setGenre(null);
    }, [mediaType]);

    const onChange = (selectedItems, action) => {
        if (action.name === "sortby") {
            setSortby(selectedItems);
            if (action.action !== "clear") {
                // filters.sort_by = selectedItems.value;
                setFilters({...filters, sort_by: selectedItems.value})
            } else {
                // delete filters.sort_by;
                setFilters({...filters, sort_by: ''})
            }
        }

        if (action.name === "genres") {
            setGenre(selectedItems);
            if (action.action !== "clear") {
                let genreId = selectedItems.map((g) => g.id);
                genreId = JSON.stringify(genreId).slice(1, -1);
                // filters.with_genres = genreId;
                setFilters({...filters, with_genres: genreId})
            } else {
                // delete filters.with_genres;
                setFilters({...filters, with_genres: ''})
            }
        }

        setPageNum(1);
        fetchData();
    };

    return (
        <div className="explorePage">
            <div className="container flex-col">
                {error && <ErrorMsg error={error}/>}
                <div className="pageHeader">
                    <div className="pageTitle">{mediaType === "tv" ? "Explore TV Shows" : "Explore Movies"}</div>
                    <div className="filters">
                        <Select
                            isMulti
                            name="genres"
                            value={genre}
                            closeMenuOnSelect={false}
                            options={genresData?.genres}
                            getOptionLabel={(option) => option.name}
                            getOptionValue={(option) => option.id}
                            onChange={onChange}
                            placeholder="Select genres"
                            className="react-select-container genresDD"
                            classNamePrefix="react-select"
                        />
                        <Select name="sortby" value={sortby} options={sortbyData} onChange={onChange} isClearable={true} placeholder="Sort by" className="react-select-container sortbyDD" classNamePrefix="react-select" />
                    </div>
                </div>
                {!loading && (
                    <>
                        {data?.results?.length > 0 ? (
                            <InfiniteScroll className="content" dataLength={data?.results?.length || []} next={fetchMore} hasMore={pageNum <= data?.total_pages} loader={<Spinner initial={true} />}>
                                {data?.results?.map((item, index) => {
                                    if (item.media_type === "person") return;
                                    return <MovieCard key={index} movie={item} mediaType={mediaType} url={url} />;
                                })}
                            </InfiniteScroll>
                        ) : (
                            <SuccessMsg msg="No such result found" />
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Explore;
