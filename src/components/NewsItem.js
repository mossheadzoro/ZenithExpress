import React, { Component } from 'react'

export class NewsItem extends Component {


  render() {
   let  {title, description, imageUrl, newsUrl,author,date} = this.props
    return (
      <div> 
        <div className="card" style={{width: "18rem"}}>
      <img src={!imageUrl?"https://imageio.forbes.com/specials-images/imageserve/655922d0daad2cc30b9ec966/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds":imageUrl} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text"><small class="text-muted">By{!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
        <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
      </div>
    </div>
    </div>
    )
  }
}

export default NewsItem