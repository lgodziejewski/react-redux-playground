import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from './Posts.actions';

import ContentView from '../../components/ContentView/ContentView';

class PostsContainer extends Component {
  componentDidMount() {
    // load data on init
    if (!this.props.data.length)
      this.props.fetchPosts();
  }

  render() {
    return (
      <ContentView
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    data: state.posts,
    loading: state.postsLoading,
    error: state.postsError,
    title: 'Posts:',
  };
};

const mapDispatchToProps = {
  fetchPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
