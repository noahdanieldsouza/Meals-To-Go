import React from "react";
import { StyleSheet, Text } from "react-native";
import styled from "styled-components/native";
import {  Card,  } from 'react-native-paper';
//import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const RestaurantCard = styled(Card)`
  background-color: white;
`;

const RestaurantCardCover = styled(Card.Cover)`
  padding: 20px;
  background-color: white;
`;

const Title = styled(Text)`
  padding: 16px;
  color: red;
`;

export const RestaurantInfo = ({restaurant = {}}) => 
{
    const{
        name = "Some Restaurant",
        icon,
        photos = [
                  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
          
        address = "100 some random street",
        isOpenNow = "true or false" ,
        rating = "4",
        isClosedtemporaraly 
    }
    = restaurant;

    return(
        <RestaurantCard elevation = {5} >
    <RestaurantCardCover  source={{uri: photos[0] }} />
        <Title>{name}</Title>
  </RestaurantCard>
    )
}

