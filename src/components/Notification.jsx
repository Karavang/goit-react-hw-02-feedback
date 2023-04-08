import React from 'react';

export const Notification = ({ message, good, neutral, bad }) => {
  return (
    <div
      className="flexator margin-top"
      style={{ display: good || neutral || bad ? 'none' : 'block' }}
    >
      {message}
    </div>
  );
};
