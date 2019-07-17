import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

class PostItem extends Component {

    renderList(){
        return (           
            <div className="ui top attached segment">
                <div className="ui divided items">
                    <div className="item">
                        <div className="image">
                          <img src={this.props.data.image} alt="blog post"/>
                        </div>
                        <div className="content">
                          <div className="header">{this.props.data.title}</div>
                          <div className="meta">
                            <span className="cinema">{this.props.data.time}</span>
                          </div>
                          <div className="description">
                            <p>{this.props.data.description.substring(0,100)}</p>
                          </div>
                          <div className="extra">
                            <Link to={`/posts/${this.props.data._id}`} className="ui floated basic violet button">
                              Read More
                              <i className="right chevron icon"></i>
                            </Link>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div> 
        )
    }
}

export default PostItem;
