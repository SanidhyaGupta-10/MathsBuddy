"use client";
import { Camera } from "lucide-react";

export default function CameraButton({ onImage }) {
  const handleImage = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    onImage(file);
  };

  return (
    <label className="cursor-pointer flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-2xl p-3">
      <Camera size={22} />
      <input type="file" accept="image/*" className="hidden" onChange={handleImage} />
    </label>
  );
}
