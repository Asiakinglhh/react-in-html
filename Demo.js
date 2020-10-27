'use strict';

const e = React.createElement;

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked this.';
    }
    
    return e("div", null, 
      React.createElement('h1', null, 'js引入'),
      React.createElement('button', { onClick: () => this.setState({ liked: true }) }, 'Like'),
    );
  }
}

// ReactDOM.render(e(Demo), document.querySelector('#root'));
ReactDOM.render(e(Demo), document.getElementById('root'));