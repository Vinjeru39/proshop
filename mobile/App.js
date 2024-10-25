import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Platform } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";

import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <HomeScreen />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 30 : 0, //we could use an api to add the extra space though
    paddingLeft: 15,
    flex: 1,
    backgroundColor: "#fff",
  },
});
