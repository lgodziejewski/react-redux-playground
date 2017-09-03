import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPhotos, setPage, setPageLength } from './Photos.actions';

import TableView from '../../components/TableView/TableView';

class PhotosContainer extends Component {

  componentDidMount() {
    if (!this.props.data.length)
      this.props.fetchPhotos();
  }

  render() {
    return (
      <TableView
        {...this.props}
      />
    );
  }
}

const mapStateToProps = state => {
  const page = state.photosPage;
  const pageLength  = state.photosPageLength;
  let data = state.photos;
  const entriesLength = data.length;

  const totalPages = Math.ceil(entriesLength / pageLength);

  // split data into pages
  data = data.slice(page * pageLength, (page + 1) * pageLength);

  return {
    data,
    loading: state.photosLoading,
    error: state.photosError,
    page,
    pageLength,
    totalPages,
    title: 'Photos:',
  };
};

const mapDispatchToProps = {
  fetchPhotos,
  setPageLength,
  setPage,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotosContainer);
