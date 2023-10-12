import React from "react";
import { AccountFormInterface } from "@/app/context/AccountFormContext";

interface FormAccountInterface {
  data: AccountFormInterface;
}

export default function FormAccount(props: FormAccountInterface) {
  const n = 9;
  return (
    <div className="p-4 w-80 md:w-8/12 md:h-96 bg-white md:mt-16 rounded-2xl overflow-hidden">
      <div className="md:flex-row flex-col flex w-full">
        <div className="flex flex-col gap-4 w-full">
          <div>
            <label
              htmlFor="namepage"
              className="block mb-2 text-sm font-medium text-gray-900">
              chave aleatória pix:
            </label>
            <input
              type="text"
              id="namepage"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="xxx-xxx-xxx-xxx..."
              required
            />
          </div>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder="/suapagina"
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
              maxLength={150}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-10/12 p-2.5"
              placeholder=""
              required
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
