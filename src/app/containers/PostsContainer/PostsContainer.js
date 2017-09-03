import React, { Component } from 'react';
import ContentView from '../../components/ContentView/ContentView';

export default class PostsContainer extends Component {
  constructor(props) {
    super(props);

    this.mockData = [
      {
        id: 0,
        title: 'Foo bar',
        body: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 1,
        title: 'Foo title other',
        body: 'Nobody reads me anymore',
      },
      {
        id: 2,
        title: 'Rick Astley',
        body: 'Never gonna give you up, never gonna let you down',
      }
    ];

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const data = this.getFakeData();

    this.setState({
      data,
    });
  }

  getFakeData() {
    return this.mockData;
  }

  render() {
    return (
      <ContentView
        data={this.state.data}
        title={'Posts:'}
      />
    );
  }
}
