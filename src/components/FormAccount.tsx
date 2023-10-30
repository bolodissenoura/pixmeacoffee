import React from "react";
import { AccountFormInterface } from "@/app/context/AccountFormContext";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";

interface FormAccountInterface {
  data: AccountFormInterface;
  userId: string;
}

export default function FormAccount(props: FormAccountInterface) {
  const db = getFirestore();
  const usernameToSearch = props.data.page;
  const usersCollection = collection(db, "users");
  const handleCheckUser = () => {
    const q = query(usersCollection, where("namepage", "==", usernameToSearch));
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          props.data?.setStatus({
            ...props.data?.status,
            pageStatus: "success",
            pageStatusMsg: "Este nome está disponível para uso :)",
          });
        } else {
          querySnapshot.forEach((doc) => {
            if (doc.data().id === props.userId) {
              props.data?.setStatus({
                ...props.data?.status,
                pageStatus: "success",
                pageStatusMsg: "Este nome já é seu :)",
              });
            } else {
              props.data?.setStatus({
                ...props.data?.status,
                pageStatus: "error",
                pageStatusMsg: "Este nome já tem dono, tente outro nome.",
              });
            }
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
      });
    getDocs;
  };
  const inputColor = (
    data: "success" | "error" | "none",
    prop: "text" | "border"
  ) => {
    switch (data) {
      case "error":
        return `${prop}-red-500`;
      case "success":
        return `${prop}-green-500`;
      case "none":
        return `${prop}-gray-300`;
      default:
        return `${prop}-gray-300`;
    }
  };
  const n = 9;
  return (
    <div className="p-4 w-80 md:w-8/12 md:h-96 bg-white md:mt-16 rounded-2xl overflow-hidden">
      <div className="md:flex-row flex-col flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              página:
            </label>
            <input
              type="text"
              id="namepage"
              maxLength={15}
              onChange={(e) => props.data.setPage(e.target.value)}
              onBlur={handleCheckUser}
              className={`${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} bg-gray-50  border  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5`}
              placeholder="/suapagina"
              required
            />
            <p
              className={`${inputColor(
                props.data.status?.pageStatus,
                "text"
              )} text-sm`}>
              {props.data.status.pageStatusMsg}
            </p>
          </div>
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              chave aleatória pix:
            </label>
            <input
              type="text"
              id="namepage"
              onChange={(e) => props.data.setPixKey(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="xxx-xxx-xxx-xxx..."
              required
            />
          </div>

          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              descrição:
            </label>
            <textarea
              onChange={(e) => props.data.setDescription(e.target.value)}
              value={props.data.description}
              rows={5}
              maxLength={150}
              className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="Um pouco sobre você..."
            />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              youtube:
            </label>
            <input
              type="text"
              id="namepage"
              onChange={(e) => {
                const newValue = e.target.value;
                props.data?.setSocialLinks(() => [
                  { name: "youtube", value: newValue },
                  { name: "twitch", value: props.data.socialLinks[1]?.value },
                  { name: "twitter", value: props.data.socialLinks[2]?.value },
                  { name: "tabnews", value: props.data.socialLinks[3]?.value },
                ]);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              twitch:
            </label>
            <input
              type="text"
              id="namepage"
              onChange={(e) => {
                const newValue = e.target.value;
                props.data?.setSocialLinks(() => [
                  { name: "youtube", value: props.data.socialLinks[0]?.value },
                  { name: "twitch", value: newValue },
                  { name: "twitter", value: props.data.socialLinks[2]?.value },
                  { name: "tabnews", value: props.data.socialLinks[3]?.value },
                ]);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              twitter ( ou X ):
            </label>
            <input
              type="text"
              id="namepage"
              onChange={(e) => {
                const newValue = e.target.value;
                props.data?.setSocialLinks(() => [
                  { name: "youtube", value: props.data.socialLinks[0]?.value },
                  { name: "twitch", value: props.data.socialLinks[1]?.value },
                  { name: "twitter", value: newValue },
                  { name: "tabnews", value: props.data.socialLinks[3]?.value },
                ]);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
            />
          </div>
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              tabnews:
            </label>
            <input
              type="text"
              id="namepage"
              onChange={(e) => {
                const newValue = e.target.value;
                props.data?.setSocialLinks(() => [
                  { name: "youtube", value: props.data.socialLinks[0]?.value },
                  { name: "twitch", value: props.data.socialLinks[1]?.value },
                  { name: "twitter", value: props.data.socialLinks[2]?.value },
                  { name: "tabnews", value: newValue },
                ]);
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
            />
          </div>
        </div>
        <div
          className="w-full md:w-2/12 md:flex md:flex-col gap-4 hidden"
          style={{ marginTop: "-30px" }}>
          {[...Array(n)].map((e, i) => (
            <div
              key={i}
              className="bg-gray-300 w-8 h-8 rounded-full shadow-inner"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
