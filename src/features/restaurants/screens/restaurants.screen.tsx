import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import { ImageURISource, StyleSheet, FlatList, View } from "react-native";
import RestaurantInfo from "../components/restaurant-info.component";
import { theme } from "../../../utils";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
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
          data={[
            { name: 1 },
            { name: 2 },
            { name: 3 },
            { name: 4 },
            { name: 5 },
            { name: 6 },
            { name: 7 },
          ]}
          renderItem={() => (
            <RestaurantInfo
              restaurant={{
                name: "Some Restaurant",
                icon: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png" as ImageURISource,
                address: "100 some random street",
                photos: [
                  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg" as ImageURISource,
                ],
                isOpenNow: true,
                rating: 4,
                isClosedTemporarily: true,
              }}
            />
          )}
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
    marginBottom:20,
  },
  search: {
    padding: theme.space[3],
  },
  list: {
    flex:1,
    padding: theme.space[3],
  },
});
