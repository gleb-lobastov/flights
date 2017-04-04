import React from 'react';
import FlightCard from './flightCard';
import './style.css';

const FlightsPresenter = ({ flights }) => (
  <div className="airlineRoutesWidget-flights">
    {
      Object.keys(flights).map(flightId => (
        <FlightCard key={flightId} flightData={flights[flightId]} />
      ))
    }
  </div>
);

export default FlightsPresenter;
