"use client";
import React from "react";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

export default function Profile() {
  const db = getFirestore();
  const usernameToSearch = window.location.pathname.substring(1);
  const usersCollection = collection(db, "users");
  const q = query(usersCollection, where("namepage", "==", usernameToSearch));

  React.useEffect(() => {
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("Nenhum usuário encontrado com esse username.");
        } else {
          querySnapshot.forEach((doc) => {
            console.log("Dados do usuário:", doc.data());
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
      });
    getDocs;
  });
  return <div className="bg-primary-500">{usernameToSearch}</div>;
}
