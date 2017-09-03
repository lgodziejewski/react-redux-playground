import React, { Component } from 'react';
import ContentView from '../../components/ContentView/ContentView';

export default class CommentsContainer extends Component {
  constructor(props) {
    super(props);

    this.mockData = [
      {
        "postId": 1,
        "id": 1,
        "name": "id labore ex et quam laborum",
        "email": "Eliseo@gardner.biz",
        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
      },
      {
        "postId": 1,
        "id": 2,
        "name": "quo vero reiciendis velit similique earum",
        "email": "Jayne_Kuhic@sydney.com",
        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
      },
      {
        "postId": 1,
        "id": 3,
        "name": "odio adipisci rerum aut animi",
        "email": "Nikita@garfield.biz",
        "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
      },
    ];

    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    const data = this.getFakeData().map(this.translateComment);

    this.setState({
      data
    });
  }

  getFakeData() {
    return this.mockData;
  }

  /**
   * Function used as a stream operator to translate incoming comment data to a 'data' entry in ContentView
   *
   * @param comment
   */
  translateComment(comment) {
    return {
      id: comment.id,
      title: comment.name,
      body: comment.body,
    }
  }

  render() {
    return (
      <ContentView
        data={this.state.data}
        title={'comments:'}
      />
    );
  }
}
