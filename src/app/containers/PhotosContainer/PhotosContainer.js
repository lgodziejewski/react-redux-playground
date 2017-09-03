import React, { Component } from 'react';
import ContentView from '../../components/ContentView/ContentView';
import { connect } from 'react-redux';
import { fetchPhotos } from './Photos.actions';

class PhotosContainer extends Component {

  componentDidMount() {
    if (!this.props.data.length)
      this.props.fetchPhotos();
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
    data: state.photos.slice(0, 50),
    loading: state.photosLoading,
    error: state.photosError,
    title: 'Photos:',
  };
};

const mapDispatchToProps = {
  fetchPhotos,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
