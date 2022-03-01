import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { getGreetings } from '../redux/greetings/greeetings';

export default function Greetings() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGreetings());
  }, []);

  const greetings = useSelector((state) => state.greetingsReducer);

  return (
    <div>
      <h1>These greetings are from the API</h1>
      {greetings.map((greeting) => (
        <div key={greeting}>
          <h2>{greeting}</h2>
        </div>
      ))}
    </div>
  );
}

// Greetings.propTypes = {
//   greetings: PropTypes.string.isRequired,
// };
