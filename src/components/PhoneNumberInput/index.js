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
import styles from "../../views/Contact/styles";



const PhoneNumberInput = ({phoneInput, setPhonevalid,setPhone}) => {
    // phone number without contry code
    
  const [value, setValue] = useState(null);
    return (
        <Center>
        <SafeAreaView style={styles.wrapper}>
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="IS"
            layout="first"
            onChangeText={(text) => {
              setValue(text);
              const checkValid = phoneInput.current?.isValidNumber(text);
            setPhonevalid(checkValid ? checkValid : false);
            }}
            onChangeFormattedText={(text) => {
                setPhone(text);
            }}
            withDarkTheme
            withShadow
            autoFocus
          />
        </SafeAreaView>
      </Center>
    );
    
  };

export default PhoneNumberInput;