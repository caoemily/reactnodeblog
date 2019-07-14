import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

class Header extends Component {
    render() {
        return (
            <div> 
                <div className="ui fixed inverted menu">
                    <div className="ui container">
                      <div className="header item">
                        <i className="code icon"></i>
                        Blog Site
                      </div>
                      <Link to={'/'} className="item">Home</Link>
                      <Link to={'/new'} className="item">New Post</Link>
                      <div className="item">
                        <GoogleAuth />
                      </div>                     
                    </div>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Header;