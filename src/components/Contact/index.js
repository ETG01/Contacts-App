import React from "react";
import { View, Text, ScrollView, FlatList, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { useState } from "react";

import styl from "./style"
import NoImg from "../ContactNoImg/index"
import customFonts from "../../styles/font"


const Contactstext = ({ id, imgurl, name, phonenr }) => {
    const { navigate } = useNavigation();
    const contactInfo = {id, imgurl, name, phonenr}

    return (
        <TouchableOpacity onPress={() => navigate('ViewContact', {contact: contactInfo})}>
            <View style={styl.container}>
                {/* your profile */}
                {imgurl === null ? <NoImg name={name} size={"small"}/> : <Image style={styl.imgSizer} source={{url: imgurl}}/>}
                <Text style={[styl.textPadding, customFonts.displayName]}>{name}</Text>
            </View> 
        </TouchableOpacity>
    );
}

export default Contactstext;