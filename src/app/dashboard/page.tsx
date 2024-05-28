async function getData1() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    message1: "Hello, DashboardPage!",
  };
}
// 使用了 use 就不需要 async
export default async function DashboardPage() {
  const { message1 } = await getData1();
  return <h1>{message1}</h1>;
}
