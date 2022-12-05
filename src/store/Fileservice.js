import * as Filesystem from 'expo-file-system';

const contactsDirectory = Filesystem.documentDirectory + 'contacts.json';


const saveContact = async (id, name, phonenr, imgurl) => {
    try {
        const contactsString = await Filesystem.readAsStringAsync(contactsDirectory, { encoding: Filesystem.EncodingType.UTF8 });
        let contacts = [];
        //let contactsString = null;
        if (contactsString !== null) {
            contacts = JSON.parse(contactsString);
        }
        contacts.push({
            id: id,
            name: name,
            phonenr: phonenr,
            imgurl: imgurl,
        });

        await Filesystem.writeAsStringAsync(contactsDirectory, JSON.stringify(contacts));
    } catch (e) {
        console.log(e);
    }
}

const removeContact = async (id) => {
    try {
        const contactsString = await Filesystem.readAsStringAsync(contactsDirectory);
        if (contactsString !== null) {
            let contacts = JSON.parse(contactsString);
            contacts = contacts.filter((contact) => contact.id !== id);
            await Filesystem.writeAsStringAsync(contactsDirectory, JSON.stringify(contacts));
        }
    } catch (e) {
        console.log(e);
    }
}

const updateContact = async (id, name, phonenr, imgurl) => {
    try {
        const contactsString = await Filesystem.readAsStringAsync(contactsDirectory);
        if (contactsString !== null) {
            let contacts = JSON.parse(contactsString);
            contacts = contacts.map((contact) => {
                if (contact.id === id) {
                    contact.name = name;
                    contact.phonenr = phonenr;
                    contact.imgurl = imgurl;
                }
                return contact;
            });
            await Filesystem.writeAsStringAsync(contactsDirectory, JSON.stringify(contacts));
        }
    } catch (e) {
        console.log(e);
    }
}

const LoadContacts = async () => {
    try {
        await setupdirectory();
        const contactsString = await Filesystem.readAsStringAsync(contactsDirectory, { encoding: Filesystem.EncodingType.UTF8 });
        if (contactsString !== null) {
            let contacts = JSON.parse(contactsString);
            console.log("contactsString", contacts);
            return contacts;
        }
    } catch (e) {
        console.log(e);
    }

}

const setupdirectory = async () => {
    try {
        const dir = await Filesystem.getInfoAsync(contactsDirectory);
        console.log("dir exists", dir.exists);
        if (!dir.exists) {
            await Filesystem.writeAsStringAsync(contactsDirectory, JSON.stringify([]));
        }
    } catch (e) {
        console.log(e);
    }
}


export { saveContact, removeContact, updateContact, LoadContacts };