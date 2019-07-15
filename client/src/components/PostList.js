import React, {Component} from 'react';
import '../App.css';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    
    componentDidMount() {
        setTimeout(
            () => this.props.fetchPosts(),
            1000
        );       
    }

    renderList(){
        return this.props.posts.map((post) => {
            return (<PostItem key={post._id} data={post} />)
        });
    }

    render() {
        return (
            <div className='ui container'>
                <div className="ui main text container">
                    <div className="ui huge header">Blog Site</div>
                    <div>{(this.props.posts.length > 0) ? <ul>{this.renderList()}</ul> : <div>Fetching data...</div>}</div>
                </div>
            </div>             
        )
    }
}

const mapStateToProps = state => {
    return {
        posts: state.postList.posts
    }
}

export default connect(mapStateToProps, {fetchPosts})(PostList);
