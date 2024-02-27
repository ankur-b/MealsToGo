import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";
import { theme } from "../../../utils";
import { LocationContext } from "../../../services/location/location.context";

export const Search = () => {
  const locationContext = useContext(LocationContext) 
  const [searchQuery, setSearchQuery] = useState("san francisco");
  useEffect(()=>{
    locationContext.search(searchQuery)
  },[searchQuery])
  return (
    <View style={styles.search}>
      <Searchbar
        placeholder="Search fpr a location"
        value={searchQuery}
        onSubmitEditing={()=>{
            locationContext.search(searchQuery)
        }}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    padding: theme.space[3],
  }
});
