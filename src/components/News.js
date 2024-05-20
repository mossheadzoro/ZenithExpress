import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spin from "./Spin";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


export class News extends Component {
  
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    apiKey: "03c02dc2fd154f44b40553424587dff2"
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    console.log("Hello I am a constructor from News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalArticles: 0,
      apiKey:"03c02dc2fd154f44b40553424587dff2"
    };
  }
  async componentDidMount() {
    this.props.setProgress(10);
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(50);
    this.setState({ loading: false });
    this.setState({
      articles: parsedData.articles,
      totalArticles: parsedData.totalResults,
      
    });
   
    this.props.setProgress(100);
  }
  

  fetchMoreData = async () => {
    
 this.setState({page: this.state.page +1});
 this.setState({ loading: true });
 let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
 let data = await fetch(url);
 let parsedData = await data.json();
 this.setState({ loading: false });
 this.setState({
   articles: this.state.articles.concat(parsedData.articles),
   totalArticles: parsedData.totalResults,
   
 })}

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{margin:'35px 0px',marginTop:'100px'}}>
          ZenithExpress-Top {this.props.category.toUpperCase()} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.state.articles.length} //This is important field to render the next data
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalArticles}
          loader={<Spin/>}
        >
          <div className="container">
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
       
      </div>
    );
  }
}

export default News;
