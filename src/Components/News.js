import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updatedNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;

    props.setProgress(30);

    setLoading(true);

    let data = await fetch(url);
    props.setProgress(50);

    let parsedData = await data.json();
    props.setProgress(60);

    console.log(parsedData);
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(true);

    props.setProgress(100);
  };
  useEffect(() => {
    updatedNews();
   
    
  }, [])
 
  const fetchMoreData = async () => {
    setPage(page+1)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;

    setLoading(true);

    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
setArticles(articles.concat(parsedData.articles));
setTotalResults(parsedData.totalResults);
setLoading(false)
    
  };

  {
    return (
      <>
        <h2 className="text-center">NewsMonkey - Top Headlines</h2>

          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
            scrollableTarget="scrollableDiv"
          >
            <div className="container">
              <div className="row">
                {articles.map((element) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={
                          element.description
                            ? element.description.slice(0, 70)
                            : ""
                        }
                        imageUrl={element.urlToImage}
                        NewsUrl={element.url}
                        author={element.author}
                        date={element.publishedAt}
                        source={element.source.name}
                      />
                    </div>
                  );
                })}{" "}
              </div>{" "}
            </div>
          </InfiniteScroll>
    
      </>
    );
  }
};

export default News;
News.defaultProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
