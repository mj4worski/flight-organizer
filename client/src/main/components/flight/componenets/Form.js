import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
    };
  }

  handleSubmit = (e) => {
    const { onClick } = this.props;
    e.preventDefault();
    onClick(this.state.from, this.state.to);
  };

  handleChangeFrom = (event) => {
    this.setState({ from: event.target.value });
  };

  handleChangeTo = (event) => {
    this.setState({ to: event.target.value });
  };

  render() {
    return (<div>
      <p>Find yours flights</p>
      <form onSubmit={this.handleSubmit}>
        <p>From: <input type="text" onChange={this.handleChangeFrom} /></p>
        <p>To : <input type="text" onChange={this.handleChangeTo} /></p>
        <button>Search flights</button>
      </form>
    </div>);
  }
}

Form.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Form;

