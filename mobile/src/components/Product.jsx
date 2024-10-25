import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Product = ({ product, image }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>{product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 3,
    marginVertical: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "green",
  },
});

export default Product;
