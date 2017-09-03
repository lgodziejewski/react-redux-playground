import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getData } from './Comments.actions';

import ContentView from '../../components/ContentView/ContentView';

class CommentsContainerInner extends Component {
  componentDidMount() {

    // required to obtain data on init, don't dispatch if data already present
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
    data: state.comments,
    title: 'Comments:',
  }
};

const mapDispatchToProps = {
  getData,
};

const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsContainerInner);

export default CommentsContainer;
