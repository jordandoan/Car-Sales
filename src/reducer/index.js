export const reducer = (state = initialState, action) => {
  let newSet;
  let car;
  let newStore; 
  let newCar; 
  let newAddPrice;
  switch(action.type){
    case "ADD_FEATURE":
      newSet =state.cars.filter(car => car.id !== action.car.id);
      car = state.cars.find(car => car.id === action.car.id);
      newStore = car.store.filter((feature) => feature.id !== action.payload.id);
      newCar = {...car.car, features: [...car.car.features, action.payload]};
      newAddPrice = car.additionalPrice + action.payload.price;
      newSet.push({...car, additionalPrice: newAddPrice, car: newCar, store: newStore})
      return {...state, cars: newSet}
    case "REMOVE_FEATURE":
      newSet = state.cars.filter(car => car.id !== action.car.id);
      car = state.cars.find(car => car.id === action.car.id);
      newStore = [...car.store, action.payload];
      let newFeatures = car.car.features.filter(feature => feature.id !== action.payload.id);
      newCar = {...car.car, features: newFeatures};
      console.log(newCar);
      newAddPrice = car.additionalPrice - action.payload.price;
      newSet.push({...car, additionalPrice: newAddPrice, car: newCar, store: newStore})
      return {...state, cars: newSet}
    default:
      return state
  }
}

const initialState = {
  routes: [
    {
      id:'mustang', 
      car: {name: "2019 Ford Mustang",
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',}
    },
    {
      id: 'civic',
      car : {
        name: "1991 Honda Civic Wagon",
        image:
          'https://i.kinja-img.com/gawker-media/image/upload/s--0ccr6OQx--/c_scale,f_auto,fl_progressive,q_80,w_800/iimglm489telosap7dkb.jpg',
          features: []
      },
    },
  ],
  cars: [
    {
      id: 'mustang',
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
    },
    {
      id: 'civic',
      additionalPrice: 0,
      car : {
        price: 1000,
        name: "1991 Honda Civic Wagon",
        image:
          'https://i.kinja-img.com/gawker-media/image/upload/s--0ccr6OQx--/c_scale,f_auto,fl_progressive,q_80,w_800/iimglm489telosap7dkb.jpg',
          features: []
      },
          store: [
            { id: 1, name: 'Sunroof', price: 200 },
            { id: 2, name: 'Realtime 4 Wheel Drive', price: 1000 },
            { id: 3, name: 'Rear Speakers', price: 100 },
            { id: 4, name: 'Roof Rack', price: 300 },
            { id: 5, name: 'Rims', price: 500 },
      ]
    }
  ]
}