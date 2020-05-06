import React, { Component } from 'react';

import Text from './components/Text'

export default class App extends Component {

  state = {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi dolorum alias delectus laudantium architecto esse itaque obcaecati in quos velit? Ipsam rerum totam accusantium est repellendus tenetur, perferendis sit voluptatem?'
  }


  render() {

    return (
      <div className="App">
        <Text text={this.state.text} />
      </div>
    );
  };
};

