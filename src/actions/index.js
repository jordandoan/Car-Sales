
export const removeFeature = (item, car) => {
  // dispatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: item,
    car: car,
  }
};

export const addFeature = (item, car) => {
  // dipsatch an action here to add an item
  return {
    type: "ADD_FEATURE",
    payload: item,
    car: car,
  }
};