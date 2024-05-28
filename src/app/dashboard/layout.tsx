export default function DashboardLayout({
  children,
  myBooks,
  uBooks,
}: {
  children: React.ReactNode;
  myBooks: any;
  uBooks: any;
}) {
  return (
    <>
      <nav>nav</nav>
      {uBooks}
      {myBooks}
      {children}
    </>
  );
}
