import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import firebase from "./firebase";

// ADD USER
export const AddUser = (info) => {
  const db = getDatabase(firebase);
  const usersRef = ref(db, "user/");
  const newUserRef = push(usersRef);

  set(newUserRef, {
    username: info.username,
    phoneNumber: info.phoneNumber,
    gender: info.gender,
  });
  //   console.log("merhana");
};

//READ INFO
export const useFetch = () => {
  const [contactList, setContactList] = useState();
  const [isLoading, setIsLoading] = useState();
  useEffect(() => {
    const db = getDatabase(firebase);
    const usersRef = ref(db, "user/");

    onValue(usersRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];

      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setContactList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, contactList };
};

export const DeleteUser = (id) => {
  const db = getDatabase(firebase);
  //   const usersRef = ref(db, "user/");
  remove(ref(db, "user/" + id));
};

// export const editUser = (id) => {
//     const db = getDatabase(firebase);
//     //   const usersRef = ref(db, "user/");
//     remove(ref(db, "user/" + id));
//   };

export const UpdateUser = (info) => {
  const db = getDatabase(firebase);
  //   const usersRef = ref(db, "user/");
  const updates = {};
  updates["user/" + info.id] = info;
  return update(ref(db), updates);
};
