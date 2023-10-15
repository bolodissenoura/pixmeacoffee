import React from "react";

interface PublishBtnInterface {
  handleSubmitForm: () => void;
  showButton: boolean;
}

export default function PublishBtn(props: PublishBtnInterface) {
  return (
    <div
      className={`w-full h-20 fixed bottom-0 left-0 bg-white p-4 ${
        !props.showButton ?? "hidden"
      }`}>
      <button
        type="submit"
        onClick={props.handleSubmitForm}
        className="bg-primary-500 w-full h-full shadow text-white">
        Publicar
      </button>
    </div>
  );
}
