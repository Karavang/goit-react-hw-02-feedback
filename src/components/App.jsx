import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Notification } from './Notification';
import Section from './Section';
import { Statistics } from './Statistics';

export default class MyClicker extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleButtonClick = type => {
    this.setState(prevState => {
      const newState = { ...prevState };
      newState[type] = prevState[type] + 1;
      return newState;
    });
  };
  render() {
    const { good, neutral, bad } = this.state;
    const pfb =
      good + neutral + bad > 0
        ? ((good / (good + neutral + bad)) * 100).toFixed(2)
        : 0;

    return (
      <div>
        <Section
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          handleButtonClick={this.handleButtonClick}
        />
        <Notification
          message={'There is no feedback'}
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={pfb}
        />
      </div>
    );
  }
}
MyClicker.propTypes = {
  state: PropTypes.object.isRequired,
};
