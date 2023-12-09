"use client";

import { useState } from "react";
import PreviewBio from "./components/PreviewBio";
import CustomBio from "./components/CustomBio";

export default function Links() {
  const [dataBio, setDataBio] = useState({
    name: "",
    description: "",
    image_bio: "",
    image_cover: "",
  });
  const [dataLinks, setDataLinks] = useState([
    { id: "1", platform: "youtube", url: "https://www.youtube.com/rafarth1" },
    { id: "2", platform: "facebook", url: "https://www.facebook.com/rafarth1" },
  ]);

  return (
    <div className="links-profile">
      <h1 className="text-neutral-100 text-2xl font-medium my-8">
        Personaliza tus enlaces sociales
      </h1>

      <div className="links-profile-content flex flex-col lg:flex-row">
        <PreviewBio dataBio={dataBio} dataLinks={dataLinks} />

        <CustomBio
          dataBio={dataBio}
          dataLinks={dataLinks}
          setDataBio={setDataBio}
          setDataLinks={setDataLinks}
        />
      </div>
    </div>
  );
}
