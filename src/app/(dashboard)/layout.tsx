import Link from "next/link";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <nav className="flex items-center justify-center gap-10 text-blue-600 mb-6">
        <Link href="/about">About</Link>
        <Link href="/home">home</Link>
        <Link href="/users">users</Link>
      </nav>
      {children}
    </section>
  );
}
