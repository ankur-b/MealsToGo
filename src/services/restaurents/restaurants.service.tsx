import { mockImages, mocks } from "./mock";
import camelize from 'camelize'
export const restaurantsRequest = (location:any) => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};

export const restaurantsTransform = ({ results}:{results:[]}) => {
  const mappedResults = results.map((restaurant:any) => {
    restaurant.photos = restaurant.photos.map((p:any)=>{
      return mockImages[Math.ceil(Math.random() * (mockImages.length -1))]
    })
    return {
      ...restaurant,
      address:restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });

  return camelize(mappedResults);
};

