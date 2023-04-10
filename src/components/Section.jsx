import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';

export default class Section extends Component {
  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  render() {
    console.log(this.state.good);
    return (
      <div>
        <div className="title">Please, leave feedback</div>
        <FeedbackOptions
          good={this.state.good}
          bad={this.state.bad}
          neutral={this.state.neutral}
          handleButtonClick={this.props.handleButtonClick}
        />
      </div>
    );
  }
}
Section.propTypes = {
  state: PropTypes.object.isRequired,
};
