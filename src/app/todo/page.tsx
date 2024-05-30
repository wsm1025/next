import Count from "./components/count";
export default async function Page() {
  const res = await fetch("http://taizonga.top:3333/api/public/getBase");
  const data = await res.json();
  return (
    <>
      <ul>
        {data.data.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
      <Count />
    </>
  );
}
