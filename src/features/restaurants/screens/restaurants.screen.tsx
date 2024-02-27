import React, { useState,useContext } from "react";
import { Searchbar } from "react-native-paper";
import { ImageURISource, StyleSheet, FlatList, View } from "react-native";
import RestaurantInfo from "../components/restaurant-info.component";
import { theme } from "../../../utils";
import { RestaurantsContext } from "../../../services/restaurents/restaurants.context";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const {restaurants,isLoading,error} = useContext(RestaurantsContext)
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          data={restaurants}
          renderItem={({item}) => {
            return <RestaurantInfo
            key={item.name}
              restaurant={{
                name: item.name,
                icon: item.icon as ImageURISource,
                address: "100 some random street",
                photos: item.photos,
                isOpenNow: item.isOpenNow,
                rating: item.rating,
                isClosedTemporarily: item.isClosedTemporarily,
              }}
            />
          }}
          contentContainerStyle={{
            marginBottom: 20,
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default RestaurantsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    marginBottom: 20,
  },
  search: {
    padding: theme.space[3],
  },
  list: {
    flex: 1,
    padding: theme.space[3],
  },
});
