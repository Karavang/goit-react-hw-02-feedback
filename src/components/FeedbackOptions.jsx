import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FeedbackOptions extends Component {
  render() {
    return (
      <ul className="flexator">
        <li>
          <button
            className="clickable"
            onClick={() => this.props.handleButtonClick('good')}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className="clickable"
            onClick={() => this.props.handleButtonClick('neutral')}
          >
            Neutral
          </button>
        </li>
        <li>
          <button
            className="clickable"
            onClick={() => this.props.handleButtonClick('bad')}
          >
            Bad
          </button>
        </li>
      </ul>
    );
  }
}

FeedbackOptions.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
