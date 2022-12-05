import React, { useState, useRef } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import {
  Image,
  Center,
  Popover,
  Button,
  Input,
  FormControl,
  Box,
  NativeBaseProvider,
} from "native-base";
import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import styles from "../../views/Contact/styles";
import UpdateImage from "../../components/UpdateImage";
import Contactimage from "../../components/ContactImage";
import {useSelector, useDispatch} from "react-redux";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { parsePhoneNumber } from 'react-phone-number-input'
import styl from "./styles";


const EditContact = ({ route, navigation}) => {
    
    const dispatch = useDispatch();
    console.log("route.params", route.params);
    const {id, imgurl, name, phonenr} = route.params.contact
    console.log("id", id, "imgurl", imgurl, "name", name, "phonenr", phonenr);
    const [editName, setEditName] = useState(name);
    const [editPhone, setEditPhone] = useState(phonenr);
    const [editPicture, setEditPicture] = useState(imgurl);
    // phone number validation
    const [Phonevalid, setPhonevalid] = useState(null);

    const phoneInput = useRef(null);

    //const contactslist = useSelector((state) => state);

  

  const editContact = () => {
   
    dispatch({type: "EDIT_CONTACT", payload: {id: id, imgurl: editPicture, name: editName, phonenr: editPhone}});
    navigation.navigate('Contact');
    
}

  return (
    <View>
       <FormControl mt="3">
       <View style={styl.container}>
                <Image style={styl.imgSizer} source={{uri: editPicture, alt:"no img"}} />
            </View>
        <FormControl mt="3" >
          <UpdateImage setNewPicture={setEditPicture} />
        </FormControl>
        </FormControl>
        <FormControl mt="3" w="310" alignSelf="center">
            <Input 
            size="xl" 
            placeholder="Name" 
            backgroundColor="#FFFFFF" 
            value={editName}
            onChangeText={(text) => {
            setEditName(text)}}
            />
        </FormControl>
        <FormControl mt="3" w="310" alignSelf="center">
            <Input 
            size="xl" 
            placeholder="Name" 
            backgroundColor="#FFFFFF" 
            value={editPhone}
            onChangeText={(text) => {
            setEditPhone(text)}}
            />
        </FormControl>
        <FormControl mt="3" w="auto" alignSelf="center">
        <Button.Group>
            <Button colorScheme="coolGray" variant="ghost"
                onPress={() => navigate('Contact')}>
                    Cancel
                  </Button>
              <Button onPress={() => editContact()}> Update Contact </Button>
            </Button.Group>
        </FormControl>
    </View>
  );
};

export default EditContact;
