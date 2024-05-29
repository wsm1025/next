import Image from "next/image";
import { photos } from "../../data";

export default function PhotoPage({ params: { id } }: any) {
  const photo = photos.find((p) => p.id === id) as any;
  return <Image alt="" className="block w-1/4 mx-auto mt-10" src={photo.src} />;
}
