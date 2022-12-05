import React from "react";
import { View, Text, TextInput, Button, Image, Icon, TouchableOpacity } from "react-native";
import call from 'react-native-phone-call'
import { Ionicons } from '@expo/vector-icons'; 
import { useState } from "react";
import ContactNoImg from "../../components/ContactNoImg/index";
import customFont from "../../styles/font"
import styl from "./style"
import { useSelector, useDispatch } from "react-redux";


const ViewContact = ({ route, navigation }) => {
    const dispatch = useDispatch();

    const {id, imgurl, name, phonenr} = route.params.contact
    const [editName, setEditName] = useState(name);
    const [editPhone, setEditPhone] = useState(phonenr);
    const [editPicture, setEditPicture] = useState(imgurl);
    const contactInfo = {id, imgurl, name, phonenr}
    
   

    if (typeof phoneNumber === 'string') {
    
    } else {
       
        //phoneNumber = phoneNumber.toString()
    }

    //When exicuted this function will call the phone number
    const triggerCall = () => {

        const args = {
            number: phonenr,
            prompt: true,
            skipCanOpen: true
        };
        // make call
        call(args).catch(console.error)
    };

    const removeContact = () => {
        dispatch({type: "REMOVE_CONTACT", payload: {id: id}});
        navigation.navigate('Contact');
    }

    return (
        <View style={styl.container}>
        {/* Photo */}
            <View>
                {imgurl === null ? <ContactNoImg name={name} size={"large"}/> : <Image style={styl.imgSizer} source={{url: imgurl}}/>}
            </View>
        {/* Text */}
            <View>
                <Text style={[ customFont.titelName, styl.textPadding ]}  > {name} </Text>
            </View>
        {/* Call Phone number function */}
            <TouchableOpacity style={styl.boxSmall} onPress={triggerCall}>
                <View>
                    <Text style={customFont.extraInfo}>Phone</Text>
                    <Text style={customFont.displayName}  > {phonenr} </Text>
                </View>
                <Ionicons name="call" size={35} color="black" />
            </TouchableOpacity>
        {/* Delete Contact */}
            <TouchableOpacity style={styl.boxSmallCenter} onPress={removeContact}  >
                <Text style={[ customFont.displayName, styl.redText ]}>Delete Contact</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity style={styl.boxSmallCenter} onPress={() => editContact(id, editName, editPhone, editPicture)}  > */}
            <TouchableOpacity style={styl.boxSmallCenter} onPress={() => navigation.navigate("EditContact", {contact: contactInfo})}  >
                <Text style={[ customFont.displayName, styl.blackText ]}>Update Contact </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ViewContact;