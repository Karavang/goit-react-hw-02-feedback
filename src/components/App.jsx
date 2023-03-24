import { Component } from 'react';
import PropTypes from 'prop-types';

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
        <div style={{ display: good || neutral || bad ? 'block' : 'none' }}>
          <div className="title">Statistics:</div>
          <ul className="flexator">
            <li>
              <p>Good: {good}</p>
            </li>
            <li>
              <p>Neutral: {neutral}</p>
            </li>
            <li>
              <p>Bad: {bad}</p>
            </li>
          </ul>
          <p className="pfb">Positive feedback: {pfb}%</p>
        </div>
      </div>
    );
  }
}
MyClicker.propTypes = {
  state: PropTypes.object.isRequired,
};
// aboba
export default MyClicker;
