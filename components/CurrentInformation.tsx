import { View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import GeneranInformationCard from "./GeneralInforamtion";
import {
  humidityIcon,
  posibilityIcon,
  precipitationIcon,
  pressureIcon,
  temparatureIcon,
  uvIcon,
  windgustIcon,
  windspeedIcon,
} from "../assets/icons";
import React from "react";

function CurrentInformation({
  temp,
  humidity,
  windgust,
  windspeed,
  winddir,
  cloudcover,
  uvindex,
  solarradiation,
  pressure,
  conditions,
  precipprob,
  precip,
}) {
  return (
    <View style={tw` h-6/12`}>
      <ScrollView style={tw`px-2 `}>
        <GeneranInformationCard
          heading={"Temperature"}
          imageSource={temparatureIcon}
          data={`${temp} °F / ${(((temp - 32) * 5) / 9).toFixed(1)} °c`}
        />
        <GeneranInformationCard
          heading={"Humidity"}
          imageSource={humidityIcon}
          data={humidity}
        />
        <View style={tw`flex flex-row justify-between`}>
          <GeneranInformationCard
            heading={"Windgust"}
            data={`${windgust} mi/h`}
            imageSource={windgustIcon}
          />
          <GeneranInformationCard
            heading={"Windspeed"}
            data={`${windspeed} mi/h`}
            imageSource={windspeedIcon}
          />
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <GeneranInformationCard
            heading={"Wind Direction"}
            data={`${winddir} °`}
            imageSource={windgustIcon}
          />
          <GeneranInformationCard
            heading={"Pressure"}
            data={`${pressure} hPa`}
            imageSource={pressureIcon}
          />
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <GeneranInformationCard
            heading={"Cloud Cover:"}
            data={`${cloudcover} %`}
            imageSource={windgustIcon}
          />
          <GeneranInformationCard
            heading={"Solar Radiation"}
            data={`${solarradiation}`}
            imageSource={windspeedIcon}
          />
        </View>
        <View style={tw`flex flex-row justify-between`}>
          <GeneranInformationCard
            heading={"UV Index"}
            data={`${uvindex}`}
            imageSource={uvIcon}
          />
        </View>
        <View>
          <GeneranInformationCard
            heading={"Conditions"}
            data={`${conditions}`}
            imageSource={windspeedIcon}
          />
          <GeneranInformationCard
            heading={"Precipitation"}
            data={`${precip} inc/1day`}
            imageSource={precipitationIcon}
          />
          <GeneranInformationCard
            heading={"Precipitation Probability"}
            data={`${precipprob} %`}
            imageSource={posibilityIcon}
          />
        </View>
      </ScrollView>
    </View>
  );
}

export default CurrentInformation;
