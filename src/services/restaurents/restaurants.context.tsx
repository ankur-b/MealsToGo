import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";
import { LocationContext } from "../location/location.context";
const numArr: any = [];
const isLoading: boolean = false;
const error: any = {};

export const RestaurantsContext = createContext({
  restaurants: numArr,
  isLoading: isLoading,
  error: error,
});

export const RestaurantsContextProvider = ({ children }: { children: any }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const retrieveRestaurants = (location: string) => {
    setIsLoading(true);
    setRestaurants([])
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform as any)
        .then((restaurants) => {
          setIsLoading(false);
          setRestaurants(restaurants as []);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      console.log(locationString)
      retrieveRestaurants(locationString);
    }
  }, [location]);

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
