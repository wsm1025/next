export default function Page({ params }: any) {
  return <div>My Post: {JSON.stringify(params.slugs)}</div>;
}
