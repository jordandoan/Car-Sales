import React from 'react';
import { connect } from 'react-redux';

const Cars = (props) => {
  console.log(props);
  const handleClick = (car) => {
    props.history.push(`/${car.id}`)
  }
  return (
    <div className="boxes">
      {props.routes.map(car => (
        <div key={car.car.id} className="box car" onClick={() => handleClick(car)}>
          <h2>{car.car.name}</h2>
          <img className="preview" src={car.car.image} alt={car.car.name} />
        </div>
      ))}
    </div>
  )
}


const mapStateToProps = state => {
  return {
    cars: state.cars,
    routes: state.routes
  }
}
export default connect(mapStateToProps, {})(Cars);