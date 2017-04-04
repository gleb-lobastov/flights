import React from 'react';
import { connect } from 'react-redux';
import { fetchFlightsData } from './api/actionCreators';
import { getCarrierName, getCarriers, getCarrierFlights } from './api/reducers';
import ErrorPresenter from '../ErrorPresenter';
import CarrierSelectorPresenter from './CarrierSelectorPresenter';
import FlightsPresenter from './FlightsPresenter';
import './style.css';

const ALL_CARRIERS = getCarrierName();
class AirlineRoutesWidget extends React.Component {
  constructor(props) {
    super(props);
    props.loadFlights();
  }

  render() {
    if (this.props.error) {
      return (
        <ErrorPresenter message={this.props.error.message} />
      )
    }
    return (
      <div className="airlineRoutesWidget-index-box">
        { this.props.isLoading ? (<div> loading... </div>) : '' }
        { this.props.isReady ? (
          <div>
            <CarrierSelectorPresenter
              selected={ this.props.selectedCarrierName }
              carriers={ this.props.carriers }
              selectAllCaption={ ALL_CARRIERS }
            />
            <FlightsPresenter
              flights={ this.props.flights }
            />
          </div>
        ) : ''}
      </div>
    )
  }
}

const mapStateToProps = (state, { match: { params: { carrierId } } }) => ({
  flights: getCarrierFlights(state, carrierId),
  carriers: getCarriers(state),
  selectedCarrierName: getCarrierName(state, carrierId),
  isLoading: state.isLoading,
  isReady: state.isReady,
  error: state.error,
});

export default connect(
  mapStateToProps,
  {loadFlights: fetchFlightsData}
)(AirlineRoutesWidget);
