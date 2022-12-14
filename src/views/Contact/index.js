import React from "react";
import { View, Text, TextInput, Button, Image, Icon, ScrollView, TouchableOpacity, Dimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";
import { useEffect } from "react";
import customFonts from "../../styles/font"
import ContactsList from "../../components/ContactsList";
import styles from "./styles";
import simg from "../../resources/search.png"
import { Contacts } from "expo";
import { themeTools } from "native-base";
import { useDispatch, useSelector } from "react-redux";
//import data from "../../resources/data.json";




const Contact = ({ navigation: {navigate} }) => {
    const dispatch = useDispatch();
    const importeddata = useSelector((state) => state);
    const [contacts, setContact] = useState(importeddata.contacts);
    // clear search input with calcel button 
    const [search, setSearch] = useState("");
    const [refesh, setRefesh] = useState(false);

    //when this page is loaded, reassign the contacts to the imported data
    useEffect(() => {
        setContact(importeddata.contacts);
    }, [importeddata.contacts]);


    
    // það þarf að refresha síðuna til að sýna allan listan aftur. 
    // þarf hjálp á morgun til að laga þetta.
    const handleSearch = (text) => {
        setSearch(text);
        const new_arr = importeddata.contacts.filter((contact) => {
                text = text.toLowerCase();
                let contactName = contact.name.toLowerCase();
                return contactName.indexOf(text) > -1;
            });
        setContact(new_arr);
    }

    // find the hight of the screen
    const windowHeight = Dimensions.get('window').height;
    const customConHeight = (windowHeight/1.45)


    return (

        <View>
            <View style={styles.container}>
                
            {/* H1 Titel */}
                

            {/* Search Bar */}
                <View style={styles.sectionStyle}>
                    <Image source={simg} style={styles.imageStyle} />

                    <TextInput
                        style={{flex: 1}}
                        onChangeText={(value) => handleSearch(value)}
                        value={search}
                        placeholder="Search"
                    />
                    <Button 
                    style={styles.cancell}
                        onPress={() => {setSearch(""), setContact(importeddata.contacts)}}
                        title="Cancel"
                        color="#841584"
                    />
            {/* The line between search and contact */}
                </View>
                <View style={styles.searchContainer}></View>

            {/* Hear is the main view {list views} */}
                <View style={{height: customConHeight}}>
                    <ContactsList contactsInfo={contacts} />
                </View>
            </View>

        {/* Menu Bar */}
            <View style={styles.menuBar}>
                <TouchableOpacity style={styles.menuBarIcons}>
                    <Ionicons name="person-circle" size={30} color="black" />
                    <Text>Contacts</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.menuBarIcons} onPress={() => navigate('Addcontact')}>
                    <Ionicons name="add-circle" size={30} color="black" />
                    <Text>Add Contact</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    );
};

export default Contact;