import React, { useContext } from "react";
import { ImageURISource, StyleSheet, FlatList, View } from "react-native";
import RestaurantInfo from "../components/restaurant-info.component";
import { theme } from "../../../utils";
import { RestaurantsContext } from "../../../services/restaurents/restaurants.context";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { Search } from "../components/search.component";

const RestaurantsScreen = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={{ position: "absolute", top: "50%", left: "50%" }}>
          <ActivityIndicator
            size={50}
            style={{marginLeft:-25}}
            animating={true}
            color={MD2Colors.blue300}
          />
        </View>
      )}
      <Search/>
      <View style={styles.list}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => {
            return (
              <RestaurantInfo
                key={item.name}
                restaurant={{
                  name: item.name,
                  icon: item.icon as ImageURISource,
                  address: item.address,
                  photos: item.photos,
                  isOpenNow: item.isOpenNow,
                  rating: item.rating,
                  isClosedTemporarily: item.isClosedTemporarily,
                }}
              />
            );
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
