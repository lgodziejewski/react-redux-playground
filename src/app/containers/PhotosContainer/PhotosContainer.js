import React, { Component } from 'react';
import ContentView from '../../components/ContentView/ContentView';
import { connect } from 'react-redux';
import { getPhotos } from './Photos.actions';

class PhotosContainer extends Component {

  componentDidMount() {
    if (!this.props.data.length)
      this.props.getPhotos();
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
    data: state.photos,
    title: 'Photos:',
  };
};

const mapDispatchToProps = {
  getPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
