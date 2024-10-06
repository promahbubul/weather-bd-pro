import {Image, Text, View} from "react-native";
import tw from "twrnc";
import React from "react";
import Icon from 'react-native-vector-icons/FontAwesome';

const GeneranInformationCard= ({heading, data, imageSource,}) => {
    return <View style={tw`flex flex-row  items-center`}>
        <Text style={tw`text-sm font-semibold text-slate-600`}>{heading}:</Text>
        <Text style={tw`font-light text-blue-500`}> {data}</Text>
        {
            imageSource &&  <View style={tw`w-6 h-6 ml-1`}>
                <Image source={imageSource} style={tw`w-full h-full `} />
            </View>
        }



    </View>
}

export default GeneranInformationCard