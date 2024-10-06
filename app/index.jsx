import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  Button,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import tw from "twrnc";
import axios from "axios";
import MapView from "react-native-maps";
import MapComponent from "./Map";
import GeneranInformationCard from "../components/GeneralInforamtion";
import sunrise from "../assets/sunrise.png";
import sunset from "../assets/sunset.png";
import pointLocation from "../assets/location.gif";
import {
  humidityIcon,
  locationNotFound,
  temparatureIcon,
  windgustIcon,
  windspeedIcon,
} from "../assets/icons";
import CurrentInformation from "../components/CurrentInformation";
import WeatherByDate from "../components/WeatherByDate";

const Index = () => {
  const [location, setLocation] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const handleWeather = () => {
    if (location.length < 1) {
      return alert("Please input locatin");
    }
    setIsLoading(true);
    axios
      .get(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=TA43E5Q7GGS9MUUJA8FMRPKMT`
      )
      .then(({ data }) => {
        setWeather(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setWeather(null);
        setIsLoading(false);
        setError(true);
        alert("No location found");
      });
  };

  

  return (
    <KeyboardAvoidingView
      behavior={
        Platform.OS === "ios" || Platform.OS === "android"
          ? "padding"
          : "height"
      }
      style={tw`flex-grow `}
    >
      <View style={tw`h-full `}>
        {/* Input Field */}
        <View style={tw` p-5 h-[230px]  `}>
          <TextInput
            onChangeText={setLocation}
            style={tw`text-base font-medium  border border-red-50 p-3 border-blue-400 rounded-md`}
            placeholder="Enter your Location"
          />
          <View>
            <TouchableOpacity
              onPress={handleWeather}
              style={tw`bg-blue-400 py-2 rounded-full mt-5`}
            >
              <Text style={tw`text-center text-lg text-white `}>Search</Text>
            </TouchableOpacity>
          </View>
          {weather && (
            <View style={tw`mt-2 flex flex-row justify-between`}>
              <View>
                <GeneranInformationCard
                  heading={"Address"}
                  imageSource={pointLocation}
                  data={weather?.address}
                />
                <GeneranInformationCard
                  heading={"Sunrise"}
                  imageSource={sunrise}
                  data={weather?.currentConditions?.sunrise}
                />
                <GeneranInformationCard
                  heading={"Sunset"}
                  imageSource={sunset}
                  data={weather?.currentConditions?.sunset}
                />
              </View>
              <View>
                <GeneranInformationCard
                  heading={"longitude"}
                  data={weather?.longitude}
                />
                <GeneranInformationCard
                  heading={"latitude"}
                  data={weather?.latitude}
                />
              </View>
            </View>
          )}
        </View>

        {/* Current Information */}
        {weather ? (
          <View style={tw`flex-1 flex flex-col  px-3 `}>
            {isLoading ? (
              <ActivityIndicator size={"large"} />
            ) : (
              weather && (
                <View style={tw`h-full `}>
                  <CurrentInformation {...weather?.currentConditions} />
                  <WeatherByDate days={weather.days} />
                </View>
              )
            )}
          </View>
        ) : (
          <View style={tw`flex-1 flex items-center flex-col`}>
            <Image source={locationNotFound} style={tw`w-40 h-40`} />
            <Text style={tw`font-bold text-2xl text-red-500`}>
              Location not found.
            </Text>
          </View>
        )}

        {/*<View style={tw`flex-2 `}>*/}
        {/*  {weather && (*/}
        {/*    <MapComponent*/}
        {/*      latitude={weather?.latitude}*/}
        {/*      longitude={weather?.longitude}*/}
        {/*    />*/}
        {/*  )}*/}
        {/*</View>*/}
      </View>
    </KeyboardAvoidingView>
  );
};
export default Index;
