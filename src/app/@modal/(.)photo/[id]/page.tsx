import Image from "next/image";
import { photos } from "../../../data";

export default function PhotoModal({
  params: { id },
}: {
  params: { id: string };
}) {
  const photo = photos.find((p) => p.id === id) || { src: "" };
  return (
    <div className="flex h-60 justify-center items-center fixed bottom-0 bg-slate-300 w-full">
      <Image alt="" className="w-52" src={photo.src} />
    </div>
  );
}
