import React, {Component} from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import PostList from './components/PostList';
import AddPost from './components/AddPost';
import ShowPost from './components/ShowPost';
import EditPost from './components/EditPost';
import Header from './components/Header';

class App extends Component {
    render() {
        return ( 
          <Provider store={store}>
            <BrowserRouter>
              <Header>
                <Route exact path="/" component={PostList}/>
                <Route exact path="/new" component={AddPost}/>
                <Route exact path="/posts/:id" component={ShowPost}/>
                <Route path="/posts/:id/edit" component={EditPost} />
              </Header>
            </BrowserRouter>
          </Provider>
        );
    }
}

export default App;

