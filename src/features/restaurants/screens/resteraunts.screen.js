import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import styled from "styled-components/native";
import { RestaurantInfo } from "../components/restaurant-info.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `marginTop: ${StatusBar.currentHeight}px`}; 
`;
const SearchContainer = styled(View)`
  padding: 16px; 
`;
const RestaurantList = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: blue;
`;


export const RestaurantsScreen = () => (
  <SafeArea style={styles.container}>
    <SearchContainer style={styles.search}>
      <Searchbar />
    </SearchContainer>
    <RestaurantList style={styles.list}>
      <RestaurantInfo />
    </RestaurantList>
  </SafeArea>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});



