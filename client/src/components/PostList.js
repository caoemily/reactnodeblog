import React, {Component} from 'react';
import './partials/header.css';
import PostItem from './PostItem';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostList extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList(){
        return this.props.posts.map((post, i) => {
            return (<PostItem data={post} />)
        });
        // return (

        //     <div className='ui container'>
        //         <div class="ui main text container">
        //             <div className="ui huge header">Blog Site</div>
        //             <ul>
        //                 <li>
        //                     <PostItem id="1" title="test1" image="https://www.gstatic.com/webp/gallery/1.jpg" time={Date.now()} description="test1 description" />
        //                 </li>
        //                 <li>
        //                     <PostItem id="2" title="test2" image="https://www.gstatic.com/webp/gallery/2.jpg" time={Date.now()} description="test2 description" />
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // )
    }

    render() {
        return (
            <div className='ui container'>
                <div class="ui main text container">
                    <div className="ui huge header">Blog Site</div>
                    <div>{(this.props.posts.length > 0) ? <ul>{this.renderList()}</ul> : <div>Sorry we have no posts</div>}</div>
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
