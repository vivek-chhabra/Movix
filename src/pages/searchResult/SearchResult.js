import { useFetchMovies } from "../../hooks/fetchMovies/useFetchMovies";
import InfiniteScroll from "react-infinite-scroll-component";
import { BASE_URL, headers } from "../../utils/API";
import React, { useEffect, useState } from "react";
import noResult from "../../assets/no-results.png";
import Spinner from "../../components/Spinner";
import { useParams } from "react-router-dom";
import { SuccessMsg } from "../../helpers";
import { useSelector } from "react-redux";
import { ErrorMsg } from "../../helpers";
import SearchCard from "./SearchCard";
import "./SearchResult.scss";
import axios from "axios";

export default function SearchResult() {
    const { query } = useParams();
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [pageNum, setPageNum] = useState(1);
    const [loading, setLoading] = useState(false);
    const { url } = useSelector((data) => data.home);

    const fetchData = async (params) => {
        setError(null);
        setLoading(false);
        try {
            setLoading(true);
            let res = await axios(BASE_URL + `/search/multi?query=${query}&page=${pageNum}`, {
                headers,
                params,
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

    const fetchMore = async (params) => {
        setError(null);
        setLoading(false);
        try {
            setLoading(true);
            let res = await axios(BASE_URL + `/search/multi?query=${query}&page=${pageNum}`, {
                headers,
                params,
            });
            setLoading(false);
            setData({ ...data, results: [...data.results, ...res?.data?.results] });
            setPageNum(pageNum + 1);
        } catch (err) {
            setLoading(false);
            console.log(err.message);
            setError(err.message);
        }
    };

    useEffect(() => {
        setPageNum(1);
        fetchData();
    }, [query]);

    return (
        <div className="SearchResult">
            {loading && <Spinner initial={true} />}
            {!loading && (
                <div className="container">
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle container">{`Search ${data.results.length > 0 ? "results" : "result"} of (${query})`}</div>
                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length || 20}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<Spinner />}
                                next={fetchMore}
                                endMessage={
                                    <p style={{ textAlign: "center", display: "block", width: "100%", fontSize: "3rem" }}>
                                        <b>Yay! You have seen it all</b>
                                    </p>
                                }>
                                {data?.results?.map((item, id) => {
                                    if (item?.media_type === "person") return;
                                    return <SearchCard key={item.id || id} movie={item} url={url} />;
                                })}
                            </InfiniteScroll>
                        </>
                    ) : (
                        <SuccessMsg msg='No such result found for the search query' />
                    )}
                </div>  
            )}
        </div>
    );
}
