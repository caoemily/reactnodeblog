import React, {Component} from 'react';
import '../App.css';
import { connect } from 'react-redux';
import { fetchPostItem, deletePost } from '../actions';
import { Link } from 'react-router-dom';
import {reduxForm} from 'redux-form';

class ShowPost extends Component {
    
    componentDidMount() {
        this.props.fetchPostItem(this.props.match.params.id);
    }

    renderItem(){
        return(
            <div>
                <div className="ui header">{this.props.postItem.title}</div>
                <div className="ui top attached segment">
                    <div className="item">
                       <img className="ui centered rounded image" alt="current post" src={this.props.postItem.image} />
                        <div className="content">
                            <div className="meta">
                                <span>{this.props.postItem.time}</span>
                            </div>
                             <div className="description">
                                <p>{this.props.postItem.description}</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        )       
    }

    onClick = () => {
        this.props.deletePost(this.props.match.params.id);
        this.props.history.push('/');
    }

    renderEditOption(){
        if(this.props.userID===this.props.postItem.userID){
            return (
                <div className="ui attached segment">
                    <Link to={`/posts/${this.props.postItem._id}/edit`} className="ui orange basic button">Update Post</Link>
                    <form onClick={this.props.handleSubmit(this.onClick)} className="ui form delete-button-form" action={`/posts/${this.props.match.params.id}?_method=DELETE`} method="POST">
                        <button className="ui red basic button">Delete Post</button>
                    </form>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="ui main text container">
                {this.renderItem()}   
                {this.renderEditOption()}        
            </div>          
        )
    }
}

const mapStateToProps = state => {
    return {
        userID: state.auth.userID,
        postItem: state.postList.postItem
    }
}

const formWrapped = reduxForm({
    form: 'deletePost', 
})(ShowPost);

export default connect(mapStateToProps, {deletePost, fetchPostItem})(formWrapped);

