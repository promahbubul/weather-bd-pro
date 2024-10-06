import React from "react";
import { View, Text, FlatList } from "react-native";
import tw from "twrnc";

const WeatherByDate = ({ days }) => {
  return (
    <View style={tw`h-6/12`}>
      {/*Heading*/}
      <View
        style={tw`mx-2 border-b border-b-blue-500 py-1 px-5 flex flex-row justify-between mb-2 `}
      >
        <Text style={tw`font-semibold text-sm`}>Date</Text>
        <Text style={tw`font-semibold text-sm`}>Conditions</Text>
      </View>

      {/*Data*/}
      <FlatList
        keyExtractor={(item) => item.datetime}
        data={days}
        renderItem={({ item }) => (
          <View
            style={tw`px-5 mx-2 py-1 border-b-[0.5px]  border-b-blue-300 flex flex-row justify-between`}
          >
            <Text style={tw`text-slate-800 font-light text-sm`}>
              {item?.datetime}
            </Text>
            <Text style={tw`text-slate-800 font-light text-sm`}>
              {item?.conditions}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default WeatherByDate;
