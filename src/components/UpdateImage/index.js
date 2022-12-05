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
import {useSelector, useDispatch} from "react-redux";
import * as ImagePicker from 'expo-image-picker';



const UpdateImage = ({setNewPicture }) => {
    //console.log(routs, 'routes')
    const initialFocusRef = React.useRef(null);
    const [NewImageUrl, setNewImageUrlValue] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const pickLibImage = async () => {
      // ask for permissions request is necessary for launching the image library
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');

      } else {

        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        if (!result.cancelled) {
          setNewImageUrlValue(result.uri);
          //setRefresh(!refresh);
        }
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
        setNewImageUrlValue(result.uri);
        setRefresh(!refresh);
      }
    }};


    return (
      <Box w="100%" alignItems="center">
        <Popover
          initialFocusRef={initialFocusRef}
          trigger={(triggerProps) => {
            return <Button {...triggerProps} onPress={() => setIsOpen(true)}>Update Image </Button>;
          }}
          isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
          <Popover.Content width="56">
            <Popover.Arrow />
            <Popover.Body>
              <FormControl>
              <Button onPress={pickCameraImage} >Camera</Button>
              </FormControl>
              <FormControl mt="1">
              <Button 
              onPress={pickLibImage} >From Gallery</Button>
              </FormControl>
              <FormControl mt="1">
                <Input 
              onChangeText={newText => setNewImageUrlValue(newText)}
              variant="outline" placeholder="New Image URL" />
              </FormControl>
            </Popover.Body>
            <Popover.Footer>
            <Button.Group>
              <Button colorScheme="coolGray" variant="ghost"
              onPress={() => {setIsOpen(false);}}>
                Cancel
              </Button>
              <Button onPress={() => {
                setNewPicture(NewImageUrl);
                setIsOpen(false);
                }}>Save</Button>
            </Button.Group>
            </Popover.Footer>
          </Popover.Content>
        </Popover>
      </Box>
    );
  };

export default UpdateImage;