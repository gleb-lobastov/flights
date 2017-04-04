import React from 'react';

export const carrierRaw = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
};

export const carrierShape = React.PropTypes.shape(carrierRaw);
export const carriersShape = React.PropTypes.objectOf(carrierShape);
