
export const removeFeature = item => {
  // dispatch an action here to remove an item
  return {
    type: "REMOVE_FEATURE",
    payload: item
  }
};

export const addFeature = item => {
  // dipsatch an action here to add an item
  return {
    type: "ADD_FEATURE",
    payload: item
  }
};