import React from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { useState } from "react";
import styles from "./style"
import customFonts from "../../styles/font"
import Contact from "../Contact/index"
import Contactstext from "../Contact";


const ContactsList = ({ contactsInfo }) => {
    const strAscending = [...contactsInfo].sort((a, b) => a.name > b.name ? 1 : -1,);
    console.log("strAscending", strAscending);

    return (

        <View>
            <View>
                {/* your profile */}
            </View>
            <FlatList
                numColumns={1}
                data={strAscending}
                renderItem={({item}) => (
                    <Contactstext {...item}/>
                )}
            />
        </View>
        
    );
}

export default ContactsList;