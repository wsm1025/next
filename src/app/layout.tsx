import "./globals.css";

export default function Layout({ children, modal }) {
  return (
    <html>
      <body>
        {children}
        <hr />
        {modal}
      </body>
    </html>
  );
}
