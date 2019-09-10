import { isTemplateElement } from "@babel/types";

export const reducer = (state = initialState, action) => {
  let newStore; 
  let newCar; 
  let newAddPrice;
  switch(action.type){
    case "ADD_FEATURE":
      newStore = state.store.filter((feature) => feature.id != action.payload.id);
      newCar = {...state.car, features: [...state.car.features, action.payload]};
      newAddPrice = state.additionalPrice + action.payload.price;
      return {...state, additionalPrice: newAddPrice, car: newCar, store: newStore}
    case "REMOVE_FEATURE":
      newStore = [...state.store, action.payload];
      let newFeatures = state.car.features.filter(feature => feature.id != action.payload.id);
      newCar = {...state.car, features: newFeatures};
      newAddPrice = state.additionalPrice - action.payload.price;
      return {...state, additionalPrice: newAddPrice, car: newCar, store: newStore}
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