import './App.css';
import React from 'react';

class App extends React.Component {

  state: { isToggleOn: boolean; };

  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {isToggleOn: true};
  }

  handleClick = () => {
    this.setState({isToggleOn: !this.state.isToggleOn});
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'HELLO' : 'WORLD'}
      </button>
    );
  }
}

export default App;
