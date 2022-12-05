import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { useState } from "react";

import styl from "./style"
import customFonts from "../../styles/font" 

const ContactsList = ({ name, size}) => {
    const arr = name.split(/\s+/);
    const firstName = arr[0].charAt(0)
    const lastName = arr.slice(-1)[0].charAt(0)
    const abbreviation = firstName + lastName
    
    if (size === "large") {
        return (
            <View style={styl.circleLarge}>
                {/* your profile */}
                <Text style={customFonts.replaceImgLarge}>{abbreviation}</Text>
            </View>
        );
    } else if (size === "small") {
        return (
            <View style={styl.circleSmall}>
                {/* your profile */}
                <Text style={customFonts.replaceImg}>{abbreviation}</Text>
            </View>
        )
    }
}

export default ContactsList;