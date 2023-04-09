import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { Notification } from './Notification';
import { FeedbackOptions } from './FeedbackOptions';

export default class Section extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    const { good, neutral, bad } = this.state;
    const pfb =
      good + neutral + bad > 0
        ? ((good / (good + neutral + bad)) * 100).toFixed(2)
        : 0;

    return (
      <div>
        <FeedbackOptions
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
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
Section.propTypes = {
  state: PropTypes.object.isRequired,
};
