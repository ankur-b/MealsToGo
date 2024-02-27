import React, { useState, createContext, useEffect } from "react";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = createContext({isLoading:false,error:"",location:{ lat: "", lng: "" },search:(searchKeyword: string)=>{},keyword:""});

export const LocationContextProvider = ({ children }: { children: any }) => {
  const [keyword, setKeyword] = useState("san francisco");
  const [location, setLocation] = useState({ lat: "", lng: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSearch = (searchKeyword: string) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
    locationRequest(keyword)
      .then(locationTransform)
      .then((result) => {
        setIsLoading(false);
        setLocation(result);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error);
      });
  };


  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search:onSearch,
        keyword,
      }}
    >{children}</LocationContext.Provider>
  );
};
