import { FLIGHTS_LOADING, SET_FLIGHTS, SET_ERROR } from './actionTypes';

function normalize(flightsData) {
  const initial = { flights: {}, carriers: {} };

  return flightsData.flights.reduce((normalized, flightData) => {
    const carrier = flightData.carrier;
    normalized.flights[flightData.id] = flightData;

    if (!Object.prototype.hasOwnProperty.call(normalized.carriers, carrier)) {
      normalized.carriers[carrier] = {
        id: carrier,
        name: carrier,
        flights: flightsData
          .flights
          .filter(flightDataInner => flightDataInner.carrier === carrier)
          .map(flightDataInner => flightDataInner.id)
      };
    }

    return normalized;
  }, initial);
}

const initialState = {
  flights: {},
  carriers: {},
  isLoading: false,
  isReady: false,
  error: false,
};


export default function (state = initialState, action) {
  switch (action.type) {
    case FLIGHTS_LOADING:
      return { ...state, isLoading: action.isLoading, isReady: false, error: false };
    case SET_FLIGHTS:
      return { ...state, ...normalize(action.payload), isReady: true };
    case SET_ERROR:
      return { ...state, error: { message: action.message } };
    default:
      return state;
  }
}

export const getCarrierName = (state, carrierId) => {
  const carrier = state && state.carriers[carrierId];
  return carrier ? carrier.name : 'All airlines';
};

export const getCarriers = state => state.carriers;

export const getCarrierFlights = (state, carrierId) => {
  const carrier = state.carriers[carrierId];
  return carrier ? carrier.flights.reduce((flights, flightId) => {
    flights[flightId] = state.flights[flightId];
    return flights;
  }, {}) : state.flights;
};
