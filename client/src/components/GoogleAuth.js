import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { signedIn, signedOut } from '../actions';
//import {Link} from 'react-router-dom';

class GoogleAuth extends Component {
    componentDidMount(){
      window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
          clientId: '193682920385-tpqecmo1dlev5ktkdjtf4bpds24hv8st.apps.googleusercontent.com',
          scope: 'email'
        }).then(()=>{
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get())
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
      });
    }

    onAuthChange = (isSignedIn) =>{
      if(isSignedIn){
        this.props.signedIn(this.auth.currentUser.get().getId());
        //console.log(this.auth.currentUser.get().getId());
      }
      else{
        this.props.signedOut();
      }
    }

    onSignInClick = () => {
      this.auth.signIn();
    }

    onSignOutClick = () => {
      this.auth.signOut();
    }

    renderAuthButton(){
      if(this.props.isSignedIn===null){
        return null;
      }
      else if (this.props.isSignedIn){
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google small icon" />
            Sign Out
          </button>
        )
      }
      else {
        return (
          <button onClick={this.onSignInClick} className="ui red google button ">
            <i className="google icon small" />
            Sign In
          </button>
        )
      }
    }

    render() {
        return (
            <div className="item"> 
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, {signedIn, signedOut})(GoogleAuth);