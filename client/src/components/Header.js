import React, {Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';

class Header extends Component {
    popUpWindow = () => {
      window.alert("Please sign in!");
    }
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
                      {this.props.isSignedIn ? 
                        <Link to={'/new'} className="item">New Post</Link> 
                        : 
                        <div onClick= {this.popUpWindow} className="item">New Post</div> 
                      }
                      <div className="item floated right">
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
const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps)(Header);