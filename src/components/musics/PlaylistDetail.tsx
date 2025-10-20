import React from "react";
import { itstime, oakley } from "../../utils";

const PlaylistDetail = () => {
  return (
    <div className="w-full flex items-end gap-5 py-5 bg-musicAboutPage px-10 rounded-tr-2xl">
      <div
        className="w-60 h-60 rounded-md bg-gray-500 overflow-hidden relative"
        style={{ boxShadow: "3px 5px 10px 0px rgba(0, 0, 0, 0.4)" }}
      >
        <img src={itstime} alt="" className="h-full w-full object-cover brightness-60" />
      </div>
      <div className="flex flex-col gap-3 mb-2">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-semibold"> Can't Hurt Me </h1>
          <p className="text-xs w-100">
            Her ritim bir duygunun yankısı, her beat kendi hikayesini fısıldar.
            Müzik, kelimelerle anlatamadığım şeyleri duyurmanın yolu.
          </p>
        </div>
        <div className="flex items-center gap-1">
          <div className="flex items-center gap-1">
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <img src={oakley} alt="" className="h-full w-full object-cover" />
            </div>
            <p className="text-xs">Umut Kütükalan</p>
          </div>
          <span className="text-xs">•</span>
          <div className="flex items-center gap-2">
            <p className="text-xs"> 20 müzik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaylistDetail;
