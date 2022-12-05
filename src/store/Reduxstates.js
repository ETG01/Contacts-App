import {createStore} from 'redux';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { LoadContacts, saveContact, removeContact, updateContact } from './Fileservice';


const data = LoadContacts();
data.then((contacts) => {
    store.dispatch({ type: 'GET_ALL_CONTACTS', payload: contacts });
});






const reducerFN = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_CONTACTS':
            return {
                // set the state to the payload
                ...state,
                contacts: action.payload,        
            };
        case 'ADD_CONTACT':
            return {
                ...state,
                Image: action.payload.Image,
                Phone: action.payload.Phone,
                Phonevalid: action.payload.Phonevalid,
                Name: action.payload.Name,
                Email: action.payload.Email,
            };
        case 'CLEAR_DATA':
            return {
                ...state,
                Image: null,
                Phone: null,
                Phonevalid: null,
                Name: null,
                Email: null,
            };
        case 'SAVE_CONTACT':
            // in this case, action.payload is the contact object to save
            saveContact(action.payload.id, action.payload.name, action.payload.phonenr, action.payload.imgurl);
            return {
                ...state,
                contacts: [...state.contacts, action.payload],
            };
        case 'REMOVE_CONTACT':
            // in this case, action.payload is the id of the contact to be removed
            removeContact(action.payload.id);
            return {
                // filter out the contact with the id that matches the payload
                ...state,
                contacts: state.contacts.filter((contact) => contact.id !== action.payload.id),
            };
        case 'EDIT_CONTACT':
            // in this case, action.payload is the contact object to save
            updateContact(action.payload.id, action.payload.name, action.payload.phonenr, action.payload.imgurl);
            return {
                ...state,
                contacts: state.contacts.map((contact) => {
                    if (contact.id === action.payload.id) {
                        return action.payload;
                    }
                    return contact;
                }),
            };
        default:
            return state;
    }
};  


const store = createStore(reducerFN, {contacts: [data]});

export default store;