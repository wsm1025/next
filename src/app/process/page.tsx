export default function Page() {
  return <h1>{JSON.stringify(process.env.DB_HOST)}</h1>;
}
