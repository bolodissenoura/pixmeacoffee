import React from "react";
import { AccountFormInterface } from "@/app/context/AccountFormContext";

interface FormAccountInterface {
  data: AccountFormInterface;
  userId: string;
}

// This section will be a future feature

export default function FormAccountSocial(props: FormAccountInterface) {
  return (
    <div className="p-4 w-80 md:w-8/12 bg-white md:mt-16 rounded-2xl overflow-hidden">
      <div className="w-full flex flex-col gap-2 mt-8 md:mt-0">
        <p className="text-sm">Em breve ...</p>
        <div>
          <label
            htmlFor="namepage"
            className="block mb-2 text-sm font-medium text-gray-900">
            youtube:
          </label>
          <input
            type="text"
            id="youtube"
            disabled
            onChange={(e) => {
              const newValue = e.target.value;
              props.data?.setSocialLinks(() => [
                { name: "youtube", value: newValue },
                { name: "twitch", value: props.data.socialLinks[1]?.value },
                { name: "twitter", value: props.data.socialLinks[2]?.value },
                { name: "tabnews", value: props.data.socialLinks[3]?.value },
              ]);
            }}
            className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
            placeholder=""
          />
        </div>
        <div>
          <label
            htmlFor="twitch"
            className="block mb-2 text-sm font-medium text-gray-900">
            twitch:
          </label>
          <input
            type="text"
            id="twitch"
            disabled
            onChange={(e) => {
              const newValue = e.target.value;
              props.data?.setSocialLinks(() => [
                { name: "youtube", value: props.data.socialLinks[0]?.value },
                { name: "twitch", value: newValue },
                { name: "twitter", value: props.data.socialLinks[2]?.value },
                { name: "tabnews", value: props.data.socialLinks[3]?.value },
              ]);
            }}
            className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
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
            id="twitter"
            disabled
            onChange={(e) => {
              const newValue = e.target.value;
              props.data?.setSocialLinks(() => [
                { name: "youtube", value: props.data.socialLinks[0]?.value },
                { name: "twitch", value: props.data.socialLinks[1]?.value },
                { name: "twitter", value: newValue },
                { name: "tabnews", value: props.data.socialLinks[3]?.value },
              ]);
            }}
            className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
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
            id="tabnews"
            disabled
            onChange={(e) => {
              const newValue = e.target.value;
              props.data?.setSocialLinks(() => [
                { name: "youtube", value: props.data.socialLinks[0]?.value },
                { name: "twitch", value: props.data.socialLinks[1]?.value },
                { name: "twitter", value: props.data.socialLinks[2]?.value },
                { name: "tabnews", value: newValue },
              ]);
            }}
            className="bg-gray-50 cursor-not-allowed border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
            placeholder=""
          />
        </div>
      </div>
    </div>
  );
}
