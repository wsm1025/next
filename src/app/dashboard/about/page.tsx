import { use } from "react";

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    message: "Hello, About!",
  };
}

// 使用了 use 就不需要 async
export default function Page() {
  const { message } = use(getData());
  return <h1>{message}</h1>;
}
