import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from './Comments.actions';

import ContentView from '../../components/ContentView/ContentView';

class CommentsContainer extends Component {
  componentDidMount() {

    // required to obtain data on init, don't dispatch if data already present
    if (!this.props.data.length)
      this.props.fetchComments();
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
    data: state.comments,
    loading: state.commentsLoading,
    error: state.commentsError,
    title: 'Comments:',
  };
};

const mapDispatchToProps = {
  fetchComments,
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
