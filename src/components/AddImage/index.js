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
import * as ImagePicker from 'expo-image-picker';




const AddImage = ({setImage}) => {
    const initialFocusRef = React.useRef(null);
    const [ImageUrl, setImageUrlValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const [refresh, setRefresh] = useState(false);

    
    const pickLibImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      console.log(result);
  
      if (!result.canceled) {
        console.log("result from image picker ",result.uri);
        setImageUrlValue(result.uri);
        setRefresh(!refresh);
      }
    };

    const pickCameraImage = async () => {
      // ask for permission to use camera
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
      } else {
        let result = await ImagePicker.launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

      console.log(result);

      if (!result.canceled) {
        console.log("result from image picker ",result.uri);
        setImageUrlValue(result.uri);
        setRefresh(!refresh);
      }
    }};




    return (
      <Box w="100%" alignItems="center">
        <Popover
          initialFocusRef={initialFocusRef}
          trigger={(triggerProps) => {
            return <Button {...triggerProps} onPress={() => setIsOpen(true)}>Add Image </Button>;
          }}
          isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <Popover.Content width="56">
            <Popover.Arrow />
            <Popover.Body>
              <FormControl>
              <Button onPress={pickCameraImage} >Camera</Button>
              </FormControl>
              <FormControl mt="1">
              <Button onPress={pickLibImage} >From Gallery</Button>
              </FormControl>
              <FormControl mt="1">
                <Input 
              onChangeText={newText => setImageUrlValue(newText)}
              variant="outline" placeholder="Image URL" />
              </FormControl>
            </Popover.Body>
            <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost"
              onPress={() => {setIsOpen(false);}}>
                Cancel
              </Button>
              <Button onPress={() => {
                setImage(ImageUrl);
                setIsOpen(false);
                setRefresh(!refresh);
                }}>Save</Button>
            </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>
    );
  };

export default AddImage;