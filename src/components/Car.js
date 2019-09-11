import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import AddedFeatures from './AddedFeatures';
import AdditionalFeatures from './AdditionalFeatures';
import Total from './Total';

const Car = (props) => {
  let id = props.match.params.id;
  let state = props.cars.find(car => car.id === id);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures obj={state} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures obj={state} store={state.store} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    cars: state.cars
  }
}
export default connect(mapStateToProps, {})(Car);