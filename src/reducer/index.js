export const reducer = (state = initialState, action) => {
  console.log(state);
  switch(action.type){
    case "ADD_FEATURE":
      console.log("add");
      const newStore = state.store.filter((feature) => feature.id != action.payload.id);
      return {...state, store: newStore, car: {features: [...state.car.features, action.payload]}}
    case "REMOVE_FEATURE":
      console.log("remove");
      return state
    default:
      return state
  }
}

const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: '2019 Ford Mustang',
    image:
      'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    features: []
  },
  store: [
    { id: 1, name: 'V-6 engine', price: 1500 },
    { id: 2, name: 'Racing detail package', price: 1500 },
    { id: 3, name: 'Premium sound system', price: 500 },
    { id: 4, name: 'Rear spoiler', price: 250 }
  ]
}