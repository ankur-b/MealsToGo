import React, { Key } from "react";
import { Text, StyleSheet, ImageURISource, Image, View } from "react-native";
import { Card } from "react-native-paper";
import { theme } from "../../../utils";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantInfo = ({ restaurant }: { restaurant: restaurant }) => {
  const ratingArray = Array.from(new Array(Math.floor(restaurant.rating)));
  return (
    <View style={styles.bg}>
      <Card style={styles.card}>
        <Card.Cover
          key={restaurant.name as Key}
          style={styles.cover}
          source={{ uri: restaurant.photos[0] as string }}
        />
        <View style={styles.Info}>
          <Text style={styles.title}>{restaurant.name}</Text>
          <View style={styles.Section}>
            <View style={styles.rating}>
              {ratingArray.map((index) => (
                <SvgXml key={index} xml={star} width={20} height={20}></SvgXml>
              ))}
            </View>
            <View style={styles.SectionEnd}>
              {restaurant.isClosedTemporarily && (
                <Text style={{ color: "red" }}>CLOSED TEMPORARILY</Text>
              )}
              {restaurant.isOpenNow && (
                <SvgXml xml={open} width={20} height={20} />
              )}
              <Image
                style={{ width: 15, height: 15 }}
                source={{ uri: restaurant.icon as string }}
              />
            </View>
          </View>
          <Text style={styles.address}>{restaurant.address}</Text>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: { padding: theme.space[2] },
  card: {
    backgroundColor: theme.colors.bg.primary,
    marginBottom: 10,
  },
  cover: { padding: theme.space[3], backgroundColor: theme.colors.bg.primary },
  title: {
    color: theme.colors.ui.primary,
    fontFamily: theme.fonts.heading,
    fontSize: theme.fontSizes.h5,
  },
  Info: {
    padding: theme.space[3],
  },
  address: {
    color: theme.colors.ui.primary,
    fontFamily: theme.fonts.body,
    fontSize: theme.fontSizes.body,
  },
  rating: {
    flexDirection: "row",
    paddingVertical: theme.space[2],
  },
  Section: {
    flexDirection: "row",
    alignItems: "center",
  },
  SectionEnd: { marginLeft:50,flex: 1, flexDirection: "row", justifyContent: "space-around" },
});

type restaurant = {
  name: string;
  icon: ImageURISource;
  photos: ImageURISource[];
  address: String;
  isOpenNow: boolean;
  rating: number;
  isClosedTemporarily: boolean;
};
export default RestaurantInfo;
