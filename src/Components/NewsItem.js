import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl ,NewsUrl ,author,date,source } = this.props;
    return (
      <div>
        <div className="card my-5"  >
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} <span  className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:'88%',zIndex:1,
}}>
   {source}
    <span className="visually-hidden">unread messages</span>
  </span></h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} On {new Date(date).toGMTString()} </small></p>
            {/* to update the date type first new Date(variable name) then .toGMTString() to change type of date */}
            <a href={NewsUrl} rel="noreferrer" target='_blank' className="btn btn-dark">
              Read More
            </a>
          </div>
        </div>
       
      </div>
    );
  }
}

export default NewsItem;
