"use client";

import { useRef } from "react";
import { IoImageOutline } from "react-icons/io5";

interface Props<T> {
  label: string;
  description: string;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChange?: React.ChangeEventHandler<T> | undefined;
}

export default function SubmitFile(props: Props<HTMLInputElement>) {
  const { label, description } = props;

  const fileInputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="submit-file">
      <p className="block text-neutral-300 mb-3 text-sm">{label}</p>

      <button
        className="flex flex-col justify-center items-center w-full h-36 text-neutral-100 bg-[#27272a] rounded border-neutral-600 border-2 border-dashed active:bg-neutral-900 active:scale-[.99] mb-5"
        onClick={() => fileInputRef.current?.click()}
      >
        <IoImageOutline
          size="45"
          className="inline p-3 bg-neutral-800 rounded-full mb-3"
        />
        <p className="text-sm">{description}</p>
        <span className="text-sm text-neutral-400">Cantidad maxima 1MB</span>
      </button>

      <input
        type="file"
        onChange={(e) => console.log(e.target.files)}
        className="hidden"
        ref={fileInputRef}
      />
    </div>
  );
}
