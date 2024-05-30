"use client";
import Image from "next/image";
import { useState } from "react";

const Count = () => {
  let [obj, setUrl] = useState({
    url: "",
    width: 0,
    height: 0,
  });
  async function getTik() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await response.json();
    setUrl({
      url: data[0].url,
      width: data[0].width,
      height: data[0].height,
    });
  }
  return (
    <>
      {obj.url ? (
        <Image width={obj.width} height={obj.height} src={obj.url} alt="" />
      ) : null}
      <button onClick={() => getTik()}>获取</button>
    </>
  );
};
export default Count;
