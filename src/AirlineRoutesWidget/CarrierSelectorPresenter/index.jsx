import React from 'react';
import { withRouter } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import { carriersShape } from '../api/propTypes';

const CarrierSelectorPresenter = ({ selected, carriers, selectAllCaption, history }) => (
  <div>
    <span> Select airline to filter schedule: </span>
    <DropdownButton
      bsStyle="primary"
      id="carrierSelector"
      title={selected}
      onSelect={(eventKey) => history.push(`/${eventKey !== 'all' ? eventKey : ''}`)}
    >
      <MenuItem key='all' eventKey='all'>{ selectAllCaption }</MenuItem>
      {
        Object.keys(carriers).map(carrierId => (
          <MenuItem key={carrierId} eventKey={carrierId}>
            {carriers[carrierId].name}
          </MenuItem>
        ))
      }
    </DropdownButton>
  </div>
);

CarrierSelectorPresenter.propTypes = {
  selected: React.PropTypes.string,
  carriers: carriersShape.isRequired,
  selectAllCaption: React.PropTypes.string,
};

CarrierSelectorPresenter.defaultProps = {
  selected: null,
  selectAllCaption: 'Reset Filter',
};

export default withRouter(CarrierSelectorPresenter);
