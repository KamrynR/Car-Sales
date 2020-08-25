import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/index';

const AdditionalFeature = props => {
  console.log(props);
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button 
        className="button" 
        onClick={() => props.addFeature(props.feature)}
        >
          X
      </button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapDispatchToProps = {addFeature};

export default connect(null, mapDispatchToProps)(AdditionalFeature);