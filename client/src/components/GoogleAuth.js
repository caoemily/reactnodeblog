import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { signedIn, signedOut } from '../actions';

class GoogleAuth extends Component {
    componentDidMount(){
      window.gapi.load('client:auth2', ()=> { //the way to load gaip
        window.gapi.client.init({ //intialize gapi client, clientId from google developer console
          clientId: '193682920385-tpqecmo1dlev5ktkdjtf4bpds24hv8st.apps.googleusercontent.com',
          scope: 'email'
        }).then(()=>{
          this.auth = window.gapi.auth2.getAuthInstance();//global auth object
          //initial state rendering...
          this.onAuthChange(this.auth.isSignedIn.get())   
          //no matter what function is put as params, the line here is actually listen to changes to the param of the function-- the sign-in state of the user
          this.auth.isSignedIn.listen(this.onAuthChange); 
        });
      });
    }
    onAuthChange = (isSignedIn) =>{
      if(isSignedIn){
        this.props.signedIn(this.auth.currentUser.get().getId());
      }
      else{
        this.props.signedOut();
      }
    }
    //once the sign-in state changes, it will trigger the call-back function this.onAuthChange. 
    //listen is waiting to see the change. once the change happens, the call back is triggered.
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