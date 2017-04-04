import React from 'react';
import moment from 'moment';

const FlightCard = ({ flightData: { direction: { from, to }, departure, arrival, carrier } }) => (
  <div className="airlineRoutesWidget-flights-card">
    <div className="airlineRoutesWidget-flights-card-carrier">Airline: { carrier }</div>
    <div className="airlineRoutesWidget-flights-card-details">
      <table>
        <tr>
          <th>{ from }</th>
          <th>&nbsp;–&nbsp;</th>
          <th>{ to }</th>
        </tr>
        <tr>
          <th>{ moment(departure).format('LLL') }</th>
          <th>&nbsp;–&nbsp;</th>
          <th>{ moment(arrival).format('LLL') }</th>
        </tr>
        <tr>
          <th>departure</th>
          <th />
          <th>arrival</th>
        </tr>
      </table>
    </div>
  </div>
);

export default FlightCard;
