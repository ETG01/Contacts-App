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
import AddImage from "../../components/AddImage";
import Contactimage from "../../components/ContactImage";
import {useSelector, useDispatch} from "react-redux";
import PhoneNumberInput from "../../components/PhoneNumberInput";
import { parsePhoneNumber } from 'react-phone-number-input'

const Addcontact = ({ navigation: {navigate} }) => {
  const dispatch = useDispatch();
  // image value
  const [img, setImg] = useState('http://s3.amazonaws.com/37assets/svn/765-default-avatar.png');
  // name
  const [name, setName] = useState(null);
  // full pohne number
  const [PhoneNumber, setPhone] = useState(null);
  // phone number validation
  const [Phonevalid, setPhonevalid] = useState(null);

  const phoneInput = useRef(null);

  //const contactslist = useSelector((state) => state);

  

function addContact() {
    const id = Math.random().toString(36).substr(2, 9);
    dispatch({type: "SAVE_CONTACT", payload: {id:id, imgurl: img, name: name, phonenr: PhoneNumber}});
    navigate('Contact');
}


  return (
    <View>
       <FormControl mt="3">
          <Contactimage imgurl={img}/>
        <FormControl mt="3" >
          <AddImage setImage={setImg} />
        </FormControl>
        </FormControl>
        <FormControl mt="3" w="310" alignSelf="center">
            <Input 
            size="xl" 
            placeholder="Name" 
            backgroundColor="#FFFFFF" 
            onChangeText={(text) => {
            setName(text)}}
            />
        </FormControl>
        <FormControl mt="3" alignSelf="center">
            <PhoneNumberInput phoneInput={phoneInput} setPhonevalid={setPhonevalid} setPhone={setPhone}/>
        </FormControl>
        <FormControl mt="3" w="auto" alignSelf="center">
        <Button.Group>
            <Button colorScheme="coolGray" variant="ghost"
                onPress={() => navigate('Contact')}>
                    Cancel
                  </Button>
              <Button onPress={() => addContact()}>Create Contact</Button>
            </Button.Group>
        </FormControl>
    </View>
  );
};

export default Addcontact;
