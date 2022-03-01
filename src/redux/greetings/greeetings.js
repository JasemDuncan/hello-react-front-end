import axios from 'axios';

const GET_GREETINGS = 'greetins/greeetings/GET_GREETINGS';
const url = 'http://localhost:3000/api/v1/greetings';

const initialState = [];

export const getGreetings = () => async (dispatch) => {
  const result = await axios.get(url);
  const greetings = result.data;
  const allGreetings = Object.entries(greetings);
  const fetchedGreetings = [];
  fetchedGreetings.push(allGreetings[0][1].message);

  dispatch({
    type: GET_GREETINGS,
    fetchedGreetings,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GREETINGS:
      return [...action.fetchedGreetings];
    default:
      return state;
  }
};

export default reducer;
