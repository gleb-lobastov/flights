import { FLIGHTS_LOADING, SET_FLIGHTS, SET_ERROR } from './actionTypes';

function flightsIsLoading(loadingState) {
  return {
    type: FLIGHTS_LOADING,
    isLoading: loadingState,
  }
}

function setFlights(flights_data) {
  return {
    type: SET_FLIGHTS,
    payload: flights_data
  }
}

function setError(message, stack) {
  console.log(stack);
  return {
    type: SET_ERROR,
    message: message
  }
}

export function fetchFlightsData() {
  return (dispatch) => {
    dispatch(flightsIsLoading(true));
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(flightsIsLoading(false));
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(setFlights(items)))
      .catch((error) => dispatch(setError(error.message, error.stack)));
  };
}
