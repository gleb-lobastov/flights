import React from 'react';
import './style.css';

const ErrorPresenter = props => (
  <div className="errorPresenter-box">
    <div className="errorPresenter-boxCaption">
      Some error occurred during the data loading ☹
    </div>
    <div className="errorPresenter-box-body">{ props.message }</div>
    <div className="errorPresenter-box-body">
      Please, try to reload page.
      If error is not gone you can call to our contact center +7 495 646-83-62
    </div>
  </div>
);

ErrorPresenter.propTypes = {
  message: React.PropTypes.string.isRequired,
};

export default ErrorPresenter;
