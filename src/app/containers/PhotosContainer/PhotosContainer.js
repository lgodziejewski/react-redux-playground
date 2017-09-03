import React, { Component } from 'react';
import ContentView from '../../components/ContentView/ContentView';

export default class PhotosContainer extends Component {
  constructor(props) {
    super(props);

    this.mockData = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "http://placehold.it/600/92c952",
        "thumbnailUrl": "http://placehold.it/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "http://placehold.it/600/771796",
        "thumbnailUrl": "http://placehold.it/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "http://placehold.it/600/24f355",
        "thumbnailUrl": "http://placehold.it/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "http://placehold.it/600/d32776",
        "thumbnailUrl": "http://placehold.it/150/d32776"
      },
    ];

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const data = this.getFakeData().map(this.translatePhoto);

    this.setState({
      data,
    });
  }

  getFakeData() {
    return this.mockData;
  }

  translatePhoto(photo) {
    return {
      id: photo.id,
      title: photo.title,
      body: photo.url,
    }
  }

  render() {
    return (
      <ContentView
        data={this.state.data}
        title={'Photos:'}
      />
    );
  }
}
