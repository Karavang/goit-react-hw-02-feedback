import { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics';
import { Notification } from './Notification';

class MyClicker extends Component {
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
        <ul className="flexator">
          <li>
            <button
              className="clickable"
              onClick={() => {
                this.setState(prevState => ({ good: prevState.good + 1 }));
              }}
            >
              Good
            </button>
          </li>
          <li>
            <button
              className="clickable"
              onClick={() => {
                this.setState(prevState => ({
                  neutral: prevState.neutral + 1,
                }));
              }}
            >
              Neutral
            </button>
          </li>
          <li>
            <button
              className="clickable"
              onClick={() => {
                this.setState(prevState => ({ bad: prevState.bad + 1 }));
              }}
            >
              Bad
            </button>
          </li>
        </ul>
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
// aboba
export default MyClicker;
