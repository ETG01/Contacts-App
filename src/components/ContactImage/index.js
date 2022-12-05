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



const Contactimage = ({imgurl}) => {
    return (
      <Center>
        <Image
          size={150}
          borderRadius={100}
          source={{
            uri: imgurl,
          }}
          alt="Alternate Text"
        />
      </Center>
    );
  };
export default Contactimage;