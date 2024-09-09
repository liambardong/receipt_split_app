"use client";
import { useState } from "react";
import { Button } from "../button";
import PhotoTab from "./photo-tab";
import InfoTab from "./info-tab";
import { useNewReceiptContext } from "@/app/context/NewReceiptContext";
import { Separator } from "../separator";

export default function ReceiptInfo() {
  const { fileSelected, setFileSelected } = useNewReceiptContext();
  const [photoPage, setPhotoPage] = useState<boolean>(true);

  const togglePage = (action: "photo" | "info") => {
    if ((action === "info" && photoPage) || (action === "photo" && !photoPage))
      setPhotoPage((prev) => (prev = !prev));
  };

  const handlePhotoChange = (newPhoto: File) => {
    setFileSelected(newPhoto);
  };

  return (
    <>
      <div className=" h-full rounded-lg w-1/2 flex flex-col p-2">
        <div className="flex-grow overflow-auto rounded-lg border-4 m-2">
          {photoPage ? (
            <PhotoTab photo={fileSelected} onPhotoChange={handlePhotoChange} />
          ) : (
            <InfoTab />
          )}
        </div>
        <div className="p-2 mt-auto flex justify-center space-x-3">
          <Button
            onClick={() => togglePage("photo")}
            variant={photoPage ? "default" : "outline"}
          >
            Photo
          </Button>
          <Separator orientation="vertical" />
          <Button
            onClick={() => togglePage("info")}
            variant={!photoPage ? "default" : "outline"}
          >
            Information
          </Button>
        </div>
      </div>
    </>
  );
}
