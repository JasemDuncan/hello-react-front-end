import React from 'react';
import PropTypes from 'prop-types';

export default function Greetings(props) {
  const { greetings } = props;
  return (
    <div>
      <h1>These greetings are from the API</h1>
      {greetings.map((greeting) => (
        <div key={greeting.message}>
          <h2>{greeting.message}</h2>
        </div>
      ))}
    </div>
  );
}

Greetings.propTypes = {
  greetings: PropTypes.string.isRequired,
};
