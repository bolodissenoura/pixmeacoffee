import React from "react";
import { AccountFormInterface } from "@/app/context/AccountFormContext";
import Image from "next/image";
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
  handleSubmitForm: () => void;
  enableButton: boolean;
}

interface Objeto {
  ID: string;
  Nome: string;
  Estado: string;
}

export default function FormAccount(props: FormAccountInterface) {
  const db = getFirestore();
  const usernameToSearch = props.data.page;
  const usersCollection = collection(db, "users");
  React.useEffect(() => {
    const q = query(usersCollection, where("id", "==", props.userId));
    getDocs(q)
      .then((querySnapshot) => {
        if (querySnapshot.size === 0) {
          console.log("props.userId");
        } else {
          querySnapshot.forEach((doc) => {
            props.data.setDescription(doc.data().description);
            props.data.setPage(doc.data().namepage);
            props.data.setPixKey(doc.data().pixKey);
            props.data.setQrCode(doc.data().qrCode);
            props.data.setSocialLinks(doc.data().socialLinks);
          });
        }
      })
      .catch((error) => {
        console.error("Erro ao buscar usuário:", error);
      });
    getDocs;
  }, []);
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

  React.useEffect(() => {
    if (props.data.pixKey.length < 32) {
      props.data.setStatus({
        ...props.data.status,
        pixKeyStatus: "error",
        pixKeyStatusMsg:
          "Um QR-Code pix deve começar com 00, mas se quiser colar outro qr-code, sem problemas.",
      });
    } else {
      props.data.setStatus({
        ...props.data.status,
        pixKeyStatus: "success",
        pixKeyStatusMsg: "",
      });
    }
  }, [props.data.pixKey]);

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
  const pasteFromClipboardPix = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        props.data.setPixKey(text);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };
  const pasteFromClipboardQrCode = () => {
    navigator.clipboard
      .readText()
      .then((text) => {
        props.data.setQrCode(text);
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });
  };

  return (
    <div className="p-4 bg-white rounded-t-2xl shadow-lg overflow-hidden">
      <div className="md:flex-row flex-col flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <p className="font-normal w-10/12">
            Crie seu primeiro{" "}
            <span className="text-primary-500 bold">cartão virtual</span>{" "}
            gratuitamente
          </p>
          <div>
            <input
              type="text"
              id="namepage"
              maxLength={15}
              onChange={(e) => props.data.setPage(e.target.value.toLowerCase())}
              value={props.data.page}
              onBlur={handleCheckUser}
              onFocus={() => {
                props.data?.setStatus({
                  ...props.data?.status,
                  pageStatus: "error",
                  pageStatusMsg: "Saia do campo para verificar.",
                });
              }}
              className={`border border-solid ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5`}
              placeholder="/suapagina"
              required
            />
            <p
              className={`${inputColor(
                props.data.status?.pageStatus,
                "text"
              )} text-sm mt-2`}>
              {props.data.status.pageStatusMsg}
            </p>
          </div>
          <div>
            <div className="flex gap-2">
              <input
                type="text"
                id="qrCode"
                onChange={(e) => props.data.setQrCode(e.target.value)}
                value={props.data.qrCode}
                className={`bg-gray-50 p-4 border ${inputColor(
                  props.data.status?.pageStatus,
                  "border"
                )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
                placeholder="Chave QR-CODE"
                required
              />
              <button
                onClick={pasteFromClipboardQrCode}
                className="border rounded border-gray-300 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256">
                  <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
                </svg>
              </button>
            </div>
            <p
              className={`${inputColor(
                props.data.status?.pageStatus,
                "text"
              )} text-sm w-10/12`}>
              {props.data.status.pixKeyStatusMsg}
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              id="pixkey"
              onChange={(e) => props.data.setPixKey(e.target.value)}
              value={props.data.pixKey}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="Chave pix"
              required
            />
            <button
              onClick={pasteFromClipboardPix}
              className="border rounded border-gray-300 p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#000000"
                viewBox="0 0 256 256">
                <path d="M200,32H163.74a47.92,47.92,0,0,0-71.48,0H56A16,16,0,0,0,40,48V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm-72,0a32,32,0,0,1,32,32H96A32,32,0,0,1,128,32Zm72,184H56V48H82.75A47.93,47.93,0,0,0,80,64v8a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V64a47.93,47.93,0,0,0-2.75-16H200Z"></path>
              </svg>
            </button>
          </div>
          <textarea
            onChange={(e) => props.data.setDescription(e.target.value)}
            value={props.data.description}
            rows={3}
            maxLength={150}
            className="bg-gray-50 resize-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
            placeholder="Descrição"
          />
        </div>
        <div className="w-full flex flex-col gap-2 mt-8 md:mt-0">
          <p className="font-normal w-10/12">
            Você também pode incluir suas redes sociais no seu cartão
          </p>
          <div className="flex gap-2">
            <Image
              src="/social/instagram.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="instagram"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  instagram: e.target.value,
                })
              }
              value={props.data.socialLinks?.instagram}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seuarroba"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/zap.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="zap"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  zap: e.target.value,
                })
              }
              value={props.data.socialLinks?.zap}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="Seu número de telefone"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/linkedin.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="linkedin"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  linkedin: e.target.value,
                })
              }
              value={props.data.socialLinks?.linkedin}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seuarroba"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/x.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="x"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  x: e.target.value,
                })
              }
              value={props.data.socialLinks?.x}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seuarroba"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/twitch.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="twitch"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  twitch: e.target.value,
                })
              }
              value={props.data.socialLinks?.twitch}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seuarroba"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/sig.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="sig"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  sig: e.target.value,
                })
              }
              value={props.data.socialLinks?.sig}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seuarroba"
            />
          </div>
          <div className="flex gap-2">
            <Image
              src="/social/youtube.svg"
              alt="Social media icone"
              width={32}
              height={32}
            />
            <input
              type="text"
              id="youtube"
              onChange={(e) =>
                props.data.setSocialLinks({
                  ...props.data.socialLinks,
                  youtube: e.target.value,
                })
              }
              value={props.data.socialLinks?.youtube}
              className={`bg-gray-50 p-4 border ${inputColor(
                props.data.status?.pageStatus,
                "border"
              )} border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-8/12 p-2.5`}
              placeholder="@seucanal"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        onClick={props.handleSubmitForm}
        disabled={!props.enableButton}
        className={`w-full p-4 text-white bold rounded-lg mt-4 ${
          props.enableButton ? "bg-primary-500" : "bg-primary-200"
        }`}>
        Finalizar cadastro
      </button>
    </div>
  );
}
