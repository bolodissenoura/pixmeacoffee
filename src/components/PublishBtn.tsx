import React from "react";

export default function PublishBtn() {
  return (
    <div className="w-full hidden h-20 fixed bottom-0 left-0 bg-white p-4">
      <button
        type="submit"
        className="bg-primary-500 w-full h-full shadow text-white">
        Publicar
      </button>
    </div>
  );
}
