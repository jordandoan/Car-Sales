import React from 'react';
import { connect } from 'react-redux'
const TestComponent = (state) => {
  return (
    <h1>Im a compoennt {state.title}</h1>
  )
}

const mapStatetoProps = state => {
  return (
    {
      title: state.title
    }
  )
}
export default connect(mapStatetoProps, {})(TestComponent);