import PropTypes from 'prop-types';

export function Statistics({ good, bad, neutral, total }) {
  return (
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
      <p className="pfb">Positive feedback: {total}%</p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};
