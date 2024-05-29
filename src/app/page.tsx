import Link from "next/link";
import { photos } from "./data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row flex-wrap">
      {photos.map(({ id, src }) => (
        <Link key={id} href={`/photo/${id}`}>
          <Image alt="" width={200} height={200} src={src} className="m-1" />
        </Link>
      ))}
    </main>
  );
}
