import React from "react";
import { StyleSheet, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapComponent = ({ latitude, longitude }) => {
  //   const latitude = 23.8103; // Example latitude (Dhaka, Bangladesh)
  //   const longitude = 90.4125; // Example longitude (Dhaka, Bangladesh)

  return (
    <View style={styles.container}>
      <MapView
        region={{
          latitude: latitude ? latitude : 23.8103,
          longitude: longitude ? longitude : 90.4125,
          latitudeDelta: 0.05, // Zoom level vertically
          longitudeDelta: 0.05, // Zoom level horizontally
        }}
        // onRegionChangeComplete={}
        style={styles.map}
        initialRegion={{
          latitude: latitude ? latitude : 23.8103,
          longitude: longitude ? longitude : 90.4125,
          latitudeDelta: 0.05, // Zoom level vertically
          longitudeDelta: 0.05, // Zoom level horizontally
        }}
      >
        <Marker
          coordinate={{
            latitude: latitude ? latitude : 23.8103,
            longitude: longitude ? longitude : 90.4125,
          }}
          title="My Location"
          description="This is where I am"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default MapComponent;
