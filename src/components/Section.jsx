import { Component } from 'react';
import PropTypes from 'prop-types';
import { FeedbackOptions } from './FeedbackOptions';

export default class Section extends Component {
  render() {
    return (
      <div>
        <div className="title">Please, leave feedback</div>
        <FeedbackOptions
          good={this.props.good}
          bad={this.props.bad}
          neutral={this.props.neutral}
          handleButtonClick={this.props.handleButtonClick}
        />
      </div>
    );
  }
}
Section.propTypes = {
  state: PropTypes.object.isRequired,
};
