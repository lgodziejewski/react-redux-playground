import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getPosts } from './Posts.actions';

import ContentView from '../../components/ContentView/ContentView';

class PostsContainer extends Component {
  componentDidMount() {
    // load data on init
    if (!this.props.data.length)
      this.props.getData();
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
    title: 'Posts:',
  };
};

const mapDispatchToProps = {
  getData: getPosts,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
