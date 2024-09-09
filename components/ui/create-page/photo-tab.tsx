"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { Input } from "../input";
import Image from "next/image";
import { Label } from "@radix-ui/react-dropdown-menu";

interface PhotoTabProps {
  photo: File | null; // Adjust the type based on your use case
  onPhotoChange: (file: File) => void;
}

export default function PhotoTab({ photo, onPhotoChange }: PhotoTabProps) {
  const [previewUrl, setPreviewUrl] = useState<string>("");

  useEffect(() => {
    if (photo) {
      const objectUrl = URL.createObjectURL(photo);
      setPreviewUrl(objectUrl);

      // Clean up URL object when component unmounts or photo changes
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [photo]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onPhotoChange(file);
      event.target.value = "";
    }
  };

  const photoSelected = () => {
    return photo !== null;
  };

  return (
    <div
      className={`h-full flex ${
        photoSelected() ? "" : "items-center justify-center"
      }`}
    >
      {!photoSelected() ? (
        <div className="w-1/4">
          <Input
            id="picture"
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
        </div>
      ) : (
        <>
          <div className="p-2 relative w-full h-full flex flex-col items-center justify-center rounded-lg overflow-auto space-y-3">
            {previewUrl && (
              <>
                <div>
                  {photoSelected() && (
                    <>
                      <Label>Select different file</Label>
                      <Input
                        id="picture"
                        type="file"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </>
                  )}
                </div>
                <div className="relative w-full h-full overflow-auto">
                  <Image
                    src={previewUrl}
                    alt="Receipt Photo"
                    fill
                    className="object-contain"
                  />
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
