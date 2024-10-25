// App.js
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from "react-native";

import Product from "../components/Product";

import { useGetProductsQuery } from "../slices/productsApiSlice";

const images = [
  require("../../assets/images/airpods.jpg"),
  require("../../assets/images/alexa.jpg"),
  require("../../assets/images/camera.jpg"),
  require("../../assets/images/mouse.jpg"),
  require("../../assets/images/phone.jpg"),
  require("../../assets/images/playstation.jpg"),
];

const App = () => {
  const { data, isLoading, error } = useGetProductsQuery();
  return (
    <>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text> There is an error man</Text>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Latest Products</Text>
          <FlatList
            data={data}
            keyExtractor={(product) => product._id.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.productContainer}>
                <Product product={item} image={images[index]} />
              </View>
            )}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  productContainer: {
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
});

export default App;
